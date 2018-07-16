<template>
    <div :class="`classObj`">
            <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        name: 'xaContainer',
        fluid: {
            type: Boolean
        },
        prefixCls: {
            type: String,
            default: 'xa'
        }
    },
    computed: {
        classObj(){
            let {prefixCls, fluid} = this
            let kclass = {}
            kclass[prefixCls+'-container-fluid'] = fluid
            kclass[prefixCls+'-container']= !fluid
            kclass['clearfix'] = true

            return kclass

        }
    }
}
</script>

<style>

</style>
