// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import $ from "jquery";
import store from './store/';
import Loading from './components/loading';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false;
Vue.use(Loading);
Vue.use(ElementUI);
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-table/dist/bootstrap-table.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-table/dist/bootstrap-table.min.js";

console.log(store)
/* eslint-disable no-new */

// axios.interceptors.request.use(function (config) {  //配置发送请求的信息
//   // stores.dispatch('showLoading')
//   alert("1");
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });

// axios.interceptors.response.use(function (response) { //配置请求回来的信息
//   // stores.dispatch('hideLoading')
//   alert("2");
//   return response;
// }, function (error) {

//   return Promise.reject(error);
// });

Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
