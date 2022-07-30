<!--
 * @Descripttion: 测试用表单
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-26 10:11:54
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-27 17:48:26
-->
<template>
  <div class="test-form">
    <upload-file :uploadType="false" :limit="10" :fileList.sync="fileList" />
  </div>
</template>
<script>
export default {
  name: 'test-form',
  components: {
    uploadFile: () => import('@/components/com-file')
  },
  data() {
    return {
      fileList: []
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped></style>
