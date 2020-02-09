import Vue from "vue";
import router from "./router";
import axios from "axios";
import env from '../env'

import VueAxios from "vue-axios";
import App from "./App.vue";

/**
 * axios的基础折纸
 */
axios.defaults.timeout = 8000;

/**
 * 根据不同的环境变量做不同的请求地址
 */
axios.defaults.baseURL = `${env.baseURL}`;
console.log(axios.defaults.baseURL)

/**
 * request 请求拦截
 */
axios.interceptors.request.use((request) => {
  // todo: 做请求的拦截，这样能够更好的看出来做了什么请求
  console.log(request);
})


/**
 * response 错误拦截：
 * 1: status = 0 : 没有错误
 * 2: status = 10: 为登陆错误
 * 3: 真正的报错
 */
axios.interceptors.response.use(response => {
  console.log(response);
  let res = response.data;
  if (res.status === 0) {
    return res.status;
  } else if (res.status === 10) {
    window.location.href = "/#/login";
  } else {
    alert(res.msg);
  }
});


Vue.config.productionTip = false;
/**
 * axios 的挂载
 */
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
