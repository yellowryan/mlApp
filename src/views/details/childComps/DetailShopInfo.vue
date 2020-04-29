<template>
  <div class="shop">
    <div class="shop_info">
      <span class="logo_wrap">
        <img :src="shopInfo.headImg" alt />
      </span>
      <div class="shop_name">
        <p class="name">{{shopInfo.name}}</p>
        <p class="desc">
          <span class="star">
            店铺星级
            <span v-for="index in 5" :key="index">
              <i class="star_icon" v-if="index <= Math.floor(shopInfo.star)"></i>
              <i class="star_icon half" v-else-if="index==Math.round(shopInfo.star)"></i>
              <i class="star_icon empty" v-else></i>
            </span>
          </span>
        </p>
      </div>
    </div>
    <div class="info_tab">
      <div class="tab_item">
        <p class="num">
          <strong>{{shopInfo.fans}}</strong>
        </p>
        <p class="desc">粉丝人数</p>
      </div>
      <div class="tab_item">
        <p class="num">
          <strong>{{shopInfo.goodsNum}}</strong>
        </p>
        <p class="desc">全部商品</p>
      </div>
      <div class="evaluation">
        <div class="evaluation_wrap">
          <div
            class="evaluation_list"
            v-for="(item,index) of shopInfo.evaluation"
            :key="index"
            :class="{low:item.point < 9}"
          >
            <span class="list_head">{{item.title}}</span>
            {{evaluationShow(item.point)}}
          </div>
        </div>
      </div>
    </div>
    <div class="shop_bottom">
      <button class="bottom_btn">
        <i class="icon_unfavor"></i>
        关注店铺
      </button>
      <button class="bottom_btn">
        <i class="icon_shop"></i>
        进入店铺
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    evaluationShow() {
      return function(p) {
        let point = parseFloat(p).toFixed(2);
        if (point >= 9.2) {
          return `${point} | 高`;
        } else if (point > 9.0 && point < 9.2) {
          return `${point} | 中`;
        } else {
          return `${point} | 低`;
        }
      };
    }
  }
};
</script>

