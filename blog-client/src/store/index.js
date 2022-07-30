import Vue from 'vue'
import Vuex from 'vuex'

// 引入vuex持久化插件
import createPersistedState from 'vuex-persistedstate'

// 引入vuex模块
import layout from './module/layout'
import user from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    layout,
    user
  },
  plugins: [
    createPersistedState({
      // 存储方式：localStorage、sessionStorage、cookies
      storage: window.localStorage,
      // 存储的 key 的key值
      key: 'store',
      render(state) {
        // 要存储的数据：本项目采用es6扩展运算符的方式存储了state中所有的数据
        return { ...state }
      }
    })
  ]
})
