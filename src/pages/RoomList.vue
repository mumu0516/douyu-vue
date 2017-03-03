<template>
    <div class="mr-root">
      <back-header>
        <p class="title">{{$route.params.gameName}}</p>
      </back-header>
      <div class="mr-content">
        <div class="room-infor" v-for="(r,index) in roomList" :key="index">
          <img :src="r.room_src" alt="">
          <div class="room-title">
            <div class="room-name">{{r.room_name | message}}</div>
            <div class="nickname">
              <i class="icon-user"></i>
              <span>{{r.nickname}}</span>
            </div>
            <div class="online">
              <i class="icon-group"></i>
              <span>{{r.online | number}}</span>
            </div>
          </div>
        </div>
        <div class="loadMore" v-if="!showLoad">
          <span @click="loadMore">点击加载更多</span>
        </div>
      </div>
      <back-top></back-top>
      <loading v-if="showLoad"></loading>
      <p v-if="error">网络请求失败,请稍后重试...</p>

    </div>
</template>

<script>
  import BackHeader from '../components/BackHeader'
  import BackTop from '../components/BackTop'
  import Loading from '../components/Loading'
  export default{
      data(){
        return {
            roomList:[],
            error:false,
            showLoad:true,
            count:0
        }
      },
      components:{
          BackHeader,BackTop,Loading
      },
      created(){
          this.getInfo(this.count)
      },
      methods:{
          getInfo(page){
            this.axios.get(`/douyuapi/RoomApi/live/${this.$route.params.gameId}?offset=${page}&limit=20`)
              .then(data =>{
                this.error = false
                this.roomList = this.roomList.concat(data.data.data)
                setTimeout(() => {
                  this.showLoad = false
                },2000)
              })
              .catch(err => {
                this.error = true
                this.showLoad = false
              })
          },
          loadMore(){
              this.count ++
              this.getInfo(this.count)
          }
      }
  }

</script>

<style scoped>
  .room-infor{
    margin-top:20px;
    overflow: hidden;
  }
  .room-infor img{
    float:left;
    width:4rem;
  }
  .room-infor .room-title{
    float:left;
    margin-left:20px;
  }

</style>
