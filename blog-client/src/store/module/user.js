/*
 * @Descripttion: 用户相关状态
 * @version: V1.0
 * @Author: 涂正弘
 * @Date: 2022-07-11 11:24:53
 * @LastEditors: 涂正弘
 * @LastEditTime: 2022-07-12 17:11:43
 */
const state = {
  userInfo: {} // 用户信息
}

const mutations = {
  SET_USERINFO: (state, params) => {
    state.userInfo = params
  }
}

const actions = {
  setUserInfo({ commit }, params) {
    commit('SET_USERINFO', params)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
