/*
 * @Descripttion: axios封装
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-06-21 19:37:42
 * @LastEditors: tuzh
 * @LastEditTime: 2022-07-30 18:02:34
 */
import axios from 'axios'
import store from '@/store'
import Qs from 'qs'

import { Message, Loading } from 'element-ui'

// 创建请求
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 基路径
  withCredentials: true, // 跨域请求时发送Cookie
  timeout: 60000 // 请求超时时间
})

// 模拟一个出入栈
let loadingInstance = null // 记录页面中存在的loading
let loadingCount = 0 // 记录当前正在请求的数量

const showLoading = data => {
  // 如果请求数量为0，创建一个loading服务并且请求数量+1；如果不为0，只增加请求数量
  if (loadingCount === 0) {
    loadingInstance = Loading.service({
      lock: true, //锁定屏幕滚动
      text: data || '加载中...',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
  }
  // 请求数量+1
  loadingCount++
}

const hideLoading = () => {
  // 请求数量-1
  loadingCount--
  if (loadingInstance && loadingCount === 0) {
    // 如果存在laoding服务，并且请求数量为0，就关闭loading并清除loading服务
    loadingInstance.close()
    loadingInstance = null
  }
}

// 请求拦截
service.interceptors.request.use(
  config => {
    const token = store.state.user.userInfo.token
    token && (config.headers.Authorization = 'Bearer ' + token)
    // 如果当前请求需要loading，则调用showLoading方法
    if (config.isShowLoading) {
      showLoading(config.loadingText)
    }
    if (config.method === 'get') {
      config.data = { unused: 0 } //解决get请求添加不上Content-Type
    }
    if (config.method === 'post') {
      if (config.isFormData) {
        //表单保存
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
        config.data = Qs.stringify(config.data)
      } else {
        config.headers['Content-Type'] = 'application/json;charset=utf-8'
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    // 请求结束后，调用hideLoading方法
    if (response.config.isShowLoading) {
      hideLoading()
    }
    console.log(response)
    if (!response.data.success && response.data.code !== 200) {
      Message({
        message: response.data.message,
        type: 'error',
        duration: 5000
      })
      return response.data
    }
    return response.data
  },
  err => {
    console.log(err, 'err')
    // 请求结束后，调用hideLoading方法
    if (err.config.isShowLoading) {
      hideLoading()
    }
    if (err.response.status == 401) {
      // window.localStorage.clear()
      // router.push('/login')
    }
    return Promise.reject(err)
  }
)

export default service
