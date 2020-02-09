<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">au property</a>
          <a href="javascript:;">buying property</a>
          <a href="javascript:;">services</a>
          <a href="javascript:;">rules</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">sign in</a>
          <a href="javascript:;">sign up</a>
          <a href="javascript:;" class="my-cart">
            <span class="icon-cart"></span>cart
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu"></div>
        <div class="header-search"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header"
};
</script>

<style lang="scss">
@import "../assets/scss/base.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          display: inline-block;
          height: 12px;
          width: 16px;
          background: url("../../public/imgs/icon-cart.png") no-repeat center;
          background-size: contain;
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      background-color: pink;
      .header-logo {
        display: inline-block;
        height: 55px;
        width: 55px;
        background-color: #ff6600;
        /**
         * note: 下面这一块太重要了真的是知识点！！！ 
         * (^ ^) before after 的使用
         */
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: " ";
            display: inline-block;
            background: url("../../public/imgs/mi-logo.png") no-repeat center;
            background-size: contain;
            width: 55px;
            height: 55px;
            transition: margin 0.2s;
          }
          &:after {
            content: " ";
            display: inline-block;
            background: url("../../public/imgs/mi-home.png") no-repeat center;
            background-size: contain;
            width: 55px;
            height: 55px;
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
    }
  }
}
</style>