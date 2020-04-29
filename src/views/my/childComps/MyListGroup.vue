<template>
  <div>
     <div class="xlist_group my_cell">
      <div class="rel_container">
        <div class="top_line_box">
          <div class="my_order_entrance type_unpay">
            <div class="entrance_text">待付款</div>
          </div>
          <div class="my_order_entrance type_unrecieve">
            <div class="entrance_text">待收货</div>
          </div>
          <div class="my_order_entrance type_consult">
            <div class="entrance_text">退货/售后</div>
          </div>
          <div class="my_order_entrance type_orders">
            <div class="entrance_text">全部订单</div>
          </div>
        </div>
      </div>
    </div> 
    <div class="xlist_group my_cell rel_container top_line_box">
      <div class="assets_item">
        <div class="assets_item_val">
          <span class="assets_val">1
            <span class="assets_unit">张</span>
          </span>
        </div>
        <span class="assets_item_key">麋鹿券</span>
      </div>
      <div class="assets_item">
        <div class="assets_item_val">
          <span class="assets_val">1000.00
            <span class="assets_unit">元</span>
          </span>
        </div>
        <span class="assets_item_key">白条额度</span>
      </div>
      <div class="assets_item">
        <div class="assets_item_val">
          <span class="assets_val">1684
            <span class="assets_unit">个</span>
          </span>
        </div>
        <span class="assets_item_key">鹿豆</span>
      </div>
      <div class="assets_item">
        <div class="assets_item_val">
          <span class="assets_val">0
            <span class="assets_unit">元</span>
          </span>
        </div>
        <span class="assets_item_key">红包</span>
      </div>
      <div class="assets_item assetes_all">
        <div class="assets_item_val my_asset"></div>
        <span class="assets_item_key">我的资产</span>
      </div>
    </div>
    <div class="xlist_group my_cell rel_container top_line_box">
      <div class="assets_item">
        <div class="assets_item_val take_place ">
          <div class="store_val">
            <span class="store_val_text">5</span>
          </div>
        </div>
        <span class="assets_item_key take_place">商品收藏</span>
      </div>
       <div class="assets_item">
        <div class="assets_item_val take_place ">
          <div class="store_val">
            <span class="store_val_text">5</span>
          </div>
        </div>
        <span class="assets_item_key take_place">店铺收藏</span>
      </div> <div class="assets_item">
        <div class="assets_item_val take_place ">
          <div class="store_val">
            <span class="store_val_text">1</span>
          </div>
        </div>
        <span class="assets_item_key take_place">我的足迹</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .xlist_group{
    background-color: #fff;
    &.my_cell{
      line-height: 44px;
      margin: 15px 0;
    }
    .rel_container{
      height: 72px;
      .top_line_box{
        display: flex;
        position: relative;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-flow: row nowrap;
        .my_order_entrance{
          position: relative;
          -webkit-box-flex: 1;
          flex: 1;
          text-align: center;
          &.type_unpay{
            background:url(https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14911/113/1615678148/168/7734f24f/5a53578eN0e2811b6.png) 50%/auto 20px no-repeat;
          }
           &.type_unrecieve{
            background:url(https://img11.360buyimg.com/jdphoto/s40x40_jfs/t14608/2/1636876268/266/b4ebb3f2/5a535791N627c296c.png) 50%/auto 20px no-repeat;
          }
           &.type_consult{
            background:url(https://img11.360buyimg.com/jdphoto/s40x40_jfs/t15049/345/1573771240/492/7ef15694/5a5357eaNab882dcb.png) 50%/auto 20px no-repeat;
          }
           &.type_orders{
            background:url(https://img30.360buyimg.com/jdphoto/jfs/t14953/346/2113764063/185/1a1dcd24/5a6d7b8bN8431ea1a.png) 50%/auto 20px no-repeat;
            &::before{
              position: absolute;
      z-index: 1;
      top: 0;
      left: -5px;
      width: 10px;
      height: 72px;
      background: url(https://img11.360buyimg.com/jdphoto/s20x144_jfs/t14743/330/1610539369/321/10d659d3/5a53580eNa26a8177.png);
      background-size: 10px;
      content: "";
              }
            }
            .entrance_text{
              color: #666;
              font-size: 12px;
              line-height: 42px;
              position: relative;
              top: 30px;
            }
          }
        }
      }
  }
  .top_line_box{
    display: flex;
    position: relative;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row nowrap;
    .assets_item{
      position: relative;
      flex: 1;
      padding: 17px 0 10px;
      text-align: center;
      .assets_item_val{
        font-size: 10px;
        line-height: 18px;
        height: 18px;
        color: #e93b3d;
        white-space: nowrap;
        &.take_place{
          height: 16px;
           .store_val{
              font-size: 16px;
              font-weight: 700;
              color: #333;
            }
        }
        .assets_val{
          display: inline;
          font-size: 16px;
          .assets_unit{
            display: inline;
            font-size: 10px;
          }
        }
        &.my_asset{
          background: url(https://img11.360buyimg.com/jdphoto/s40x40_jfs/t20329/11/1228908740/243/73a7934c/5b235f37Ne85fdb85.png)no-repeat 50% scroll;
          background-size: auto 100%;
        }
      }
      .assets_item_key{
        display: block;
        font-size: 12px;
        color: #666;
        line-height: 34px;
      }
    }
  }
</style>