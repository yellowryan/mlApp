<template>
  <div class="detail">
    <detail-search></detail-search>
    <detail-swiper :topImageList="topImageList"></detail-swiper>
    <detail-banner :banner="banner"></detail-banner>
    <detail-buy-area :goodsInfo="goodsInfo"></detail-buy-area>
    <detail-comment :commentInfo="commentInfo" :commentContent="commentContent"></detail-comment>
    <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
    <detail-fix @itemClick="itemClick"></detail-fix>
    <div class="bg" :style="{height:nowHeight}">
      <div ref="move" class="move">
        <introduction :introduction="introduction" class="left" ref="0"></introduction>
        <parameters class="middle" ref="1"></parameters>
        <service class="right" ref="2"></service>
      </div>
    </div>
  <detail-btn-bar></detail-btn-bar>
  </div>
</template>

<script>
import DetailSearch from "./childComps/DetailSearch";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBanner from "./childComps/DetailBanner";
import DetailBuyArea from "./childComps/DetailBuyArea";
import DetailComment from "./childComps/DetailComment";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailFix from "./childComps/DetailFix";
import Introduction from "./childComps/Introduction";
import Parameters from "./childComps/Parameters";
import Service from "./childComps/Service";
import DetailBtnBar from "./childComps/DetailBtnBar"

import { getDetailInformation } from "../../network/detail";
export default {
  name: "Detail",
  components: {
    DetailSearch,
    DetailSwiper,
    DetailBanner,
    DetailBuyArea,
    DetailComment,
    DetailShopInfo,
    DetailFix,
    Introduction,
    Parameters,
    Service,
    DetailBtnBar
  },
  data() {
    return {
      id: null,
      topImageList: [],
      banner: "",
      goodsInfo: {},
      commentInfo: {},
      commentContent: {},
      shopInfo: {},
      introduction: [],
      currentIndex: 1,
      nowHeight: ""
    };
  },
  created() {
    (this.id = this.$route.params.id), this.getDetailInformation();
  },
  methods: {
    getDetailInformation() {
      getDetailInformation(this.id).then(res => {
        this.topImageList = res.data.detailInfo.topImage;

        this.banner = res.data.detailInfo.banner;

        this.goodsInfo = res.data.detailInfo.goodsInfo;

        this.commentInfo = res.data.detailInfo.commentInfo;
        this.commentContent = res.data.detailInfo.commentContent;

        this.shopInfo = res.data.detailInfo.shopInfo;

        this.introduction = res.data.detailInfo.introduction.imgUrl;
      });
    },

    itemClick(index) {
      this.currentIndex = index;

      this.$refs.move.style.transform = "translateX(" + index * -(document.documentElement.clientWidth) + "px)";
    }
  },
  watch: {
    currentIndex() {
      this.nowHeight = this.$refs[this.currentIndex].$el.offsetHeight + "px";
    }
  }
};
</script>

<style lang="less" scoped>
.detail {
  background-color: #e8e8ed !important;
}
.bg {
  width: 100%;
  background: #fff;
  position: relative;
  margin-bottom: 56px;
  overflow: hidden;
  .move{
    width: 100%;
    transition: all 0.3s ease-in-out
  }
}
</style>