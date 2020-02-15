
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import util from "./util";

export default {
  data() {
    return {
      res: {}
    };
  },
  mounted() {
    if (this.$cookie.get("userId")) {
      this.getUser();
      this.getCart();
    }
  },
  methods: {
    // * 在这里尝试拉取用户信息
    // ! 这里make request的时候数据存在延迟
    /**
     * 所以这里请求已经发送出去了，但是vuex里面却没有更新
     */
    getUser() {
      util.getUser(this.axios, this.$store);
    },
    // * 获取用户的购物车的信息
    getCart() {
      util.getCart(this.axios, this.$store);
    }
  }
};
</script>

<style lang="sass">
  @import './assets/scss/reset.scss';
  @import './assets/scss/config.scss';
  @import './assets/scss/mixin.scss';
  @import './assets/scss/modal.scss';
  @import './assets/scss/button.scss';
</style>


