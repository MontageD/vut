<template>
    <div :class="`${prefix}-row`">
        <slot></slot>
    </div>
</template>

<script>
export default {
 name: 'xaRow',
 props:{
     prefix: {
         type: String,
         default:'xa'
     }
 }
}
</script>

<style>

</style>
