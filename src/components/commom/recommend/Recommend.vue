<template>
  <div class="recommend">
    <div class="recommend-title">
      <slot name="title"></slot>
    </div>
    <div class="container recommend-container">
        <slot nama="content"></slot>
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

</style>