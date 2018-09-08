<template>
    <a 
        class="xa-btn"
        @click="handleClick"
        :style="{backgroundColor: bgColor, color: color, 'border-color':borderColor}"
        :class="[
        'xa-btn-'+type,
        size?'xa-btn-'+size:'',
        {'xa-btn-block': block, 'no-radius': noRadius},
        iconClass
        ]"
        :disabled="disabled"
    >
        <i :class="icon" v-if="icon"></i>
        <!-- <i class="xa-page-loading" v-if="loading && !icon"> -->
       <!-- <loading v-if="loading" size="xs" style="position:relative;top:2px;left:2px;float:right;"></loading> -->
        <slot></slot>
</a>
</template>
<script>
// import loading from '../Loading/Loading'
export default {
    name: 'xaButton',
    props: { //父组件传入的值
      // 类型 
      type: {
        type: String,
        default: 'default'
      },
      // 是否loaing
      loading: {
        type: Boolean,
        default: false
      },
      // 是否无变圆
      noRadius: {
        type: Boolean,
        default: false
      },
      // 是否边缘磨平
       block: {
        type: Boolean,
        default: false
      },
      // 背景颜色
      bgColor: {
        type: String,
        default: ''
      },
      borderColor: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: ''
      },
     
      size:{
        type: String,
        default: 'default'
      },
      disabled: Boolean,
  },
  methods: { //绑定的方法
    handleClick (event) {
      if (this.disabled) return
      this.$emit('click', event)  // 传播方法名为click，你也可以自定义其他名字
    }
  },
  computed: { //计算属性
    iconClass () {
      if (this.icon !== '') return 'xa-hasIconBtn'
    }
  },
  components:{
  }
}
</script>
