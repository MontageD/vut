<template>
  <div class="vut-cell">

    <!--  左边内容 -->
    <div class="vut-cell-left">
      <!-- <slot name="left">
      </slot> -->
      <div class="vut-cell-icon">

        <i :class='`vut-icon vut-${icon}`'></i>
      </div>
      <div v-if="title" class="vut-cell-title">
        <div> {{title}}</div>
        <div v-if="label"> {{label}}</div>
      </div>

    </div>

    <div class="vut-cell-right">
      <!--  中间内容 -->

      <div class="vut-cell-icon">

        <i :class='`vut-icon vut-${ricon} vut-icon-${riconAnimation}`'></i>
      </div>
      <div v-if="title" class="vut-cell-title">
        <slot name="right">
        </slot>
      </div>
      <!--  右边内容 -->

    </div>

  </div>
</template>

<script>
const COMPONENT_NAME = "vutCell";
export default {
  name: COMPONENT_NAME,
  props: {
    //  限制字符串长度
    title: {
      type: String
    },
    //  标题底部说明文字
    label: {
      type: String
    },
    //  左侧图标
    icon: {
      type: String
    },
    // 右侧图标信息
    ricon: {
      type: String
    },
    // 右侧图标动画效果
    riconAnimation:{
      type: String
    },
    href: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import "../../common/base.scss";
@import "../../common/cell.scss";
@import "../../common/icon.scss";
</style>
