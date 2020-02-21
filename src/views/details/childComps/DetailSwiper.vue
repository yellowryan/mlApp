<template>
  <div class="detail-wrapper">
    <swiper :options="swiperOption" class="swiper-container">
      <swiper-slide class="swiper-slide" v-for="(item, index) of topImageList" :key="index">
        <img class="swiper-img" :src="item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  props: {
    topImageList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        //显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: false,
          type: "bullets"
        },
        //设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        // 阻止click冒泡。拖动Swiper时阻止click事件
        preventClicksPropagation: true,
        //鼠标模拟手机触摸。默认为true，Swiper接受鼠标点击、拖动。
        simulateTouch: false
      }
    };
  }
};
</script>

<style lang="less" scoped>
.detail-wrapper {
  width: 100vw;
  height: 100vw;
  max-width: 640px;
  max-height: 640px;
  margin: 0 auto;
}

.swiper-img{
  width: 100%;
  height: 100%;
}
.detail-wrapper /deep/.swiper-pagination-bullet{
  width: 0.2rem;
  height: 0.2rem;
}

.detail-wrapper /deep/.swiper-pagination-bullet-active{
      background-color:#e93b3d;
    }
</style>>

