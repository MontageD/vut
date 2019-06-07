<template>
    <div class="content-box">
        <h1 class="h1-blue">底部导航</h1>
        <!-- <div class="t-intent">
        </div> -->

               <div class="t-content">
            <div class="t-content-left">
                <!-- <pre><code class="language-html hljs xml" >{{buttonSize}}</code></pre> -->
            </div>
            <div class="t-content-right">
                <vueNavBar>
                    <template slot="left">
                        返回
                    </template>


                     <template slot="right">
                        标题
                    </template>

                     <template slot="right">
                        前进<i class="vut icon-accessory"></i>
                    </template>

                </vueNavBar>
            </div>
        </div>




        <p class="t-intent">
            <b>vut-navbar</b> [slot]
        </p>

 
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <td>name</td>
                        <td>描述</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>left</td>
                        <td>导航左侧</td>
                    </tr>
                    <tr>
                        <td>center</td>
                        <td>描述</td>
                    </tr>
                    <tr>
                        <td>right</td>
                        <td>导航右侧</td>
                    </tr>
                </tbody>
            </table>

        </div>
        <p class="t-intent">
            <b>vut-navbar</b> [props]
        </p>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <td>参数</td>
                        <td>说明</td>
                        <td>类型</td>
                        <td>可选值</td>
                        <td>默认值</td>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>title</td>
                        <td>导航中部标题</td>
                        <td>String</td>
                        <td>
                            -
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>height</td>
                        <td>高度</td>
                        <td>String</td>
                        <td>
                            -
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>bgcolor</td>
                        <td>背景颜色</td>
                        <td>String</td>
                        <td>
                            -
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>fixed</td>
                        <td>是否固定于顶部</td>
                        <td>Boolean</td>
                        <td>
                            -
                        </td>
                        <td>-</td>
                    </tr>

                </tbody>
            </table>












        </div>
    </div>
</template>

<script>
import "highlight.js/styles/atom-one-light.css";
import hljs from "highlight.js";

export default {
  data() {
    return {};
  },
  components: {},
  created() {
    this.modifyCode();
  },
  methods: {
    modifyCode() {
      this.$nextTick(function() {
        const preEl = document.querySelectorAll("code");
        [].forEach.call(preEl, hljs.highlightBlock);
      });
    }
  }
};
</script>

<style>
</style>
