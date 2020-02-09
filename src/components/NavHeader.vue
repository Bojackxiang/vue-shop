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
        <div class="header-menu">
          <div class="item-menu">
            <span>phones</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>red mi</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>tv</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>phones</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyboard" />
            <a href="javascript:;"></a>
            <!--阻止刷新-->
          </div>
        </div>
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
@import '../assets/scss/mixin.scss';
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex()
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
    height: 112px;
    @include flex();
    .container {
      @include flex();
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
            content: " "; // 这个content也是必须要加的，是一个占位
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
      .header-menu {
        display: inline-block;
        width: 500px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          display: flex;
          align-items:center;
          border: 1px solid #e0e0e0;
          height: 50px;
          input {
            border: none;
            display: flex;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 10px;
          }
          a{
            display: inline-block;
            width: 18px; 
            height: 18px;
            background: url('../../public/imgs/icon-search.png') no-repeat center;
            background-size: contain;
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>