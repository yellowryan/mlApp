<template>
  <div id="cart_goods_list">
    <vip-bar></vip-bar>
    <div class="section" v-for="(item, index) of this.$store.state.cartList" :key="index">
      <div class="head_wrap">
        <div class="head">
          <i class="icon_shop"></i>
          <div class="shop_name">{{item.shopName}}</div>
        </div>
      </div>
      <div class="item_content">
        <div class="item_title">
          <span class="tag">跨店铺满减</span>
          <p class="title">购满399元，中国内地包邮</p>
        </div>
        <div class="goods">
          <i class="icon_select" :class="{selected:item.isSelected}" @click="item.isSelected = !item.isSelected" ></i>
          <img :src="item.img" class="image" />
          <div class="content">
            <div class="name">{{item.name}}</div>
            <div class="type">{{item.type}}</div>
            <div class="discount">
              <div class="discount_item">{{item.discount}}</div>
            </div>
            <div class="price_line">
              <div class="price">
                ¥
                <span>{{item.price}}</span>.00
              </div>
              <div class="num_wrap">
                <span
                  class="decrease"
                  :class="{disabled:item.count<=1?true: false}"
                  @click.stop="item.count-=1"
                ></span>
                <div class="input_wrap">
                  <input type="number" class="num" :value="item.count" />
                </div>
                <span class="add" @click.stop="item.count+=1"></span>
              </div>
            </div>
            <div class="delete">
              <span class="detete_btn" @click="deleteClick(item.id)">删除</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VipBar from "../../../components/commom/vip/VipBar";
export default {
  components: {
    VipBar
  },
  methods:{
    deleteClick(id){
      this.$store.state.cartList.forEach((item,index)=>{
        if(item.id == id){
           this.$store.state.cartList.splice(index,1);
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
#cart_goods_list {
  .section {
    position: relative;
    margin: 15px 0;
    border-radius: 10px;
    background: #fff;
    overflow: hidden;
    .head_wrap {
      min-height: 46px;
      .head {
        box-sizing: border-box;
        position: relative;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        padding: 5px 10px 5px 22px;
        min-height: 46px;
        z-index: 1;
        .icon_shop {
          display: block;
          margin-right: 5px;
          background-image: url(https://wq.360buyimg.com/wxsq_trade/cart_vue/main/images/sprite.img_default_437_9b91ce47.png);
          background-size: 116px 110px;
          width: 20px;
          height: 20px;
          background-position: -80px 0;
        }
        .shop_name {
          -webkit-box-flex: 1;
          flex: 1;
          box-sizing: border-box;
          display: inline-block;
          font-size: 16px;
          font-weight: 700;
          margin-right: 10px;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #333;
        }
      }
    }
    .item_content {
      position: relative;
      overflow: hidden;
      background: #fff;
      .item_title {
        display: flex;
        min-height: 21px;
        .tag {
          position: relative;
          display: inline-block;
          background: #f2270c;
          color: #fff;
          font-size: 10px;
          padding: 0 2px;
          height: 15px;
          line-height: 15px;
          margin: 2px 5px 0 0;
          vertical-align: top;
          margin-left: 10px;
          -webkit-align-self: flex-start;
          align-self: flex-start;
          text-align: center;
          border-radius: 3px;
          &::before {
            position: absolute;
            left: 7px;
            bottom: -4px;
            content: "";
            display: block;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 4px solid #f2270c;
          }
        }
        .title {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          flex: 1;
          font-size: 14px;
        }
      }
      .goods {
        z-index: 1;
        position: relative;
        min-height: 100px;
        background: #fff;
        padding: 10px 0 10px 150px;
        padding-bottom: 20px;
        margin-top: 10px;
        .icon_select {
          z-index: 1;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 50px;
          height: 100%;
          &::after {
            position: absolute;
            top: 0;
            content: "";
            margin-left: -10px;
            background-image: url(https://wq.360buyimg.com/wxsq_trade/cart_vue/main/images/sprite.img_default_437_9b91ce47.png);
            background-position: -80px -20px;
            background-size: 116px 110px;
            width: 20px;
            height: 20px;
            left: 20px;
            background-color: #fff;
            top: 50px;
          }
          &.selected::after {
            content: "";
            margin-left: -10px;
            position: absolute;
            background-position: 0 -68px;
            background-image: url(https://wq.360buyimg.com/wxsq_trade/cart_vue/main/images/sprite.img_default_437_9b91ce47.png);
            background-size: 116px 110px;
            width: 20px;
            height: 20px;
          }
        }
        .image {
          position: absolute;
          left: 40px;
          display: block;
          width: 100px;
          height: 100px;
          box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.05);
          border-radius: 6px;
          top: 13px;
        }
        .content {
          .name {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 14px;
            padding-right: 10px;
            margin-bottom: 3px;
            word-break: break-all;
            position: relative;
          }
          .type {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            position: relative;
            background: #f7f7f7;
            padding: 0 15px 0 5px;
            height: 20px;
            line-height: 20px;
            font-size: 10px;
            color: #666;
            -webkit-box-flex: 1;
            flex: 1;
            border-radius: 2px;
          }
          .discount {
            margin: 5px 10px 0 0;
            height: 20px;
            overflow: hidden;
            white-space: nowrap;
            line-height: 20px;
            .discount_item {
              float: left;
              margin: 0 6px;
              height: 20px;
              line-height: 20px;
              padding: 0 17px 0 5px;
              background: #fcedeb;
              color: #f2270c;
              border-radius: 2px;
              position: relative;
              font-size: 10px;
            }
          }
          .price_line {
            position: relative;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            margin: 5px 10px 0 0;
            -webkit-box-pack: justify;
            justify-content: space-between;
            font-size: 10px;
            .price {
              -webkit-box-flex: 1;
              flex: 1;
              line-height: 16px;
              color: #f2270c;
              font-size: 10px;
              span {
                font-size: 16px;
                font-weight: 600;
              }
            }
            .num_wrap {
              position: relative;
              display: block;
              width: 72px;
              border-radius: 2px;
              overflow: hidden;
              background-color: #f7f7f7;
              font-weight: 400;
              .decrease,
              .add {
                position: relative;
                float: left;
                width: 20px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                &::after {
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  content: "";
                  display: block;
                  width: 10px;
                  height: 2px;
                  margin: -1px 0 0 -5px;
                  background: #333;
                  border-radius: 1px;
                }
              }
              .decrease.disabled {
                background: #fff;
                &::after {
                  background: hsla(0, 0%, 80%, 0.3);
                }
              }
              .add {
                float: right;
                &::before {
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  content: "";
                  display: block;
                  background: #333;
                  width: 2px;
                  height: 10px;
                  margin: -5px 0 0 -1px;
                  border-radius: 1px;
                }
              }
              .input_wrap {
                float: left;
                position: relative;
                border-left: 1px solid #fff;
                border-right: 1px solid #fff;
                .num {
                  position: relative;
                  float: left;
                  height: 20px;
                  line-height: 20px;
                  border: none;
                  width: 30px;
                  text-align: center;
                  color: #333;
                  font-size: 14px;
                }
              }
            }
          }
          .delete {
            margin: 10px 10px 0 0;
            height: 15px;
            color: #999;
            font-size: 0;
            text-align: right;
            .detete_btn {
              position: relative;
              padding: 0 10px;
              line-height: 15px;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>