<template>
  <div class="detail-comment">
    <div class="comment-floor">
      <div class="comment-wrap row">
        <h3 class="tit">评价</h3>
        <i class="icon_promote"></i>
        <p class="good">
          好评
          <strong>{{commentInfo.good}}</strong>
        </p>
        <p class="count">
          共
          <span class="num">{{commentInfo.count}}</span>条
        </p>
      </div>
      <div class="main-content row">
        <div class="content-tag">
          <span v-for="(item,index) of commentInfo.tag" :key="index">{{item}}</span>
        </div>
        <div class="comment-list-wrap">
          <ul class="comment-list">
            <li class="comment-li">
              <div class="cmt_user">
                <img
                  src="https://img11.360buyimg.com/jdphoto/s40x40_jfs/t1/25255/18/10701/1678/5c89f892E78c04688/684d63c0d68e39b1.png"
                  alt
                />
                <span class="user">{{commentContent.userId}}</span>
                <span class="star">
                  <span v-for="index in 5" :key="index">
                    <i class="star_icon" v-if="index <= commentContent.star"></i>
                    <i class="star_icon half" v-else-if="index==Math.round(commentContent.star)"></i>
                    <i class="star_icon empty" v-else></i>
                  </span>
                </span>
                <span class="date">{{commentContent.date}}</span>
              </div>
              <div class="cmt_cnt">{{commentContent.content}}</div>
              <div class="cmt-img">
                <span class="img" v-for="(img, index) of commentContent.imgShow" :key="index">
                  <img :src="img" alt />
                </span>
              </div>
            </li>
          </ul>
          <div class="more-comment">
            <a href="javascript:;" class="more-link">查看全部评价</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    commentContent: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="less" scoped>
