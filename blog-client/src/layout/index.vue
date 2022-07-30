<!--
 * @Descripttion: 布局框架
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-13 09:42:54
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-19 11:03:53
-->
<template>
  <el-container class="contaienr">
    <!-- 导航栏 -->
    <el-header class="header">
      <layout-header />
    </el-header>

    <!-- body -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside class="aside" :class="isCollapse ? 'packup' : 'unfold'">
        <layout-aside />
      </el-aside>
      <el-container class="block">
        <layout-breadcrumb />
        <!-- 内容区 -->
        <el-main class="main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'layoutContainer',
  components: {
    LayoutHeader: () => import('./layout-header'),
    LayoutAside: () => import('./layout-aside'),
    LayoutBreadcrumb: () => import('./layout-breadcrumb')
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      isCollapse: state => state.layout.isCollapse
    })
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
