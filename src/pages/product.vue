<template>
  <div>
    <product-param name="name">
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
    <div style="height: 1000px;"></div>
  </div>
</template>

<script>
import ProductParam from "../components/ProductParam.vue";

export default {
  name: "product",
  components: { ProductParam },
};

</script>

<style lang="scss">
.btn {
  margin-left: 12px;
  display: inline-block;
}
</style>