<template>
  <div class="index">
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

      <!-- 广告位 x4 -->
      <div class="ads-box">
        <a v-for="(ad, index) in ads" :key="index" :href="`/#/product/${ad.id}`">
          <img :src="ad.image" alt />
        </a>
      </div>
      <!-- 广告位 x4 end-->

      <!-- 广告banner -->
      <div class="banner">
        <a href>
          <img src="/imgs/banner-1.png" alt />
        </a>
      </div>
      <!-- 广告banner end-->

      <!-- 产品和竖着的banner -->
      <div class="product-box">
        <h2>手机</h2>
        <div class="wrapper">
          <!-- 左边的banner -->
          <div class="banner-left">
            <a href="`/#/products/35`">
              <img src="/imgs/mix-alpha.jpg" alt />
            </a>
          </div>
          <!-- 左边的banner end-->

          <!-- 产品列表 -->
          <div class="list-box">
            <div class="list" v-for="(row, index) in phoneList" :key="index">
              <div class="item" v-for="(col, index) in row" :key="index">
                <span :class="index%2==0 ? 'new-pro' : 'kill-pro'">新品</span>
                <div class="item-img">
                  <img :src="col.mainImage" alt />
                </div>
                <div class="item-info">
                  <h3>{{col.name}}</h3>
                  <p>{{col.subtitle}}</p>
                  <p class="price">{{col.price}}元</p>
                </div>
              </div>
            </div>
          </div>
          <!-- 产品列表 end-->
        </div>
      </div>
      <!-- 产品和竖着的banner end-->

      <!-- model 的控制 -->
      <Modal modalTitle="信息框" sureText="查看购物车" btnType="1" modalType="middle" :showModal="showModal">
        <!-- ! 插槽的使用方式: 新知识 -->
        <template v-solt:body>  
          <p>商品添加成功</p>
        </template>
      </Modal>
      <!-- model 的控制 end-->
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Modal from "../components/Modal.vue";

export default {
  name: "index",
  components: { swiper, swiperSlide, Modal },
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
      ],
      ads: [
        {
          id: 33,
          image: "/imgs/ads/ads-1.png"
        },
        {
          id: 48,
          image: "/imgs/ads/ads-2.jpg"
        },
        {
          id: 45,
          image: "/imgs/ads/ads-3.png"
        },
        {
          id: 47,
          image: "/imgs/ads/ads-4.jpg"
        }
      ],
      phoneList: [],
      showModal: true,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    slideSwitch() {
      console.log("hello");
    },
    init() {
      this.axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 8
          }
        })
        .then(data => {
          this.phoneList = [data.list.slice(0, 4), data.list.slice(4, 8)];
        });
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
              .children {
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
              ul {
                display: flex;
                justify-content: space-between;
                height: 75px;
                li {
                  height: 75px;
                  line-height: 75px;
                  flex: 1;
                  padding-left: 23px;
                }
                img {
                  width: 42px;
                  height: 35px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
                a {
                  color: $colorB;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }
    .ads-box {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      a {
        img {
          height: 160px;
        }
      }
    }
    .banner {
      width: 100%;
      margin-top: 30px;
      a {
        img {
          width: 100%;
        }
      }
    }
    .product-box {
      // list box general 设置
      background-color: $colorJ;
      padding: 30px 0 50px;
      h2 {
        // 手机的字体的大小设置
        font-size: $fontF;
        height: 21px;
        line-height: 21px;
        color: $colorB;
        margin-bottom: 20px;
      }
      .wrapper {
        // 包裹着leftbanner和右边的 产品列表的东西
        display: flex;
        .banner-left {
          margin-right: 16px;
          img {
            width: 224px;
            height: 619px;
          }
        }
        .list-box {
          .list {
            display: flex;
            justify-content: space-between;
            width: 986px; // note: list 要撑开才能完美的显示flex
            margin-bottom: 14px;
            &:last-child {
              margin-bottom: 0;
            }
            .item {
              width: 236px;
              height: 302px;
              background-color: $colorG;
              text-align: center;
              span {
                display: inline-block;
                width: 67px;
                height: 24px;
                font-size: 14px;
                line-height: 24px;
                &.new-pro {
                  background-color: #7ecf68;
                  color: white;
                }
                &.kill-pro {
                  background-color: #e82626;
                  color: white;
                }
              }
              .item-img {
                img {
                  height: 195px;
                  width: 100%;
                }
              }
              .item-info {
                h3 {
                  font-size: $fontJ;
                  color: $colorB;
                  line-height: $fontJ;
                  font-weight: bold;
                }
                p {
                  color: $colorD;
                  line-height: 13px;
                  margin: 6px auto 13px;
                }
                .price {
                  // 在price的内容后面加上一个购物车的logo => 在“后面”（after）伪类加上一个购物车
                  // 在存在伪类的时候使用verticle align middle 是最好的使用场景
                  color: #ff2200;
                  font-size: $fontJ;
                  font-weight: bold;
                  cursor: pointer;
                  &:after {
                    content: "";
                    margin-left: 10px;
                    width: 22px;
                    height: 22px;
                    vertical-align: middle;
                    @include backgroundImg("/imgs/icon-cart-hover.png");
                  }
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