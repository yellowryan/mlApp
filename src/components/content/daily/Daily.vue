<template>
  <div id="daily-shop">
    <div class="daily-title">
      <slot name="title"></slot>
    </div>
    <div class="daily-container-outer">
          <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>


<style lang="less" scoped>
  #daily-shop{
    background: #f6f6f6;
  }
  .daily-container-outer{
    width: 100%;
  }
</style>