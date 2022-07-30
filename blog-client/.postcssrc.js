/*
 * @Descripttion: pxtorem 配置文件
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-05-17 21:57:38
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-06-22 18:56:08
 */
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 192,
      propList: ['*']
    }
  }
}
