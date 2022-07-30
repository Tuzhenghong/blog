<!--
 * @Descripttion: 面包屑组件
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-11 15:34:23
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-13 17:54:07
-->
<template>
  <div class="breadcrumb">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.name" :to="{ path: item.path }">{{
        item.name
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'layout-breadcrumb',
  computed: {
    ...mapState({
      breadcrumbList: state => state.layout.breadcrumbList
    })
  }
}
</script>
<style lang="scss" scoped></style>
