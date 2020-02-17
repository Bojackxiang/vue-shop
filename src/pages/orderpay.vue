// todo: 研究一下是线开始加载html还是线加载mounted

<template>
  <div class="order-pay">
    <div class="wrapper">
      <div class="container">
        <div class="order-wrap">
          <div class="item-order">
            <div class="icon-succ"></div>
            <div class="order-info">
              <h2>订单提交成功！去付款咯～</h2>
              <p>
                请在
                <span>30分</span>内完成支付, 超时后将取消订单
              </p>
              <p v-if="Object.keys(receiverInfo).length > 0">
                收货信息：{{receiverInfo.receiverName}}
                {{receiverInfo.shippingVo.receiverMobile}}
                {{receiverInfo.shippingVo.receiverProvince}}
                {{receiverInfo.shippingVo.receiverCity}}
                {{receiverInfo.shippingVo.receiverDistrict}}
                {{receiverInfo.shippingVo.receiverAddress}}
                {{receiverInfo.shippingVo.receiverZip}}
              </p>
            </div>
            <div class="order-total">
              <p>
                应付总额：
                <span>{{receiverInfo.payment}}</span>元
              </p>
              <p>
                订单详情
                <em
                  class="icon-down"
                  :class="showDetail?'down':'up'"
                  @click="showDetail=!showDetail"
                ></em>
              </p>
            </div>
          </div>
          <div class="item-detail" v-if="showDetail">
            <div class="item">
              <div class="detail-title">订单号：</div>
              <div class="detail-info theme-color">{{receiverInfo.orderNo}}</div>
            </div>
            <div class="item">
              <div class="detail-title">收货信息：</div>
              <div class="detail-info" v-if="Object.keys(receiverInfo).length > 0">
                {{receiverInfo.receiverName}}
                {{receiverInfo.shippingVo.receiverMobile}}
                {{receiverInfo.shippingVo.receiverProvince}}
                {{receiverInfo.shippingVo.receiverCity}}
                {{receiverInfo.shippingVo.receiverDistrict}}
                {{receiverInfo.shippingVo.receiverAddress}}
                {{receiverInfo.shippingVo.receiverZip}}
              </div>
            </div>
            <div class="item good">
              <div class="detail-title">商品名称：</div>
              <div class="detail-info">
                <ul>
                  <li v-for="(item,index) in orderDetail" :key="index">
                    <img v-lazy="item.productImage" />
                    {{item.productName}}
                  </li>
                  <li>
                    <img
                      src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png"
                      alt
                    />小米8 青春 全网通版 6GB内存 深空灰 64GB
                  </li>
                  <li>
                    <img
                      src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png"
                      alt
                    />小米8青春版 标准高透贴膜 高透
                  </li>
                </ul>
              </div>
            </div>
            <div class="item">
              <div class="detail-title">发票信息：</div>
              <div class="detail-info">电子发票 个人</div>
            </div>
          </div>
        </div>
        <div class="item-pay">
          <h3>选择以下支付方式付款</h3>
          <div class="pay-way">
            <p>支付平台</p>
            <div
              class="pay pay-ali"
              :class="selectedPayment==0 ? 'checked' : ''"
              @click="paySubmit(0)"
            ></div>
            <div
              class="pay pay-wechat"
              :class="selectedPayment==1 ? 'checked' : ''"
              @click="paySubmit(1)"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- // ============================== wechat payment  ====================================-->
    <scan-pay-code v-if="showPay" @close="closeWechatPay" :payImage="payImg"></scan-pay-code>

    <!-- // ============================== 支付确认modal ====================================-->
    <Modal
      title="支付确认"
      btnType=3
      :showModal="doubleCheckModal"
      sureText="查看订单"
      cancelText="未支付"
      @cancel="closeDoubleCheckModal()"
      @submit="goOrderList"
    >
      <template v-slot:body>
        <p>您确认是否完成支付？</p>
      </template>
    </modal>
  </div>
</template>

<script>
import QRCode from "qrcode";
import ScanPayCode from "../components/ScanPayCode.vue";
import Message from "element-ui";
import Modal from "../components/Modal.vue";

