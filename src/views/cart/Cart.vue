<template>
  <div id="cart">
      <cart-search></cart-search>
      <cart-goods-list></cart-goods-list>
      <cart-btn-bar></cart-btn-bar>
  </div>
</template>

<script>
import CartSearch from './childComps/CartSearch'
import CartGoodsList from './childComps/CartGoodsList'
import CartBtnBar from './childComps/CartBtnBar'
export default {
  components:{
    CartSearch,
    CartGoodsList,
    CartBtnBar
  }
}
</script>

<style lang="less" scoped>
  #cart{
    padding-top: 44px;
    background: #f7f7f7;
  }
</style>