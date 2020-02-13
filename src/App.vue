<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import storage from './storage/index'

export default {
  data() {
    return {
      res: {}
    };
  },
  mounted() {
    this.getUser();
    this.getCart();
  },
  methods: {
    // * 在这里尝试拉取用户信息
    // ! 这里make request的时候数据存在延迟
    /**
     * 所以这里请求已经发送出去了，但是vuex里面却没有更新
     */
    getUser() {
      console.log("trying to get user");
      this.axios.get("/user/").then(resp => {
        /**
         * 如果返回的值是undefined => 意味着user没有login
         */
        if (!(resp === undefined)) {
          this.$store.dispatch("saveUserName", resp.username); // note: step 1 => 这里传给actions
        }
      });
      // todo: 保存到vuex里面
    },
    // * 获取用户的购物车的信息
    getCart() {
      this.axios.get("/carts/products/sum").then(res => {
        this.$store.dispatch("cartCount", res);
      });
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
