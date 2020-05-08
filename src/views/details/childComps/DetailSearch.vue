<template>
  <div class="detail-search" ref="container" v-if="Object.keys(this.title) !=0">
    <search>
      <div slot="center" class="nav-container" ref="center">
        <span
          v-for="(item,index) of title"
          :key="index"
          @click="spanClick(index)"
          :class="{cur:currentIndex==index}"
        >{{item}}</span>
      </div>
      <div slot="left" class="icon-container" @click.stop.prevent="backClick" ref="left">
        <span class="detail-icon detail-back"></span>
      </div>
      <div slot="right" class="icon-container" @click.stop="moreClick" ref="right">
        <span class="detail-icon detail-more"></span>
        <show-more v-show="isShow"></show-more>
      </div>
    </search>
  </div>
</template>

<script>
import Search from "../../../components/commom/search/Search";
import ShowMore from "../../../components/content/showmore/ShowMore";
export default {
  components: {
    Search,
    ShowMore
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    },
    scrollTop: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isShow: false,
      currentIndex: 0
    };
  },
  methods: {
    backClick() {
      this.$router.back();
    },

    spanClick(index) {
      this.currentIndex = index;
      this.$emit("spanClick", this.currentIndex);
    },

    moreClick(){
      this.isShow = !this.isShow
      this.$emit("moreClick")
    }
  },
  watch: {
    scrollTop() {
      if (this.scrollTop < 20) {
        this.$refs.center.style.opacity = 0;
        this.$refs.center.style.visibility = "hidden";
        this.$refs.container.style.background = "transparent";
      } else if (this.scrollTop < 40 && this.scrollTop >= 20) {
        this.$refs.center.style.opacity = 0.1;
        this.$refs.center.style.visibility = "visible";
        this.$refs.container.style.background = "hsla(0,0%,100%,.2)";
      } else if (this.scrollTop < 60 && this.scrollTop >= 40) {
        this.$refs.center.style.opacity = 0.3;
        this.$refs.center.style.visibility = "visible";
        this.$refs.container.style.background = "hsla(0,0%,100%,.3)";
      } else if (this.scrollTop < 80 && this.scrollTop >= 60) {
        this.$refs.center.style.opacity = 0.4;
        this.$refs.center.style.visibility = "visible";
        this.$refs.container.style.background = "hsla(0,0%,100%,.4)";
      } else if (this.scrollTop < 100 && this.scrollTop >= 80) {
        this.$refs.center.style.opacity = 0.5;
        this.$refs.center.style.visibility = "visible";
        this.$refs.container.style.background = "hsla(0,0%,100%,.5)";
      } else if (this.scrollTop < 120 && this.scrollTop >= 100) {
        this.$refs.center.style.opacity = 0.6;
        this.$refs.center.style.visibility = "visible";
        this.$refs.container.style.background = "hsla(0,0%,100%,.6)";
      } else if (this.scrollTop < 140 && this.scrollTop >= 120) {
        this.$refs.center.style.opacity = 0.7;
        this.$refs.center.style.visibility = "visible";
        this.$refs.container.style.background = "hsla(0,0%,100%,.7)";
      } else if (this.scrollTop < 160 && this.scrollTop >= 140) {
        this.$refs.center.style.opacity = 0.8;
        this.$refs.center.style.visibility = "visible";
        this.$refs.container.style.background = "hsla(0,0%,100%,.8)";
      } else if (this.scrollTop < 180 && this.scrollTop >= 160) {
        this.$refs.center.style.opacity = 0.9;
        this.$refs.center.style.visibility = "visible";
        this.$refs.container.style.background = "hsla(0,0%,100%,.9)";
      } else {
        this.$refs.center.style.opacity = 1;
        this.$refs.center.style.visibility = "visible";
        this.$refs.container.style.background = "hsla(0,0%,100%,1)";
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$emit("searchMounted");
    });
  },
  deactivated() {
    this.isShow = false;
  }
};
</script>

<style lang="less" scoped>
.detail-search {
  background: transparent;
  border-color: transparent;
  height: 44px;
  position: fixed;
  z-index: 288;
  width: 100%;
  .nav-container {
    display: flex;
    opacity: 0;
    visibility: hidden;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 35px;
    height: 80%;
    span {
      flex: 1;
      font-size: 14px;
      color: #000;
    }
    .cur {
      color: #e4393c;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYBAMAAAABjmA/AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURek7PUdwTO49Peg6Peo6Puc6Pek6POk6POg6POg7PeY8POg6POk6PApBjXgAAAANdFJOU/8ADttQPYvEqJYqW/KuifCQAAAAjklEQVQI10XOsRGCQBAF0D8eA6Imn4ERMh0tgDE2UDqgA2Ij7UA6gA6MjCnB0vzLBlxw92Z379+B/F7DgwQraI3C05AQc0ElfBCac40NOlzIE2LUuJM5gtpHMtPxc+yW1tuH15j8+hYHD1yhdPQoHO3yKG+GSNgbXsI81AocgNS+qlgLFwrrGNjFdFS9tj82HhIeoIR1QQAAAABJRU5ErkJggg==)
        no-repeat 0;
      background-size: 8px;
    }
  }
}
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