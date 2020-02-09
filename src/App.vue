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
  @import './assets/scss/reset.scss'
</style>
