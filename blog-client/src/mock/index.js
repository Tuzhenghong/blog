/*
 * @Descripttion: mockjs 模拟数据
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-11 15:51:16
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-11 16:04:57
 */
import Mock from 'mockjs'
// 模拟路由数据
import routerJson from './router.json'

Mock.mock('/api/getRouter', routerJson)
