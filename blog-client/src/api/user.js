/*
 * @Descripttion: 测试接口
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-06-22 09:35:43
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-29 10:19:15
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

export default { doLogin }
