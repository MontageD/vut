<template>
    <div class="vut-cell-box">
        <div class="vut-cell-box">

        </div>
        <div class="vut-cell">
            <slot></slot>
        </div>

    </div>
</template>

<script>
const COMPONENT_NAME = "vutBoxCell";
export default {
  name: COMPONENT_NAME,
  props: {
    title: {
      type: String
    },
    spacing: {
      type: String
    }
  }
};
</script>

<style>
</style>
