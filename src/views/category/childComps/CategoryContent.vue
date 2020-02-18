<template>
  <div class="category-content">
    <div class="main-content">
      <div class="content-list"
       v-for="(item,index) in categoryList[currentIndex]" :key="index">
        <div class="category-item">
          <h4 class="item-title">{{item.title}}</h4>
          <ul class="item-ul">
            <li class="item-li" v-for="(good,index) in item.goods" :key="index">
              <img :src="good.src" alt />
              <span>{{good.text}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  mounted() {
    this.$bus.$on("itemClick", index => {
      this.currentIndex = index;
    });
  }
};
</script>

<style lang="less" scoped>
.category-content {
  background-color: #fff;
  height: auto;
  min-height: 100%;
  width: 100%;
  font-size: 12px;
  color: #252525;
  .main-content {
    overflow: hidden;
    .category-item {
      margin: 19px 7px 0;
      .item-title {
        font-size: 14px;
        color: #333;
        display: inline-block;
        margin: 0;
        padding: 0;
        line-height: 1em;
        font-weight: 700;
      }
      .item-ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        margin-top: 9px;
        background-color: #fff;
        border: 0;
        font-size: 0;
        padding: 7px 10px 0;
        overflow: hidden;
        li {
          width: 32.8%;
          text-align: center;
          img {
            width: 3.5rem;
            height: 3.5rem;
          }
          span {
            display: inline-block;
            color: #333;
            height: 35px;
            margin-top: 2px;
            font-size: 12px;
            width: 100%;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>