<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="https://ae01.alicdn.com/kf/H931d557e3dc344c09648146a2e156f82i.jpg" />
      <img
        slot="item-icon-active"
        src="https://ae01.alicdn.com/kf/Hd56b6f149c314b0abe66db227ac7f3e3p.jpg"
        alt
      />
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img
        slot="item-icon"
        src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png"
        alt
      />
      <img
        slot="item-icon-active"
        src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/48787/24/12910/3390/5d9c4b12Ee63270e4/4481f5b3dbad979d.png"
        alt
      />
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img
        slot="item-icon"
        src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png"
        alt
      />
    </tab-bar-item>
    <tab-bar-item path="/my">
      <img
        slot="item-icon"
        :src=" user._id ?'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56206/13/12652/2957/5d9c4b13E503bcd76/1c8543653685e80e.png': 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/68400/36/12368/3153/5d9c4b13E0e0d80a8/876c40f17d91ce44.png'"
        alt
      />
      <img
        slot="item-icon-active"
        src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/47480/36/12929/3209/5d9c4b13E97caa63a/4dc0ec8a7e47c2b7.png"
      />
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";
import { mapState } from "vuex";
export default {
  components: {
    TabBar,
    TabBarItem
  },
  data() {
    return {
      isLogin:
        "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/68400/36/12368/3153/5d9c4b13E0e0d80a8/876c40f17d91ce44.png"
    };
  },
  computed: {
    ...mapState(["user", "cartList"])
  }
};
</script>

<style lang="less" scoped>
img {
  width: 3rem;
  height: 2.3rem;
}
</style>