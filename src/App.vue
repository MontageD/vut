<template>
    <div class="container">


         <xaButton >default</xaButton>
         <xaButton disabled>default</xaButton>
<xaButton type="primary" loading>primary</xaButton>
<xaButton type="success">success</xaButton>
<xaButton type="info">info</xaButton>
<xaButton type="warning">warning</xaButton>
<xaButton type="danger">danger</xaButton>
         <br/>
             <hr/>



             <xaButton type="primary" size="lg">lg</xaButton>
<xaButton type="primary">default</xaButton>
<xaButton type="primary" size="sm">sm</xaButton>
<xaButton type="primary" size="xs">xs</xaButton>



<xaButtonGroup class="btn-group">
 <xaButton >default</xaButton>
  <xaButton >default</xaButton>
  <xaButton type="primary">primary</xaButton>
  <xaButton >default</xaButton>

</xaButtonGroup>
  <br/>

  <xaButton icon="icon-film" noRadius=true></xaButton>



<xaContainer>



</xaContainer>


<xaRow>

</xaRow>



    </div>
</template>
<script>
    export default {
        data: () => ({
            show: true
        }),
        methods: {
            btnClick(){
                console.log('子组件触发')
            }
        }
    }
</script>
<style>
    .container{
        margin: 3rem;
    }


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