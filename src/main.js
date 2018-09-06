// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@vuex/store/store'
import filters from '@filters/index'
import directive from '@directive/index'
import api from '@api/api'
import '@less/app.less';
Vue.config.productionTip = false
/**
 * 获取环境变量
 * Vue.config.productionTip = process.env.NODE_ENV
 */
/* eslint-disable no-new */
Vue.prototype.$api = api;
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Object.keys(directive).forEach(key => {
   Vue.directive(key, directive[key]);
}); 
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
