<template>
    <div class="tab-bar-item" @click="itemClick">
        <div class="item-icon" v-if="!isActive"><slot name="item-icon"></slot></div>
        <div class="item-icon-active" v-else><slot name="item-icon-active"></slot></div>
        <!-- <div class="item-text" :class="{active:isActive}"><slot name="item-text"></slot></div> -->
    </div>
</template>

<style lang="less" scoped>
    .tab-bar-item{
        text-align: center;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>


<script>
export default {
    props:{
        path:String
    },
   data(){
       return {
       }
   },
   methods:{
       itemClick(){
           if(this.$route.path.indexOf(this.path)===-1){
               this.$router.push(this.path, onComplete => { }, onAbort => { })
           }
           
       }
   },
   computed:{
       isActive(){
           return this.$route.path.indexOf(this.path)!==-1;
       }
   }
}
</script>