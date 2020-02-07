<template>
  <search>
    <div slot="left" class="home-logo-display"></div>
    <div slot="center" class="home-search">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="请输入关键词" autocomplete="off" />
    </div>
    <i class="iconfont icon-imagevector user-icon" slot="right"></i>
  </search>
</template>

<style lang="less" scoped>
@import url("https://at.alicdn.com/t/font_1607668_rl0j6123ci.css");
.user-icon {
  font-size: 1.4rem;
  color: #fff;
  display: inline-block;
  position: absolute;
  right: 0.05rem;
  top: 0.4rem;
}
.home-logo-display {
  width: 100%;
  height: 100%;
  background-image: url("/imgs/xingzuo.png");
  background-size: 1.8rem 1.8rem;
  background-repeat: no-repeat;
  background-position: 0.45rem center;
}
.home-search {
  text-align: center;
  width: 100%;
  position: relative;
  .icon-sousuo {
    color: #b7b7bb;
    position: absolute;
    left: 22px;
    top: 4px;
    font-size: 1rem;
    &::after {
      content: "";
      position: absolute;
      border-right: 1px solid #ddd;
      top: 4px;
      left: 22px;
      height: 16px;
    }
  }
  input {
    width: 90%;
    border: 0;
    border-radius: 14px;
    font-size: 12px;
    color: #232326;
    padding-left: 32px;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    height: auto;
    margin: 0 0 0 5px;
    vertical-align: middle;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 30px;
    background: #f7f7f7;
  }
}
</style>

<script>
import Search from "../../../components/commom/search/Search";
export default {
  components: {
    Search
  }
};
</script>