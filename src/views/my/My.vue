<template>
  <div>
      <button @click="logOut">退出登录</button>
      <commom-tab-bar></commom-tab-bar>
  </div>

 
</template>

<script>
import CommomTabBar from '../../components/commom/tabbar/CommomTabBar'
export default {
  components:{
    CommomTabBar
  },
  methods:{
    logOut(){
      this.$store.dispatch('logOut','userid')
      this.$toast.addCart('退出成功',1000,()=>{
        this.$router.replace('/login')
        })
    }
  }
}
</script>

<style lang='less' scoped>

</style>