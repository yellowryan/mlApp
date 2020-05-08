export const loginMixin = {
  data(){
    return {
      inputValue:'',
      pwdValue:'',
      userDisplay:'none',
      pwdDisplay:'none'
    }
  },
  methods: {
    clearText(){
      this.inputValue=''
     },
     clearpwd(){
      this.pwdValue=''
    }
  },
  watch:{
      inputValue(){
        if(this.inputValue==""){
          this.userDisplay='none'
          this.$refs.usertip.innerText= ''
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