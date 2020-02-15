<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <span>{{title}}</span>
        <slot name="tip"></slot>
      </div>
      <div class="username">
        <a href="javascript:;">{{username}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "order-header",
  props: ["title",],
  computed: {
    ...mapState(['username']),
  },
  mounted(){

  }
};
</script>

<style lang="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.order-header {
  padding: 30px 0;
  .container {
    .header-logo {
      float: left;
    }
    .title,
    .username {
      display: inline-block;
      height: 55px;
      line-height: 55px;
      span {
        display: inline-block;
        vertical-align: middle;

      }
    }
    .title {
      font-size: 28px;
      float: left;
      margin-left: 5px;
      span {
        font-size: 17px;
        margin-left: 17px;
        color: #999999;
        font-weight: bold;
      }
    }
    .username {
      font-size: 28px;
      float: right;
      a {
        font-size: 17px;
        margin-left: 17px;
        color: #999999;
        font-weight: bold;
      }
    }
  }
}
</style>