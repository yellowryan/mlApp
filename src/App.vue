<template>
  <div id="app">
    <keep-alive include="Home">
       <router-view />
    </keep-alive>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  mounted(){
    this.autoLogin()
  },
  methods:{
    ...mapActions(['autoLogin'])
  }
}
</script>

<style lang="less">
@import './commom/commom.less';
</style>