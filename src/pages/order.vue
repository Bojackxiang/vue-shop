<template>
  <div id="order">
    <order-header></order-header>order page
    <div id="content"></div>
    <router-view></router-view>

    <div id="footer">
      <order-footer></order-footer>
    </div>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderHeader.vue";
import OrderFooter from "../components/NavFooter";

export default {
  components: { OrderHeader, OrderFooter }
};
</script>

<style lang="scss">
#order {
  position: relative;
  min-height: 100vh;
  #content{
    height: 1000px;
  }
  #footer{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>>
