<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <!-- modal 的背景颜色 -->
      <div class="mask"></div>

      <!-- modal 主体-->
      <div class="modal-dialog">
        <div class="modal-header">
          <span>标题</span>
          <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <!-- 子组件调用父组件的func-->
          <a href="javascript:;" class="btn" v-if="btnType==1" @click="$emit('submit')">确定</a>
          <a href="javascript:;" class="btn" v-if="btnType==2" @click="$emit('cancel')">确定</a>
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
    modalTitle: String,
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