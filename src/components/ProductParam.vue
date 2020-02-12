<template>
  <div class="nav-bar">
    <div class="container">
      <div class="pro-title">小米手机</div>
      <div class="pro-param">
        <a href="javascript:;">
          概述
          <span>|</span>
        </a>
        <a href="javascript:;">
          参数
          <span>|</span>
        </a>
        <a href="javascript:;">
          用户评价
        </a>
        <slot name="buy"></slot>
        <!-- 插槽的概念就是在父类中直接定义template -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  props: { name }
};
</script>

<style lang='scss'>
.nav-bar {
  height: 70px;
  line-height: 70px;
  border: 1px solid #e5e5e5;
  .container {
    display: flex;
    justify-content: space-between;
    .pro-title {
      font-size: 18px;
      color: #333;
      font-weight: bold;
    }
    .pro-param {
      font-size: 14px;
      span {
        margin: 0 10px;
      }
      a {
        color: #666666;
      }
    }
  }
}
</style>