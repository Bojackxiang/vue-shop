<template>
  <div class="index">
    <div>我是首页</div>
    <div class="container">
      <!-- 轮播图 -->
      <div class="swiper-box">
        <!-- 轮播图里面的导航菜单 -->
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机电话卡</a>
              <div class="children">
                <ul v-for="(item, index1) in menuList" :key="index1">
                  <li v-for="(product, index2) in item" :key="index2">
                    <a :href="'/#/product/'+product.id">
                      <img :src="product.img ? product.img : '/imgs/item-box-1.png'" alt />
                      {{product.name || "小米9"}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视</a>
              <!-- <div class="children"></div> -->
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本</a>
              <!-- <div class="children"></div> -->
            </li>
            <li class="menu-item">
              <a href="javascript:;">平板</a>
              <!-- <div class="children"></div> -->
            </li>
            <li class="menu-item">
              <a href="javascript:;">盒子</a>
              <!-- <div class="children"></div> -->
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <!-- <div class="children"></div> -->
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行穿戴</a>
              <!-- <div class="children"></div> -->
            </li>
          </ul>
        </div>

        <!-- 实际的轮播图 -->
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="slideSwitch">
          <!-- slides -->
          <swiper-slide v-for="(item, index) in sliderList" :key="index">
            <a href="'/#/product/'+item.id">
              <img class="swpier-image" :src="item.image" alt />
            </a>
          </swiper-slide>
          <!-- slides control  -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!-- 轮播图 end-->

      <div class="ads-box"></div>

      <div class="banner"></div>

      <div class="product-box"></div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "index",
  components: { swiper, swiperSlide },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      sliderList: [
        // note: 如果实在根目录俩面的东西，直接在根目录里面找就可以
        {
          id: "42",
          image: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          image: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          image: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "42",
          image: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "42",
          image: "/imgs/slider/slide-5.jpg"
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米手机"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米手机"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "小米手机"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "小米手机"
          }
        ],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1]
      ]
    };
  },
  methods: {
    slideSwitch() {
      console.log("hello");
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.index {
  .container {
    .swiper-box {
      .swiper-container {
        .swiper-button-prev {
          left: 274px;
        }
        .swiper-slide {
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .nav-menu {
        background-color: #55585a7a;
        width: 264px;
        height: 461px;
        position: absolute;
        z-index: 9;
        box-sizing: border-box;
        .menu-wrap {
          .menu-item {
            height: 50px;
            line-height: 50px;
            padding: 5px;
            padding-left: 25px;
            position: relative;
            a {
              color: white;
              display: block;
              font-size: 16px;
              &:after {
                content: " ";
                width: 15px;
                height: 10px;
                @include backgroundImg("/imgs/icon-arrow.png");
                position: absolute;
                right: 30px;
                top: 17.5px;
              }
            }
            &:hover {
              background-color: $colorA;
              .children{
                // 这边对于现实的控制仅仅限制于 a 下面的子类
                display: block;
              }
            }
            .children {
              width: 972px;
              height: 460px;
              background: $colorG;
              position: absolute;
              top: 0;
              left: 265px;
              display: none;
              ul{
                display: flex;
                justify-content: space-between;
                height: 75px;
                li{
                  height: 75px;
                  line-height: 75px;
                  flex: 1;
                  padding-left: 23px;
                }
                img{
                  width: 42px; 
                  height: 35px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
                a{
                  color: $colorB;
                  font-size:14px;
                }
              }

            }
          }
        }
      }
    }
  }
}
</style>