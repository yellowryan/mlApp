<template>
  <div class="detailBar">
    <div class="icon_btn">
      <i class="icon service"></i>
      <span class="txt">联系客服</span>
    </div>
    <div class="icon_btn">
      <i class="icon shop"></i>
      <span class="txt">进店</span>
    </div>
    <div class="icon_btn" @click="goToCart">
      <transition
       @before-enter="beforeEnter"
       @enter= "enter"
       @after-enter = "afterEnter">
        <span class="add_number" v-if="isShow">+1</span>
      </transition>

      <i class="icon cart">
        <span class="num">{{cartLength}}</span>
      </i>
      <span class="txt">购物车</span>
    </div>

    <div class="btn_group">
      <div class="row">
        <div class="btn add_cart" @click="addToCart">
          <span class="txt">加入购物车</span>
        </div>
        <div class="btn buy_now">
          <span class="txt">立即购买</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    addToCart() {
      this.$emit("addToCart");
      this.isShow = !this.isShow;
    },
    goToCart() {
      this.$router.push("/cart");
    },
    beforeEnter(el) {
      el.style.top = "-10px";
      el.style.opacity = "1"
    },
    enter(el, done) {
      el.offsetWidth;
      el.style.top = "-20px";
      el.style.opacity = "0";
      el.style.transition = "all 1s linear";
      done();
    },
    afterEnter(el) {
      this.isShow = !this.isShow;
    }
  },
  computed: {
    ...mapGetters(["cartLength",'cartList'])
  }
};
</script>

<style lang="less" scoped>
.detailBar {
  height: 2.5rem;
  display: -webkit-flex;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 108;
  .icon_btn {
    width: 14%;
    position: relative;
    text-align: center;
    display: block;
    .add_number {
      display: block;
      position: absolute;
      padding: 2px 3px;
      color: #e4393c;
      font-weight: 700;
      left: 15px;
      font-size: 18px;
      pointer-events: none;
      z-index: 330;
    }
    .icon {
      display: block;
      width: 20px;
      height: 25px;
      margin: 5px auto 0;
      position: relative;
      &.service {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTGZmZmZmZmZmZmZmZmdnZ2ZmZmhoaGZmZmxsbGZmZmlpaWdnZ2ZmZmZmZmZmZk19Qx8AAAAPdFJOUwD05pRtRbwrqwzXG1eDylNiP4YAAAGTSURBVCjPrVNNSwJRFL3mx6ijIWoJQYwuXLgaF64iMle2NFqHtYuCDInW1cLtmAqt+wX6EwxatMuKVi0ShLbiCINIeXpvPnTMrW915/DOfeece4doGcd3eJ4If39U7Zi7BP2sF2aYqwlsnFQegPGuhQl9jPK8uFQwuTDBHDZbRiW+ImqSMWpZJFGB0eAL7Vn7AH71l7FmF7IPrqCGQi5tQc6oGynOHgYQskAH2lnOl1N+dC2QlTWVd+44Zi8xUpB9edFyMm3ClqT2mPBcWsQ1raomj524XspdWtEMqztSuGdYLMXJMaKMXWeFlBD5NWraA5uQEiePSkWbpZcYNbvkRMs1mKZYHxREpElAhx4nptCGnKQgN99PkVBSt1l693vSsEp3Y95lyJJS2DwSQISJyv4w0Muv+w5OZTZNPfIjHrY8l2dxrM+5bE/eJcUMh7JtRiXVdHKFiIWWcUbTGWt546IUnTYS3/iGZKoUtLf3PcssziR5tLm1E57eb/DpH/5fR6GJ4wWQ6hJGi6vbuI0s4w/4A2i0n3aDtHpAAAAAAElFTkSuQmCC)
          50% no-repeat;
        background-size: auto 20px;
      }
      &.shop {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmBAMAAABE2sQuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUdwTGZmZmlpaWZmZmdnZ2ZmZmdnZ2pqamZmZmZmZmZmZmdnZ2ZmZsMDXTsAAAAMdFJOUwDiIfJNxIoRtGqfP2fZSMkAAAEbSURBVCjPzZKhT8NAFMY/yhhsQZAMDDlBArgJIAFMBUNPALqiAVuxBEWYQCArcJgK8GhAIOhKWbu8P4p7dwl7rw7HJ971frl7X/O+A9AxJJSfgNUnpYmDiYbfDoazEX4VmIKXFh1DaEjcdImeJFygO+ezJWHHOSWVZFgO2cl8KYgkZ581Da+t0wo9aNi1TuNipGFAU2QzNJTWiCZN+FEinDbhuEDo/miwPq/DAlHJHyafV0syioE2yVrbeZSntxFR+ebrTkRndoA82TrlWmUuEDugXRdMl7dxi09ccOP33sYj8No7vARuzvfv8TddxXLXPvJp7km46NIEfUq4Sv8BqpT6HppKPKYgddPHi360PvJtDQ/8jWfJNm2vHx2SsNH4ChcMAAAAAElFTkSuQmCC)
          50% no-repeat;
        background-size: auto 20px;
      }
      &.cart {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTGZmZmpqamZmZmdnZ2ZmZmZmZmZmZmZmZmZmZmZmZkpWnhIAAAAKdFJOUwDpHqZGaoS60pfVa5fYAAAA+UlEQVQoz5WSKRPCMBSEQ2i5FIeLgsGhAIlCoKrAMVXVVWgUAw6FRlHoAfsraZMUkjTDDE807TdNdt++kBDZkJjFgEsFhkC3AomDexUSllhg+LDASWSBLRh1zKFrwlcOqQm5BtONhmnx3OtGPW7xGmvQ559+qsEF3+hlGjzfLO5FQB2oiVLsREtLBbqYFksTawW2ERRLQ8te/uLioMCaOMzBTU1SyFJtIB6kM3Ug/lP2oPa5l/0tMnW4STn7j1G6KQUmWvBB2YQxIV7bLzstyd817s2l+GxQZksZIvE+AvoS1nOBqWhDXgWe1kreXBZ70S9o3W4VMi29AabPf4enbQFkAAAAAElFTkSuQmCC)
          50% no-repeat;
        background-size: auto 20px;
        .num {
          position: absolute;
          top: 0;
          left: 100%;
          display: inline-block;
          background: #e4393c;
          color: #fff;
          font-size: 7px;
          margin-left: -10px;
          line-height: 9px;
          border: 1px solid #fff;
          border-radius: 10px;
          padding: 1px 3px;
          font-weight: 700;
        }
      }
    }
    .txt {
      font-size: 10px;
      color: #999;
      display: block;
      line-height: 20px;
    }
  }
  .btn_group {
    position: relative;
    height: 50px;
    display: block;
    width: 100%;
    -webkit-flex: 1;
    flex: 1;
    .row {
      display: -webkit-flex;
      display: flex;
      .btn {
        display: block;
        width: 100%;
        -webkit-flex: 1;
        flex: 1;
        position: relative;
        z-index: 10;
        line-height: 50px;
        text-align: center;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        &.add_cart {
          background: linear-gradient(138deg, #ffa600, #ffb000 77%, #ffbc00);
        }
        &.buy_now {
          background: linear-gradient(-41deg, #ff4f18, #ff2000 24%, #f10000);
        }
        span.txt {
          font-size: 16px;
        }
      }
    }
  }
}
</style>