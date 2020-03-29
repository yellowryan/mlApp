<template>
    <div id="login">
        <login-search>
          <span slot="left" class="back" @click="back"></span>
          <div slot="center" class="login-bar">麋鹿登录</div>
        </login-search>
        <div>
          <p class="input-container">
            <input type="text" placeholder="请输入账号" class="acc-input username" v-model="inputValue" @blur="verify" >
            <span class="tip" ref="usertip"></span>
            <i class="icon icon-clear" :style="{display:userDisplay}" @click="clearText"></i>
          </p>
          <p class="input-container" >
            <input :type='typeChange' placeholder="请输入密码" class="acc-input password" v-model="pwdValue" >
            <i class="icon icon-clear pwd-clear" :style={display:pwdDisplay} @click="clearpwd"></i>
            <span class="checkbtn" :class="{'off-pwd':isShow}" @click="pwdSwitch"></span>
            <span class='missing-pwd'>忘记密码</span>
          </p>
        </div>

        <div class="notice"></div>
        <button class="btn login-btn" @click="loginClick" :class="{'btn-active':inputValue&&pwdValue}">登&nbsp;录</button>
        <button class="btn one-step" @click="toRegister">一键注册</button>
        <p class="quick-btn">
          <span>短信验证码登录</span>
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
import LoginSearch from '../../components/commom/search/Search'
import {reqLogin} from '../../network/user'
export default {
    name:'Login',
    data(){
      return {
        num:0,
        typeChange:'password',
        userDisplay:'none',
        pwdDisplay:'none',
        inputValue:'',
        pwdValue:'',
        isShow:false,
        isActive:false
      }
    },
    components:{
      LoginSearch
    },
    methods:{
      clearText(){
       this.inputValue=''
      },
      clearpwd(){
        this.pwdValue=''
      },
      pwdSwitch(){
        this.isShow=!this.isShow
        this.num++
        const newNum = this.num % 2
        switch(newNum){
          case 1:
            return this.typeChange='text'
          case 0:
            return this.typeChange='password'
          default:
            return this.typeChange
        }
      },
      back(){
        this.$router.back()
      },
      verify(){
        if(!this.inputValue){
          this.$refs.usertip.innerText=''
        }
      },
      async loginClick(){
        if(!this.inputValue){
          this.$refs.usertip.innerText='账号不能为空'
          return 
        }else if(!this.pwdValue){
           this.$refs.usertip.innerText='密码不能为空'
          return 
        }
         this.$refs.usertip.innerText=''
        const user = {
          username:this.inputValue,
          password:this.pwdValue
        }
        const response = await reqLogin(user)
        const result = response.data
        if(result.status===0){
          this.$refs.usertip.innerText= result.msg
        }else{
          this.$store.dispatch('userLogin',result.data)
          this.$toast.addCart("登录成功",1000,()=>{
            this.$router.replace('/home')
          })
        }

      },
      toRegister(){
        this.$router.push('/register')
      }
    },
    watch:{
      inputValue(){
        if(this.inputValue==""){
          this.userDisplay='none'
        }else{
          this.userDisplay='block'
        }
      },
      pwdValue(){
        if(this.pwdValue==""){
          this.pwdDisplay='none'
        }else{
          this.pwdDisplay='block'
        }
      },
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
        right:8rem;
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
    right: 6.5rem;
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
  .quick-login{
    margin-top: 4.4rem;
    border-top: 1px solid rgba(0,0,0,.1);
    font-size: .6rem;
    .other-login{
    color: rgba(0,0,0,.2);
    width: 7rem;
    margin: -.55rem auto 0;
    background: #fff;
    text-align: center;
    }
    .quick-type{
    text-align: center;
    margin: 1.25rem 0 .6rem;
    a{
    display: inline-block;
    width: 2.4rem;
    color: rgba(0,0,0,.4);
    margin: 0 .75rem;
    background-size: 100% auto;
    padding-top: 2.65rem;
    background-repeat: no-repeat;
      }
      .icon-qq{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAADwJJREFUeAHtXW2MXUUZnplz7r27t9vtF3VLEQVaRKlABPxAQ+gqrR8pRASK/qAaP6JFfkFi/KFm4x/wIxqjSAImQgvRFA2kyA9LgZqYKH6CUqCEUgKFdkvpdrfbu3vvPWfG9zm7c++Zs3fv55m56+7eZHdmzsx533eed87MnHdm3sPZHP0NDSnx0IXMH+k94ue9nD857vsBE57yGVce5zLgglE8Ej9gSvhK8lApTnGfybCnLwgKYTFYMXFmcOPzLBga4nIuVnWqAnNAMgB+31UsK4KR3OlTmVzoCT9NsbxQBkuWlovSX1H80p9Yaa4opKsKGFJK3L1nuNcr5XtL0sumCXgjWlkRlsJsYWL75oGJIXqgGpW3le9cAYp6iXP3sVzw1lh+Muf32KpYK3R7isGkv7q/cGgjK3LOVSv3dlrWmQIA/Fl/ONIblpf2pd29dAqCvh/dlJc5Nf7GljMnXCnCugIA/Jqdw3m1rK9PMu7pys7lUDAV8tHx8aM3DxRsK8KqAjbsV9njB8aXz9UW36gR4Ik444K+k/s38FKjsu3mW1HAjbt2eU/nN/cXwkxvu4LNpfvyXnniw4U9Yw9t3RqmLVfqCnjnrtd7J72Vyytz9LQl7hY9er/oCU+cPLz17Ik0RUhNAejr1+0d6R8r5JakKeBco9WfL54+ePWKsbTGhlQUsPEp5b84Mb4iKIvMXAPMhjx+Rpbf29s3sm+Q3rs7/HWsgA27VPbYErZSBQXRoSz/V7dzPy/fcZqd2L+1swG6I9DO+fWhnuH+wqqFBj5aCuqMugODTlpO20/A2kffzJfksuWdMJ8v92bF6Mk3r1lbaKc+bSlgEfyZULerhJa7IDxyiy1/pgKASTvdUUtPAAZc9HusOG2HnynHwr6SY2pgLP92KwNz008AppqY7SyCX6eNUcMERsCqTikjqykF4CUL8/yFONsx0GoiAYwirAizJoqzphSwbi/rXygvWc2A1qgMsAJmjcohv6ECYNsZKxTmtXmhGaBaLQPMgF2j++oqAFbNyLDWiMpifk0EgB0wrJk5fbGuAmBSnndWzXpopJ1HuzYiDOvQnXWgwGLK8MuFM+rc6zQr7GGXegG7PPTYJbRqu5YxnqPJME38GBbzjzDF99Ny7v5Q8Gf8SfmyU+EaMBtYnz8+26JOTQVEy4gPj6/u9kpWKeflM0p9WXH1eabUuQ3qWcnmjP+LEveHjO/2S9LaalaFYYMIVtaOXtf3Vi0Tdk0FDOw4uiRctnRZA7pWs1XW+yxj8ruKqTXtMqLKvUwG49uYZP9sl0Za93mjp0aHt605naQ3YwxA68cCerKgq7RU3Atz4g7Fwrs6AR/y0v6S9dLnj8gMv82V/LPxAabANpk/440NW0ckW1Z35E4SSSsdCtoNl1H3cSUHkzSpW5mQnO0RSj7NVOYFJtW4ZKrI6ILgcj1tTrxQCvZBGh+uIuhjDYvinN0e9og+b1J+P0nXVRo7QoAt8TOspoYCpvv+PtYV+GlY9dWPqK83wKd+c1Ip9kteEvd4LDxFpagOUwtRkZjRMjk/RKA/jrTKsrMUE9+kHaTbiFalxXEpv05Pwrgoq5+4Aj3JB3uiCGNjz1FFQBQ+5ynVMz5WWJm80UVaZdTNivM7TV78VcUz27xi6aB5vXFKZflHqAu7h0quqpbmIefe9bwY/L16zW2srz9/4tVBPqm5xh5Vale0XVBnOA7XMi6+Y/Lkhxnv3dIO+KDDS+qvIhA3UAt7q0pXeTS2/LzseR2tYlXptR5LYlxRADbKdmuvpsywW6i1Vgd+zstKqO2iWBhpvYqxO6R8iVTxDfqrbr5V6mxfBDfESjmNAmNgrZlWItilrC+6DMsZr5csUtfHeQqp7vAmGebyHf/wJCjB7zUJia+aabepONYVBWCLuFsxprjRPpbraL4Ytxy+QTsz0Xen9wvEXTSLKmqCNNE+n/lio067DuNYRwrA4QjX+/N1pelYyzYdR8gVf5BLmvek+POC4G2aDz0SJymF+ko87TIOrIE5eEb/cDLFpQCaV5gV51H8Ip1mnAeh8n9TSacY4YH4VZwcDc5X4KUvfs1lXGM+pQU6FuSSueZFb0gX6zhCxeSf/aB8LH4trTgPw+fp+Tqs6dGg38t9cYFOuw5xFAs8IwXgTJZrAcCPugFDAZyJZ2zKQW/JBn065neJTX71aGvMBfqiblk9qa83FEAt9D/1hO44T/Bn4zRCobqmAGAO7KOjoHGhXMbJfo8xoPIjG9BzlYSFiOLiv3GyxK9rXRDkwDFcgXO4caGcxhU31poD5Z2wyZ/sQccN+px1680/EgPYCxyCNoRymKC5pvHukSmHqR5+SFaFBl7DEkmraF1VALAXOIGeFNRFOsgKmvqqyjQQ5mbbfKX0DR40Fe2qAoC9wPF/2xWvSV96yxPXRxPp1JNKyTHDLsRYP5kpDItw6kzrEAT2Ar4X6pSxluWJcEucuOTyxXjaRjwThpNUWVo7mPpRl5Rngn9cp12HwF7A8YVrxhE/rr4Y50uC/CWethVXUv4tTpusroYc8TzbcWAvIq8jtjkl6Mss/xitDK2vXCbzs2Tit5W0xYjy+c4E+UG6dnbimpMksK+6fHHCcooJvZEaBjiaDT3mlQJzimhJHjJzP0uzn9gbsRL0Rm7IY4n1TLLogmZetXslyGVWkx3wU3EuQrEd8bSD+P1xHtQH3xT43TnhKWh9mxqgux8trG+lxfLq1JfzA7Ro8rQ7CRgLpdhNU4+TMZ6rhJCfjKXdROFoCp6m3HCb5qLUTSY//qCZtp/CbIia3e9NTsJYlTPz7KSAvYCbLzvkZ1KVOXUxTf3WVXPojO2kSABRzbUaU94ugz5Xg5L7K4xrlhPAXtDWPWcKoG061xh1UuoJEiDeFRjZNhOiHD5Hq2+0aD/9UypDLdIYm3SWrRDY01Y0mboHkNkEphF/czyPBr9H4+kuxB+J85RcOX0pA/YC3gXjQliL+5m19KgZc/9S1nvCGr8mCFMHsDdejCt1ZbQ9Mn7RYhzYC7h2tMijQlqK4MpKAhHF/uGFag12xAU9oqoYo5CdRJhjHwBfwcQI2QGGNRfaLbGUuqHLdNp2COx9+NUczplWWhuMqfVfatg8BMsIpfbSdsSMp9Qk88RnaH54wAZvg6YvNlJL30m7JIQSZaw/vEl/A7oMyXMRZ26mxcBewKmpZm4zpJZmrj5JdTm9D0Tubcgs0RN68jqb/DVtKSRNN6d3pik696zY+3UeQqXC98TTNuPAntaEucQJDpuMQJvMD3U3/dJ6wIW2ZYjoc/a+enxIDicKAObAPjJFwKNsPaHSyKP+te4cmx77i23b5mnO1092IPNJTFSOtsPXlTNRvO2kxjxSANz5tk2pyRtpzm0sPyZvozFiNRNyU/J6qmkv+Fyl+5mNsHKzPqIxjxQAX8qzyZPWdXoCDjaiRU/A9kZl2s0vc5GjAfZrje6nUzivNSqTRr7GPFIA+iL4Uk6D8Kw0lHrSyOOMHN95txrXGPuQytoxDYuMvJ1a/zlVfnTmhvFv0XbIcvUaYzQ1Nk0U8cyU4sAamINcpABE4Mgaoa1fmFnyM3q6H6Dh+DDx+CML+Kd5MXyYRNhj8hTfo6NEHzWvdZZSGX499e23mFTUTlZSZAiU15JMT5AiDlCZH5ATfOtv53GsK1NzHBr4xe5C20dCzco1nyr3sDPp2MqTNB3s13fRTKRAiyQ3pXFGQPlqs/LEvYYJnBoBLUYNZouh/RcgXalYeOu1+aPaY3vlCcAFeBGPlXMSzUzSKfdQPRZnhsVymrbeGb/WThyzKvrDwT8/fj/R390t8IGxBh8yVRSABFy4I3T1K/V6S2h9eAftTPhCkifNmjqeDk45C+eVJ0vzoMf+ljDHH5jam6SvugmTGBsKOET+8128lOmqelL+mAbGT+i0GfK7kUYrxj5+HKyTufwKGh/eNWXLEVfLLNtCg/YmakaXYWEd+VCqNqhxj3p0zn5q0p1KkTlikBZkv10rz9Y1YAuM4/QrY4C+6MojIkAiw9dL1B3kNG/nIeeviaK6whXfWp4VjScAguDjBfCfb1soav0BvRtYnXk1rIOSow3LpFQAmALbJLkZCqCpmMLHC5IFbaSpG/ihDbpN0aTjUOQ9oGb31NT9LRYCpsA2eduMLggFpl0WuHFXQ/13mKED1UqdT8K8m6ajS8lWCbPF1J5V6qPIOECLVaxMTwzN0vg4CThC4XGqzWmqUy/Zd1ZT+VU0p8+TlZneeKMzbz7dSeMw/Y9CNUlNa5xovE4DywuKy995RfZv1Nf2D31/S+5qINBcc9hkGySb9Os5bJrRBWlB4OEJX47Q6cWwPQSA4WzeskBxVgUgE5/tcL1xC3znzY92PUQY1qlQzTEgXj76JEluZccvRXGaCyXeUzwx0uiTJw0VALDOe1wtW/Qd2lqzwadOXtm0suE0t24XpFkevJqN4bMdOr0Y1kcAWOE7M/VLTeU2pQDMX/HNFHy2oxmiC7kMMIqwqjHnr4VLUwrAjfvogzX4ZkrkqbMWpcVrDNgAI2DVLBxNKwAE4Re/78gxegla/NVCANi08u0A0GhqEE4yc2WwS/Kdy+lahrZm5G1LASC8qIQqvO2CDwotdUFVlrSfj74a1Hfi2MIeE6jPBwbtfkEJeLb9BGhlLH7IrYsfcoMSMOhsyLPjC+k9AXVFnVsdcHWjjYcdPwGaGEzY6+izHfP9jbk/n6ePeWJP00zbvsailbDtMSDJBAK9somPwv4xLw14ZFhD3VDHtMAHhqkpQCsExqfB8LFj88mUjbqgTo0MaxqDVsLUuqBaTBc/aV4LFfOaVQWAVbS8uXM4D//5U/t0TAHmYgoL6FjDPXrzQCHN7qZWXa0rQDOFIuA/Hy7cu+UkUMsyW4i1Wy9zahy7F2wDr2VwpgDNEIo4dx/LwYt4t5yFa1l0iO2C2LGGTVOugNe8nStAM0Y4RBuC4cgavpRdu07GFnHsUt6+eWAivlczLp+LeFcVEK8gfGjCnS88ysKpadrdFLoXHAvCyRQcjtD78+MydCM+ZxSQrDwUAr+acO0I74JwcAcfa7TPmcPTVORoiuLRfdGRf9oHSr4XcPwfJ9BxCBrncHEUFKcR5wrgyXr+DzhUwz5OP8H/AAAAAElFTkSuQmCC);
      }
      .icon-wx{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAD5VJREFUeAHtXXuMXUUZn5lz72532W27t9CWttKuGjSUmEBaBQxYBLYIVVEpAfyDSkxIS4xGIgE1ppqgCSRq4qMSDVajxnSFmIBAF0jrgyKKaLAlhKBtTVvabXt3u7vsdveeM+Pvd9qzO+fcs3fv45y7t+29fZx5fvPN75v5zsw3jyNFg/42b96sei/pzQy0DWROOiczrnIzWmtHOEIax0jjGiWUkD77WhiZkVp60ghPGKWUl9EZd443x+0a63LXv77eBT3diFU9VYEG4Gyz2ay27tzacsI90VrQhVYtdSZJtpRRblZlx+dl5o1vWLNhYrNsDIHMqgAI+pa+LW2jLaNtXsFrSRLwmWg5WWeifaJ9bGPPxrHZFEbdBWCMkd07u1vz4/l2qJU5MwFVj3ioq5O51tzo3jV7x6WEGqvjr24CIPBLn1raNtQy1JG0ekkKL6qpuRNzRw6uOzhWL0GkLgACv7hvcfuIM9JhtHGSAitNOlJJr8PrGDncc3g0bUGkKoCVe1a27D+wf36jtviZhMgesXzZ8sE9K/dMzJS22vhUBLB+23qnr71vbqGl0FYtY42ULzuRHesZ7Rnqva3XS5qvxAWwbNuytvzc/PzJMXrSHM8WPcw1ckO5wQO3HRhLkoXEBEBdn3s+N3fcjJ+XJIONRqtVtr6Tvz4/lNS7IREBrNmxJvPK2CtdOqOzjQZYGvwoVxVWta0a2HntTrdW+jULYOW2lS37LtiXMwWYBs6hn8xKveLoivye22p7QdckgBU7Vszpd/q7xMnTNplzSAB+VecIs9BbOLDv2n0nq6161QJY8uSS9sHWwfnVFnw25Zs/Pn/w0McPjVZTp6oE0AS/GOpqhVCx3qbaabb8YgEQE2JTHFM6pCIB8IXr6/zSNM/ZWGJDjCoBoGwBcKjJ0c45+8ItB1UMRogRsSonOdOU9Q7gJKvzmc7zz5VxfrngTZeO84Thjw0fK2eyVlYP4Ay3Cf50cBeHEytiVhxTHDKjAGjbOdvNC8Ww1B5CzIjdTJRKCoBWTd+wNhOVZnwsAsSOGMZGng4s+Q6Y99S8rrPFpFwKhDTjaMo+se7EwHRlTNsDuJjSBH862MoPJ4bEcrocsQLgqIcrWdNlaoZXhgCxJKZxuWIFwDXcM3UZMa6Ssx1GLIlpHB9FEwZKquOFjg7RIPvItNGtUunLhZRXgqflQskFUpucwVMYs8CvlJTHEXYcYXmBJ1bj9iPuJaPVq0qq8biK1zvM35RgTNEif1G3aARDG0B/v3TMTdhweJUQ5nKA1VolYABfvorNjLuMJ5+GMN6okk4i2eIMdiEB+DPevs4LZkv9oNzrwdDnAfrVidS4iIj8M3Zd/Qy7HZ4viqpDAHdZDPcMH7VnyCEB+Asshf5cHXgJFWEc706h5SYA3x2KSM/zX6ipLdJzfpNeEfGUF2YX5u0FnJAA5j47N1fP7YJGTSwXJvNdAH9FPLunQ6X4D9TRy0j3CtTJ21rKvOPpvG5z8kyhxryc56icMiaHdBdC7axCug8JI95Tkq6QLwnp3id1y/7S6ZKL5TbIoRuHfL5JdVIA3Cj78HMPL06uqNKUtHQ/J4X8GlJNM12XL0plfl2QelfWzR4tTS0+tpApXJA16iqj5WchvA/HpxJjRpiHlMn8fJr4xIPvv+H+w8GG4EkBLNq+6LxhOTwv8dIiBLWjs0qbR6GL10aigJEYxWjnccQ9Bn35ZlF8DQF4v1yMyt6NQm4FmSKhI267VvIe5alCDcWUlbXTdJ44svbIO0w8OQ/gFvGycteQyB9SGvNYHPhSiudco6+RRj2QNPh+RSFQ0na1vpplRatBniR4I4/RuKT9Nta+AKh+0t6fr5WeIx2xFa38o3aFoIaOo/VtEtrZkJXZt+24NNx+GSiLZbLsUBngjTyS11B4wh5iTcxJFnwIUZfRj/SKW74Ub7pZfXt2PHuEfNT7V2gtLMoU1G/RKC62y6Y6Esa52w5L2h2Mhnwp8FhQ0gXY9HBwa31U7aCS//aU+fRsgU/+WDZ5IC9hfsVa8myHJe0OMPcFwDNZSRcQ0APtxVKJbwZ+PlHh1zxXrM+4mWnNtHb6NN3kgbyQJ7sc8kze7bAk3QHmiqcR05z5ZjLqEWPE1OgKIx3jqE2O4wwnWaFaaJEX8uSPwk4TIs/kvRa6pfISc2LvHN10NDs4ZzDWUleKQDlxxnExGZIPhNIq83XMQP8UCmsADw65Dgql0SPlDRY73cLRL2L0dNAKS8x5qPPQScVzuIlRjBBCpe4JBUm5C4L/VSgs4uE8Afr3q0JqGNH0q3QzLJJsRm81dHzewKNNvKgOdmSNbmKveAi6Rjqx2V3pzsMSxHV2JPw/s/1xbumZr+AlcS9mp4v4j24/LC5xibBq6UR5ZB1YlxJFVR1F7LGFxU1FAI6S10OnTtLGmPuIdOWMVkhYCjlTDf3iwkIJYjxxeeLColnJI3mdDEcd/LpMBiTnIPbKP/6fHM0pSlqunvLAAGBMLwBI/IyVXUYSbvJIXkO0InUJxdXgIfaKdy/UQGParDjvvNKOxLBut+2fzo3K/y4aFxcWTRP1x+WJC4vmoz/Ka7QucXmqCgP2GV58kcryI85l07oW/Dwp/ldyg8zphMaRj6ANwiZ3ShURtFNhAaXynrXQIa9qinVUg3VJ/kfsZfuz7RfCJJd4LzDKewv4Txr4PM9cmlGzP/EqB0ZXu12OI6d6rBRjUjvvLSdvRWlw8nLqypeKcpaRGMTtVLJVNsTiuM3TdG7ZJsMHsw0UdRo/NHzfFJEGbdA8ZNPFeHqJ7W9ktxyXF9n8YVQ0ZPuTdCvo/1BLTYy4lKHZI140qejRxPi1CTniXbYXy5v9IX9SHqog3jSVFL0InVAPEFp9IBLfsF7lhc3TRovX02CW2ONekJTux5FYQLd/0nzK9jay2yjzGZs/+P9p+5NyE3vFO9aSImjTwajnafinXrxGvA8rTZfYaRrSLd3VQCS0QIM17L5UeD11vx06XAq/jMwMYWy7wyaNNdd7bX8jurEz864QX1KiJ2fD6jSUoHoPLxdUvF2wehKlc2ojH4+kuMUYN6Vdb5GSqvBi49rVmBPdYmeFevip7U/STewVr3ZMkqhNC5OMpzGj/YcdJpT6TtqL3qHyyvTQ4imF+h7Ujz0pfUM6kqo0lR+xV7xXMxXqp4lCzT0Ip6XmTLcS5icwMaQzuamiMjQJZKTEyp3BrrrTPylcrcQXJXaGBUFJP4m94qWmSRO26Tna2YMm9ZgdhuW+G7D69H07bLbcfkPQ+ofg6eYQD1L8wPGcKXNEKDIZD7H3u1vH9o6Faa4Le1mv3XEFd7yF5gIwAz6qtPOtZKpTORWd1S3K9Xfp9di5sXFrjzHqJmlkao2TO6VH1o70+6YI3ihrM5C02yk4o65j7oR+fcumjRnIPSZTtx3RdtHYjK0vVp55Ao0iBD6M0XuF1hvSBJ+MBJj7AuB1viHuUvBw+wfMEXfArjK5M9gvRnvhaX8KZdsk/bVi5X1ZCrMdaucyOw7ut9wWD5OwdIaddlkB5r4AeJeyHZmWWysnD50b3vZnnANplWfT5cgLJvI7sNbwPHrifYhrseMx9nnTdfSt9dooFmA+OeTq3NF5ftr7Q4XjfRJ2lR9PVhwGO1hDPhj4jSxcJJWzDgbCJRiPH8QIaheGsq/VYi7BPevvxu4K9rw7IPyuoKzQU8lez9Xf4OQxFJ6Sh/dWD187fIzkJxfNeZE1tqeHW0XCDGCIfbu9SgZAnmQL8KR3GcakX4J1/DrcrnuqUWDwx+6J5cC8kfovaKF/1Frs1q36aGYiczyqozmURAOaj3Ngi6SjV0HJX4EbcLEvySxBi8df/Bf5QSiHtRH3Yz76QiZVy3y4YB9rcWpf2mQPSPuARsEULswo9Tew4qs9nyUlvoAX8Sf8YWmYx9I+KHAwfgK96RgEA7fMAWCeay53bjEByW7zPP1QvVq9XaHYAxpMkOYRJa3cu9Bqv20zQvDwZ7IRhOJS8EBQx6CSfgHV9kuYAXwVkEIxJUlGjyhNqiDm4hXu/YX+8EuyJLnyI6VUl0EdhDPEgQ/jFyTyDFTRpTBjXAMJLQhnqtAnxTB62cso+Q/4JMTvVcGZCFW6QnK1JifGQ2LqVRPihffnd/Z1umlMynCQujMCf6Qu8u94WT6Mxe9djPC7BTJox7sU6v0jcF6J3rICq1PL8IzbqqjRwgfQwnngYz8o/NVz/Jf4bgFzAunJQqTIOns5+fK/UWB1+pAA0OIMDmqPpHEpH042vgRz9I3ROgOYf6GVP4IPw+zkHoHo77Q5YDfS/YhxmLgpz/NyjjHtRjvtGEawwRx3jDOItznwn6LgpGbFmSqjEhe/TUCM7TxsGKEfRia8qmBh0nf9GxxXFJ5+EEPMDWDiJN6cfWjxT0gv82KIgbPUw28SjFw30j+jAFj/ep2YPEuxjq2WfTLSTlDUAxjJXoB3waxdWWAzeDa4qfujVxQE9SpWuohhN+GXI4JEzWdtCBDLqOoJKMb2gCCyeWVZgET1z6qvLGOR/GxHahu3qq/TmZMTG698DEtwXLIHMJ//SZL5+XgjVgnCzShMbAdzAzN98mRGARDIrue65jXvDq2sSfFTJwM3DJyYKVfsSziaid9M4XW80fCmPx4BYkXM4mPDoWUJgG9wfjOFn+0IZ2/6oggQIx+ryIw3mi7wl6WCgsS8mn3v4r0LmjeoB4hEnvikSffh7uOVfFemIgGwuLpc7BGp15niDS7gqITfslSQTZD3nfH2Pzus6RaCmBCbSrGouAcEBTTC9ZYBL7P9jLuOslyeqhYAC/DVUfMzVjV9xqpiFWRLll2OL51zcXTEOrPu1agdG8OaBEBCfOOvFquPnUvzBNaVda5ktGODbrtrUkE2IZqwmx/ztBEpz11zDwiK4WSNU2/aP85KAx4Ma6wb6zidaTnAopJnYgIICqXx6eahm/tphg3CzvQn68I6zWRYq6aeiamguMKbnzSPQyUclqoAWBTfDfx4gX9/vm6cUzFhGMI+LqB3eB0jh3sOF933H05Zuy91AQQsUhBLn1raNtQy1JHGvqOgnFqeXLvl1pGD6w6OJannS/FUNwEETFAQ3Tu7W/Pj+fZ63tQelB/35HZB7ljzN02VacWMo1NNWN0FYDPJDcFb+ra08S7l1LfG2wXDzS3i3KW8sWfjWHCTeSRJXbyzKgC7hhTG1p1bW3ijLC81TVpNUb3wWBBPpvBwxGyCbte7YQRgM0U3LzXtvaQ3w6sdebsgL7jz77fDNV88C2Bc664jjNF58YV/kOPU8X+Ph6B5DpdHQXkaEfQacjHp/9O9fBVNexFBAAAAAElFTkSuQmCC);
      }
      .icon-apple{
        background-image: url(data:image/png;base64,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);
      }
    }
  }
}
 
</style>