<template>
    <div>
   <xm-button-group class="btn__group">
  <xm-button type="warning">警告</xm-button>
  <xm-button type="primary" @click="btnClick" icon="xm__icon--checked" >主要</xm-button>
  <xm-button type="success" icon="xm__icon--loading">成功</xm-button>
</xm-button-group>

    </div>
</template>
<script>
    export default {
        data: () => ({
            show: true
        })
    }
</script>
<style>
    .transition-box {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background-color: #409EFF;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }


    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }


</style>