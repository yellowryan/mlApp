<template>
  <div class="detail" ref="scroll">
    <detail-search
      :title="title"
      ref="detSearch"
      :scrollTop="scrollTop"
      @spanClick="spanClick"
      @searchMounted="searchMounted"
      @moreClick="moreClick"
    ></detail-search>
    <div class="detail-mask" ref="mask" @click.stop="maskClick"></div>
    <detail-swiper :topImageList="topImageList"></detail-swiper>
    <detail-banner :banner="banner"></detail-banner>
    <detail-buy-area :goodsInfo="goodsInfo"></detail-buy-area>
    <detail-comment :commentInfo="commentInfo" :commentContent="commentContent" ref="comment"></detail-comment>
    <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
    <detail-guess :guessLike="guessLike" ref="guess"></detail-guess>
    <detail-fix @itemClick="itemClick"></detail-fix>
    <div class="bg" :style="{height:nowHeight}" ref="bg">
      <div ref="move" class="move">
        <introduction
          :introduction="introduction"
          class="left"
          ref="0"
          @introImgLoaded="introImgLoaded"
        ></introduction>
        <parameters class="middle" ref="1"></parameters>
        <service class="right" ref="2"></service>
      </div>
    </div>
    <back-top v-show="isShow" @click.native="backTopClick"></back-top>
    <detail-btn-bar @addToCart="addToCart"></detail-btn-bar>
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
import DetailGuess from "./childComps/DetailGuess";
import Introduction from "./childComps/Introduction";
import Parameters from "./childComps/Parameters";
import Service from "./childComps/Service";
import DetailBtnBar from "./childComps/DetailBtnBar";
import BackTop from "../../components/content/backTop/BackTop";

import { getDetailInformation } from "../../network/detail";

import { debounce } from "../../assets/utils/utils";

import { ADD_CART } from "../../store/mutation-types";
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
    DetailGuess,
    Introduction,
    Parameters,
    Service,
    BackTop,
    DetailBtnBar
  },
  data() {
    return {
      title: ["商品", "评价", "推荐", "详情"],
      id: null,
      topImageList: [],
      banner: "",
      goodsInfo: {},
      commentInfo: {},
      commentContent: {},
      shopInfo: {},
      guessLike: [],
      introduction: [],
      current: 0,
      searchIndex: 0,
      nowHeight: "",
      scrollTop: 0,
      isShow: false,
      offsetTopList: [],
      getOffsetTop: null
    };
  },
  created() {
    (this.id = this.$route.params.id), this.getDetailInformation();

    //对获取高度进行防抖操作
    this.getOffsetTop = debounce(() => {
      this.offsetTopList.push(0);
      this.offsetTopList.push(
        this.$refs.comment.$el.offsetTop - this.$refs.detSearch.$el.offsetHeight
      );
      this.offsetTopList.push(
        this.$refs.guess.$el.offsetTop - this.$refs.detSearch.$el.offsetHeight
      );
      this.offsetTopList.push(
        this.$refs.bg.offsetTop - this.$refs.detSearch.$el.offsetHeight
      );
      this.offsetTopList.push(Number.MAX_VALUE);
    }, 100);
  },
  mounted() {},
  methods: {
    getDetailInformation() {
      getDetailInformation(this.id).then(res => {
        //轮播图的数据
        this.topImageList = res.data.detailInfo.topImage;

        this.banner = res.data.detailInfo.banner;

        this.goodsInfo = res.data.detailInfo.goodsInfo;

        this.commentInfo = res.data.detailInfo.commentInfo;
        this.commentContent = res.data.detailInfo.commentContent;

        this.shopInfo = res.data.detailInfo.shopInfo;

        this.guessLike = res.data.detailInfo.guessLike.list;

        this.introduction = res.data.detailInfo.introduction.imgUrl;
      });
    },

    itemClick(index) {
      this.current = index;
      this.$refs.move.style.transform =
        "translateX(" + index * -document.documentElement.clientWidth + "px)";
    },
    // 返回顶部按钮的显示与隐藏
    handleScroll() {
      this.scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (this.scrollTop > 1000) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }

      for (let i = 0; i < this.offsetTopList.length - 1; i++) {
        if (
          this.searchIndex !== i &&
          this.scrollTop >= this.offsetTopList[i] &&
          this.scrollTop < this.offsetTopList[i + 1]
        ) {
          this.searchIndex = i;
          this.$refs.detSearch.currentIndex = this.searchIndex;
        }
      }
    },

    searchMounted() {
      window.addEventListener("scroll", this.handleScroll, false);
    },

    // 返回顶部按钮
    backTopClick() {
      window.scrollTo(0, 0);
    },
    // 商品详情图片加载完成后
    introImgLoaded() {
      this.getOffsetTop();
    },
    // 根据导航条点击的item跳转到相应的位置
    spanClick(index) {
      window.scrollTo(0, this.offsetTopList[index]);
    },

    moreClick() {
      this.$refs.mask.style.display = "block";
    },

    maskClick() {
      this.$refs.mask.style.display = "none";
      this.$refs.detSearch.isShow = false;
    },

    // 点击加入购物车后的动作
    addToCart() {
      const product = {};

      product.img = this.goodsInfo.img;
      product.name = this.goodsInfo.name;
      product.price = this.goodsInfo.price;
      product.id = this.goodsInfo.id;
      product.discount = this.goodsInfo.discount;
      product.count = +this.goodsInfo.count;
      product.shopName = this.shopInfo.name;
      product.type = this.goodsInfo.type;
      product.isSelected = this.goodsInfo.isSelected;
      this.$store.commit(ADD_CART, product);

      this.$toast.message({
        type: "success",
        message: "加入购物车成功",
        duration: 3000,
        isRadious: true
      });
    }
  },
  watch: {
    current() {
      this.nowHeight = this.$refs[this.current].$el.offsetHeight + "px";
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="less" scoped>
.detail {
  background-color: #e8e8ed !important;
  position: relative;
}
.detail-mask {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 98;
  background: transparent;
}
.bg {
  width: 100%;
  background: #fff;
  position: relative;
  margin-bottom: 56px;
  overflow: hidden;
  .move {
    width: 100%;
    transition: all 0.3s ease-in-out;
  }
}
</style>