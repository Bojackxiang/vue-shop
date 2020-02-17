<template>
  <div class="order-list">
    <Loading v-if="isLoadingDisplay" />
    <NoDataVue v-if="isLoadingDisplay==false && list.length === 0 " />
    <div class="wrapper">
      <div class="container">
        <div
          class="order-box"
          v-if="list.length > 0"
        >
          <div class="order" v-for="(item, index) in list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{item.createTime}}
                <span>|</span>
                {{item.receiverName}}
                <span>|</span>
                订单号：{{item.orderNo}}
                <span>|</span>
                {{item.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{item.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(order, index) in item.orderItemVoList" :key="index">
                  <div class="good-img">
                    <img v-lazy="order.productImage" alt />
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{order.productName}}</div>
                    <div class="p-money">{{order.totalPrice}} X {{order.quantity}}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr">
                <a href="javascript:;" @click="goToPay(item.orderNo)">{{item.statusDesc}}</a>
              </div>
            </div>
          </div>

          <div class="scroll-more"
            v-infinite-scroll="scrollMore"
            infinite-scroll-disabled="true"
            infinite-scroll-distance="410"
            v-if="false"
          >
            <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" alt="" v-show="loading">
          </div>
        </div>
        <!-- // ============================================== element ui 分页器 -->
        <div class="pagination-wrap" v-if="isLoadingDisplay === false">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            :pageSize="pageSize"
            @current-change="handleChange"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from "../components/Loading.vue";
import NoDataVue from "../components/NoData.vue";
import { Pagination } from "element-ui";
import infiniteScroll from "vue-infinite-scroll";

export default {
  name: "order-list",
  directives: { infiniteScroll },
  // ========================= components
  components: {
    Loading,
    NoDataVue,
    [Pagination.name]: Pagination
  },
  // ========================= components
  data() {
    return {
      list: [],
      isLoadingDisplay: true,
      pageSize: 10, // => 一页多少个数据
      total: 0,
      currentPage: 1,
      busy: false,
    };
  },
  // ========================= methods
  methods: {
    // => initial the data ...
    getOrderList() {
      console.log(this.currentPage);
      this.axios
        .get("/orders", {
          params: {
            pageNum: this.currentPage
          }
        })
        .then(orderResp => {
          console.log(orderResp);
          this.isLoadingDisplay = false;
          this.list = orderResp.list;
          this.total = orderResp.total;
        });
    },

    // => user go to the pay page
    goToPay(orderId) {
      // this.$router.push({
      //   name: '',
      //   query: {
      //     orderNo: ''
      //   }
      // })
      this.$router.push({
        path: `/order/pay`,
        query: {
          orderNo: orderId
        }
      });
    },

    // => get the page and reset the page
    handleChange(pageNum) {
      this.currentPage = pageNum;
      this.getOrderList();
    },

    // => infinite scroll
    scrollMore() {
      console.log("loading more");
      this.busy = true;
      setTimeout(() => {
        this.currentPage ++ ;
        this.getOrderList()
      }, 500);
    }
  },
  // ========================= methods
  mounted() {
    this.getOrderList();
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";

.order-list {
  .wrapper {
    background-color: $colorJ;
    padding-top: 33px;
    padding-bottom: 110px;
    .order-box {
      .order {
        background-color: $colorG;
        margin-bottom: 31px;
        &:last-child {
          margin-bottom: 0;
        }
        .order-title {
          // @include height(74px);
          background-color: $colorK;
          padding: 0 43px;
          font-size: 16px;
          color: $colorC;
          .item-info {
            span {
              margin: 0 9px;
            }
          }
          .money {
            font-size: 26px;
            color: $colorB;
          }
        }
        .order-content {
          padding: 0 43px;
          .good-box {
            width: 88%;
            .good-list {
              display: flex;
              align-items: center;
              height: 145px;
              .good-img {
                width: 112px;
                img {
                  width: 100%;
                }
              }
              .good-name {
                font-size: 20px;
                color: $colorB;
              }
            }
          }
          .good-state {
            // @include height(145px);
            font-size: 20px;
            color: $colorA;
            a {
              color: $colorA;
            }
          }
        }
      }
      .pagination {
        text-align: right;
      }
      .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #ff6600;
      }
      .el-button--primary {
        background-color: #ff6600;
        border-color: #ff6600;
      }
      .load-more,
      .scroll-more {
        text-align: center;
      }
    }
    .pagination-wrap {
      text-align: center;
      .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #ff6600;
      }
    }
  }
}
</style>