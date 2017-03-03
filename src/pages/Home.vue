<template>
    <div class="mr-root">
       <public-header>
         <p class="title">斗鱼TV</p>
       </public-header>
       <loading v-if="showLoading"></loading>
       <div class="mr-content">
         <home-item v-for="(room,index) in roomList" :r="room" :key="index"></home-item>
         <p v-if="error">不好意思,加载失败,请稍后再试...</p>
         <div class="clear"></div>
         <div class="loadMore">
           <span @click="loadMore">点击加载更多</span>
         </div>
       </div>
       <back-top></back-top>
    </div>
</template>

<script>
  import Public from '../public.js'
  import HomeItem from '../components/HomeItem'
  import BackTop from '../components/BackTop'
  export default {
      data(){
        return {
            showLoading:true,
            roomList:[],
            error:false,
            count:0
        }
      },
      mixins:[Public],
      components:{
        HomeItem,BackTop
      },
      created(){
          this.getInfo(this.count)
      },
      methods:{
          getInfo(page){
            this.axios.get(`/douyuapi/RoomApi/live?offset=${page}&limit=20`)
              .then(data =>{
                this.error = false
                this.roomList = this.roomList.concat(data.data.data)
                setTimeout(() => {
                  this.showLoading = false
                },1000)
              })
              .catch(err =>{
                this.error = true
                this.showLoading = false
              })
          },
          loadMore(){
              this.count++
              this.getInfo(this.count)
          }
      }
  }
</script>

<style>
  .mr-content{
    padding:44px 0 0 .3rem;
    overflow: hidden;
  }
  .loadMore{
    margin:10px;
    text-align: center;
  }
  .loadMore span{
    display: inline-block;
    line-height:30px;
    padding:0 20px;
    border-radius:10px;
    border:1px solid #000;
  }
</style>
