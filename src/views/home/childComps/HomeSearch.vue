<template>
  <search>
    <div slot="left" class="home-logo-display"></div>
    <div slot="center" class="home-search">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="请输入关键词" autocomplete="off" @focus="searchFocus" />
    </div>
    <i class="iconfont icon-imagevector user-icon" slot="right"></i>
  </search>
</template>



<script>
import Search from "../../../components/commom/search/Search";
export default {
  components: {
    Search
  },
  data() {
    return {};
  },
  methods: {
    searchFocus() {
      this.$emit("homeFocus");
    }
  }
};
</script>

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
  background-image: url("https://ae01.alicdn.com/kf/Hea7d8aa1a48e40efb4734d29e11e992eN.png");
  background-size: 1.8rem 1.8rem;
  background-repeat: no-repeat;
  background-position: 0.45rem 0.35rem;
}
.home-search {
  text-align: center;
  width: 100%;
  position: relative;
  .icon-sousuo {
    color: #b7b7bb;
    position: relative;
    &::before {
      position: absolute;
      left: 12px;
      top: -2px;
      font-size: 1rem;
    }
    &::after {
      content: "";
      position: absolute;
      border-right: 1px solid #ddd;
      top: 2px;
      left: 38px;
      height: 16px;
    }
  }
  input {
    width: 90%;
    border: 0;
    border-radius: 14px;
    font-size: 12px;
    color: #232326;
    padding-left: 38px;
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