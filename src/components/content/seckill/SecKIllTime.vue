<template>
  <div id="seckill-time">
    <div class="seckill hours">{{hours>=10?hours:"0"+hours}}</div>
    <span class="seckill-time-separator">:</span>
    <div class="seckill minutes">{{minutes>=10?minutes:"0"+minutes}}</div>
    <span class="seckill-time-separator">:</span>
    <div class="seckill seconds">{{seconds>=10?seconds:"0"+seconds}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hours: 1,
      minutes: 0,
      seconds: 0,
      timer: null
    };
  },
  methods: {
    changTime() {
      const m = 59 - new Date().getMinutes();
      const s = 60 - new Date().getSeconds();
      this.minutes = m;
      this.seconds = s;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.timer = setInterval(this.changTime, 1000);
    });
  }
};
</script>

<style lang="less" scoped>
#seckill-time {
  display: inline-block;
  vertical-align: middle;
  .seckill {
    float: left;
    display: inline-block;
    width: 18px;
    line-height: 17px;
    color: #232326;
    font-size: 12px;
    position: relative;
    text-align: center;
    &::after {
      border-radius: 2px;
      height: 200%;
      content: "";
      width: 200%;
      border: 1px solid #dfdfdf;
      position: absolute;
      top: -1px;
      left: -1px;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: left top;
      transform-origin: left top;
      z-index: 10;
    }
  }
  .seckill-time-separator {
    width: 6px;
    float: left;
    display: inline-block;
    line-height: 16px;
    height: 16px;
    font-size: 12px;
    text-align: center;
    color: #232326;
  }
}
</style>