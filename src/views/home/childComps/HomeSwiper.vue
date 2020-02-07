<template>
  <div class="slider-wrapper">
     <swiper :options="swiperOption">
        <swiper-slide class="swiper-slide" v-for="item in slide" :key="item.id">
          <router-link :to="{name:item.path,params:{userId:item.id}}"><img :src="item.src"></router-link>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>   <!-- 分页 -->
      </swiper>
  </div>
</template>

<style lang="less" scoped>
    .slider-wrapper{
      padding-top:2.5rem;
      font-size: 0;
      width: 100%;
      overflow: hidden;
      position: relative;
        .swiper-slide img{
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
</style>

<script>
export default {
  name: 'App',
  data() {
    return {
      // 图片地址数组
      slide: [
        {
          path:"ceshi",
          id:"001",
          src:"imgs/swiper/1.jpg"
        },
         {
           path:"ceshi",
          id:"002",
          src:"imgs/swiper/2.jpg"
        },
         {
           path:"ceshi",
          id:"003",
          src:"imgs/swiper/3.jpg"
        },
         {
           path:"ceshi",
          id:"004",
          src:"imgs/swiper/4.jpg"
        },
         {
           path:"ceshi",
          id:"005",
          src:"imgs/swiper/5.jpg"
        },
         {
           path:"ceshi",
          id:"006",
          src:"imgs/swiper/6.jpg"
        },
         {
           path:"ceshi",
          id:"007",
          src:"imgs/swiper/7.jpg"
        },
         {
           path:"ceshi",
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
      }
    }
  }
}
</script>
