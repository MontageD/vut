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

</style>
