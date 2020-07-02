<template>
  <div class="alert_block" v-if="isVisible">
    <div :class="[
            'alert',
            isRadious? 'isRadious':''
          ]">
      <i :class="[
          'iconfont',
          `icon-${type}`
        ]" v-if="iconVisible"></i>
      <p class="message">{{mes}}</p>
    </div>
  </div>
</template>

<script>
const typeMap = {
  success: "chenggong",
  warning: "jinggao",
  error: "tishishibai"
};

export default {
  data() {
    return {
      mes: "",
      isVisible: false,
      type: "success",
      isRadious: false,
      duration: 2000,
      iconVisible: true,
      timer: null
    };
  },
  methods: {
    message(options) {
      if (this.isVisible) {
        return;
      }
      let _type = options.type || this.type;
      let _message = options.message || this.mes;
      let _duration =
        options.duration && options.duration > 0
          ? options.duration
          : this.duration;
      let _isRadious = options.isRadious || this.isRadious;
      let _onClose = options.onClose || null;
      let _iconVisible = options.iconVisible || this.iconVisible;

      if (this.isValidType(_type)) {
        this.iconVisible = _iconVisible;
        this.isRadious = _isRadious;
        this.type = typeMap[_type];
        this.mes = _message.substr(0, 10);
        this.isVisible = true;
        this.timer = setTimeout(() => {
          this.clear();
          if (_onClose) {
            _onClose();
          }
        }, _duration);
      }
    },
    isValidType(type) {
      return typeMap.hasOwnProperty(type);
    },
    clear() {
      this.isVisible = false;
      this.mes = "";
      this.isRadious = false;
      this.iconVisible = true;
    }
  }
};
</script>

<style lang="less" scoped>
@import url("https://at.alicdn.com/t/font_1607668_7mnpkfc3j78.css");
.alert_block {
  text-align: center;
  .alert {
    box-sizing: border-box;
    padding: 20px 15px 15px;
    text-align: center;
    color: #333;
    overflow: hidden;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.3);
    z-index: 899;
    position: fixed;
    left: 50%;
    top: 50%;
    margin: auto;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: auto;
    min-width: 128px;
    max-width: 270px;
    background-color: rgba(0, 0, 0, 0.7);
    padding-top: 15px;
    &.isRadious {
      border-radius: 16px;
    }
    .iconfont {
      display: inline-block;
      color: #fff;
      font-size: 2.5rem;
      margin-bottom: 0.3rem;
    }
    .message {
      max-height: 200px;
      overflow: auto;
      font-size: 14px;
      color: #fff;
    }
    // .btns {
    //   display: flex;
    //   position: relative;
    //   margin: 20px 0 0;
    //   .btn {
    //     position: relative;
    //     width: 100px;
    //     height: 30px;
    //     line-height: 30px;
    //     background: #fff;
    //     color: #333;
    //     font-size: 14px;
    //     border: 1px solid #ccc;
    //     box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);
    //     border-radius: 20px;
    //     flex: 1;
    //     text-align: center;
    //   }
    //   .btn1 {
    //     color: #fff;
    //     border: none;
    //     background: #f2270c;
    //     margin-left: 15px;
    //   }
    // }
  }
}
</style>