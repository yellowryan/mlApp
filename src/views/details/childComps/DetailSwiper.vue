<template>
  <div class="detail-wrapper">
    <swiper :options="swiperOption" class="swiper-container">
      <swiper-slide class="swiper-slide" v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
    data(){
        return {

        },
    }
};
</script>

<style lang="less" scoped>

</style>>

