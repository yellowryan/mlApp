<template>
  <sec-kill>
    <ul class="seckill-new-list">
      <sec-kill-item v-for="(item,index) in seckillList" :key="index">
        <a :href="item.link" slot="img" class="seckill-new-link">
          <img :src="item.src" />
        </a>
        <span slot="newPrice" class="seckill-new-price">{{item.newPrice | priceFormat}}</span>
        <span slot="oldPrice" class="seckill-old-price">{{item.oldPrice | priceFormat}}</span>
      </sec-kill-item>
    </ul>
  </sec-kill>
</template>

<script>
import SecKill from "../../../components/content/seckill/SecKill";
import SecKillItem from "../../../components/content/seckill/SecKillItem";
export default {
  components: {
    SecKill,
    SecKillItem
  },
  props: {
    seckillList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  filters:{
      priceFormat(value){
          return "￥" + value;
      }
  }
};
</script>

<style lang="less" scoped>
.seckill-new-list {
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  background-color: #fff;
  padding-left: 0.25rem;
  width: 810.441px;
}
.seckill-new-link {
  display: block;
  position: relative;
  img {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
}
.seckill-new-price {
  font-family: JDZhengHT-EN-Bold;
  margin-top: 10px;
  display: block;
  color: #e93b3d;
  font-size: 16px;
  line-height: 16px;
  height: 16px;
  text-align: center;
  font-weight: 700
}
.seckill-old-price {
  color: #999;
  font-size: 12px;
  line-height: 12px;
  margin: 4px 0 11px;
  text-align: center;
  padding: 0 2px;
  display: inline-block;
  position: relative;
  text-decoration: line-through;
}
</style>>