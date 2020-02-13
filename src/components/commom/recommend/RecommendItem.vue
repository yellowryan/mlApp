<template>
  <li class="recommend-li">
    <slot name="recommend-item-link"></slot>
  </li>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.recommend-li:nth-child(odd) {
  padding-right: 2px;
}
.recommend-li:nth-child(even) {
  padding-left: 2px;
}
</style>