
<template>
  <div>
    <product-param :name="products.name">
      <template v-slot:buy>
        <button class="btn" @click="buy">立即购买</button>
      </template>
    </product-param>
    <div class="content">
      在这里展示产品的页面
      <div class="item-image">
        <img :src="products.mainImage" alt />
      </div>
      <div class="item-description"></div>
    </div>
  </div>
</template>

<script>
import ProductParam from "../components/ProductParam.vue";

export default {
  name: "product",
  components: { ProductParam },
  data() {
    return {
      products: {}
    };
  },
  mounted() {
    this.getProductInfo();
  },
  methods: {
    getProductInfo() {
      let id = this.$route.params.id;
      this.axios.get(`/products/${id}`).then(res => {
        this.products = res;
        console.log("获取的产品信息", res);
      });
    },

    buy() {
      /**
       * 点击立即购买之后跳转到购买页面
       */
      const id = this.$route.params.id;
      this.$router.push(`/detail/${id}`);
    }
  }
};
</script>

<style lang="scss">
.btn {
  margin-left: 12px;
  display: inline-block;
}

.content {
  .item-image {
  }
}
</style>