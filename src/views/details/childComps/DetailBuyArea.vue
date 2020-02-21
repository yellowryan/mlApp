<template>
  <div class="buy-area">
    <div class="price-wrapper">
      <div class="price_wrap">
        <span class="price">
          ¥<em>{{goodsInfo.price}}</em>.00
        </span>
      </div>
      <span class="collection">收藏</span>
    </div>
    <div class="desc-area">
      <h1 class="goods-name">{{goodsInfo.name}}</h1>
      <div class="short-desc">{{goodsInfo.desc}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="less" scoped>
.buy-area {
  background: #fff;
  overflow: hidden;
  .price-wrapper {
    position: relative;
    .price_wrap {
      padding: 0 10px;
      padding-top: 16px;
      padding-bottom: 0;
      position: relative;
      line-height: 20px;
      margin-bottom: 5px;
      font-size: 0.6rem;
      .price {
        font-size: 0.8rem;
        line-height: 30px;
        color: #f2270c;
        display: inline-block;
        em {
          font-size: 1.3rem;
          font-style: normal;
        }
      }
    }
    .collection {
      right: 0.6rem;
      top: 1.2rem;
      position: absolute;
      font-size: 0.7rem;
      &::after {
        content: "";
        position: absolute;
        top: -1rem;
        left: 0.095rem;
        width: 25px;
        height: 25px;
        background-image: url(https://wq.360buyimg.com/fd/base/img/detail/favour.png?20160512);
        background-size: 25px 60px;
        background-position: 0 -35px;
      }
    }
  }
  .desc-area {
    padding: 15px 10px;
    padding-top: 12px;
    padding-bottom: 10px;
    position: relative;
    overflow: hidden;
    .goods-name {
      font-size: 0.8rem;
      font-weight: 700;
      line-height: 24px;
      padding-right: 0;
      color: #333;
    }
    .short-desc {
      padding: 5px 0 0;
      line-height: 1.3;
      position: relative;
      font-size: 0.6rem;
      max-height: 2.3rem;
      overflow: hidden;
      color: #999;
      max-height: none;
    }
  }
}
</style>