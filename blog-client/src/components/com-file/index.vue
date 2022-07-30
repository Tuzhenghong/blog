<!--
 * @Descripttion: 上传组件
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-26 10:48:46
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-27 17:57:10
-->
<template>
  <div class="upload">
    <div class="upload-flex">
      <div class="upload-list">
        <div class="upload-list_file" v-for="(item, index) in fileList" :key="item.uuid">
          <div class="shadow">
            <i class="el-icon-view" @click="handlePreview(item)"></i>
            <i class="el-icon-download" @click="download(item.uuid)"></i>
            <i class="el-icon-close" @click="handleRemove(item, index)"></i>
          </div>
          <img class="img" :src="fileSrc(item.uuid)" :alt="item.crfileName" />
        </div>
      </div>
      <el-upload
        v-if="fileList.length < limit"
        action="#"
        list-type="picture-card"
        :show-file-list="false"
        :accept="accept"
        :before-upload="beforeUpload"
        :http-request="httpRequest"
      >
        <i class="el-icon-plus"></i>
        <!-- <div slot="tip" class="el-upload__tip">
          只能上传{{ uploadType ? '图片' : '文档' }}文件，且不超过{{ uploadType ? '5MB' : '100MB' }}
        </div> -->
      </el-upload>
    </div>
  </div>
</template>
<script>
import { loadFile, fileSrc, download, removeFile } from './config'
export default {
  name: 'com-file',
  props: {
    // 上传组件类型 true:图片/false:文档
    uploadType: {
      type: Boolean,
      default: true
    },
    // 最大上传限制
    limit: {
      type: Number,
      default: 10
    },
    // 文件列表
    fileList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      fileArr: this.fileList
    }
  },
  computed: {
    accept() {
      return this.uploadType ? 'image/*' : '.pdf,.doc,.docx,.xls,.xlsx,.txt'
    }
  },
  methods: {
    fileSrc,
    download,
    // 上传文件前的钩子
    beforeUpload(file) {
      // 图片不能大于5MB
      const isLtMB = this.uploadType ? file.size / 1024 / 1024 < 5 : file.size / 1024 / 1024 < 100
      // 文件名不能超过100个字
      const isNameLength = file.name.length < 100

      if (!isLtMB) {
        this.$message.error(
          `上传${this.uploadType ? '图片' : '文件'}大小不能超过 ${this.uploadType ? '5MB' : '100MB'}!`
        )
        return false
      }
      if (!isNameLength) {
        this.$message.error(`${this.uploadType ? '图片' : '文件'}名称不能超过100个字！`)
        return false
      }
    },
    // 自定义上传事件覆盖默认的上传
    httpRequest(params) {
      const formData = new FormData()
      formData.append('risenUpload', params.file)
      loadFile(formData).then(res => {
        if (res.success) {
          this.$message.success('上传成功')
          this.fileArr.push(res.data)
          this.$emit('update:fileList', this.fileArr)
        } else {
          this.$message.error('上传失败')
        }
      })
    },
    // 预览
    handlePreview(file) {
      console.log(file)
    },
    // 删除
    handleRemove(file, index) {
      console.log(file)
      removeFile({ uuid: file.uuid }).then(res => {
        console.log(res, 'res')
        this.$message.success('删除成功')
        this.fileArr.splice(index, 1)
        this.$emit('update:fileList', this.fileArr)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.upload {
  width: 100%;
  &-flex,
  &-list {
    display: flex;
    justify-content: flex-start;
    flex-flow: wrap;
  }
  &-list_file {
    position: relative;
    width: 147.98px;
    height: 147.98px;
    margin-right: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    &:hover {
      .shadow {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .shadow {
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      cursor: pointer;

      .el-icon-download {
        margin: 0 8px;
      }

      i {
        font-size: 24px;
        color: #fff;
        cursor: pointer;
      }
    }
    .img {
      width: 100%;
    }
  }
  .el-upload__tip {
    color: red;
  }
}
</style>
