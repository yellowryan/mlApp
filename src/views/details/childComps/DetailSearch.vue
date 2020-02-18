<template>
  <div class>
    <search>
      <div slot="left" class="icon-container">
        <span class="detail-back"></span>
      </div>
    </search>
  </div>
</template>

<script>
import Search from "../../../components/commom/search/Search";
export default {
  components: {
    Search
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
  .detail-back {
    display: block;
    width: 20px;
    height: 20px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURUdwTP///////////////////////////////xb9HQ4AAAAIdFJOUwD6i0/UdjQCdVO0QgAAAEZJREFUKM9jYKAiKMAixiqSgCmo0eGAIcbUgUVQo6PRAItC4WGjkBWbQhYsCrELYtWO1SLsThoWSh2IS2DYkyJDQQE1kj4AQAEnj84DdFIAAAAASUVORK5CYII=)
      no-repeat 50%;
    background-size: 20px 20px;
  }
}
</style>