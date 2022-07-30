/*
 * @Descripttion: svg图标
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-14 16:17:05
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-14 16:17:12
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
