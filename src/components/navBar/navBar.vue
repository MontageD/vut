<template>
    <div class="vut-nav">
        <i class="weui-icon-success"></i>

        <div class="vut-nav-left">
            <slot name="nav"></slot>
        </div>
        <div class="vut-list-center">
            <slot name="center"></slot>
        </div>
        <div class="vut-nav-right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
const COMPONENT_NAME = "vueNavBar";
import { isInArray } from "../../utils/assist";
import mixins from "../../mixins/Robot.js";

export default {
  name: COMPONENT_NAME,
  mixins: [mixins],
  props: {
    title: {
      type: String
    },
    height: {
      type: String
    },
    bgcolor: {
      type: String
    },
    fixed: {
      type: Boolean
    }
  }
};
</script>



<style lang="scss" rel="stylesheet/scss">
@import "../../common/base.scss";
@import "../../common/navBar.scss";
</style>

