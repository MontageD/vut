<template>
  <section class="box">
    <section class="header">
      <THeader></THeader>
    </section>

    <section class="main">
      <TSlider></TSlider>
      <div class="router">
        <router-view></router-view>
      </div>

    </section>
  </section>
</template>
<script>
import THeader from "./components/main/header";
import TSlider from "./components/main/slider";
export default {
  components: {
    THeader,
    TSlider
  }
};
</script>

<style lang='scss' scoped>
.header {
}
.box {
  height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
}
.main {
  
  display: flex;
  min-width: 888px;
  overflow: hidden;
  height: calc(100% - 40px);
  height: -moz-calc(100% - 40px);
  height: -webkit-calc(100% - 40px);
  height: calc(100% -40px);
  .slider {
    height: auto;
    background: #e3e3e3;
    /*空白区域分配比例为0（作用于项目）*/
    flex-grow: 0;
  }
  .router {
    margin-left: 10px;
    width: auto;
    background: #fff;
    flex-grow: 1;
  }
}
</style>
