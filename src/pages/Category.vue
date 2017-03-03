<template>
    <div class="mr-root">
      <public-header>
        <p class="title">全部分类</p>
      </public-header>
      <div class="mr-content">
        <ul>
          <li is="game-list" v-for="(g,index) in gameList" :game="g" :key="index"></li>
        </ul>
      </div>
      <loading v-if="showLoading"></loading>
      <back-top></back-top>
    </div>
</template>

<script>
  import Public from '../public.js'
  import GameList from '../components/GameList'
  import BackTop from '../components/BackTop'
  export  default{
      data(){
        return {
            gameList:[],
            showLoading:true
        }
      },
      components:{
        GameList,BackTop
      },
      mixins:[Public],
      created(){
          this.axios.get('/douyuapi/RoomApi/game')
            .then(data => {
                this.gameList = data.data.data
                setTimeout(() => {
                    this.showLoading = false
                },2000)
            })
            .catch(err => {

            })
      }
  }

</script>

<style scoped>
  .mr-content{
    padding:44px 0 0 0;
  }
  .mr-content ul{
    display:flex;
    flex-wrap:wrap;
  }
</style>
