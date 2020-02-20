<template>
  <div class="banner">
    <div class="container">
      <div class="banner-container">
        <div class="show-image">
          <img
            src="https://m.360buyimg.com/mobilecms/s750x200_jfs/t1/85973/16/12205/116858/5e440f8bEd509ca96/5875919340527b33.png"
            alt
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  position: relative;
  z-index: 12;
  border-radius: 0.5rem 0.5rem 0 0;
  overflow: hidden;
  .container {
    .banner-container {
      margin-left: -0.5rem;
      margin-right: -0.5rem;
      margin-bottom: -0.5rem;
      width: auto;
      border-radius: 0;
      .show-image {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 5rem;
        img {
          width: 100%;
          height: auto;
          overflow: hidden;
        }
      }
    }
  }
}
</style>>

