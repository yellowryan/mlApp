<template>
    <div id="login">
        <login-search>
          <span slot="left" class="back" @click="back"></span>
          <div slot="center" class="login-bar">麋鹿注册</div>
        </login-search>
        <div>
          <p class="input-container">
            <input type="text" placeholder="请输入账号" class="acc-input username" v-model="inputValue" @blur="verify">
            <span class="tip" ref="usertip"></span>
            <i class="icon icon-clear" :style="{display:userDisplay}" @click="clearText"></i>
          </p>
          <p class="input-container" >
            <input type='password' placeholder="请输入密码" class="acc-input password" v-model="pwdValue" >
          </p>
           <p class="input-container" >
            <input type='password' placeholder="再次确认密码" class="acc-input password2" v-model="pwdValueCheck" >
            <span class="tip" ref="pwdtip"></span>
          </p>
        </div>

        <div class="notice"></div>
        <button class="btn login-btn" @click="registerClick" :class="{'btn-active':inputValue&&pwdValue&&pwdValueCheck}">注&nbsp;册</button>
        <button class="btn one-step" @click="hasCount">已有账号</button>
        <p class="quick-btn">
          <span style="float:right">手机快速注册</span>
        </p>

    </div>

</template>


<script>
import LoginSearch from '../../components/commom/search/Search'
import {reqRegister} from '../../network/user'
export default {
    name:"Register",
    data(){
      return {
        userDisplay:'none',
        inputValue:'',
        pwdValue:'',
        pwdValueCheck:'',
        isShow:false,
        isActive:false,
        result:false
      }
    },
    components:{
      LoginSearch
    },
    methods:{
      clearText(){
       this.inputValue='',
       this.$refs.usertip.innerText =''
      },
      back(){
        this.$router.back()
      },
      verify(){
        const Reg = /^[_a-zA-Z]\w{5,17}$/
         this.result = Reg.test(this.inputValue)
       if(this.inputValue){
          if(!this.result){
          this.$refs.usertip.innerText ='用户名格式有误'
        }else{
           this.$refs.usertip.innerText =''
        }
       }
      },
      async registerClick(){
        if(!this.inputValue){
          this.$refs.usertip.innerText='账号不能为空'
          return 
        }else if(!this.result){
           this.$refs.usertip.innerText='用户名格式有误'
          return 
        }else if(this.pwdValue!=this.pwdValueCheck){
          this.$refs.pwdtip.innerText='两次输入密码不一致'
          return 
        }
        const user = {
          username:this.inputValue,
          password:this.pwdValue
        }
        const response = await reqRegister(user)
        const result = response.data
        if(result.status===0){
          this.$refs.usertip.innerText= result.msg
        }else{
          this.$store.dispatch('userRegister',result.data)
          this.$toast.addCart("注册成功",1000,()=>{
            this.$router.replace('/login')
          })
        }

      },
      hasCount(){
        this.$router.replace('/login')
      }
    },
    watch:{
      inputValue(){
        if(this.inputValue==""){
          this.userDisplay='none',
          this.$refs.usertip.innerText =''
        }else{
          this.userDisplay='block'
        }
      }
    }
}
</script>

