/*
 * @Descripttion: vue.config.js
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-07 15:23:44
 * @LastEditors: tuzh
 * @LastEditTime: 2022-07-30 16:49:03
 */
const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭eslint检查
  publicPath: './', // 打包路径
  outputDir: 'dist', // 包名配置
  assetsDir: 'static', // 资源文件
  productionSourceMap: false, // 去除正式环境的map文件
  devServer: {
    open: false,
    port: process.env.VUE_APP_BASE_PORT,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_API_HOST, // 本地环境
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          [process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src') // 默认设置可以根据需要添加
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'pc-cms'
      return args
    })
    //引入图标
    config.module.rule('svg').exclude.add(resolve('./src/icons/svg'))
    config.module
      .rule('icon')
      .test(/\.svg$/)
      .include.add(resolve('./src/icons/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  }
})
