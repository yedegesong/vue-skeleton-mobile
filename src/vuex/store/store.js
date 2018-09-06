import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import AppMutation from '../mutations/AppMutation';
import LoginMutation from '../mutations/LoginMutation';
import ListMutation from '../mutations/ListMutation';
const state = {
  token: null,
  globalTitle: '全局数据',
  scrollBehavior: {
    path: '',
    scrollTop: 0,
    page: 0,
  }
}
const actions = {
  rootIncrement({ commit, state }, params) {
    console.log('全局数据进来'+params)
  },
  setScrollBehavior({ commit, state }, params) {
    commit('SCR0LL_BEHAVIOR', params);
  },
  setScrollBehaviorScroll({ commit, state }, params) {
    commit('SET_SCR0LL_BEHAVIOR', params);
  },
  setScrollPage({ commit, state }, params) {
    commit('SET_SCR0LL_PAGE', params);
  }
}

const  mutations = {
  [`SCR0LL_BEHAVIOR`](state, path) {
      state.scrollBehavior.path = path;
  },
  [`SET_SCR0LL_BEHAVIOR`](state, scrollTop) {
    state.scrollBehavior.scrollTop = scrollTop;
  },
  [`SET_SCR0LL_PAGE`](state, page) {
    state.scrollBehavior.page = page;
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    ListMutation:{
      namespaced: true,
      ...ListMutation
    },
    App: {
      namespaced: true,
      ...AppMutation
    },
    LoginMutation
  }
})
