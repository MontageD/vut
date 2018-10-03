<template>
  <i :class="classes" :style="styles">

  </i>
</template>

<script>
const COMPONENT_NAME = "vutIcon";
import { isInArray } from "../../utils/assist";
import mixins from "../../mixins/Robot.js";
export default {
  name: COMPONENT_NAME,
  props: {
    name: {
      type: String
    },
    size: {
      type: String
    },
    color: {
      type: String
    },
    direction: {
      type: String,
      validator(value) {
        return isInArray(value, ["left", "center", "right"]);
      }
    },
    // 动画效果 - 旋转 - 震动 - 隐现
    animation: {
      type: String,
      validator(value) {
        return isInArray(value, [
          "loading",
          "rotating", // 旋转
          "vibration",   // 震动
          "looming"      // 若影若现
        ]);
      }
    }
  },
  computed: {
    classes() {
      let classList =
        "vut-icon " +
        (!!this.name ? `vut-${this.name} ` : "") +
        (!!this.direction ? `vut-icon-${this.direction}` : "") +
        (!!this.animation ? `vut-icon-${this.animation}` : "");

      return classList;
    },
    styles() {
      const style = {};
      if (!!this.size) {
        // 强制转换成布尔类型
        style.fontSize = this.size + "rem";
        style.height = this.size + "rem";
        style.width = this.size + "rem";
      }

      if (!!this.color) {
        style.color = this.color;
      }

      return style;
    }
  }
};
</script>

<style>
</style>
