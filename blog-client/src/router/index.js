/*
 * @Descripttion: 路由文件
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-07 15:23:44
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-12 15:25:39
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

import constantRoutes from './routes/constant-routes'

const routes = [...constantRoutes]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
