<template>
  <div class="guess_area">
    <div class="detail_like">猜你喜欢</div>
    <div id="guess_wrap">
      <div class="guessWrap">
        <div class="guess_container">
          <ul class="row">
            <li v-for="(item , index) in guessLike" :key="index">
              <img :src="item.imgUrl" />
              <div class="name">{{item.name}}</div>
              <span class="price">¥
                <span class="big">{{item.price}}</span>.00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    guessLike: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="less" scoped>
.guess_area {
  margin-top: 10px;
  overflow: hidden;
  .detail_like {
    position: relative;
    color: #333;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    padding-left: 10px;
    z-index: 1;
  }
  #guess_wrap {
    .guessWrap {
      position: relative;
      overflow: hidden;
      background: #fff;
      .guess_container {
        width: 100%;
        .row {
          position: relative;
          font-size: 0;
          overflow: hidden;
          display: flex;
          flex-wrap: wrap;
          li {
            width: 33.33%;
            img {
              width: 100%;
            }
            .name {
              padding: 5px 10px 0;
              height: 3.25em;
              line-height: 1.5em;
              color: #333;
              font-size: 12px;
              font-weight: 400;
              white-space: normal;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .price {
              display: block;
              height: 26px;
              line-height: 26px;
              padding: 0 10px;
              color: #e4393c;
              font-size: .5rem;
              .big{
                font-size: .8rem
              }
            }
          }
        }
      }
    }
  }
}
</style>