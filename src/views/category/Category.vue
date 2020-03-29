<template>
  <div id="category">
    <category-search></category-search>
    <scroll class="category-list-scroll">
      <category-list></category-list>
    </scroll>
    <scroll class="category-item-scroll">
      <category-content :categoryList="categoryList"></category-content>
    </scroll>
    <commom-tab-bar></commom-tab-bar>
  </div>
</template>

<script>
import CommomTabBar from "../../components/commom/tabbar/CommomTabBar";
import CategorySearch from "./childComps/CategorySearch";
import CategoryList from "./childComps/CategoryList";
import CategoryContent from "./childComps/CategoryContent";

import Scroll from "../../components/commom/scroll/Scroll";

import { getCategoryList } from "../../network/category";
export default {
  name:"Category",
  components: {
    CommomTabBar,
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
  padding-top: 44px;
  height: 100%;
  overflow: hidden;
}
.category-list-scroll {
  float: left;
  height: calc(100% - 44px);
  overflow: hidden;
}
.category-item-scroll {
  height: calc(100% - 44px);
  margin-left:85px;
   overflow: hidden;
}
</style>