export default {
  name: "order-pay",
  components: { Modal, ScanPayCode },
  // =====================================
  data() {
    return {
      orderNumber: this.$route.query.orderNo, // 获取order num
      showDetail: false,
      receiverInfo: {},
      paymenAmount: 0,
      selectedPayment: 0,
      showPay: false, // => wechat bar code display
      payImg: "",
      doubleCheckModal: false,
      T: '', // 定时器
    };
  },
  // =====================================
  mounted() {
    this.getOrderDetail();
  },
  // =====================================
  methods: {
    // => get the order detail
    getOrderDetail() {
      this.axios.get(`/orders/${this.orderNumber}`).then(orderResp => {
        console.log(orderResp)
        this.receiverInfo = orderResp;
      });
    },

    // => choose payment methods
    // 0: alipay, 1: wechat
    paySubmit(index) {
      this.selectedPayment = index;
      // let orderId = this.$route.query.orderId;
      if (index === 0) {
        // => 支付宝支付
        window.open(`/#/order/alipay?orderId=${this.orderNumber}`, "_blank");
      } else {
        // => 微信支付
        this.axios
          .post("/pay", {
            orderId: this.$route.query.orderNo,
            orderName: "Vue高仿小米商城",
            amount: 0.01, //单位元
            payType: 2 //1支付宝，2微信,
          })
          .then(res => {
            // => 使用qrcode 来生成barcode
            QRCode.toDataURL(res.content)
              .then(url => {
                this.payImg = url;
                this.showPay = true;
              })
              .catch(() => {
                Message.err("微信二维码生成失败");
              });
            this.showPay = true;
            this.loopOrderState()
          })
          .catch(() => {
            Message.err("请求的时候发生错误");
          });
      }
    },

    // => 主动关闭 支付窗口 1 ： 已经支付， 2: 还没有支付
    closeWechatPay() {
      this.doubleCheckModal = true;
    },

    // => 关闭double check modal
    closeDoubleCheckModal() {
      this.doubleCheckModal = false;
      this.showPay = false;
      console.log('close ')
      this.clearLoop();
    },

    // => 用户确认已经完成支付
    goOrderList() {
      this.clearLoop()
      this.doubleCheckModal = false;
      this.showPay = false;
      this.$router.push('/order/list')
    },

    // => 重读查看当前订单状态
    loopOrderState(){
      this.T = setInterval(() => {
        this.axios.get(`/orders/${this.orderNumber}`).then(res => {
          console.log(res)
        }) 
      }, 2009)
    },

    clearLoop(){
      clearInterval(this.T);
    }
  },
};
</script>

<style lang="scss">
.order-pay {
  .wrapper {
    background-color: #f5f5f5;
    padding-top: 30px;
    padding-bottom: 61px;
    .order-wrap {
      padding: 62px 50px;
      background-color: #fff;
      font-size: 14px;
      margin-bottom: 30px;
      .item-order {
        display: flex;
        align-items: center;
        .icon-succ {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: url("/imgs/icon-gou.png") #80c58a no-repeat center;
          background-size: 60px;
          margin-right: 40px;
        }
        .order-info {
          margin-right: 248px;
          h2 {
            font-size: 24px;
            color: #333333;
            margin-bottom: 20px;
          }
          p {
            color: #666666;
            span {
              color: #ff6700;
            }
          }
        }
        .order-total {
          & > p:first-child {
            margin-bottom: 30px;
          }
          span {
            font-size: 28px;
            color: #ff6700;
          }
          .icon-down {
            display: inline-block;
            width: 14px;
            height: 10px;
            background: url("/imgs/icon-down.png") no-repeat center;
            background-size: contain;
            margin-left: 9px;
            transition: all 0.5s;
            cursor: pointer;
            &.up {
              transform: rotate(180deg);
            }
          }
          .icon-up {
            transform: rotate(180deg);
          }
        }
      }
      .item-detail {
        border-top: 1px solid #d7d7d7;
        padding-top: 47px;
        padding-left: 130px;
        font-size: 14px;
        margin-top: 45px;
        .item {
          margin-bottom: 19px;
          .detail-title {
            float: left;
            width: 100px;
          }
          .detail-info {
            display: inline-block;
            img {
              width: 30px;
              vertical-align: middle;
            }
          }
        }
      }
    }
    .item-pay {
      padding: 26px 50px 72px;
      background-color: #ffffff;
      color: #333333;
      h3 {
        font-size: 20px;
        font-weight: 200;
        color: #333333;
        padding-bottom: 24px;
        border-bottom: 1px solid #d7d7d7;
        margin-bottom: 26px;
      }
      .pay-way {
        font-size: 18px;
        .pay {
          display: inline-block;
          width: 188px;
          height: 64px;
          border: 1px solid #d7d7d7;
          cursor: pointer;
          &:last-child {
            margin-left: 20px;
          }
          &.checked {
            border: 1px solid #ff6700;
          }
        }
        .pay-ali {
          background: url("/imgs/pay/icon-ali.png") no-repeat center;
          background-size: 103px 38px;
          margin-top: 19px;
        }
        .pay-wechat {
          background: url("/imgs/pay/icon-wechat.png") no-repeat center;
          background-size: 103px 38px;
        }
      }
    }
  }
}
</style>