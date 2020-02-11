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
  },
  methods:{
    // * 在这里尝试拉取用户信息
    getUser(){
      this.axios.get('/user/')
      .then(resp => {
        console.log(resp)
      })
      // todo: 保存到vuex里面
    },
    // * 获取用户的购物车的信息
    getCart(){
      this.axios.get('/carts/products/sum')
      .then(res => {
        console.log(res)
      })
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
