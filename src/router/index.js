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
      path:'/category',
      component:resolve =>{
        require(['../pages/Category'],resolve)
      }
    },
    {
      path:'/roomList/:gameId/:gameName',
      component:resolve => {
        require(['../pages/RoomList'],resolve)
      }
    },
    {
      path:'/recommand',
      component:resolve => {
        require(['../pages/Recommand'],resolve)
      }
    },
    {
      path:'/user',
      component:resolve => {
        require(['../pages/User'],resolve)
      }
    },
    {
      path:"*",
      redirect:'/'
    }
  ]
})
