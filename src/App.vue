<template>
  <div id="app">
    <transition name="side">
      <side-menu v-show="show" @hide="hideSide"></side-menu>
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
  import SideMenu from './components/SideMenu'
  import bus from './bus.js'
  export default {
      data(){
          return {
            show:false
          }
      },
      components:{
          SideMenu
      },
//      当组件挂载到页面上之后
      mounted(){
          bus.$on('sideShow',this.side)
      },
      methods:{
          side(){
              this.show = !this.show
          },
          hideSide(){
              this.show = false
          }
      }
  }
</script>

<style>
   .side-enter-active,.side-leave-active,
   .side-enter-active ul,.side-leave-active ul{
     transition:all .4s linear;
   }
   .side-enter,.side-leave-active{
     opacity: 0;
   }
   .side-enter ul,.side-leave-active ul{
     transform:translateX(-50%);
     opacity:0;
   }
</style>
