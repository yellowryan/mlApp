<template>
  <div class="detail">
      <detail-search></detail-search>

  </div>
</template>

<script>
import DetailSearch from './childComps/DetailSearch'
export default {
    components:{
        'detail-search':DetailSearch
    },
    data(){
        return {
            id : null,
        }
    },
    created() {
      this.id = this.$route.params.id  
    },
    destroyed(){
        console.log("des"); 
    }
}
</script>

<style>

</style>