<template>
  <div id="phone">
    <phone-search>
      <div slot="center" class="login-bar">手机登录</div>
    </phone-search>
    <div>
      <p class="input-container">
        <input type="text" placeholder="请输入手机号" class="acc-input username" v-model="inputValue" />
        <span class="tip" ref="usertip"></span>
        <i class="icon icon-clear" :style="{display:userDisplay}" @click="clearText"></i>
      </p>
      <p class="input-container">
        <input placeholder="请输入验证码" class="acc-input password" v-model="pwdValue" />
        <i class="icon icon-clear pwd-clear" :style="{display:pwdDisplay}" @click="clearpwd"></i>
        <span class="missing-pwd get-phone-code" @click="getPhoneCode">获取验证码</span>
      </p>
    </div>
    <div class="notice"></div>
    <button class="btn login-btn" @click="loginClick">登&nbsp;录</button>
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

import { reqPhoneCode } from "../../network/user";
export default {
  components: {
    phoneSearch
  },
  mixins: [loginMixin],
  data() {
    return {};
  },
  methods: {
    async getPhoneCode() {
      if (!this.inputValue) {
        this.$refs.usertip.innerHTML = "请输入手机号";
        return;
      }
      const response = await reqPhoneCode(this.inputValue)
      const result = response.data
      console.log(result)
    },
    loginClick() {},
    userLogin() {
      this.$router.replace("/login");
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/login";
</style>