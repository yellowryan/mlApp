<template>
  <div id="login">
    <login-search>
      <span slot="left" class="back" @click="back"></span>
      <div slot="center" class="login-bar">麋鹿登录</div>
    </login-search>
    <div>
      <p class="input-container">
        <input
          type="text"
          placeholder="请输入账号"
          class="acc-input username"
          v-model="inputValue"
          @blur="verify"
        />
        <span class="tip" ref="usertip"></span>
        <i class="icon icon-clear" :style="{display:userDisplay}" @click="clearText"></i>
      </p>
      <p class="input-container">
        <input :type="typeChange" placeholder="请输入密码" class="acc-input password" v-model="pwdValue" />
        <i class="icon icon-clear pwd-clear" :style="{display:pwdDisplay}" @click="clearpwd"></i>
        <span class="checkbtn" :class="{'off-pwd':isShow}" @click="pwdSwitch"></span>
        <span class="missing-pwd">忘记密码</span>
      </p>
      <p class="input-container">
        <input type="text" placeholder="请输入验证码" class="acc-input code" v-model="codeValue" />
        <img :src="codeSrc" alt class="code" @click="changeCode" />
      </p>
    </div>

    <div class="notice"></div>
    <button
      class="btn login-btn"
      @click="loginClick"
      :class="{'btn-active':inputValue&&pwdValue}"
    >登&nbsp;录</button>
    <button class="btn one-step" @click="toRegister">一键注册</button>
    <p class="quick-btn">
      <span @click="phoneLogin">短信验证码登录</span>
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
import LoginSearch from "../../components/commom/search/Search";
import { reqLogin } from "../../network/user";
import { loginMixin } from "../../mixins/login";

export default {
  name: "Login",
  mixins: [loginMixin],
  data() {
    return {
      num: 0,
      typeChange: "password",
      codeValue: "",
      isShow: false,
      isActive: false,
      codeSrc: "http://localhost:5000/getCode?time" + new Date().getTime()
    };
  },
  components: {
    LoginSearch
  },
  methods: {
    pwdSwitch() {
      this.isShow = !this.isShow;
      this.num++;
      const newNum = this.num % 2;
      switch (newNum) {
        case 1:
          return (this.typeChange = "text");
        case 0:
          return (this.typeChange = "password");
        default:
          return this.typeChange;
      }
    },
    back() {
      this.$router.back();
    },
    verify() {
      if (!this.inputValue) {
        this.$refs.usertip.innerText = "";
      }
    },
    async loginClick() {
      if (!this.inputValue) {
        this.$refs.usertip.innerText = "账号不能为空";
        return;
      } else if (!this.pwdValue) {
        this.$refs.usertip.innerText = "密码不能为空";
        return;
      } else if (!this.codeValue) {
        this.$refs.usertip.innerText = "验证码不能为空";
        return;
      }
      this.$refs.usertip.innerText = "";
      const user = {
        username: this.inputValue,
        password: this.pwdValue,
        code: this.codeValue.toLowerCase()
      };
      const response = await reqLogin(user);
      const result = response.data;
      if (result.status === 0) {
        this.$refs.usertip.innerText = result.msg;
        this.codeValue = "";
        this.changeCode();
      } else if (result.status === 1) {
        this.$store.dispatch("userLogin", result.data);
        let self = this;
        this.$toast.message({
          type: "success",
          message: "登录成功",
          onClose() {
            self.$bus.$emit("goTop");
            self.$router.replace("/home");
          }
        });
      } else {
        this.$refs.usertip.innerText = result.msg;
        this.codeValue = "";
        this.changeCode();
      }
    },
    toRegister() {
      this.$router.replace("/register");
    },
    phoneLogin() {
      this.$router.replace("/phone");
    },
    changeCode() {
      this.codeSrc =
        "http://localhost:5000/getCode?time" + new Date().getTime();
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/login";
</style>