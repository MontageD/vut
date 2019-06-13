<template>
  <div class="content-box">
    <h1 class="h1-blue">单选</h1>
    <div class="t-intent">
      <p>代码实例</p>
    </div>
    <div class="t-content">
      <div class="t-content-left">
      </div>
      <div class="t-content-right demo">

      </div>
    </div>
    <h2> API</h2>
    <p class="t-intent">
      <b>vut-cell </b> [props]
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
            <td>左侧标题文字</td>
            <td>String</td>
            <td>
              -
            </td>
            <td>
              -
            </td>
          </tr>
          <tr>
            <td>icon</td>
            <td>左侧图标</td>
            <td>String</td>
            <td>
              -
            </td>
            <td>
              -
            </td>
          </tr>
          <tr>
            <td>label</td>
            <td>标题说明文(备注信息)</td>
            <td>String</td>
            <td>
              -
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>ricon</td>
            <td>右侧图标</td>
            <td>String</td>
            <td>
              -
            </td>
            <td>
              -
            </td>
          </tr>
          <tr>
            <td>riconAnimation</td>
            <td>右侧图标动态效果</td>
            <td>String</td>
            <td>
              -
            </td>
            <td>
              -
            </td>
          </tr>
          <tr>
            <td>href</td>
            <td>跳转链接</td>
            <td>String</td>
            <td>
              -
            </td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

    </div>

    <p class="t-intent">
      <b>vut-list </b> [slot] 插槽
    </p>
    <div class="table">
      <table>
        <thead>
          <tr>
            <td>名字</td>
            <td>说明</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>right</td>
            <td>填充列表右侧内容</td>
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
  name: "vut-radio",
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





