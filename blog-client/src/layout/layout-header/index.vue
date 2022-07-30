<!--
 * @Descripttion: layout头部
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-07 16:55:05
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-20 09:27:48
-->
<template>
  <div class="flex-center-between">
    <div class="logo" @click="$router.push('/home')">PC组cms基础框架</div>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        欢迎您！{{ userInfo.cractName }} <i class="el-icon-arrow-down el-icon--right"></i
      ></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="1">修改密码</el-dropdown-item>
        <el-dropdown-item command="2">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'layout-header',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  methods: {
    handleCommand(command) {
      console.log(command)
      if (command == 2) {
        localStorage.clear()
        this.$router.replace('/login')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../index.scss';
</style>
