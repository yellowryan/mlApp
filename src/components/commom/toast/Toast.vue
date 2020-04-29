<template>
  <div class="alert_block" v-if="showBlock">
    <div class="alert">
      <i class="icon_success"></i>
      <p class="message">{{message}}</p>
      <div class="btns" v-if="showBtns">
        <a href="javascript:;" class="btn btn_2">返回</a>
        <a href="javascript:;" class="btn btn_1">删除</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      showBlock: false,
      showBtns: false,
    };
  },
  methods: {
    addCart(message, duration = 2000,fun) {
      this.showBlock = true;
      this.message = message;
      const self = this;
      setTimeout(() => {
        this.showBlock = false;
        this.message = "";
        fun&&fun.call(self)
      }, duration);
    }
  }
};
</script>

<style lang="less">
.alert_block {
  text-align: center;
  .alert {
    box-sizing: border-box;
    padding: 20px 15px 15px;
    text-align: center;
    border-radius: 6px;
    color: #333;
    overflow: hidden;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.3);
    z-index: 899;
    position: fixed;
    left: 50%;
    top: 50%;
    margin: auto;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: auto;
    min-width: 128px;
    max-width: 270px;
    background-color: rgba(0, 0, 0, 0.7);
    padding-top: 15px;
    .icon_success {
      display: block;
      width: 50px;
      height: 50px;
      margin: 5px auto 10px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTP///////////////////////////////////////////////////////////////8/RimEAAAAQdFJOUwAVCMTyVGog4qLUkCo9ga9ti6GsAAADJklEQVRo3r2aSYKEIAxFmScFvf9puw1oaZUoUYBNL9rySfITCIGQwkG9ChN3RsxCGMenoDwlNYeW1swnw1hZCTQGN18MF8a3BKr4fDu4ejMfPYjtTcLZIP2oKWNUj14G63b/HPRThN3ewYNnvw8wH/gKEvYJhg0rYpLs4jE5rc8NDMuQSU7u3t5UJWUYibNUcrcr/JlMGI6wmRQoxA4jJM4bQuFsrATCMzSaakKrRUcJ8IKg0SZO44no42TM7eeNwHAPU8UInjE3v/bwLZY9zREMAlj4yy8BxvAm24FqxHjnj/Aup4Zrv1BgKPJyKKBkNMZ4FUaicJa35kAqjPybJOiqzmoKGjvJMHoRlmN1IGyJF/HrfH6jPGRULp/MT40lSbVx9j5m6jnk4xbDfvQgqm7WqPhWmK4UIT/Ror/m5kjl4Y4egIn42hB/nMpwprf3g++9Aj6S9SFyrybVwiOrV9RuWqoFRH3cMC6zYi0gbPHDuC1lljQZdltoXRW3U5ZxvVuDRFRYp063KCKFykKbatjlLNKmZCVbQVuwEk4ZfS3+NpsC3jFOd0GLcs2/w+KfNow4BQppjDdjQKB7sNrQjAG5V0EoqmYMmEMAkflmDPDGBEYbmzFAXhySCm3GAPE60BhrxiAMImTJLu0YhEBmFI/TYxEjvv9xDi5jREs9NVchI04i73hGKzCi47MS/q+2h9eMJOFsMPKLpb+YkYIxm1amfHlXzkhpJZsgY1Fv3zFSgsyn+hwFw0ip/mLROqegGGnRulp+zyg4Rlp+LzcSvxQkI20krrdE3xQkY9sSXW/ujhQsY9vc3WxT9xQ0AzIjLdhwfyh4xrbhvi0dEoXhGbvS4bYIihSDZ+yKoPtyTq99IBxjX84VFKaJgmQcCtOCEhsoWMahxC45LNBccOzB+uGwoM+xR5cDnD5HUV0O1focD3Y56OxzZNvn8LnLMXqfhkC91ka4aG10adL0aTf1aZz1aQH2aWb2acv2aTDvWuU4b6Ba5aRL05/0ub5AulzEIH2ulBDk5ZjZPr6D0/6aT7R38wtLMVU0v3qVzJa/RKZJzfHmOtwfmAFYjRpHm7sAAAAASUVORK5CYII=)
        no-repeat;
      background-size: 50px auto;
    }
    .message {
      max-height: 200px;
      overflow: auto;
      font-size: 14px;
      color: #fff;
    }
    .btns {
      display: flex;
      position: relative;
      margin: 20px 0 0;
      .btn {
        position: relative;
        width: 100px;
        height: 30px;
        line-height: 30px;
        background: #fff;
        color: #333;
        font-size: 14px;
        border: 1px solid #ccc;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);
        border-radius: 20px;
        flex: 1;
        text-align: center;
      }
      .btn1 {
        color: #fff;
        border: none;
        background: #f2270c;
        margin-left: 15px;
      }
    }
  }
}
</style>