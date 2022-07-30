<!--
 * @Descripttion: 没有下级的菜单
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-11 09:34:10
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-14 16:26:57
-->
<template functional>
  <el-menu-item :index="props.route.path">
    <template v-if="props.route.meta.icon">
      <svg-icon :icon-class="props.route.meta.icon" />
    </template>
    <span slot="title">{{ props.route.meta.title }}</span>
  </el-menu-item>
</template>
<script>
export default {
  name: 'sidebar-item',
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
