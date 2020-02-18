<template>
  <div class="category-list">
    <div class="category-container">
      <ul class="category-ul">
        <li
          class="category-item"
          v-for="(item,index) in list"
          :key="index"
          @click="itemClick(index)"
          :class="{active:currentIndex == index}"
        >{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "热门推荐",
        "手机数码",
        "家用电器",
        "电脑办公",
        "计生情趣",
        "美妆护肤",
        "个护清洁",
        "汽车生活",
        "男装",
        "男鞋",
        "女装",
        "女鞋",
        "运动户外",
        "内衣配饰",
        "食品生鲜",
        "酒水饮料",
        "奢侈品"
      ],
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$bus.$emit('itemClick',index)
    }
  }
};
</script>

<style lang="less" scoped>
.category-list {
  width: 85px;
  min-width: 76px;
  height: auto;
  overflow-y: auto;
  min-height: 100%;
  background-color: #f8f8f8;
  .category-container {
    overflow: hidden;
    .category-ul {
      width: 85px;
      .category-item {
        color: #333;
        font-size: 0.7rem;
        display: block;
        width: 100%;
        height: 46px;
        line-height: 46px;
        text-decoration: none;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      li {
        box-sizing: border-box;
        background: #f8f8f8;
        height: 46px;
        line-height: 46px;
        text-align: center;
        position: relative;
      }
      .active {
        color: #FF5577;
        background-color: #fff;
        font-weight: 700;
        border-left: 3px solid #FF5577;
      }
    }
  }
}
</style>