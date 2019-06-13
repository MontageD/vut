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
  data(){
    return {
        boxs: ''
    }
  },
  components: {
    THeader,
    TSlider
  },
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm(
      "Do you really want to leave? you have unsaved changes!"
    );
    if (answer) {
      next();
    } else {
      next(false);
    }
  },
  mounted() {
    this.$nextTick(function() {
      const oHtml = document.getElementsByTagName("html")[0];
      const width = oHtml.clientWidth;
      // 320px的屏幕基准像素为12px
      oHtml.style.fontSize = 24 * (width / 320) + "px";
      this.boxs = this.$el.getElementsByClassName('nav-text')
    });
  },
  created(){

  }
};
</script>

<style lang='scss' scoped>
</style>
