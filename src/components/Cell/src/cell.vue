<template>
  <div>

    <!--  左边内容 -->
    <div>

    </div>
    <div class="">

    </div>
    <!--  右边内容 -->
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
    //  限制字符串长度
    label: {
      type: String
    },
    //  限制字符串长度
    isLoading: {
      type: Boolean
    },
    arrow: {
      type: Boolean
    },
    href: {
      type: String
    }
  }
};
</script>

<style>
</style>
