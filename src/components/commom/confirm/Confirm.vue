<template>
    <div id="confirm-box">
      <div class="mod_alert_mask" :class="{show:isShow}"></div>
      <div class="mod_alert fixed" :class="{show:isShow}">
        <i class="icon"></i>
        <p class="regular">{{regular}}</p>

        <div class="btns">
          <span class="btn btn_2" @click.stop="doNothing">返回</span>
          <span class="btn btn_1" @click.stop="confirmed">确定</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    regular:{
      type:String,
      default:''
    }
  },
  data(){
    return {
      isShow:false,
    }
  },
  methods:{
    showConfirm(){
      this.isShow = true
    },
    doNothing(){
      this.isShow = false
    },
    confirmed(){
      this.isShow = false
      this.$emit('confirmed')
    },
  
   
  }
}
</script>

<style lang="less" scoped>
  .mod_alert_mask{
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
    z-index: 1099;
    &.show{
      display: block!important;
    }
  }
  .mod_alert{
    position: relative;
    box-sizing: border-box;
    width: 270px;
    margin: 20px auto 0;
    padding: 20px 15px 15px;
    text-align: center;
    border-radius: 10px;
    color: #333;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 1px 10px 0 rgba(0,0,0,.3);
    &.fixed{
      display: none;
      z-index: 1100;
      position: fixed;
      left: 50%;
      top: 50%;
      margin: auto;
      transform: translate(-50%,-50%);
      -webkit-transform: translate(-50%,-50%);
    }
    &.show{
      display: block!important;
    }
    .icon{
      display: block;
      width: 50px;
      height: 50px;
      margin: 5px auto 10px;
      background-image: url(https://wq.360buyimg.com/fd/h5/wxsq_dev/order/images/sprite_dialog_img@2x_334edd73.png);
      background-size: 154px 102px;
      background-repeat: no-repeat;
      background-position: 0 0;
    }
    .regular{
      font-size: 16px;
    }
    .btns{
      position: relative;
      display: flex;
      &:last-child{
        margin: 20px 0 0;
      }
      .btn{
        -webkit-box-flex: 1;
        flex: 1;
        text-align: center;
      }
    }
    .btn{
      position: relative;
      width: 100px;
      height: 30px;
      line-height: 30px;
      background: #fff;
      color: #333;
      font-size: 14px;
      border: 1px solid #ccc;
      box-shadow: 0 3px 6px 0 rgba(0,0,0,.05);
      border-radius: 20px;
      &+.btn{
        margin-left: 10px;
      }
    }
    .btn_1{
      color: #fff;
      border: none;
      background: #f2270c;
    }
  }
</style>