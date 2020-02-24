<template>
  <div class="vip_bar">
    <div class="vip">
      <i class="vip_icon"></i>
    </div>
    <span class="text">开通PLUS会员,商品立打9.8折起</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.vip_bar {
  background-color: #eff1f3;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  position: relative;
  color: #333;
  height: auto;
  padding: 7px 10px;
  line-height: 18px;
  overflow: hidden;
  .vip {
    display: inline-block;
    position: relative;
    color: #fff;
    border-radius: 2px;
    min-width: 16px;
    font-size: 10px;
    line-height: 15px;
    vertical-align: middle;
    margin-top: -2px;
    margin-right: 5px;
    text-align: center;
    background: none;
    height: 14px;
    .vip_icon {
      display: inline-block;
      vertical-align: middle;
      width: 45px;
      height: 14px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAcCAMAAADWd1hBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA2UExURUFBQaafaWRiT+vghfbriZCLYEdHRP/zjU9OSP/0jnd0V9nPfcvBeLmxcP/zjnt7e9vb2/f39ySDnAAAAAGGSURBVEjH5ZbZlsMgCIZdEETN0vd/2SGozdK0F3Pq3AzntBFNPvEXEs1jXaL5usVlfZh1AFjhq1nMIFtMHIUeBv5bSyQWvkm0rl7Rb2hoOjn7BbSnonBLlAvNRcGFfBsm3iYsqTrUn+qtdg3ZQ79pt0kelk4nhBRB/kwq0p6ODEyQ6jz3aEsBTcx0YYdNB8qZyKrjCx1Fbwxb3kTNdeWbjm72Z7RTEjF7FC9LQ7yZ3JkR/CdBgPBWbCCw2xbqahwQq9vv5S7mBc0nQWZ7yxYBIoaeKDEERBHoHJ7z4T7qPrOH3AnH7OOr/G7fRc0Qhhw+Z4iElCxM+FIqfCmUwHvp7LST09U9DGPaA+pddO2yMz8XN9+js+aEiTX/UwPBVZG8K9vVB/M5agx1XS3QmvU36EnK+2RSoM9BPqJ3BzNIlbgMrhJsNGjp5e0QNJVltySda4qzfRe1jnuNOwP5qQknDvj8+m6Llaw26xTXlPm14aQ4JTOx/Aqa/2gDP7sDDwsDjzjjDmY/5ZkOEOZokVEAAAAASUVORK5CYII=)
        no-repeat;
      background-size: 45px 14px;
    }
  }
  .text {
    font-size: 12px;
    flex: 1;
    margin-right: 5px;
  }
}
</style>