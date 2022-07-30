/*
 * @Descripttion: 时间处理函数
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-22 15:06:49
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-25 17:18:44
 */
import dayjs from 'dayjs'
// 相同或之后
var isSameOrBefore = require('dayjs/plugin/isSameOrBefore')

/**
 * @msg: 时间加减计算
 * @param {String} date 指定日期 如果为空就为当前日期
 * @param {Number} num 指定计算数
 * @param {String} unit 指定计算单位
 * @param {String} type 指定计算方式 加：add,减：subtract
 * @return {String} 计算过后的时间 YYYY-MM-DD
 */
const calcDate = (num, unit, type, date = undefined) => {
  return dayjs(date)[type](num, unit).format('YYYY-MM-DD')
}

/**
 * @msg: 计算两个日期之间相隔多久
 * @param {String} startDate 开始时间
 * @param {String} endDate 结束时间
 * @param {String} unit 度量单位
 * @return {Number} 相隔数
 */
const diffDate = (startDate, endDate, unit) => {
  console.log(dayjs(endDate).diff(startDate, unit))
  return dayjs(endDate).diff(startDate, unit)
}

const sameOrBefore = (startDate, endDate) => {
  dayjs.extend(isSameOrBefore)
  console.log(dayjs(startDate).isSameOrBefore(endDate))
}

export { calcDate, diffDate, sameOrBefore }
