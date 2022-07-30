/*
 * @Descripttion: 码字！！！
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-07 15:23:44
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-07 15:40:30
 */
module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false }],
    ['@vue/cli-plugin-babel/preset', { useBuiltIns: 'entry' }]
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
