<template>
    <div class="mr-root">
       <public-header>
         <p class="title">斗鱼TV</p>
       </public-header>
       <loading v-if="showLoading"></loading>
       <div class="mr-content">
         <home-item v-for="(room,index) in roomList" :r="room" :key="index"></home-item>
         <p v-if="error">不好意思,加载失败,请稍后再试...</p>
       </div>
    </div>
</template>

<script>
  import PublicHeader from '../components/Header'
  import Loading from '../components/Loading'
  import HomeItem from '../components/HomeItem'
  export default {
      data(){
        return {
            showLoading:true,
            roomList:[],
            error:false
        }
      },
      components:{
        PublicHeader,Loading,HomeItem
      },
      created(){
          this.axios.get('/douyuapi/RoomApi/live?limit=20')
            .then(data =>{
              this.error = false
              this.roomList = data.data.data
              setTimeout(() => {
                  this.showLoading = false
              },1000)
            })
            .catch(err =>{
              this.error = true
              this.showLoading = false
            })
      }
  }
</script>

<style>
  .mr-content{
    padding:44px 0 0 .3rem;
    overflow: hidden;
  }
</style>
