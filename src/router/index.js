import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/home.vue";
import IndexPage from "../pages/index.vue";
import ProductPage from "../pages/product.vue";
import DetailPage from "../pages/detail.vue";
import CartPage from "../pages/cart.vue";
import OrderPage from "../pages/order.vue";
import OrderConfirmPage from "../pages/orderConfirm.vue";
import OrderListPage from "../pages/orderList.vue";
import OrderPayPage from "../pages/orderpay.vue";
import Alipay from '../pages/alipay.vue'

//note: telling vue to use the router
Vue.use(VueRouter);

const routes = [
  // note: home 页面
  {
    path: "/",
    name: "home",
    redirect: "/index", // ! 进入到 /, 直接跳转到 /index，以方便主页显示
    component: HomePage,
    children: [
      {
        path: "/index",
        name: "index",
        component: IndexPage
      },
      {
        path: "/product/:id",
        name: "product",
        component: ProductPage
      },
      {
        path: "/detail/:id",
        name: "detail",
        component: DetailPage
      }
    ]
  },
  // note: cart 页面
  {
    path: "/cart",
    name: "cart",
    component: CartPage
  },
  // note: order 页面
  {
    path: "/order",
    name: "order",
    component: OrderPage,
    children: [
      {
        path: "/list",
        name: "list",
        component: OrderListPage
      },
      {
        path: "/confirm",
        name: "order-confirm",
        component: OrderConfirmPage
      }
    ]
  },
  {
    path: "/pay",
    name: "order-page",
    component: OrderPayPage
  },
  {
    path: '/alipay',
    name: 'alipay',
    component: Alipay

  }
];

const router = new VueRouter({
  routes
});

export default router;
