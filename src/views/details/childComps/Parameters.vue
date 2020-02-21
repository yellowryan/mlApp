<template>
  <div class="parameters">
    <div class="param_title">
      <h3>商品参数</h3>
    </div>
    <div class="detail_params">
      <table class="params_table"></table>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="less" scoped>
.parameters {
  padding: 10px;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 100%;
  overflow: hidden;
  background: #fff;
  .param_title {
    border-top: 1px solid #ddd;
    text-align: center;
    height: 6px;
    margin: 16px 0 10px;
    line-height: 1.5;
    h3 {
      display: inline-block;
      font-size: 12px;
      height: 12px;
      line-height: 12px;
      position: relative;
      top: -18px;
      font-weight: 400;
      padding: 0 20px;
      background: #fff;
    }
  }
  .detail_params {
  }
}
</style>