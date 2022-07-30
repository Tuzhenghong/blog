<template>
  <div :xl="6" :lg="7" class="bg-login">
    <!--logo-->
    <el-image :src="require('@/assets/logo.png')" class="logo" />
    <!--标题-->
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="6"></el-col>
      <el-col :span="6">
        <!--标题-->
        <h1 class="title">PC基础框架</h1>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <!--form表单-->
    <el-row type="flex" class="row-bg card" justify="center" align="bottom">
      <el-col :span="7" class="login-card">
        <!--loginForm-->
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="21%" class="loginForm">
          <el-form-item label="账户" prop="username" style="width: 380px">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" style="width: 380px">
            <el-input type="password" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item class="btn-ground">
            <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
            <el-button @click="resetForm('loginForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { calcDate, diffDate, sameOrBefore } from '@/utils/day'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data() {
    return {
      // 表单信息
      loginForm: {
        // 账户数据
        username: '',
        // 密码数据
        password: ''
      },
      // 表单验证
      rules: {
        // 设置账户效验规则
        username: [
          { required: true, message: '请输入账户', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符的账户', trigger: 'blur' }
        ],
        // 设置密码效验规则
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符的密码', trigger: 'blur' }
        ]
      }
    }
  },
  created() {
    calcDate(2, 'day', 'add')
    diffDate('2021-7-25', '2022-7-25', 'day')
    sameOrBefore('2022-7-25', '2022-7-24')
  },
  methods: {
    ...mapActions({ setUserInfo: 'user/setUserInfo' }),
    // 提交表单
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let { username, password } = this.loginForm
          this.$api.doLogin({ code: username, pwd: password }).then(res => {
            console.log(res, 'res')
            if (res.code == 200) {
              window.localStorage.setItem('admin', JSON.stringify(res.data[0]))
              this.setUserInfo(res.data[0])
              this.$router.push('/home')
            } else {
              this.$message.error(res.message)
            }
          })
        } else {
          return false
        }
      })
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-login {
  height: 100vh;
  background-color: #000;

  .title {
    text-shadow: -3px 3px 1px #5f565e;
    text-align: center;
    margin-top: 60%;
    color: #41b9a6;
    font-size: 40px;
  }

  .logo {
    position: fixed;
    top: 30px;
    left: 30px;
    width: 70px;
    height: 70px;
  }

  .card {
    margin-top: 30px;
  }
  .login-card {
    background-color: #ffffff;
    opacity: 0.9;
    box-shadow: 0 0 20px #ffffff;
    border-radius: 10px;
    padding: 40px 40px 30px 15px;
    width: auto;
    .btn-ground {
      text-align: center;
    }
  }
}
</style>
