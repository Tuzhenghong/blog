/*
 * @Descripttion: 上传组件函数
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-26 10:14:49
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-27 16:59:09
 */
import request from '@/utils/request.js'

const DOWNLOAD_AND_VIEW_URL = `${process.env.VUE_APP_API_HOST}/public/risen/loadFile.do?CMD=DF&uuid=` // 下载+回显地址

// 上传
const loadFile = data => {
  return request({
    url: '/risen/upload/loadFile.do?CMD=UF',
    method: 'post',
    data: data
  })
}

// 删除
const removeFile = params => {
  return request({
    url: 'risen/core/resrc/file/removeCoreResrcFileByIdList.do',
    method: 'get',
    params: params
  })
}

// 回显
const fileSrc = uuid => {
  return `${DOWNLOAD_AND_VIEW_URL}${uuid}`
}

// 下载
const download = uuid => {
  window.open(DOWNLOAD_AND_VIEW_URL + uuid)
}

export { loadFile, fileSrc, download, removeFile }
