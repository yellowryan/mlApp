<template>
  <div class="search">
    <search>
      <span slot="left" class="back-home" @click.once='backHome'></span>
      <div slot="center" class="home-search">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" ref="inputs" placeholder="请输入关键词" key="search-key" autocomplete="off" v-model="keyword" v-focus>
      </div>
      <span class="user-icon" slot="right" @click.stop="searchGoods">搜索</span>
    </search>

    <div class="show-container">
      <div class="hot-search" :class="{hide_hotword:isHidden}" v-show="!keyword">
        <div class="hot-search-head cf">
          <p>热门搜索</p>
          <div class="hotword_visible">
            <span v-if="!isHidden" @click.stop="hidden">隐藏</span>
            <span v-else @click.stop="show">显示</span>
          </div>
        </div>
        <div class="hot-search-tags">
          <div class="s_hasHide" v-show="isHidden">已隐藏搜索发现</div>
          <span>
            <a href="javascript:void(0)">
              <i class="hot-search-move hot-search-red">家装建材 5折起</i>
            </a>
          </span>
          <span>
            <a href="javascript:void(0)">
              <i class="hot-search-move hot-search-red">春雨行动300减30</i>
            </a>
          </span>
          <span>
            <a href="javascript:void(0)">
              <i class="hot-search-move hot-search-red">羽毛球拍</i>
            </a>
          </span>
          <span>
            <a href="javascript:void(0)">
              <i class="hot-search-move">欧式吊灯</i>
            </a>
          </span>
          <span>
            <a href="javascript:void(0)">
              <i class="hot-search-move">天燃气灶双灶</i>
            </a>
          </span>
          <span>
            <a href="javascript:void(0)">
              <i class="hot-search-move">鼠标垫护腕</i>
            </a>
          </span>
          <span>
            <a href="javascript:void(0)">
              <i class="hot-search-move">真丝睡衣</i>
            </a>
          </span>
          <span>
            <a href="javascript:void(0)">
              <i class="hot-search-move">门铃感应器</i>
            </a>
          </span>
          <span>
            <a href="javascript:void(0)">
              <i class="hot-search-move">影碟机便携式</i>
            </a>
          </span>
          <span>
            <a href="javascript:void(0)">
              <i class="hot-search-move">桂花乌龙茶</i>
            </a>
          </span>
          <span>
            <a href="javascript:void(0)">
              <i class="hot-search-move">高压锅不锈钢</i>
            </a>
          </span>
          <span>
            <a href="javascript:void(0)">
              <i class="hot-search-move">法兰绒床垫</i>
            </a>
          </span>
          
        </div>
      </div>


      <ul class="show-list" v-if="keyword&&goodsList.length!=0">
        <li class="show-list-item" v-for="(item, index) in goodsList" :key="index" @click="goodLink(item.goodId)">
          <div class="show-list-div">
            <img :src=item.goodImg>
            <div class="good-info">
                <div class="good-name">{{item.goodName}}</div>
                <div class="key">
                  {{item.keyword}}
                </div>
            </div>
            <span class="price">¥{{item.goodPrice}}</span>
          </div>
        </li>
      </ul>

      <div class="tips" v-if="keyword&&msg">{{ msg }}</div>

    </div>
  </div>
</template>