.detail-comment {
  .comment-floor {
    display: block;
    position: relative;
    margin-top: 10px;
    background-color: #fff;
    overflow: hidden;
    .row {
      position: relative;
      padding: 0 10px;
      display: block;
      font-size: 12px;
      min-height: 45px;
    }
    .comment-wrap {
      h3.tit {
        font-size: 16px;
        color: #333;
        padding: 10px 0;
        font-weight: 400;
        min-width: 40px;
      }
      .icon_promote {
        background-image: url(https://wq.360buyimg.com/fd/base/img/detail/old/detail_v1_3.png?t=20141125);
        background-repeat: no-repeat;
        background-size: 100px auto;
        width: 20px;
        height: 20px;
        background-position: -80px -35px;
        position: absolute;
        top: 50%;
        margin-top: -10px;
        right: 10px;
      }
      .good,
      .count {
        font-size: 12px;
        position: absolute;
        top: 1px;
        height: 44px;
        line-height: 44px;
      }
      .good {
        left: 52px;
        color: #e4393c;
      }
      .count {
        right: 40px;
        .num {
          margin: 0 4px;
        }
      }
    }
    .main-content {
      .content-tag {
        font-size: 0;
        overflow: hidden;
        position: relative;
        max-height: 63px;
        margin: 0;
        span {
          display: inline-block;
          padding: 0 10px;
          height: 25px;
          border-radius: 3px;
          line-height: 25px;
          font-size: 10px;
          color: #666;
          margin: 0 10px 10px 0;
          background: #fdf0f0;
        }
      }
      .comment-list-wrap {
        .comment-list {
          font-size: 12px;
          color: #333;
          margin-bottom: -1px;
          .comment-li {
            position: relative;
            padding: 10px 0;
            &::after {
              content: "";
              height: 0;
              display: block;
              border-bottom: 1px solid #ddd;
              position: absolute;
              left: 0;
              bottom: 0;
              right: -10px;
              border-bottom-color: #e5e5e5;
            }
            .cmt_user {
              line-height: 25px;
              margin-bottom: 8px;
              img {
                width: 25px;
                height: 25px;
                border-radius: 50%;
                vertical-align: middle;
              }
              .user {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-left: 10px;
                display: inline-block;
                color: #333;
                max-width: 8.2em;
                vertical-align: middle;
              }
              .star {
                position: relative;
                display: inline-block;
                width: 60px;
                height: 10px;
                margin: -2px 0 -2px 5px;
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
                   background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAqCAMAAAD26OlUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABvUExURUdwTOhGSOdfYeHS0uhPUd7d3d3d3d7e3uhXWd3d3eZyc97e3vnX1+V2d/CysuV8fN/f3+aJid7e3uWAgt7e3t7e3uZsbd7e3uuNj+ZsbeaFiN3d3ek7PelAQuV0deKam+SEhd7Ly+GtruZkZeC8vH/0JbAAAAAbdFJOUwD+6Rz64/Rl88q+fgepEZM0QKdyuUzglC7PWKSSRmEAAAEoSURBVDjLvdVpj4MgEAZgtIgo3ldtGds9+v9/Y4OtwiAeu8nufNM8YQLzooT8Q5WUlkdcwmHokgMwBoCbONB4UJAVu5CDgjLacym8oAwPNB4hO21Cf3TwIaVstlwOGm417z0Trjbvc/52cFdQRuGSZvVlVjNU9txmemZ1zAdANcMRi1ZN9OpbSNWXxMWaglCAfShlQLgLPhYwIldHZ/i0nQpJfgS2UwCtsp1AA9Y1WK6aTtveuWdtZL4YpYcXpPhkjEHWeOvfCBbLYDuhlbbOhDfDnVciq+PoXhD33oLxWsrEb+FlLWX2Zrq1lFXuC/1DaKascX2bpkwEKNq4dID8PEvaxrgsuN75oXH/ej6JwA3VikNXm6+Kijlg6vF08QHJwoiFf/ZTeQIST1jxIXrZEgAAAABJRU5ErkJggg==);
                }
                .star_icon.empty {
                  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAqBAMAAAAzGARVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTN3d3d3d3d7e3uHh4d7e3t3d3d3d3e3t7d7e3t3d3d/f397e3uDg4N7e3t3d3XtgE50AAAAPdFJOUwDJ6Wkdfva2ClbYQKMuk0pSLuIAAAD0SURBVCjPY2AgHXgtwRTjkP+IKcj6/38AhuC1//9zMQTl///H0M/8HwgM0ATdQIIpaIL1IMHvWHSj63eCCKogi3nKQwQ/ToELdT/8DwfrZkCEAvP/IwPRHQwM11GFgOBbLYP+fwzwiUEeU/AjKCDQQS4DJ6bgBAaGeHSxr0AnsaMLHgDFw3o0axqQ/A0DEP9zozp9A8Tv9siCn6EBwoMs+AAqyInmSORgRw18VmTBAHyCfNgs4kH3JAO67wvwCTJCIgESMQJQQS5wkpnRCU46C6CCTED2UgcGBpYoIEMBLvjtNIS1Jx8uyKxoAUsszUIGJOUeACU2mFbyRsBWAAAAAElFTkSuQmCC);
                }
              }
              .date {
                float: right;
                color: #999;
                margin-left: -60px;
              }
            }
            .cmt_cnt {
              position: relative;
              line-height: 1.5;
              font-size: 14px;
              margin: 5px 0;
              word-break: break-all;
              white-space: pre-line;
              max-height: 126px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }
            .cmt-img {
              margin-right: -10px;
              padding-bottom: 4px;
              white-space: nowrap;
              overflow: hidden;
              overflow-x: auto;
              .img {
                display: inline-block;
                width: 80px;
                height: 80px;
                margin-right: 5px;
                margin-bottom: 5px;
                border-radius: 2px;
                overflow: hidden;
                text-align: center;
                background: #f3f3f3;
                vertical-align: middle;
                img {
                  width: auto;
                  display: inline-block;
                  height: auto;
                  min-width: 80px;
                  max-height: 80px;
                }
              }
            }
          }
        }
        .more-comment {
          text-align: center;
          background-color: #fff;
          .more-link {
            &::before {
              content: "";
              display: block;
              width: 100%;
              height: 100%;
              border: 2px solid #ddd;
              border-radius: 40px;
              position: absolute;
              top: -2px;
              left: 0;
              pointer-events: none;
              bottom: -100%;
              right: -100%;
            }
            height: 25px;
            line-height: 25px;
            font-size: 12px;
            text-align: center;
            color: #333;
            padding: 0 5px 0 10px;
            margin: 10px 0;
            position: relative;
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>