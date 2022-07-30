<!--
 * @Descripttion: aside组件
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-11 08:59:45
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-22 09:22:41
-->
<template>
  <div>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      router
      @select="changeRoutes"
    >
      <template v-for="item in routerData">
        <sidebar-item v-if="!item.children.length" :key="item.path" :route="item" />
        <template v-else>
          <template v-if="item.hidden">
            <sidebar-menu-item v-if="item.children.length" :key="item.path" :route="item" />
            <sidebar-item v-else :key="item.path" :route="item" />
          </template>
        </template>
      </template>
    </el-menu>
    <div class="collapse" @click="changeIsCollapse">
      <i class="collapse-icon" :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i>
      <span class="collapse-text" v-if="!isCollapse">收起菜单</span>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'layout-aside',
  components: {
    SidebarItem: () => import('./components/sidebar-item.vue'),
    SidebarMenuItem: () => import('./components/sidebar-menu-item.vue')
  },
  data() {
    return {
      routerData: global.antRouter, // global 是全局变量，在utils/permission里声明的
      defaultActive: '' // 当前选中的菜单
    }
  },
  watch: {
    $route(newRoute) {
      // 监听路由改变去选中菜单
      this.defaultActive = newRoute.path
    }
  },
  computed: {
    ...mapState({
      isCollapse: state => state.layout.isCollapse,
      currentRoutes: state => state.layout.currentRoutes
    })
  },
  created() {
    // 初始化的时候查看vuex里是否有选中的菜单
    this.defaultActive = this.currentRoutes || '/home'
  },
  methods: {
    ...mapActions({
      changeIsCollapse: 'layout/changeIsCollapse',
      setCurrentRoutes: 'layout/setCurrentRoutes'
    }),
    changeRoutes(index, path) {
      // 选中菜单的时候存入vuex
      this.setCurrentRoutes({ index, path })
    }
  }
}
</script>
<style lang="scss" scoped>
:deep(.el-menu) {
  height: calc(100vh - 116px);
  overflow-y: auto;
}
.collapse {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 56px;
  border-top: 1px solid #f5f5f5;
  cursor: pointer;
  &:hover {
    .collapse-text,
    .collapse-icon {
      color: #409eff;
      transition: 0.2s;
    }
  }

  &-icon {
    font-size: 22px;
  }
}
</style>
