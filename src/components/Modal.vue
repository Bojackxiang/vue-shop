<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <!-- modal 的背景颜色 -->
      <div class="mask"></div>

      <!-- modal 主体-->
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <!-- // note: 自定义组件的确认文本和信息 -->
          <a href="javascript:;" class="btn" v-if="btnType==1" @click="$emit('submit')">{{sureText}}</a>
          <!-- // note: 直接调用父类func惊醒确定操作 -->
          <a href="javascript:;" class="btn" v-if="btnType==2" @click="$emit('submit')">确定</a>
          <!-- // note: 自定义确认和取消操作 -->
          <div class="btn-group" v-if="btnType==3">
            <a href="javascript:;" class="btn">确定</a>
            <a href="javascript:;" class="btn btn-default" @click="$emit('cancel')">取消</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  props: {
    modalType: {
      type: String,
      default: "form"
    },
    title: String,
    btnType: String,
    sureText: {
      type: String,
      default: "确定"
    },
    cancelText: {
      type: String,
      default: "取消"
    },
    showModal: Boolean
  }
};
</script>

<style lang="scss">
</style>