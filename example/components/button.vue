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
                <vutButton type="success">success</vutButton>
                <vutButton type="info">info</vutButton>
                <vutButton type="warning">warning</vutButton>
                <vutButton type="danger">danger</vutButton>
                <vutButton type="error">error</vutButton>
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
                <vutButton size="normarl">normarl</vutButton>
                <vutButton size="large">large</vutButton>
                <vutButton size="small">small</vutButton>
            </div>
        </div>
        <div class="t-intent">
            <li>特殊形状的</li>
        </div>
        <div class="t-content">
            <div class="t-content-left">
                <pre><code class="language-html hljs xml" >{{buttonShape}}</code></pre>
            </div>
            <div class="t-content-right">
                <vutButton shape="square">square</vutButton>
                <vutButton shape="circle">circle</vutButton>
            </div>
        </div>

        <div class="t-intent">
            <li>嵌入Icon</li>
        </div>
        <div class="t-content">
            <div class="t-content-left">
                <pre><code class="language-html hljs xml" >{{buttonIcon}}</code></pre>
            </div>
            <div class="t-content-right">
                <vutButton icon="loading" size="large">loading</vutButton>
            </div>
        </div>
        <div class="t-intent">
            <li>按键反馈</li>
        </div>
        <div class="t-content">
            <div class="t-content-left">
                <pre><code class="language-html hljs xml" >{{buttonBack}}</code></pre>
            </div>
            <div class="t-content-right">
                <vutButton size="large">primary</vutButton>
            </div>
        </div>

        <div class="t-intent">
            <li>混合使用的安全例子</li>
        </div>
        <div class="t-content">
            <div class="t-content-left">
                <pre><code class="language-html hljs xml" >{{buttonResult}}</code></pre>
            </div>
            <div class="t-content-right">
                <vutButton size="large">primary</vutButton>
            </div>
        </div>

        <h2>前言</h2>
        <p class="t-intent">
            <b>vut-button</b> [props]
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
                        <td>type</td>
                        <td>按钮类型</td>
                        <td>String</td>
                        <td>

                            <span class="smork">primary</span>,
                            <span class="smork">success</span>,
                            <span class="smork">info</span>,
                            <span class="smork">warning</span>,
                            <span class="smork">danger</span>
                        </td>
                        <td>primary</td>
                    </tr>
                    <tr>
                        <td>size</td>
                        <td>按钮的大小</td>
                        <td>String</td>
                        <td>type</td>
                        <td>type</td>
                    </tr>
                    <tr>
                        <td>shape</td>
                        <td>形状类型</td>
                        <td>String</td>
                        <td>type</td>
                        <td>type</td>
                    </tr>

                    <tr>
                        <td>disabled</td>
                        <td>是否禁用</td>
                        <td>Boolean</td>
                        <td>type</td>
                        <td>type</td>
                    </tr>
                    <tr>
                        <td>htmlType</td>
                        <td>按键类型</td>
                        <td>
                            String
                        </td>
                        <td>
                            <span class="smork">button</span>
                            <span class="smork">submit</span>
                            <span class="reset">reset</span>
                        </td>
                        <td>button</td>
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
    return {
      buttonHtml: `<vutButton type="primary">primary</vutButton>
<vutButton type="success">success</vutButton>
<vutButton type="info">info</vutButton>
<vutButton type="warning">warning</vutButton>
<vutButton type="danger">danger</vutButton>
<vutButton type="error">error</vutButton>`,
      buttonSize: `<vutButton size="normarl">normarl</vutButton>
<vutButton size="large">large</vutButton>
<vutButton size="large">small</vutButton>`,
      buttonShape: `<vutButton shape="square">square</vutButton>
<vutButton shape="circle">circle</vutButton>`,
      buttonIcon: `<vutButton icon="loading">loading</vutButton>`,
      buttonBack: ``,
      buttonResult: ``
    };
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