<style lang="less" scoped>
#login{
  text-align: left;
  background: #fff;
  padding: 2.3rem 1.25rem 1.25rem;
   .back{
    top: 10px;
    left:10px;
    width: 24px;
    height: 24px;
    overflow: hidden;
    display: block;
    position: absolute;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAYpJREFUaAXtmLFOwzAQhhvKE2Rnygu1EhIDezeeho2doRIDG++BhARDNvY8QZX+f6ilArbjs1t0FmcpcWPfnf/v6sinLBbWLAOWAcuAZeA/Z6A5FXzXdSvEuj/E2/R9/3Kq2LE4l7HJ1DmIvxnH8RH2S/o0TfOA7oq/z90uShf4Kb40ntS/CCAgfgcRd1IhufbZACHx2D632P/PuYKkflkv8Yz4rVREib0YQJN4gosAtIkXAWgUnwygVXwSgGbxswDaxUcBahAfBKhFvBcA4lcozJ4wORVmNELbHU7YPz2kvpaO332lBEviKsQTzQcQR1Y26wNgJcmK0rUla32+F25AU3+8VSZdwzC8t237gYc1LgfIfs1xzL9NhkpuvwCoiyJrgfAC1AQRBKgFIgpQA8QsgHaIJADNEMkAWiFEABohxADaILIAEiBeeaLT7tzNlQpZ6+AD1pZlNpy/1U54dh95s+JKnIoAuFAAQqKhyLYY4AjiGv/GJy+MbYpUmbNlwDJgGbAMWAYSM7AH/J4Amlfxzk4AAAAASUVORK5CYII=);
  }
  .login-bar{
    text-align: center;
    color:#000;
    font-size: 18px;
  }
  .icon{
    position: absolute;
    width: 1.2rem;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: 0;
  }
  input::-webkit-input-placeholder{
    color:#999;
    font-weight:500;
    font-size:16px;
  }
  .input-container{
    position: relative;
    box-sizing: border-box;
    height: 2.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    overflow: hidden;
    margin-top: 1rem;
    background: #fff;
    border-bottom: .05rem solid #efefef;
    .acc-input{
    height: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    line-height: normal;
    border-radius: 0;
    border: 0;
    font-size: 0.8rem;
    outline: none;
    }
    .tip{
      font-size: 14px;
      color: #ec8585;
    }
    .icon-clear{
      right: 0.25rem;
      top:0;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAHlBMVEUAAADMzMzNzc3Nzc3Nzc3MzMzMzMzPz8/Ozs7Nzc2Z5bCdAAAACnRSTlMA/lXB0M9LSiopP4KJtgAAAH5JREFUOMtjGAWkgslhMFapBYqEoaAChMEkKIwiESgoBGEoCoqgSBQKCipANAiKwQWhAkJgDSAFcAATgcljaIFJY2qByGLRAtWAqQWqAVMLVAOmFoQGwhIIowhZTti5CA8SDBLMQCQu2BNxRZQjWtQSTgyTw2GsEguGUUAiAAAoUA/JvBWTsAAAAABJRU5ErkJggg==);
      &.pwd-clear{
        // right:8rem;
      }
    }
    .missing-pwd{
    position: absolute;
    right: 0;
    top: .625rem;
    height: 1.15rem;
    line-height: 1.15rem;
    text-align: center;
    border-left: 1px solid #ccc;
    font-size: .7rem;
    min-width: 5rem;
    }
    .checkbtn{
    position: absolute;
    right: 1.5rem;
    top: .65rem;
    width: 1.2rem;
    height: 1.2rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAUVBMVEUAAADNzc3Ozs7W1tbNzc3Pz8/Nzc3MzMzNzc3MzMzNzc3Nzc3Nzc3Nzc3Nzc3MzMzNzc3Nzc3MzMzNzc3Ozs7Nzc3Ozs7R0dHX19f////MzMxg+QCeAAAAGnRSTlMA+zoKaiT28One25uCfXPIt6eRTD4zKiETA+EbngEAAACZSURBVEjH7czHDsMgEEXRoYMxuLf5/w8NJIvIlEjJLhJned9ooGma5je0p1+NG0GyQMUSxi1pHhGVgCKhwuiTuJMQjSjemzCRPc0cA00hQzUGPB9s7GRm98pmEruF3GUx0u58t9NpjOwFJQ6f5OjpwdhB/ShfxUHF2mFBt0IV6xUmVM/gE8a723eenecEnwYjpRkmLqBp/tgDwI4Nr7IO2JwAAAAASUVORK5CYII=);
    background-repeat: no-repeat;
    background-size: 100% auto;
    z-index: 99;
    &.off-pwd{
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAV1BMVEUAAADNzc3Q0NDNzc3Nzc3Nzc3Ozs7X19fNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Ozs7Pz8/Pz8/Nzc3MzMzNzc3MzMzMzMzNzc3Ozs7Ozs7Ozs7V1dXNzc3MzMxIIVLAAAAAHHRSTlMA9RjJwmlkCO7oz72kfFQ1Iory2qt5bVg+KRKJvRKyKgAAAOlJREFUSMftVNcShCAMvAh2VLC3///OgwNGsN3kWffJJLtOGvm8eC6CiNEGoKEsCv6z4zBbHWRhfE/v03WHtL+RTNl6gmy64oegGbQbeRzzsaPahvCcX+ioCJz6hf5Hcc1ns++d2ZWiVP56OAaGWkXKQ/MT6U0qY0UEgETGqH6h/UhalX5lxLkuNg+MQhXS+nyuCLYZkm8Utn3K4J5ASA+x+WwjsFkR+S08AXXqIpuAOB2hnkBthC0LNgHYlqgdQQvQKaGLxrcVPzj8auCXD7/eR0W9uA9oAc3HPlHsEcCeGeQhQ57KF4/FFwhjLcIUtz4iAAAAAElFTkSuQmCC);
    }
    }
  }
  .notice{
    font-size: .7rem;
    line-height: 1.5rem;
    color: #f23030;
    min-height: .75rem;
    text-align: left;
  }
  .btn{
    box-shadow: none;
    margin-top: 0;
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    display: block;
    background-color: #efefef;
    border-radius: 1.25rem;
    font-size: .8rem;
    color: #fff;
    background-image: linear-gradient(90deg,#fab3b3,#ffbcb3 73%,#ffcaba);
    text-align: center;
    &.btn-active{
      background-image: linear-gradient(90deg,#f10000,#ff2000 73%,#ff4f18);
    }
  }
  .one-step{
    box-sizing: border-box;
    border: 1px solid #ff2000;
    color: #f10000;
    background: #fff;
    margin-top: .5rem;
  }
  .quick-btn{
    color: rgba(0,0,0,.4);
    font-size: .7rem;
    margin-top: 1rem;
    overflow: hidden;
  }
}
 
</style>