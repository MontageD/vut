<template>
    <div class="content-box">
        <h1 class="h1-blue">按钮</h1>
        <div class="t-intent">
            <p>代码实例</p>
            <li>普通类型按钮</li>
        </div>
        <div class="t-content">
            <div class="t-content-left">
                <pre><code class="language-html hljs xml" >{{buttonHtml}}</code></pre>
            </div>
            <div class="t-content-right">
                <vutButton type="primary">primary</vutButton>
            </div>
        </div>

        <div class="t-intent">
            <li>特殊大小按钮</li>
        </div>
        <div class="t-content">
            <div class="t-content-left">
                <pre><code class="language-html hljs xml" >{{buttonSize}}</code></pre>
            </div>
            <div class="t-content-right">
                <vutButton size="small">small</vutButton>
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
                        <td>标题文字</td>
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
                        <td>标题说明文字</td>
                        <td>String</td>
                        <td>
                           -
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>content</td>
                        <td>右侧内容</td>
                        <td>String</td>
                        <td>
                           -
                        </td>
                        <td>-</td>
                    </tr>

                    <tr>
                        <td>isLoading</td>
                        <td>是否加载动画</td>
                        <td>Boolean</td>
                        <td>
                            -
                        </td>
                        <td>
                            -
                        </td>
                    </tr>
                    <tr>
                        <td>arrow</td>
                        <td>是否显示箭头</td>
                        <td>Boolean</td>
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
            <b>vut-cell </b> [slot] 插槽
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
                        <td>icon</td>
                        <td>填充图标</td>
                    </tr>
                    <tr>
                        <td>left</td>
                        <td>填充列表左侧内容</td>
                    </tr>
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





