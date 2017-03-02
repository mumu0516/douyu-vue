import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'

Vue.use(Router)

export default new Router({
  linkActiveClass:"is-active",
  routes: [
    {
      path:'/',
      component:Home
    },
    {
      path:"*",
      redirect:'/'
    }
  ]
})
