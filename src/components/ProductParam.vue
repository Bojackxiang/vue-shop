<template>
  <div class="nav-bar" :class="{'is_fixed':isFixed}">
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
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
        <!-- 插槽的概念就是在父类中直接定义template -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  props: { name },
  data() {
    return {
      isFixed: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
    /**
     * 这个init height 在组件销毁的时候需要取消对event的监听
     */
  },
  methods: {
    initHeight() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.isFixed = scrollTop >= 153 ? true : false;
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.initHeight, false);
    /**
     * 同样我们也要销毁事件
     */
  }
};
</script>

<style lang='scss'>
.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid #e5e5e5;
  background-color: white;
  &.is_fixed {
    position: fixed;
    //! 加了position之后， 内部的东西就没有宽度了，所以position之后，我们都要去啊顶宽度
    top: 0;
    width: 100%;
    box-shadow: 0 5px 10px #cccccc;
  }
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