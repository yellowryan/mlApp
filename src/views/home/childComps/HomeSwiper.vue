<template>
<div class="swiper-contain">
  <div class="slider-wrapper"  v-if='reRender'>
     <swiper :options="swiperOption" :auto-update="true">
        <swiper-slide class="swiper-slide" v-for="item in slide" :key="item.id">
        <img :src="item.src">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>   <!-- 分页 -->
      </swiper>
  </div>
  <div v-else class="placeholder">
    <img src="imgs/swiper/1.jpg" alt="">
  </div>
</div>

</template>

<style lang="less" scoped>
  .swiper-contain{
    height: 100%;
    .slider-wrapper,.placeholder{
      font-size: 0;
      width: 100%;
      overflow: hidden;
      position: relative;
          img{
          display: inline-block;
          width: 94%;
          border-radius: 0.4rem;
          position: relative;
          left: 50%;
          transform: translateX(-50%)
        }
    }
    .slider-wrapper /deep/.swiper-pagination-bullet{
      width: 8px;
      height: 3px;
      border-radius: 0.4rem
    }
    .slider-wrapper /deep/.swiper-pagination-bullet-active{
      background-color:#fff;
      width: 0.6rem;
      transition: width 0.1s ease-in-out
    }
  }
    
</style>

<script>
export default {
  name: 'App',
  data() {
    return {
      // 图片地址数组
      slide: [
        {
          id:"001",
          src:"imgs/swiper/1.jpg"
        },
         {
          id:"002",
          src:"imgs/swiper/9.jpg"
        },
         {
           path:"ceshi",
          id:"003",
          src:"imgs/swiper/3.jpg"
        },
         {
          id:"004",
          src:"imgs/swiper/4.jpg"
        },
         {
          id:"005",
          src:"imgs/swiper/5.jpg"
        },
         {
          id:"006",
          src:"imgs/swiper/6.jpg"
        },
         {
          id:"007",
          src:"imgs/swiper/7.jpg"
        },
         {
          id:"008",
          src:"imgs/swiper/8.jpg"
        },
      ],
      //设置属性
      swiperOption: {
        slidesPerView:1,
        speed:300,
        //显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: false,
          type:"bullets"
        },
        //设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next', 
          prevEl: '.swiper-button-prev'
        },
        //自动轮播
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        //开启循环模式
        loop: true,
        //开启鼠标滚轮控制Swiper切换
        mousewheel: true,
        // 阻止click冒泡。拖动Swiper时阻止click事件
        preventClicksPropagation: true,
        //鼠标模拟手机触摸。默认为true，Swiper接受鼠标点击、拖动。
         simulateTouch: false,
      },
      reRender:true
    }
  },
  activated(){
      this.reRender = false;
        setTimeout(() => {
            this.reRender = true;
        }, 100);
  }
}
</script>
