/*
 * @Descripttion: layout布局相关状态
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-11 11:24:53
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-19 15:12:53
 */
import { flatten } from '../../utils/tool'
const state = {
  isCollapse: false, // 侧边栏是否展开
  currentRoutes: '', // 当前选中菜单
  breadcrumbList: [] // 面包屑
}

const mutations = {
  CHANGE_IS_COLLAPSE: state => {
    state.isCollapse = !state.isCollapse
  },
  SET_CURRENT_ROUTES: (state, params) => {
    state.currentRoutes = params
  },
  SET_BREADCRUMB: (state, params) => {
    state.breadcrumbList = params
  }
}

const actions = {
  changeIsCollapse({ commit }) {
    commit('CHANGE_IS_COLLAPSE')
  },
  setCurrentRoutes({ commit }, { index, path }) {
    commit('SET_CURRENT_ROUTES', index)
    // 把菜单路由数据扁平化
    let routes = flatten(global.antRouter)
    // 判断遍历当前路由的层级并匹配中文
    let breadcrumbList = path.map(item => {
      let obj = routes.filter(route => route.path == item)[0]
      return {
        name: obj.meta.title,
        path: obj.path
      }
    })
    commit('SET_BREADCRUMB', breadcrumbList)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
