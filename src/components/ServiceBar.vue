<template>
  <div class="service-bar">
    <div class="container">
      <ul>
        <li>
          <span class="icon-setting"></span>预约维修服务
        </li>
        <li>
          <span class="icon-7day"></span>7天无理由退货
        </li>
        <li>
          <span class="icon-15day"></span>15天免费换货
        </li>
        <li>
          <span class="icon-post"></span>满150元包邮
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "service-bar"
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/config.scss";
@import "../assets/scss/base.scss";
@import '../assets/scss/mixin.scss';

.service-bar {
  text-align: center;
  font-size: 16px;
  padding: 33px 0;
  color: #666666;
  ul {
    li {
      display: inline-block;
      width: 24.8%;
      border-right: 2px solid $colorE;
    }
    li:last-child{
      border-right: 0px;
    }
    .icon-setting{
      height: 20px; 
      width: 20px;
      @include backgroundImg('../../public/imgs/icon-15day.png');
      margin-right: 7px;

    }
    .icon-7day{
      height: 20px; 
      width: 20px;
      @include backgroundImg('../../public/imgs/icon-15day.png');
      margin-right: 7px;

    }
    .icon-15day{
      height: 20px; 
      width: 20px;
      @include backgroundImg('../../public/imgs/icon-15day.png');
      margin-right: 7px;

    }
    .icon-post{
      height: 20px; 
      width: 20px;
      @include backgroundImg('../../public/imgs/icon-15day.png');
      margin-right: 7px;

    }
    
  }
}
</style>