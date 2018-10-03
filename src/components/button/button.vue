<template>
  <span :class="{ 'vut-btn-group':group}">
    <button :class="styleClass" :disabled="disabled">
      <span v-if="iconClass" :class="iconClass">
        <i></i>
        <template v-if="iconText">
          <span>{{iconText}}</span>
        </template>
        <template v-else>{{iconText}}</template>
      </span>
      <span v-if="!iconClass" style="visibility:hidden;">
      </span>
      <span :style="{visibility: (iconClass?true:false) ? 'hidden' : ''}">
        <slot></slot>
      </span>
    </button>
  </span>
</template>
<script>
// import loading from '../Loading/Loading'
const COMPONENT_NAME = "vutButton";
import { isInArray } from "../../utils/assist";
import mixins from "../../mixins/Robot.js";
export default {
  name: COMPONENT_NAME,
  mixins: [mixins],
  props: {
    // 跟样式相关
    type: {
      validator(value) {
        return isInArray(value, [
          "primary",
          "success",
          "warning",
          "info",
          "danger",
          "error"
        ]);
      },
      default: "primary"
    },
    group: {
      default: false
    },
    size: {
      validator(value) {
        return isInArray(value, ["normarl", "small", "large"]);
      }
    },
    // 形状
    shape: {
      validator(value) {
        return isInArray(value, ["square", "circle"]);
      }
    },
    // 是否不能点
    disabled: {
      type: Boolean,
      default: false
    },
    // 自身属性变化
    htmlType: {
      default: "button",
      validator(value) {
        return isInArray(value, ["button", "submit", "reset"]);
      }
    },
    // 绑定操作状态动画
    icon: {
      validator(value) {
        return isInArray(value, ["loading"]);
      }
    },
    iconText: {
      type: String,
      default: "请填写图标的文字"
    }
    //  动作交互
  },
  methods: {
    //绑定的方法
  },
  computed: {
    iconClass: function() {
      var classes = this.icon ? "vut-btn-" + this.icon + " " : "";
      return classes;
    },
    styleClass: function() {
      var classes =
        "vut-btn " +
        (this.disabled ? "vut-btn-disabled" + " " : "") +
        (this.type ? "vut-btn-" + this.type + " " : "") +
        (this.shape ? "vut-btn-" + this.shape + " " : "") +
        (this.size ? "vut-btn-" + this.size + " " : "");
      return classes;
    }
    //计算属性
  }
};
</script>


<style lang="scss" rel="stylesheet/scss">
@import "../../common/base.scss";
@import "../../common/button.scss";
</style>

