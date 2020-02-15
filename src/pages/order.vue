<template>
  <div id="order">
    <order-header :title="title"></order-header>

    <div id="content">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>

    <div id="footer">
      <order-footer></order-footer>
    </div>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderHeader.vue";
import OrderFooter from "../components/NavFooter";

export default {
  components: { OrderHeader, OrderFooter },
  data() {
    console.log("data is running ");
    return {};
  },
  mounted() {
    console.log('mounted is running ...')
  },

  computed: {
    title() {
      console.log("computed is running ");
      let title = "";
      switch (this.$route.path) {
        case "/order/":
          title = "订单确认";
          break;
        case "/order/list":
          title = "订单列表";
          break;
        case "/order/confirm":
          title = "订单确认";
          break;
        default:
          break;
      }
      return title;
    }
  },
  methods: {}
};
</script>

<style lang="scss">
@import "../assets/scss/config.scss";
#order {
  // position: relative;
  min-height: 100vh;
  // margin-bottom: 20px;
  #content {
    background-color: #f5f5f5;
    height: 100%;
  }
  #footer {
    // position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>>
