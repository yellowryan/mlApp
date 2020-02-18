<template>
  <daily>
    <div slot="title" class="daily-title-img">
      <img
        src="https://m.360buyimg.com/mobilecms/s750x80_jfs/t1/103080/1/6315/23804/5df25d68E3eae6519/deef719dfdfe2844.png!q70.jpg.dpg"
        alt
      />
    </div>
    <div class="container daily-container">
      <daily-item v-for="(item,index) in dailyList" :key="index">
        <a :href="item.link" slot="daily-item-link" class="daily-item-link">
          <div class="real-show">
            <div class="daily-item-text">
              <strong :style="{backgroundImage:item.background}">{{item.colorText}}</strong>
              <p>{{item.normalText}}</p>
            </div>
            <div class="daily-item-img">
              <img :src="item.src" alt />
            </div>
          </div>
        </a>
      </daily-item>
    </div>
  </daily>
</template>
<script>
import Daily from "../../../components/content/daily/Daily";
import DailyItem from "../../../components/content/daily/DailyItem";
export default {
  props: {
    dailyList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Daily,
    DailyItem
  },
  mounted(){
    console.log(this.dailyList);
    
  }
};
</script>

<style lang="less" scoped>
.daily-container {
  height: 12rem;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  .daily-item {
    flex: 1;
    border-right: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    background: #fff;
    &:nth-child(1) {
      border-top-left-radius: 0.3rem;
    }
    &:nth-child(4) {
      border-top-right-radius: 0.3rem;
    }
    &:nth-child(5) {
      border-bottom-left-radius: 0.3rem;
    }
    &:nth-child(8) {
      border-bottom-right-radius: 0.3rem;
    }
    .real-show {
      padding: 0.325rem 0 0.25rem 0.5rem;
      width: 100%;
      height: 100%;
      .daily-item-text {
        height: 1.9rem;
        width: 100%;
        strong {
          color: transparent;
          font-weight: 700;
          font-size: 0.8rem;
          line-height: 1.125rem;
          display: inline-block;
          max-width: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          -webkit-background-clip: text;
        }
        p {
          color: #222222;
          overflow: hidden;
          font-size: 0.6rem;
          line-height: 0.825rem;
          height: 0.75rem;
        }
      }
      .daily-item-img {
        width: 3rem;
        height: 3rem;
        margin: 0.275rem 0.2rem 0;
        img {
          overflow: hidden;
          text-align: center;
          width: 100%;
          height: 100%;
        }
      }
    }
    &::after {
      height: 100%;
      content: "";
      width: 1px;
      border-right: 1px solid transparent;
      position: absolute;
      top: 0;
      right: 0;
      -webkit-transform: scaleX(0.5);
      transform: scaleX(0.5);
      z-index: 10;
    }
  }
}
.daily-title-img {
  img {
    display: block;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
}
</style>