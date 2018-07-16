<template>
  <span :class="classObj">
    <i :class="iclassObj"></i>
    <slot></slot>  
  </span>
</template>



<script>
export default{
    name: 'xaLoading',
    props: {
        type: {
            type: String
        },
        size: {
           type: String
        },
        center: {
            type: Boolean
        },
        fixed: {
            type: Boolean,
            default: false
        },
        color: {
            type: String
        },
        prefix:{
            type: String,
            default: 'xa'
        }
    },
    computed: {
        classObj(){
            let {prefix,center,fixed} = this
            let klass= {}

            
            // klass['affix'] = fixed
            klass[prefix + '-page-loading-con'] = true
            klass[prefix + '-page-loading-con'] = true
            klass[prefix + '-loading-center'] = center

            return klass
        },
        iclassObj(){
            let {prefix,type,size,color} = this
            let kclass= {}

            kclass[prefix+ '-page-loading'] =true
            type ? kclass[prefix+ '-loading-' + type] = true : ''
            size ? kclass[prefix +'-loading-' + size] = true : ''
            color ? kclass['text-'+ color] = true: ''

            return kclass

        }
   
    }
}


</script>