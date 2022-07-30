/*
 * @Descripttion: 静态路由（固定不变的）
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-12 15:14:04
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-26 10:11:19
 */
import Login from '@/views/login'
import Layout from '@/layout'
const constantRoutes = [
  {
    path: '/',
    component: Login,
    redirect: '/login',
    children: [
      {
        path: 'login',
        component: Login,
        name: 'login',
        meta: { title: '湖州总工会', icon: '' }
      }
    ]
  },
  {
    path: '/home',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home')
      }
    ]
  },
  {
    path: '/test',
    component: Layout,
    redirect: '/test-list',
    children: [
      {
        path: '/test-list',
        component: () => import('@/views/test/list')
      },
      {
        path: '/test-form',
        component: () => import('@/views/test/form')
      }
    ]
  }
]

export default constantRoutes
