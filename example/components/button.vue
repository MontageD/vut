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
                <vutButton icon="loading" iconText="信息正在加载.." size="large">loading</vutButton>
            </div>
        </div>
        <div class="t-intent">
            <li>按钮功能</li>
        </div>
        <div class="t-content">
            <div class="t-content-left">
                <pre><code class="language-html hljs xml" >{{buttonFunction}}</code></pre>
            </div>
            <div class="t-content-right">
                <vutButton htmlType="button">htmlType-button</vutButton>
                <vutButton htmlType="submit">htmlType-submit</vutButton>
                <vutButton htmlType="submit">htmlType-submit</vutButton>
                <vutButton htmlType="button">htmlType-button</vutButton>
                <vutButton disabled>disabled</vutButton>
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
                        <td>
                            String
                        </td>
                        <td>
                            <span class="smork">normarl</span>,
                            <span class="smork">small</span>,
                            <span class="smork">large</span>
                        </td>
                        <td>normarl</td>
                    </tr>
                    <tr>
                        <td>shape</td>
                        <td>形状类型</td>
                        <td>String</td>
                        <td>
                            <span class="smork">loading</span>
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>group</td>
                        <td>外层嵌套</td>
                        <td>Boolean</td>
                        <td>
                            -
                        </td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>icon</td>
                        <td>形状类型</td>
                        <td>String</td>
                        <td>
                            <span class="smork">square</span>,
                            <span class="smork">circle</span>
                        </td>
                        <td>-</td>
                    </tr>

                    <tr>
                        <td>disabled</td>
                        <td>是否禁用</td>
                        <td>Boolean</td>
                        <td>-</td>
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
                            <span class="smork">reset</span>
                        </td>
                        <td>button</td>
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
                            <span class="smork">reset</span>
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
      buttonIcon: `<vutButton icon="loading">loading</vutButton>  `,
      buttonFunction: `<vutButton htmlType="button">htmlType-button</vutButton>
<vutButton htmlType="submit">htmlType-submit</vutButton>
<vutButton htmlType="submit">htmlType-submit</vutButton>
<vutButton htmlType="button">htmlType-button</vutButton>
<vutButton disabled="true">disabled</vutButton>`
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





