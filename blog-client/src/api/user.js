/*
 * @Descripttion: 测试接口
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-06-22 09:35:43
 * @LastEditors: tuzh
 * @LastEditTime: 2022-07-30 17:55:34
 */
import request from '@/utils/request'

const doLogin = data => {
  return request({
    url: '/doLogin',
    method: 'post',
    isFormData: true,
    isShowLoading: true,
    params: data
  })
}

const getUserInfo = params => {
  return request({
    url: '/getUserInfo',
    method: 'get',
    isFormData: true,
    isShowLoading: true,
    params: params
  })
}

export default { doLogin, getUserInfo }
