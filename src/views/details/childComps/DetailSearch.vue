<template>
  <div class="detail-search">
    <search>
      <div slot="left" class="icon-container" @click="backClick">
        <span class="detail-icon detail-back"></span>
      </div>
      <div slot="right" class="icon-container" @click="isShow =!isShow">
        <span class="detail-icon detail-more"></span>
        <show-more v-show="isShow"></show-more>
      </div>
    </search>
    
  </div>
</template>

<script>
import Search from "../../../components/commom/search/Search";
import ShowMore from '../../../components/content/showmore/ShowMore'
export default {
  components: {
    Search,
    ShowMore
  },
  data(){
    return {
      isShow:false
    }
  },
  methods:{
    backClick(){
      this.$router.back();
    }
  },
  deactivated(){
    this.isShow = false;
  }
};
</script>

<style lang="less" scoped>
.icon-container {
  box-sizing: content-box;
  background-color: #666;
  padding: 5px;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  margin: 7px 0 0 5px;
  .detail-icon {
    display: block;
    width: 20px;
    height: 20px;
  }
  .detail-back {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURUdwTP///////////////////////////////xb9HQ4AAAAIdFJOUwD6i0/UdjQCdVO0QgAAAEZJREFUKM9jYKAiKMAixiqSgCmo0eGAIcbUgUVQo6PRAItC4WGjkBWbQhYsCrELYtWO1SLsThoWSh2IS2DYkyJDQQE1kj4AQAEnj84DdFIAAAAASUVORK5CYII=)
      no-repeat 50%;
    background-size: 20px 20px;
  }
  .detail-more {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURUdwTP///////////////xPgMRoAAAAEdFJOUwDmiAYExX3+AAAAOUlEQVQoz2NgGAV0AEaCyiCKWVHIAMFVcXECcZhcXBQY4FwRF0cQh9HFRYABzsUqiFU7VotGAc0BAFnhCfdBrTVKAAAAAElFTkSuQmCC)
      no-repeat 50%;
    background-size: 20px 20px;
  }
}
</style>