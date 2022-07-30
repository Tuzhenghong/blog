import router from '@/router'
import { getUser } from '@/utils/auth.js'
import Layout from '@/layout/index.vue' //Layout 是最外层主体架构
import Other from '@/layout/other.vue' //Other 是内容区页面
import api from '@/api/user'

const whiteList = ['/login', '/404']
var getRouter //用来获取后台拿到的路由

router.beforeEach(async (to, from, next) => {
  const hasUser = JSON.parse(getUser())
  if (hasUser) {
    operatorMenu(to, next)
  } else {
    // 当前不是登录状态
    if (whiteList.indexOf(to.path) !== -1) {
      // 白名单
      next()
    } else {
      next()
      // 没有登录重定向到登录页
      localStorage.clear()
      next('/login')
    }
  }
})

// 获取路由
function operatorMenu(to, next) {
  if (!getRouter) {
    if (!getObjArr('router')) {
      // 通过后台接口请求菜单数据
      api.operatorMenu().then(res => {
        getRouter = analysisJson(res.data) //后台请求得到的路由数据
        saveObjArr('router', getRouter) //存储路由到localStorage
        routerGo(to, next) //执行路由跳转方法
      })
    } else {
      getRouter = getObjArr('router') //拿到路由
      routerGo(to, next)
    }
  } else {
    // 如果已经获取菜单的话，就进去内页
    next()
  }
}

//解析路由
function analysisJson(data) {
  let treeMap = []
  data.forEach(item => {
    const hasChild = item.children && item.children.length > 0
    let json = {
      path: item.crmnuIndexKey,
      component: 'Layout',
      hidden: true,
      name: item.crmnuUitag,
      meta: {
        title: item.crmnuName,
        icon: item.crmnuPicUrl
      },
      children: hasChild ? item.children.map(i => analysisJsonRounter(i, item)) : []
    }
    treeMap.push(json)
  })
  return treeMap
}

//解析菜单路由子组件
function analysisJsonRounter(item, val) {
  let componentName = ''
  if (item.children && item.children.length) {
    componentName = 'Other'
  } else {
    componentName = item.crmnuUrl ? item.crmnuUrl : `/${item.crmnuPicUrl}`
  }
  return {
    path: item.crmnuIndexKey,
    component: componentName,
    name: item.crmnuUitip,
    hidden: true,
    meta: {
      title: item.crmnuName,
      icon: '',
      bread: [
        {
          title: val.crmnuName,
          path: val.crmnuIndexKey
        },
        {
          title: item.crmnuName,
          path: item.crmnuIndexKey
        }
      ]
    },
    children: item.children ? item.children.map(items => analysisJsonRounter(items, item)) : []
  }
}

function routerGo(to, next) {
  getRouter = filterAsyncRouter(getRouter) //过滤路由
  //在此补充404路由是为了解决刷新路由跳转404页面和空白页的问题
  router.addRoutes(
    getRouter.concat([
      {
        path: '/404',
        component: () => import('@/views/error/404'),
        name: '404',
        meta: { title: '404' }
      }
    ])
  ) //动态添加路由
  global.antRouter = getRouter //将路由数据传递给全局变量，做侧边栏菜单渲染工作
  next({ ...to, replace: true })
}

function saveObjArr(name, data) {
  //localStorage 存储数组对象的方法
  localStorage.setItem(name, JSON.stringify(data))
}

function getObjArr(name) {
  //localStorage 获取数组对象的方法
  return JSON.parse(window.localStorage.getItem(name))
}

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (route.component) {
      if (route.component === 'Layout') {
        //侧边栏组件
        route.component = Layout
      } else if (route.component == 'Other') {
        route.component = Other
      } else {
        //普通路由进行懒加载处理
        route.component = loadView(route.component)
      }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
  return accessedRouters
}

export const loadView = view => {
  // 路由懒加载
  return resolve => require([`@/views${view}`], resolve)
}
