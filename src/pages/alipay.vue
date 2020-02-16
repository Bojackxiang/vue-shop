<template>
  <div class="ali-pay">
    <loading v-if="isLoading"/>
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue';

export default {
  name: "alipay",
  components: {Loading},
  // ======================================
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: " ",
      isLoading: true,
    };
  },
  // ======================================
  mounted() {
    this.paySubmit();
  },
  // ======================================
  methods: {
    // => get the pay code
    paySubmit() {
      console.log(this.orderId)
      this.axios
        .post("/pay", {
          orderId: this.orderId,
          orderName: "",
          amount: 0.01, //单位元
          payType: 1 //1支付宝，2微信
        })
        .then(res => {
          this.content = res.content;
          console.log(document.forms)
          setTimeout(() => {
            document.forms[0].submit();
          }, 100);
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
};
</script>

<style>
</style>