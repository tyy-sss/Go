import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap-icons/font/bootstrap-icons.css';
//关于token
import './utils/token'
//表单验证
import './utils/validate'

import $ from 'jquery';
Vue.prototype.jquery = $

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import axios from 'axios'
//配置请求根路径
axios.defaults.baseURL = "http://localhost:8088"                                 
//将axios作为全局的自定义属性，每个组件可以在内部组件访问
Vue.prototype.$http = axios

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
