<template>
  <div class="product_intro">
      <div class="img_display" v-for="(url, index) of introduction" :key="index">
            <img v-lazy="url" @load="introImgLoaded">
      </div>
  </div>
</template>

<script>
export default {
    props:{
        introduction:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        introImgLoaded(){
            this.$emit("introImgLoaded")
        }
    }
};
</script>

<style lang="less" scoped>
.product_intro {
  max-width: 640px;
  margin: 0 auto;
  padding: 0px;
  position: relative;
  left: 0;
  .img_display{
      max-width: 640px;
      width: 100vw;
      img{
          max-width: 100%;
          width: auto;
          height: auto;
      }
  }
}
</style>