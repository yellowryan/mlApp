<template>
  <div id="cart">
      <cart-search></cart-search>
      <cart-goods-list></cart-goods-list>
  </div>
</template>

<script>
import CartSearch from './childComps/CartSearch'
import CartGoodsList from './childComps/CartGoodsList'
export default {
  components:{
    CartSearch,
    CartGoodsList
  }
}
</script>

<style lang="less" scoped>
  #cart{
    padding-top: 44px;
    background: #f7f7f7;
  }
</style>