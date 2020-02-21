<template>
  <div class="fix_wrap">
    <div class="fix_mod"> 
      <div class="fix_tab">
        <div class="item" v-for="(item, index) of itemList" :key="index" @click="itemClick(index)" :class="{current:currentIndex==index}">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            itemList:["商品详情","规格参数","售后保障"],
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
          this.currentIndex = index;
            this.$emit('itemClick',index)
        }
    }
};
</script>

<style lang="less" scoped>
.fix_wrap {
  height: 42px;
  z-index: 1;
  margin-top: 10px;
  .fix_mod {
    position: relative;
    .fix_tab {
      display: flex;
      display: -webkit-flex;
      height: 40px;
      width: 100%;
      overflow: hidden;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      margin: 0 auto;
      background: #fff;
      div.current{
          color: #d91100
      }
      .item {
        white-space: nowrap;
        overflow: hidden;
        height: 40px;
        line-height: 40px;
        border-left: 1px solid #ddd;
        text-decoration: none;
        text-align: center;
        font-size: 14px;
        color: #333;
        background: #fff;
        display: block;
        width: 100%;
        flex: 1;
        &:first-child {
          border-left: 0;
        }
      }
    }
  }
}
</style>