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
    // this.axios.get("/user/login").then(mockResp => {
    //   this.res = mockResp;
    // });
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
