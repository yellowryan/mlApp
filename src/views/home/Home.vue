<template>
  <div class="main">
    <home-advert></home-advert>
    <home-search></home-search>
    <home-swiper></home-swiper>
    <home-nav :navIcon="navIcon"></home-nav>
    <home-seckill :seckillList="seckillList"></home-seckill>
    <home-explore></home-explore>
    <home-daily :dailyList="dailyList"></home-daily>
    <!-- <home-tabbar></home-tabbar> -->
  </div>
</template>

<style lang="less" scoped>
.main {
  // padding-top: 50px;
  height: 100%;
  background-image: url("https://m.360buyimg.com/mobilecms/s1125x939_jfs/t1/110333/10/4009/93682/5e182592Ef376596f/e8a6fcffca6322e2.jpg");
  //  https://m.360buyimg.com/mobilecms/s1125x939_jfs/t1/110333/10/4009/93682/5e182592Ef376596f/e8a6fcffca6322e2.jpg
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>

<script>
import Advert from "./childComps/HomeAdvert";
import Search from "./childComps/HomeSearch";
import Swiper from "./childComps/HomeSwiper";
import Navigation from "./childComps/HomeNavigation";
import TabBar from "./childComps/HomeTabBar";
import SecKill from "./childComps/HomeSeckill";
import Explore from "./childComps/HomeExplore";
import Daily from "./childComps/HomeDaily";

import { getIcons, getSecKillList, getDailyList } from "../../network/home";
export default {
  components: {
    "home-advert": Advert,
    "home-search": Search,
    "home-swiper": Swiper,
    "home-nav": Navigation,
    "home-tabbar": TabBar,
    "home-seckill": SecKill,
    "home-explore": Explore,
    "home-daily": Daily
  },
  data() {
    return {
      navIcon: [],
      seckillList: [],
      dailyList: [],
    };
  },
  created() {
    // 获得Navigation里面的icon图标
    getIcons().then(res => {
      this.navIcon = res.data;
    });

    // 获取限时秒杀里面的数据
    getSecKillList().then(res => {
      this.seckillList = res.data.data.seckillList;
    });

    // 获取每日购里面的数据
    getDailyList().then(res => {
      this.dailyList = res.data.dailyData
    });
  }
};
</script>

