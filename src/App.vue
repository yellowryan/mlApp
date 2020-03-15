<template>
  <div id="app">
    <keep-alive exclude="Detail">
       <router-view />
    </keep-alive>
  </div>
</template>

<style lang="less">
@import './commom/commom.less';
</style>