<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>{{title}}</h2>
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
  }
};
</script>

<style lang="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.order-header {
  height: 112px;
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
      h2 {
        display: inline-block;
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