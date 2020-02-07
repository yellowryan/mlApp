<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="less" scoped>
  #tab-bar{
    display: flex;
    position: fixed;
    bottom: 0;
    left:0;
    height: 44px;
    width: 100%;
    justify-content: space-evenly;
    align-content: center;
    background-color: #fff;
    z-index: 101;
    box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
    -webkit-box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
  }
</style>>

