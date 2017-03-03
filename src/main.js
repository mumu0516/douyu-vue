// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入lib-flexible
import 'lib-flexible'
//导入font-awesome
import './assets/css/font-awesome.css'
//导入我们自己的css文件
import './assets/css/style.css'
// 导入axios
import axios from 'axios'

// 将axios挂载到vue对象的原型下边以实现全局通用
Vue.prototype.axios = axios


// 弄一个bus
// 在这里定义的bus并不能在全局通用
// var bus = new Vue()
Vue.filter('number',value =>{
  if(value > 10000){
    return (value / 10000).toFixed(2) + '万'
  }else{
    return value
  }
})
Vue.filter('message',value => {
  if(value.length > 12){
    return value.substr(0,10) + '...'
  }else{
    return value
  }
})


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
