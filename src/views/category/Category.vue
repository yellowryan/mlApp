<template>
  <div id="category">
    <category-search></category-search>
    <scroll class="category-list-scroll">
      <category-list></category-list>
    </scroll>
    <category-content></category-content>
    <category-tab-bar></category-tab-bar>
  </div>
</template>

<script>
import CategoryTabBar from "./childComps/CategoryTabBar";
import CategorySearch from "./childComps/CategorySearch";
import CategoryList from "./childComps/CategoryList";
import CategoryContent from "./childComps/CategoryContent";

import Scroll from "../../components/commom/scroll/Scroll";
export default {
  components: {
    CategoryTabBar,
    CategorySearch,
    CategoryList,
    CategoryContent,
    Scroll
  }
};
</script>

<style lang="less" scoped>
#category {
  height: 100%;
  overflow: hidden;
}
.category-list-scroll {
  display: inline-block;
  height: calc(100% - 44px - 45px);
  overflow: hidden;
}
</style>