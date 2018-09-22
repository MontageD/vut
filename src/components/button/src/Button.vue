<template>
  <button :class="styleClass">
    <span :class="iconClass" v-if="iconClass">
    </span>
    <span v-if="!iconClass"> </span>
    <span>
      <slot></slot>
    </span>

  </button>
</template>
<script>
// import loading from '../Loading/Loading'
const COMPONENT_NAME = "vutButton";
import { isInArray } from "../../../utils/assist";
export default {
  name: COMPONENT_NAME,
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
    size: {
      validator(value) {
        return isInArray(value, ["small", "normarl", "large"]);
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
    }
    //  动作交互
  },
  methods: {
    //绑定的方法
  },
  computed: {
    iconClass: function() {
      var classes = this.icon ? "vut-btn-" + this.icon + " " : " ";
      return classes;
    },
    styleClass: function() {
      var classes =
        "vut-btn " +
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
@import "../../../common/base.scss";
@import "../../../common/button.scss";
</style>

