<!--
 * @Descripttion: 递归菜单组件
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-11 10:47:50
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-13 11:49:18
-->
<template functional>
  <el-submenu :index="props.route.path">
    <template slot="title">
      <template v-if="props.route.meta.icon">
        <svg-icon :icon-class="props.route.meta.icon" />
      </template>
      <span slot="title">{{ props.route.meta.title }}</span>
    </template>
    <template v-for="item in props.route.children">
      <template v-if="!item.children.length">
        <sidebar-item :key="item.path" :route="item" />
      </template>
      <template v-else>
        <sidebar-menu-item :key="item.path" :class="index" :route="item" />
      </template>
    </template>
  </el-submenu>
</template>
<script>
export default {
  name: 'sidebar-menu-item',
  data() {
    return {}
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped></style>
