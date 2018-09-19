<template>
  <button>
    <slot></slot>
  </button>
</template>
<script>
// import loading from '../Loading/Loading'
const COMPONENT_NAME = "vut-button";
export default {
  name: COMPONENT_NAME,
  props: {
    // 样式
    type: {
      type: String,
      default: "button"
    },
    shape: {
      type: String,
      default: "square"
    },
    mini: {
      type: Boolean,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  },
  methods: {
    //绑定的方法
  },
  computed: {
    //计算属性
  },
  components: {}
};
</script>
