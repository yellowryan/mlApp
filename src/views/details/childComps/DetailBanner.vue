<template>
  <div class="detail-banner">
      <div class="banner">
          <img :src="banner" alt="">
      </div>
  </div>
</template>

<script>
export default {
    props:{
        banner:{
            type:String,
            default:''
        }
    }
}
</script>

<style lang="less" scoped>
.detail-banner{
    position: relative;
    .banner{
        overflow: hidden;
        width: 100%;
        padding-top: 13.333%;
        img{
            position: absolute;
            top: 0;
            left: 0;
            width:100%;
            height: 100%;
        }
    }
}
</style>