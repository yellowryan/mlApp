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
            id : 0,
        }
    },
    created() {
      this.id = this.$route.params.id  
    },
}
</script>

<style>

</style>