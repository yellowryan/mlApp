<template>
  <div class="navigation-bar">
    <div class="container-bg">
      <img src="https://m.360buyimg.com/mobilecms/s750x324_jfs/t1/95535/9/10294/19492/5e184e35E8937b3ea/481823b75c455fe7.jpg.dpg" alt="">
    </div>
    <div class="navigation-list" @scroll="scrollHandle">
      <div class="nav-left" >
        <div class="nav-box" v-for="(item,index) in navIcon" :key="index">
          <div class="nav-top" v-for="items in item" :key="items.id">
            <img :src="items.url" alt />
            <span>{{items.title}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-swiper">
      <div class="nav-track">
        <div class="nav-thumb" ref="thumb" style="transform: translate(0px);"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.navigation-bar {
  margin-top: 2px;
  width: 100%;
  overflow: hidden;
  position: relative;
  .container-bg {
    width: 100%;
    position: relative;
    min-height: 8.1rem;
    left: 0;
    right: 0;
    img {
      width: 100%;
      position: absolute;
      height: 100%;
    }
  }
  .navigation-list {
   height: 8.1rem;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    .nav-left {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 200%;
      position: absolute;
      top: 0;
      background: transparent;
      height: 100%;

      .nav-box {
        .nav-top {
          display: flex;
          flex-direction: column;
          -webkit-box-align: center;
          align-items: center;
          height: 3.35rem;
          width: 3.05rem;
          margin-top: 3px;
          img {
            height: 2.4rem;
            width: 3.05rem;
          }
          span {
            font-size: 0.6rem;
            color: #fff;
            display: block;
          }
        }
      }
    }
  }
  .nav-swiper {
    display: flex;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    bottom: 0.2rem;
    pointer-events: none;
    z-index: 5;
    justify-content: center;
    align-items: center;
    .nav-track {
      width: 50px;
      height: 3px;
      background-color: rgb(212, 216, 222);
      border-radius: 8px;
      .nav-thumb {
        width: 20px;
        height: 3px;
        background-color: rgb(255, 109, 42);
        will-change: transform;
        border-radius: 0.2rem;
      }
    }
  }
}
</style>

<script>
export default {
  props:{
    navIcon:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      navList: [],
      offsetLeft: 0
    };
  },
  created() {

  },
  watch: {
    offsetLeft() {
      this.offsetLeft = document.getElementsByClassName(
        "navigation-list"
      )[0].scrollLeft;
      this.$refs.thumb.style.transform = `translate(${(this.offsetLeft /
        document.getElementsByClassName("navigation-list")[0].clientWidth) *
        30}px)`;
    }
  },
  methods: {
    scrollHandle() {
      this.offsetLeft = document.getElementsByClassName(
        "navigation-list"
      )[0].scrollLeft;
      return this.offsetLeft;
    }
  }
};
</script>