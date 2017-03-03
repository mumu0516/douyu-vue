<template>
  <div class="backTop" v-if="scroll">
    <i @click="backTop" class="icon-arrow-up"></i>
  </div>
</template>

<script>
  export default {
      data(){
          return {
              scroll:false
          }
      },
      methods:{
          backTop(){
            var top = document.body.scrollTop
            var speed = 50
            var timer = setInterval(() => {
              document.body.scrollTop = top -= speed
              if(top <= 0){
                top = 0
                clearInterval(timer)
              }
            },30)
          }
      },
      mounted(){
        var _this = this
        window.onscroll = function(){
          var top = document.body.scrollTop
          if(top > 300){
            _this.scroll = true
          }else{
            _this.scroll = false
          }
        }
      }
  }

</script>

<style>
  .backTop{
    position:fixed;
    right:20px;
    bottom:40px;
  }
  .backTop i{
    font-size:20px;
    display:inline-block;
    padding:10px;
    border:1px solid #ccc;
    color:#ccc;
    border-radius:50%;
    background:#fff;
  }
</style>
