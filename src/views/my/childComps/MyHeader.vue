<template>
    <div class="header_con">
        <div class="my_header shadow">
          <div class="user_info">
            <div class="avatar_wrap">
              <div class="avatar">
                <div class="image"></div>
              </div>
            </div>
            <div class="personal_wrap">
              <div class="name_wrap">
                <div>
                  <span class="my_header_name">{{user.username||user.phone}}</span>
                  <span class="my_header_name_edit"></span>
                </div>
              </div>
              <div class="pin">用户名:{{user.username}}</div>
              <div class="hor_tips">
                <div class="notice">惊享值9320</div>
                <div class="notice">小鹿信用88.8</div>
              </div>
            </div>
          </div>
          <div class="account_wrap">
            <div class="account_wrap_content">
              <span class="account-icon"></span>
              账户设置
            </div>
          </div>
          <div class="plus_black_wrap">
            <div class="inner">
              <div class="title">
                <div class="plus_title">每月5张运费券</div>
                <div class="plus_subtitle">立即查看</div>
              </div>
              <div class="tip">
                京东PLUS会员
                <span class="keyword">省钱 · 省心 · 尊贵</span>
              </div>
            </div>
          </div>
        </div>
      
    </div>  
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['user'])
  },
}
</script>

<style lang="less" scoped>
.header_con{
  .my_header{
    position: relative;
    overflow: hidden;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 300px 20px;
    border-bottom-left-radius: 300px 20px;
    background: linear-gradient(90deg,#eb3c3c,#ff7459);
    box-sizing: border-box;
    min-height: 110px;
    padding-top: 25px;
    .user_info{
      padding: 0 0 10px 15px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      position: relative;
        .avatar_wrap{
        position: relative;
        flex-shrink: 0;
        .avatar{
          width: 60px;
          height: 60px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,.15);
          border: 1px solid hsla(0,0%,100%,.4);
          border-radius: 60px;
          .image{
            width: 100%;
            height: 100%;
            background-image: url(https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png);
            background-position: 0 0;
            background-size: 100%;
              }
            }
          }
         .personal_wrap{
          -webkit-box-flex: 1;
          flex: 1;
          padding: 0 0 0 15px;
          position: relative;
          .name_wrap{
            font-size: 14px;
            color: #fff;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            .my_header_name{
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .my_header_name_edit{
              flex-shrink: 0;
              margin: 0 0 0 4px;
              width: 12px;
              height: 12px;
              vertical-align: middle;
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTP///////////////////////////////////////////////////////////////8/RimEAAAAQdFJOUwB3a5m4Veb3H6QDji7WgAgChXPEAAAApElEQVQoz3WSSwLDIAhEMUHBtkm4/2mL+Ld1VvGN4gQByGKHgehCxzCKI0lVHCzfsYp85YcsOsp++ZGd4anOaccp3RMnXgpHPbDw4jC4MQ8+apzp0wF2/v4EdYwLQugcQJ3MJQANXJ26pGYYf7WIVEstXEthzzlwvTzH5YVrXPvBa+VpZ1rfmmfisTTR39fUXWvitu37h9o/bRoG+TsMbXxCH58vmgwXoPcjyaAAAAAASUVORK5CYII=);
              background-size: 12px;
              display: inline-block;
            }
          }
          .pin{
              font-size: 12px;
              color: hsla(0,0%,100%,.7);
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
          }
          .hor_tips{
            display: flex;
            flex-wrap: wrap;
            -webkit-box-align: center;
            align-items: center;
            .notice{
              max-width: 150px;
              height: 16px;
              line-height: 16px;
              padding: 0 8px;
              margin: 6px 8px 0 0;
              border-radius: 10px;
              font-size: 10px;
              color: #fff;
              background: #c8483f;
              text-align: center;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-family: JDZH-Regular;
            }
          }
        }
    }
    .account_wrap{
      position: absolute;
      right: 15px;
      top: 0;
      height: 40px;
      line-height: 40px;
      overflow: hidden;
      .account_wrap_content{
        color: rgba(76,0,0,.7);
        font-size: 12px;
        padding-left: 15px;
        position: relative;
        height: 40px;
        line-height: 40px;
        .account-icon{
          display: inline-block;
          width: 12px;
          height: 12px;
          position: relative;
          top: 2px;
          right: 2px;
          background-image: url(https://img11.360buyimg.com/jdphoto/s26x26_jfs/t14701/329/1603887827/338/bdda401f/5a53570bN44d2baad.png);
          background-position: 0 0;
          background-size: 100%;
        }
      }
    }
    .plus_black_wrap{
      width: 100%;
      height: 37px;
      box-sizing: border-box;
      padding: 0 20px;
      color: #ffe678;
      font-size: 12px;
      .inner{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 7px 10px 10px;
        background-image: url(https://img11.360buyimg.com/jdphoto/s710x134_jfs/t1/43463/14/4447/108469/5cd2c002Ee4dcb4c9/445d4efb8eee08e9.png);
        background-size: 100% 67px;
        .title{
          display: flex;
          -webkit-box-pack: justify;
          justify-content: space-between;
          .plus_title{
            position: relative;
            padding-left: 78px;
            -webkit-box-flex: 1;
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &::before{
              position: absolute;
              content: "";
              width: 57px;
              height: 12px;
              left: 0;
              top: 3px;
              background: url(https://img11.360buyimg.com/jdphoto/s113x21_jfs/t1/44130/31/4355/2489/5cd2d9bdE7fd63a96/155d2b916c3ede73.png) no-repeat 50%;
              background-size: 100% 100%;
            }
            &::after{
              position: absolute;
              content: "";
              width: 1px;
              height: 7px;
              background: #ffe678;
              left: 67px;
              top: 5px;
            }
          }
          .plus_subtitle{
            position: relative;
            padding-right: 10px;
            flex-shrink: 0;
            height: 18px;
          }
        }
        .tip{
          margin-top:10px;
        }
      }
    }
  }
  .myheader.shadow{
  box-shadow: 0 2px 4px rgba(228,57,60,.4);
  }
  
}
</style>