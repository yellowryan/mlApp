  <template>
  <div class="swiper-contain">
    <div class="slider-wrapper" v-if="reRender">
      <swiper :options="swiperOption" :auto-update="true">
        <swiper-slide class="swiper-slide" v-for="item in slide" :key="item.id">
          <img :src="item.src" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- 分页 -->
      </swiper>
    </div>
    <div v-else class="placeholder">
      <img src="https://ae01.alicdn.com/kf/Hc463a39b7ed449fc9b5cd6da3fa308156.jpg" alt />
    </div>
  </div>
</template>


  <script>
export default {
  name: "App",
  data() {
    return {
      // 图片地址数组
      slide: [
        {
          id: "001",
          src: "https://ae01.alicdn.com/kf/Hc463a39b7ed449fc9b5cd6da3fa308156.jpg"
        },
        {
          id: "002",
          src: "https://ae01.alicdn.com/kf/H4c3854c231a0491e9cc5f19643c7e6bbu.jpg"
        },
        {
          id: "003",
          src: "https://ae01.alicdn.com/kf/H74dfcb6f5738466cb8cce6a453e52196y.jpg"
        },
        {
          id: "004",
          src: "https://ae01.alicdn.com/kf/Hbc9096ef25b34568a454356a8e12ade8m.jpg"
        },
        {
          id: "005",
          src: "https://ae01.alicdn.com/kf/H63453fd3e994402a8055120f74c77292s.jpg"
        },
        {
          id: "006",
          src: "https://ae01.alicdn.com/kf/He29ebdbf0e00496ab58fe5975a82b7b40.jpg"
        },
        {
          id: "007",
          src: "https://ae01.alicdn.com/kf/H0ddd1d96f8e241c3a4ea12a22deab395j.jpg"
        },
        {
          id: "008",
          src: "https://ae01.alicdn.com/kf/H34a6145be1d3475386324e3535e0a99fG.jpg"
        }
      ],
      //设置属性
      swiperOption: {
        slidesPerView: 1,
        speed: 300,
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
        //自动轮播
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        //开启循环模式
        loop: true,
        //开启鼠标滚轮控制Swiper切换
        mousewheel: true,
        // 阻止click冒泡。拖动Swiper时阻止click事件
        preventClicksPropagation: true,
        //鼠标模拟手机触摸。默认为true，Swiper接受鼠标点击、拖动。
        simulateTouch: false
      },
      reRender: true
    };
  },
  activated() {
    this.reRender = false;
    setTimeout(() => {
      this.reRender = true;
    }, 100);
  }
};
</script>

  
  <style lang="less" scoped>
.swiper-contain {
  height: 100%;
  .slider-wrapper,
  .placeholder {
    font-size: 0;
    width: 100%;
    overflow: hidden;
    position: relative;
    img {
      display: inline-block;
      width: 94%;
      border-radius: 0.4rem;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .slider-wrapper /deep/.swiper-pagination-bullet {
    width: 8px;
    height: 3px;
    border-radius: 0.4rem;
  }
  .slider-wrapper /deep/.swiper-pagination-bullet-active {
    background-color: #fff;
    width: 0.6rem;
    transition: width 0.1s ease-in-out;
  }
}
</style>