<style lang="less" scoped>
.shop {
  padding: 10px;
  font-size: 14px;
  color: #333;
  display: block;
  margin-top: 10px;
  background-color: #fff;
  overflow: hidden;
  .shop_info {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    margin-bottom: 10px;
    .logo_wrap {
      position: relative;
      width: 90px;
      height: 30px;
      box-sizing: border-box;
      margin-right: 10px;
      flex-shrink: 0;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        vertical-align: top;
      }
    }
    .shop_name {
      flex-shrink: 1;
      overflow: hidden;
      font-size: 0;
      line-height: 1;
      .name {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        font-size: 14px;
        height: 15px;
        line-height: 15px;
        overflow: hidden;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      }
      .desc {
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: inline-flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        height: 14px;
        line-height: 14px;
        background: #f7f7f7;
        padding: 0 2px;
        border-radius: 2px;
        color: #999;
        font-size: 10px;
        .star {
          margin-top: 5px;
          padding: 0 5px;
          background: #f7f7f7;
          height: 14px;
          line-height: 14px;
          font-size: 10px;
          color: #666;
          .star_icon {
            margin-left: 2px;
            display: inline-block;
            width: 10px;
            height: 10px;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTOo7Peo7Peo7PvBBQuk7Pe49QOo7Peo8Puk7Peo7Pes8Puo7Peo7Peo7Peo7Puk7PTSrrAsAAAAQdFJOUwCArXIT6iTMYvq8Ot2PnVHnP2+jAAAA4klEQVQ4y6WU2xKDIAxElVuCcsn/f23V1iogIZ2eR2aZJcmGafoDRJluJpolutUT+VUgBNoAkfHO0Nz5t9A7ibHAXNMXLTEemi90Y2FGQgXP5gaTpQqbsPQ3OQbqEFI2n5HN4IkH4jZSRSLUZGVCe28xhxZ6q71kGOvgKNwNn2ndlWmOK++Dgm67ljhd7MampAyR6c/asAl7fOBvQs3M7mmdW+oFj6LmcJ1MlVBxuRF1fOl9JU3C+kJAhL7wHKGNR/ZcPEMaKuFx7lW+TrLy761qigm6mr/RoS3G4OO3veJ5+QXYTzOCoc89GgAAAABJRU5ErkJggg==);
            background-repeat: no-repeat;
            background-size: cover;
          }
          .star_icon.half{
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAqCAMAAAD26OlUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABvUExURUdwTOhGSOdfYeHS0uhPUd7d3d3d3d7e3uhXWd3d3eZyc97e3vnX1+V2d/CysuV8fN/f3+aJid7e3uWAgt7e3t7e3uZsbd7e3uuNj+ZsbeaFiN3d3ek7PelAQuV0deKam+SEhd7Ly+GtruZkZeC8vH/0JbAAAAAbdFJOUwD+6Rz64/Rl88q+fgepEZM0QKdyuUzglC7PWKSSRmEAAAEoSURBVDjLvdVpj4MgEAZgtIgo3ldtGds9+v9/Y4OtwiAeu8nufNM8YQLzooT8Q5WUlkdcwmHokgMwBoCbONB4UJAVu5CDgjLacym8oAwPNB4hO21Cf3TwIaVstlwOGm417z0Trjbvc/52cFdQRuGSZvVlVjNU9txmemZ1zAdANcMRi1ZN9OpbSNWXxMWaglCAfShlQLgLPhYwIldHZ/i0nQpJfgS2UwCtsp1AA9Y1WK6aTtveuWdtZL4YpYcXpPhkjEHWeOvfCBbLYDuhlbbOhDfDnVciq+PoXhD33oLxWsrEb+FlLWX2Zrq1lFXuC/1DaKascX2bpkwEKNq4dID8PEvaxrgsuN75oXH/ej6JwA3VikNXm6+Kijlg6vF08QHJwoiFf/ZTeQIST1jxIXrZEgAAAABJRU5ErkJggg==)
          }
          .star_icon.empty {
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAqBAMAAAAzGARVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTN3d3d3d3d7e3uHh4d7e3t3d3d3d3e3t7d7e3t3d3d/f397e3uDg4N7e3t3d3XtgE50AAAAPdFJOUwDJ6Wkdfva2ClbYQKMuk0pSLuIAAAD0SURBVCjPY2AgHXgtwRTjkP+IKcj6/38AhuC1//9zMQTl///H0M/8HwgM0ATdQIIpaIL1IMHvWHSj63eCCKogi3nKQwQ/ToELdT/8DwfrZkCEAvP/IwPRHQwM11GFgOBbLYP+fwzwiUEeU/AjKCDQQS4DJ6bgBAaGeHSxr0AnsaMLHgDFw3o0axqQ/A0DEP9zozp9A8Tv9siCn6EBwoMs+AAqyInmSORgRw18VmTBAHyCfNgs4kH3JAO67wvwCTJCIgESMQJQQS5wkpnRCU46C6CCTED2UgcGBpYoIEMBLvjtNIS1Jx8uyKxoAUsszUIGJOUeACU2mFbyRsBWAAAAAElFTkSuQmCC);
          }
        }
      }
    }
  }
  .info_tab {
    display: flex;
    margin: 10px 0;
    .tab_item {
      display: block;
      width: 100%;
      -webkit-box-flex: 1;
      flex: 1;
      position: relative;
      padding: 2px 0;
      text-align: center;
      &:first-child::after {
        content: "";
        width: 0;
        display: block;
        border-right: 1px solid #ddd;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
      }
      .num {
        margin-bottom: 3px;
        font-size: 0.7rem;
      }
      .desc {
        margin-top: 3px;
        font-size: 10px;
        color: #999;
      }
    }
    .evaluation {
      .evaluation_wrap {
        text-align: left;
        font-size: 10px;
        .evaluation_list {
          color: #e4393c;
          .list_head {
            margin-right: 5px;
            color: #999;
          }
        }
        div.low {
          color: #18c461;
        }
      }
    }
  }
  .shop_bottom {
    display: flex;
    margin: 0;
    .bottom_btn {
      color: #333;
      display: block;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      min-width: 0;
      text-align: center;
      border-radius: 4px;
      position: relative;
      border: none;
      margin: 0 10px 0 0;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      background-color: #fff;
      &::after {
        content: "";
        display: block;
        border: 1px solid #ccc;
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        bottom: -100%;
        right: -100%;
        border-radius: 4px;
        width: 100%;
        height: 100%;
      }
      i {
        position: relative;
        display: inline-block;
        background-image: url(https://wq.360buyimg.com/fd/base/img/detail/sprite/shop/sprit_shop_icons.png?20144141932);
        background-size: 30px 30px;
        background-repeat: no-repeat;
        top: -2px;
        width: 13px;
        height: 13px;
        margin-right: 4px;
        vertical-align: middle;
      }
      .icon_unfavor {
        background-position: -1px -1px;
      }
      .icon_shop {
        background-position: -1px -16px;
      }
    }
  }
}
</style>