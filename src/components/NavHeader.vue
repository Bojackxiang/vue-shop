<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">au property</a>
          <a href="javascript:;">buying property</a>
          <a href="javascript:;">services</a>
          <a href="javascript:;">rules</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" v-if="!username" @click="login">登陆</a>
          <a href="javascript:;" v-if="!username">注册</a>
          <a href="javascript:;" class="my-cart" @click="goToCart">
            <span class="icon-cart"></span>cart {{cartCount}}
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <!-- 幕布的button -->
            <span>phones</span>
            <!-- 手机菜单展开图显示 -->
            <div class="children">
              <!-- 目录的下拉部分 -->
              <!-- 属性是动态的（不是直接给上去的时候）就要加 -> :src -> 来做属性绑定 -->
              <ul>
                <li class="product" v-for="(item, index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" alt="图片" />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}元</div>
                  </a>
                </li>
              </ul>
              <!-- 目录的下拉部分 (end)-->
            </div>
          </div>
          <div class="item-menu">
            <span>red mi</span>
            <!-- 红米手机展开图显示 -->
            <div class="children">
              <!-- 目录的下拉部分 -->
              <!-- 属性是动态的（不是直接给上去的时候）就要加 -> :src -> 来做属性绑定 -->
              <ul>
                <li class="product" v-for="(item, index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" alt="图片" />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}元</div>
                  </a>
                </li>
              </ul>
              <!-- 目录的下拉部分 (end)-->
            </div>
          </div>
          <div class="item-menu">
            <span>tv</span>
          </div>
          <div class="item-menu">
            <span>phones</span>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyboard" />
            <a href="javascript:;"></a>
            <!--阻止刷新-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: "nav-header",
  data() {
    return {
      phoneList: []
    };
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    getProductList() {
      this.axios
        .get("/products", {
          params:{
            categoryId:'100012',
            pageSize:6
          }
        })
        .then(res => {
          this.phoneList = res.list
        });
    },
    goToCart(){
      this.$router.push('/cart').catch(() => {})
    },
    login(){
      this.$router.push('/login').catch(() => {

      }) 
    }
  },
  filters: {
    currency(val){
      if (!val) return "0.00"
      return `¥ ${val.toFixed(2)}元`;
    }
  },
  computed: {
    ...mapState(['username', 'cartCount']),
  }
};
</script>

<style lang="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          height: 12px;
          width: 16px;
          @include backgroundImg("../../public/imgs/icon-cart.png");
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    height: 112px;
    @include flex();
    .container {
      position: relative; // 这里我不是很明白，为什么外面relative，里面就能正常显示
      @include flex();
      .header-logo {
        display: inline-block;
        height: 55px;
        width: 55px;
        background-color: #ff6600;
        /**
         * note: 下面这一块太重要了真的是知识点！！！ 
         * before after 的使用
         */
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: " "; // 这个content也是必须要加的，是一个占位
            @include backgroundImg("../../public/imgs/mi-logo.png");
            width: 55px;
            height: 55px;
            transition: margin 0.2s;
          }
          &:after {
            content: " ";
            @include backgroundImg("../../public/imgs/mi-home.png");
            width: 55px;
            height: 55px;
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 500px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              // z-index: 999;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            height: 0;
            top: 112px;
            left: 0;
            width: 1226px;
            border-top: 1px solid #e55555;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            line-height: 12px;
            opacity: 0;
            overflow: hidden;
            transition: all 0.5s;
            background-color: white;
            .product {
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              text-align: center;
              position: relative; // 再一次出现： 用relative的情况解决了absolute的问题
              img {
                height: 111px;
                width: auto;
                display: block;
                margin: 0 auto;
                margin-top: 26px;
              }
              a {
                display: inline-block; // 当a没有办法装满整个子元素的时候，使用inline-block就可以了
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              &:before {
                content: " ";
                position: absolute; // note: 子类元素都会找上一个position在哪里，然后根据上一个position来进行定位
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child:before {
                // note: 把最后一个before元素隐藏起来
                display: none;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          display: flex;
          align-items: center;
          border: 1px solid #e0e0e0;
          height: 50px;
          input {
            border: none;
            display: flex;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 10px;
          }
          a {
            width: 18px;
            height: 18px;
            @include backgroundImg("../../public/imgs/icon-search.png");
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>