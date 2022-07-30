/*
 * @Descripttion: main.js
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-07 15:23:44
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-28 17:09:48
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './utils/permission' // 路由守卫（权限判断）

// api请求挂载到vue上
import api from '@/api/index'
Vue.prototype.$api = api

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 引入公共样式
import './style/index.scss'

import rem from 'amfe-flexible'
Vue.use(rem)

// 引入scgIcon
import './icons'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
