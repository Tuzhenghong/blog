/*
 * @Descripttion: 码字！！！
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-11 16:48:08
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-11 16:48:10
 */
const TokenKey = 'admin'

export function getUser() {
  return localStorage.getItem(TokenKey)
}

export function setUser(info) {
  return localStorage.setItem(TokenKey, info)
}

export function removeUser() {
  return localStorage.removeItem(TokenKey)
}