<script>
import Search from "../../../components/commom/search/Search";
import {mapState} from 'vuex'
import {RESET_GOODS_LIST} from '../../../store/mutation-types'
export default {
  components: {
    Search
  },
  directives: {
    focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
      }
    }
  },
  data(){
    return {
      keyword:'',
      isHidden:false
    }
  },
  methods: {
    backHome(){
      this.$router.back()
      this.$store.commit(RESET_GOODS_LIST)
    },
    searchGoods(){
      if(this.keyword){
        this.$store.dispatch('goodsList',this.keyword)
      }
    },
    show(){
      this.isHidden = false
    },
    hidden(){
       this.isHidden = true
    },
    goodLink(id){
      this.$router.replace({path:'/detail/'+id})
    }
  },
  computed:{
    ...mapState(['goodsList','msg'])
  },
  watch:{
    keyword(){
      if(!this.keyword){
        this.$store.commit(RESET_GOODS_LIST)
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    if(from.path==='/home'){
      next()
    }else{
      next({
        path:'/home'
      })
    }
  },
  deactivated(){
    this.$store.commit(RESET_GOODS_LIST)
  }
}
</script>

<style lang="less" scoped>
  .search{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 202;
    width:100vw;
    height:100vh;
    padding-top: 44px;
    .user-icon {
      color: #fff;
      display: inline-block;
      position: absolute;
      right: 0.3rem;
      top: 0.4rem;
      padding: 6px;
      background-color: #e93b3d;
      border-radius: 4px;
      font-size: 14px;
    }
    .back-home {
      margin: 12px 0 0 10px;
      width: 20px;
      height: 20px;
      display: block;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzRCQTEyN0IzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzRCQTEyN0MzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NEJBMTI3OTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NEJBMTI3QTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PulQWg8AAAF/SURBVHja7Ni9SsRAEAfwnd1wldiIlqK1td4LiL7CFQaFCHZWgmVqH+GK4FejryA+gPcA9vZ2YnVkd5yAcBLOYJKZ3UWyRbIchPsxSzb/HUBEFfPQKvIxAP89MGn7wPHpuTLOtXoGMdl1WF4rUBug9cX25tpdnufRVHBssXxGhTu0Y6yjs1P6bRTLEo9Lp56ohquLasKcbk5sifvgAMBRRc5oWoau4FIcfRJOaPoQ+i1uwt2H3mZYcdxAdhwnUATHBRTDcQBFcX2B4rg+QC+4rsA9X7gunzpQ1j7S3QuudQWz7HKFjjBbNXNR4QhaYcMCi+LqkwxvtbSX0SWNJVGjAZhQ1T4W8Qk11e2GpkexRP5ZotVBHUmXWwlk122mCZnGAPwV+b3caQxAL0iOsCCK5IpbYkjOwCqC5I787EiJQxMrUurY2YScxNI8Woq0qKZtUpR062NmQB/+RALgqM3/+mgevRhI9imMvVIcewdtqtbH/M8BdOhRD8DA40uAAQDL2thNJDxLvAAAAABJRU5ErkJggg==);
      background-repeat: no-repeat;
      background-size:100% 100%
    }
    .home-search {
      text-align: center;
      width: 100%;
      position: relative;
      .icon-sousuo {
        color: #b7b7bb;
        position: absolute;
        left: 22px;
        top: 4px;
        font-size: 1rem;
        &::after {
          content: "";
          position: absolute;
          border-right: 1px solid #ddd;
          top: 4px;
          left: 22px;
          height: 16px;
        }
      }
      input {
        width: 90%;
        border: 0;
        border-radius: 14px;
        font-size: 12px;
        color: #232326;
        padding-left: 32px;
        box-sizing: border-box;
        -webkit-box-flex: 1;
        height: auto;
        margin: 0 0 0 5px;
        vertical-align: middle;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 30px;
        background: #f7f7f7;
      }
    }
    .show-container{
      .hot-search{
        margin-bottom: 0;
        padding-left: 13px;
        margin-top: 15px;
        .cf::after{
          content: "";
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
        }
        .hot-search-head{
          padding: 0 15px 11px 0;
          padding-top: 3px;
          p{
            font-size: 15px;
            line-height: 15px;
            color: #232326;
            float: left;
            width: 100px;
            padding-left: 1px;
          }
          .hotword_visible{
            float: right;
            color: #999;
            font-size: 15px;
            line-height: 15px;
            span{
              display: none;
            }
            span:first-child{
              display: inline
            }
          }
        }
        .hot-search-tags{
          padding-right: 2px;
          overflow: hidden;
          font-size: 12px;
          text-align: center;
          .s_hasHide{
            height: 30px;
            margin: 29px auto 40px;
            line-height: 30px;
            text-align: center;
            color: #999;
          }
          span{
            display: block;
            max-width: 100%;
            overflow: hidden;
            padding-right: 10px;
            padding-bottom: 10px;
            float: left;
          }
          a{
            height: 23px;
            line-height: 24px;
            border-radius: 3px;
            display: block;
            width: 100%;
            color: #686868;
            white-space: nowrap;
            text-overflow: ellipsis;
            background-color: #f0f2f5;
            padding-left: 13px;
            padding-right: 13px;
            overflow: hidden;
            box-sizing: border-box;
          }
          .hot-search-move{
            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            &.hot-search-red{
              color: #e93b3d;
            }
          }
        }
        &.hide_hotword .hot-search-tags span{
          display: none;
        }
      }
      .show-list{
        display: block;
        padding-left: 12px;
        .show-list-item{
          height: 84px;
          display: block;
          position: relative;
          padding-right: 12px;
          margin-top: 10px;
          .show-list-div{
            display: -webkit-box;
            height: 100%;
            img{
            height: 100%;
            width: auto;
            }
            .price{
              color: #e93b3d;
              font-weight: 700;
              height:20px;
              position: relative;
              top: 60px;
            }
            .good-info{
              width: 208px;
              font-size: 14px;
              padding-left: 5px;
              .good-name{
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
              }
              .key{
                font-size: 16px;
                color: #ff229c;
              }
            }
          }
        }
      }
    }

    .tips{
      text-align: center;
    }
  }
</style>