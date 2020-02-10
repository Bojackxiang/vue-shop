<template>
  <div>
    <nav-header></nav-header> <!--这个是 component 中的name-->
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'
import ServiceBar from '../components/ServiceBar.vue';

export default {
  name: "home",
  components:{ NavHeader, NavFooter, ServiceBar},

};
</script>