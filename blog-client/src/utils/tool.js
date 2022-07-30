/*
 * @Descripttion: 工具函数
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-13 17:49:10
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-14 15:31:02
 */
/**
 * @name: 涂正弘
 * @msg: 数组扁平化
 * @param {*} arr 数据源
 * @param {assignKey} 指定的key名
 * @return {*}
 */
export function flatten(arr) {
  return arr.reduce((result, item) => {
    return result.concat(item, Array.isArray(item.children) ? flatten(item.children) : [])
  }, [])
}
