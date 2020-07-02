<template>
  <div id="phone">
    <phone-search>
      <div slot="center" class="login-bar">手机登录</div>
    </phone-search>
    <div>
      <p class="input-container">
        <input
          type="text"
          placeholder="请输入手机号"
          class="acc-input username"
          v-model.number="inputValue"
        />
        <i class="icon icon-clear" :style="{display:userDisplay}" @click="clearText"></i>
      </p>
      <p class="input-container">
        <input
          placeholder="请输入验证码"
          class="acc-input password"
          v-model.number="pwdValue"
          maxlength="6"
        />
        <i class="icon icon-clear pwd-clear" :style="{display:pwdDisplay}" @click="clearpwd"></i>
        <span class="missing-pwd get-phone-code" @click="getPhoneCode" v-show="getting">获取验证码</span>
        <span class="missing-pwd" v-show="!getting">再次获取({{second}}s)</span>
      </p>
    </div>
    <span class="tip" ref="usertip"></span>
    <div class="notice"></div>
    <button
      class="btn login-btn"
      @click.stop="loginClick"
      :class="{'btn-active':inputValue&&pwdValue}"
    >登&nbsp;录</button>
    <p class="quick-btn">
      <span @click="userLogin">账号密码登录</span>
    </p>
    <div class="quick-login">
      <h4 class="other-login">其他登录方法</h4>
      <p class="quick-type">
        <a href="javasript:void(0)" class="icon-qq">QQ</a>
        <a href="javasript:void(0)" class="icon-wx">微信</a>
        <a href="javasript:void(0)" class="icon-apple">苹果</a>
      </p>
    </div>
  </div>
</template>

<script>
import phoneSearch from "../../components/commom/search/Search";

import { loginMixin } from "../../mixins/login";

import { reqPhoneLogin } from "../../network/user";

import { reqPhoneCode } from "../../network/user";
import { mapActions } from "vuex";
export default {
  components: {
    phoneSearch
  },
  mixins: [loginMixin],
  data() {
    return {
      second: 30,
      getting: true,
      timer: null
    };
  },
  methods: {
    ...mapActions(["userPhoneLogin"]),
    async getPhoneCode() {
      var phoneReg = /^1[34568]\d{9}$/;
      if (!this.inputValue) {
        this.$refs.usertip.innerHTML = "请输入手机号";
        return;
      } else if (!phoneReg.test(this.inputValue)) {
        this.$refs.usertip.innerHTML = "手机格式错误";
        return;
      }
      const response = await reqPhoneCode(this.inputValue);
      const result = response.data;
      this.getting = false;
      window.sessionStorage.setItem("Countdown", this.second);
      if (this.timer) clearInterval(this.timer);
      this.countdown();
      this.$toast.message("短信发送成功", 1000);
    },
    countdown() {
      this.timer = setInterval(() => {
        this.second--;
        var Cd = window.sessionStorage.getItem("Countdown");
        Cd--;
        window.sessionStorage.setItem("Countdown", Cd);
        if (this.second === 0) {
          clearInterval(this.timer);
          this.timer = null;
          window.sessionStorage.removeItem("Countdown");
          this.getting = true;
          this.second = 30;
        }
      }, 1000);
    },
    async loginClick() {
      const phone = this.inputValue;
      const code = this.pwdValue;
      if (!phone) {
        this.$refs.usertip.innerHTML = "请输入手机号";
        return;
      }
      if (!code) {
        this.$refs.usertip.innerHTML = "请输入验证码";
        return;
      }
      const response = await reqPhoneLogin({ phone, code });
      const result = response.data;
      if (result.status === 0) {
        this.$refs.usertip.innerHTML = result.msg;
      } else {
        this.$store.dispatch("userPhoneLogin", result.data);
        let self = this;
        this.$toast.message({
          type: "success",
          message: "登录成功",
          onClose() {
            self.$router.replace("/home");
          }
        });
      }
    },
    userLogin() {
      this.$router.replace("/login");
    }
  },
  mounted() {
    this.second = +window.sessionStorage.getItem("Countdown") || 30;
    if (window.sessionStorage.getItem("Countdown")) {
      this.getting = false;
      this.countdown();
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/login";
</style>