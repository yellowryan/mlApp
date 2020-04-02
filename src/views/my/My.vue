<template>
  <div class="my">
    <my-search></my-search>
    <my-header></my-header>
    <my-list-group></my-list-group>
    <button  class="log_out" @click="logOut">
      <span>退出登录</span>
    </button>
    <commom-tab-bar></commom-tab-bar>
  </div>

 
</template>

<script>
import CommomTabBar from '../../components/commom/tabbar/CommomTabBar'
import MySearch from './childComps/MySearch'
import MyHeader from './childComps/MyHeader'
import MyListGroup from './childComps/MyListGroup'
export default {
  components:{
    CommomTabBar,
    MySearch,
    MyHeader,
    MyListGroup
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
  .my{
    background-color: #f7f7f7;
    padding-top: 44px;
  }
  .log_out{
    display: block;
    width:120px;
    height: 32px;
    margin: 0 auto;
    background-color:#fff;
    box-shadow: inset -1px -1px 2px #fff, inset 1px 1px 2px #babecc;
    transition: all 0.2s ease-in-out;
    color: #babecc;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 5px;
    border-radius: 15px;
  }
</style>