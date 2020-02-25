<template>
  <div class="cart_btn_bar">
    <i class="icon_select" @click="allSelect" :class="{selected:selectAll}">全选</i>
    <div class="total">
      <div class="detail">
        <p class="main">
          总计:
          <span>¥{{this.$store.getters.totalPrice}}.00</span>
        </p>
      </div>
      <div class="buy" :class="{disabled:this.$store.getters.goodsNum==0}">
        去结算
        <span class="num">({{this.$store.getters.goodsNum}}件)</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["selectAll","cartList"])
  },
  methods: {
    allSelect() {
      if (this.$store.getters.selectAll) {
        this.cartList.forEach(item => {
          item.isSelected = false;
        });
      } else{
          this.cartList.filter(item=>item.isSelected==false)
          .forEach(item=>{
              item.isSelected = true
          })
      }
    }
  }
};
</script>

<style lang="less" scoped>
.cart_btn_bar {
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 50px;
  background: hsla(0, 0%, 100%, 0.95);
  color: #333;
  font-size: 14px;
  position: fixed;
  z-index: 120;
  bottom: 0;
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: 40px;
  box-shadow: 0 0 10px #999;
  .icon_select {
    z-index: 1;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    padding-top: 32px;
    font-size: 10px;
    text-align: center;
    height: 15px;
    color: #999;
    &::after,
    &.selected::after {
      position: absolute;
      left: 50%;
      content: "";
      margin-left: -10px;
      background-image: url(https://wq.360buyimg.com/wxsq_trade/cart_vue/main/images/sprite.img_default_437_9b91ce47.png);
      background-position: -80px -20px;
      background-size: 116px 110px;
      width: 20px;
      height: 20px;
      top: 7px;
    }
    &.selected::after {
      background-image: url(https://wq.360buyimg.com/wxsq_trade/cart_vue/main/images/sprite.img_default_437_9b91ce47.png);
      background-size: 116px 110px;
      background-position: 0 -68px;
    }
  }
  .total {
    display: -webkit-flex;
    display: flex;
    .detail {
      display: flex;
      justify-content: center;
      height: 50px;
      text-align: right;
      position: relative;
      flex-direction: column;
      flex: 1;
      padding: 0 15px 0 0;
      .main {
        font-weight: 800;
        font-size: 16px;
        line-height: 1.5em;
        height: 2em;
        overflow: hidden;
        span {
          font-family: JDZH-Regular;
          font-size: 16px;
          color: #f2270c;
        }
      }
    }
    .buy {
      margin: 5px 5px 0 10px;
      font-weight: 700;
      display: block;
      width: 110px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 16px;
      border-radius: 20px;
      background-color: #f2270c;
      color: #fff;
      background-image: linear-gradient(135deg, #f2270c, #f2270c 70%, #f24d0c);
      box-shadow: 0 6px 12px 0 rgba(255, 65, 66, 0.2);
      &.disabled {
        display: block;
        width: 110px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        border-radius: 20px;
        background-color: #d7d7d7;
        color: #fff;
        background-image: none;
        box-shadow: none;
      }
      .num {
        font-weight: 400;
        font-size: 12px;
        font-family: none;
      }
    }
  }
}
</style>