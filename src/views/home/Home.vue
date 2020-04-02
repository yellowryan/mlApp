<template>
  <div class="main">
    <!-- <home-advert /> -->
    <home-search ref="search" @homeFocus="homeFocus"/>
    <scroll
      class="home-content"
      @scroll="homeScroll"
      ref="scroll"
      :probe-type="3"
      :pullUpLoad="true"
      @pullingUp="loadMore"
      >
      <home-swiper ref="swiper" />
      <home-banner></home-banner>
      <home-nav :navIcon="navIcon"></home-nav>
      <home-seckill :seckillList="seckillList"></home-seckill>
      <home-explore />
      <home-daily :dailyList="dailyList"></home-daily>
      <home-recommend :recommendList="recommend.list" @imgLoaded="homeImgLoaded"></home-recommend>
    </scroll>
      <back-top @click.native="backClick" v-show="isShowBackTop" />
      <home-tabbar></home-tabbar>
      <transition name='fade'>
         <router-view />
      </transition>
     
  </div>
  
</template>

<style lang="less" scoped>
.main {
  padding-top: 44px;
  height: 100%;
  background:url(https://m.360buyimg.com/mobilecms/s1125x939_jfs/t1/110333/10/4009/93682/5e182592Ef376596f/e8a6fcffca6322e2.jpg) center center/cover no-repeat
}
.fade-enter-active,.fade-leave-active{
  transition:opacity .3s ease-in-out
}
.fade-enter,.fade-leave-to{
  opacity:0
}
</style>

<script>
import Advert from "./childComps/HomeAdvert";
import Search from "./childComps/HomeSearch";
import Swiper from "./childComps/HomeSwiper";
import Banner from "./childComps/HomeBanner";
import Navigation from "./childComps/HomeNavigation";
import CommomTabBar from "../../components/commom/tabbar/CommomTabBar";
import SecKill from "./childComps/HomeSeckill";
import Explore from "./childComps/HomeExplore";
import Daily from "./childComps/HomeDaily";
import Recommend from "./childComps/HomeRecommend";

import Scroll from "../../components/commom/scroll/Scroll";

import BackTop from "../../components/content/backTop/BackTop";

import {
  getIcons,
  getSecKillList,
  getDailyList,
  getRecommendList
} from "../../network/home";

import { debounce } from "../../assets/utils/utils";

export default {
  name:'Home',
  components: {
    "home-advert": Advert,
    "home-search": Search,
    "home-swiper": Swiper,
    "home-banner": Banner,
    "home-nav": Navigation,
    "home-tabbar": CommomTabBar,
    "home-seckill": SecKill,
    "home-explore": Explore,
    "home-daily": Daily,
    "home-recommend": Recommend,
    Scroll,
    BackTop
  },
  data() {
    return {
      navIcon: [],
      seckillList: [],
      dailyList: [],
      recommend: {
        page: 0,
        list: []
      },
      isShowBackTop: false,
      fresh: null,
      scrollY: 0,
    };
  },
  created() {
    this.getIcons();
    this.getSecKillList();
    this.getDailyList();
    this.getRecommendList();
  },
  methods: {
    homeScroll(position) {
      if (-position.y > 1000) {
        this.isShowBackTop = true;
      } else {
        this.isShowBackTop = false;
      }

      if (-position.y > 0) {
        this.$refs.search.$el.style.backgroundColor = "#e43031";
      } else {
        this.$refs.search.$el.style.backgroundColor = "transparent";
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 800);
    },

    homeImgLoaded() {
      this.fresh();
    },

    /**
     *
     * 网络请求相关
     *
     */

    // 获得Navigation里面的icon图标
    getIcons() {
      getIcons().then(res => {
        this.navIcon = res.data;
      });
    },

    // 获取限时秒杀里面的数据
    getSecKillList() {
      getSecKillList().then(res => {
        this.seckillList = res.data.data.seckillList;
      });
    },

    // 获取每日购里面的数据
    getDailyList() {
      getDailyList().then(res => {
        this.dailyList = res.data.dailyData;
      });
    },

    // 获取推荐里面的数据
    getRecommendList() {
      const page = this.recommend.page + 1;
      getRecommendList(page).then(res => {
        this.recommend.list.push(...res.data.recommendList[page - 1]);
        this.recommend.page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },

    loadMore() {
      if(this.recommend.page <=2){
        this.getRecommendList();
      }
    },

    homeFocus(){
      this.$router.push('/home/search').catch(error=>error)
    }
  },
  mounted() {
    this.$refs.scroll.refresh()
    this.fresh = debounce(this.$refs.scroll.refresh, 100);
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.scrollY, 0);
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.scroll.y;
  }
};
</script>

<style lang="less">
.container {
  position: relative;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
.home-content {
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>

