<template>
  <div id="category">
    <category-search></category-search>
    <scroll class="category-list-scroll">
      <category-list></category-list>
    </scroll>
    <scroll class="category-item-scroll">
      <category-content :categoryList="categoryList"></category-content>
    </scroll>
    <category-tab-bar></category-tab-bar>
  </div>
</template>

<script>
import CategoryTabBar from "./childComps/CategoryTabBar";
import CategorySearch from "./childComps/CategorySearch";
import CategoryList from "./childComps/CategoryList";
import CategoryContent from "./childComps/CategoryContent";

import Scroll from "../../components/commom/scroll/Scroll";

import { getCategoryList } from "../../network/category";
export default {
  components: {
    CategoryTabBar,
    CategorySearch,
    CategoryList,
    CategoryContent,
    Scroll
  },
  data() {
    return {
      categoryList: []
    };
  },
  methods: {
    getCategoryList() {
      getCategoryList().then(res => {
        this.categoryList = res.data.category.items;
      });
    }
  },
  created() {
    this.getCategoryList();
  },
  destroyed(){
    console.log("des");
    
  }
};
</script>

<style lang="less" scoped>
#category {
  height: 100%;
  overflow: hidden;
}
.category-list-scroll {
  float: left;
  height: calc(100% - 44px - 45px);
  overflow: hidden;
}
.category-item-scroll {
  height: calc(100% - 44px - 45px);
  margin-left:85px;
   overflow: hidden;
}
</style>