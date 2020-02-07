<template>
  <li class="seckill-item">
    <div class="seckill-item-img">
      <slot name="img"></slot>
    </div>
    <div class="seckill-item-price">
      <slot name="newPrice"></slot>
      <slot name="oldPrice"></slot>
    </div>
  </li>
</template>


<script>
export default {};
</script>


<style lang="less" scoped>
.seckill-item {
  .seckill-item-img,.seckill-item-price {
    width: 100%;
    padding: 0 0.25rem;
  }
  .seckill-item-price {
    margin: 0 auto;
    text-align: center;
  }
}
</style>