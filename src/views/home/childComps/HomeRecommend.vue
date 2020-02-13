<template>
  <recommend>
    <div class="recommend-title-img" slot="title">
      <img
        src="https://img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png"
        alt
      />
    </div>
    <ul class="recommend-ul">
      <recommend-item v-for="(item, index) in recommendList" :key="index" @click.native="itemClick(index)">
        <a href="javascript:;" slot="recommend-item-link" class="recommend-link">
          <div class="recommend-goods">
            <div class="goods-img">
              <img :src="item.src" alt="" @load="imgLoaded" />
            </div>
            <span class="goods-text">{{item.goodsText}}</span>
            <p class="goods-info">
              <span class="goods-price">{{item.goodsPrice}}</span>
              <span class="goods-similar">{{item.similar}}</span>
            </p>
            <p class="goods-info"></p>
          </div>
        </a>
      </recommend-item>
    </ul>
  </recommend>
</template>

<script>
import Recommend from "../../../components/commom/recommend/Recommend";
import RecommendItem from "../../../components/commom/recommend/RecommendItem";
export default {
  props: {
    recommendList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Recommend,
    RecommendItem
  },
  methods :{
    imgLoaded(){
      this.$emit('imgLoaded',()=>{})
    },
    itemClick(index){  
      this.$router.push('/detail/' + this.recommendList[index].id)
    }
  }
};
</script>

<style lang="less" scoped>
.recommend-title-img {
  img {
    display: block;
    width: calc(100% - 1rem);
    margin: 0 auto;
    text-align: center;
  }
}
.recommend-ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  li {
    width: 50%;
    box-sizing: border-box;
    .recommend-link{
        display: inline-block;
        width: 100%;
        height: 100%;
        .recommend-goods {
            width: 100%;
        }
    }
  }
}
.recommend-goods {
  background-color: #fff;
  font-size: 0;
  padding-bottom: 0;
  .goods-img {
    position: relative;
    img {
      display: block;
      height: 176px;
      width: 176px;
    }
  }
  .goods-text {
    box-sizing: border-box;
    height: 31px;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    color: #232326;
    margin-top: 5px;
    line-height: 16px;
    margin-bottom: 3px;
    padding: 0 4px;
  }
  .goods-info {
    font-size: 13px; 
    overflow: hidden;
    position: relative;
    height: 26px;
    .goods-price {
      color: #f23030;
      display: inline-block;
      padding: 0 5px 0 4px;
      position: relative;
      top: 1px;
      height: 25px;
      line-height: 25px;
    }
    .goods-similar {
      display: block;
      position: absolute;
      top: 0;
      right: 8px;
      text-align: center;
      color: #686868;
      font-size: 12px;
      width: 49px;
      height: 24px;
      line-height: 25px;
      &::after {
        content: "";
        width: 200%;
        height: 200%;
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid #bfbfbf;
        border-radius: 4px;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: top left;
        transform-origin: top left;
      }
    }
  }
}
</style>