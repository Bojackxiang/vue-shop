<template>
  <div class="footer">
    <!-- logo 显示部分 -->
    <div class="footer-logo">
      <img src="../../public/imgs/logo-footer.png" alt />
      <p>小米商城</p>
    </div>
    <!-- logo 显示部分 end-->

    <!-- 链接显示部分 -->
    <div class="footer-link">
      <a href="https:www.google.com" target="_blank"> 我的主页 </a> <span>|</span>
      <a href="https:www.google.com" target="_blank"> vue全栈课程 </a> <span>|</span>
      <a href="https:www.google.com" target="_blank"> react 全家桶 </a> <span>|</span>
      <a href="https:www.google.com" target="_blank"> 微信支付程序 </a> <span>|</span>
    </div>
    <!-- 链接显示部分 end-->

    <!-- 版权部分 -->
    <div class="copy-right">
        <p>Copyright ©2019 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</p>
    </div>
    <!-- 版权部分 end -->

  </div>
</template>

<script>
export default {
  name: "nav-footer"
};
</script>

<style lang="scss">
    @import '../assets/scss/config.scss';
    .footer{
        height: 234px;
        border-top: 4px solid $colorA;
        background-color: $colorB;
        color: $colorD;
        font-size: 16px;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            img{
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color: $colorD;
                display: inline-block;
            }
            span{
                margin: 0 10px;
            }

        }
        .copy-right{
            margin-top: 13px;
            .domain{
                color: $colorA;
            }
        }
    }
</style>