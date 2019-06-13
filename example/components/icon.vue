<template>
  <div class="content-box">
    <h1 class="h1-blue">图标(Icon)</h1>
    <!-- <div class="t-intent">
        </div> -->

    <div class="t-intent">
      <li>图标大小按钮</li>
    </div>
    <div class="t-content">
      <div class="t-content-left">
        <pre><code class="language-html hljs xml" >{{iconHTML1}}</code></pre>
      </div>
      <div class="t-content-right">
        <vutIcon name="flashlight"></vutIcon>
        <vutIcon color="#ff5252"
                 name="right"></vutIcon>
        <vutIcon size="1"
                 name="emoji"></vutIcon>
      </div>
    </div>
    <div class="t-intent">
      <li>图标的动态效果</li>
    </div>
    <div class="t-content">
      <div class="t-content-left">
        <pre><code class="language-html hljs xml" >{{iconHTML2}}</code></pre>
      </div>
      <div class="t-content-right">
        <vutIcon animation="loading"
                 name="more"></vutIcon>
        <vutIcon animation="rotating"
                 name="refresh"></vutIcon>
        <vutIcon animation="vibration"
                 name="flashlight"></vutIcon>
        <vutIcon animation="looming"
                 name="warning"
                 color="#eecd53"></vutIcon>
      </div>
    </div>
    <p class="t-intent">
      <b>vut-icon</b> [props]
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
            <td>name</td>
            <td>图标名字</td>
            <td>String</td>
            <td>
              请看下面可选图标
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td>color</td>
            <td>颜色</td>
            <td>String</td>
            <td>
              -
            </td>
            <td>#333</td>
          </tr>
          <tr>
            <td>size</td>
            <td>图标尺寸</td>
            <td>Number</td>
            <td>
              -
            </td>
            <td>.26rem</td>
          </tr>
          <tr>
            <td>animation</td>
            <td>动画效果</td>
            <td>String</td>
            <td>
              <span class="smork">loading(加载等待)</span>
              <span class="smork">rotating(旋转)</span>
              <span class="smork">vibration(震动)</span>
              <span class="smork">looming(若影若现)</span>

            </td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <h1>vut-icon 图标</h1>
      <ul class="vut_lists clear">
        <li>
          <i class="icon vut-icon vut-accessory"></i>
          <div class="name">accessory</div>
          <div class="fontclass">.vut-accessory</div>
        </li>

        <li>
          <i class="icon vut-icon vut-add"></i>
          <div class="name">add</div>
          <div class="fontclass">.vut-add</div>
        </li>

        <li>
          <i class="icon vut-icon vut-addition_fill"></i>
          <div class="name">addition_fill</div>
          <div class="fontclass">.vut-addition_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-addition"></i>
          <div class="name">addition</div>
          <div class="fontclass">.vut-addition</div>
        </li>

        <li>
          <i class="icon vut-icon vut-addpeople_fill"></i>
          <div class="name">addpeople_fill</div>
          <div class="fontclass">.vut-addpeople_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-addpeople"></i>
          <div class="name">addpeople</div>
          <div class="fontclass">.vut-addpeople</div>
        </li>

        <li>
          <i class="icon vut-icon vut-addressbook_fill"></i>
          <div class="name">addressbook_fill</div>
          <div class="fontclass">.vut-addressbook_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-addressbook"></i>
          <div class="name">addressbook</div>
          <div class="fontclass">.vut-addressbook</div>
        </li>

        <li>
          <i class="icon vut-icon vut-browse_fill"></i>
          <div class="name">browse_fill</div>
          <div class="fontclass">.vut-browse_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-browse"></i>
          <div class="name">browse</div>
          <div class="fontclass">.vut-browse</div>
        </li>

        <li>
          <i class="icon vut-icon vut-businesscard_fill"></i>
          <div class="name">businesscard_fill</div>
          <div class="fontclass">.vut-businesscard_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-businesscard"></i>
          <div class="name">businesscard</div>
          <div class="fontclass">.vut-businesscard</div>
        </li>

        <li>
          <i class="icon vut-icon vut-camera_fill"></i>
          <div class="name">camera_fill</div>
          <div class="fontclass">.vut-camera_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-camera"></i>
          <div class="name">camera</div>
          <div class="fontclass">.vut-camera</div>
        </li>

        <li>
          <i class="icon vut-icon vut-close"></i>
          <div class="name">close</div>
          <div class="fontclass">.vut-close</div>
        </li>

        <li>
          <i class="icon vut-icon vut-collection_fill"></i>
          <div class="name">collection_fill</div>
          <div class="fontclass">.vut-collection_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-collection"></i>
          <div class="name">collection</div>
          <div class="fontclass">.vut-collection</div>
        </li>

        <li>
          <i class="icon vut-icon vut-coordinates_fill"></i>
          <div class="name">coordinates_fill</div>
          <div class="fontclass">.vut-coordinates_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-coordinates"></i>
          <div class="name">coordinates</div>
          <div class="fontclass">.vut-coordinates</div>
        </li>

        <li>
          <i class="icon vut-icon vut-delete_fill"></i>
          <div class="name">delete_fill</div>
          <div class="fontclass">.vut-delete_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-delete"></i>
          <div class="name">delete</div>
          <div class="fontclass">.vut-delete</div>
        </li>

        <li>
          <i class="icon vut-icon vut-eit"></i>
          <div class="name">eit</div>
          <div class="fontclass">.vut-eit</div>
        </li>

        <li>
          <i class="icon vut-icon vut-emoji_fill"></i>
          <div class="name">emoji_fill</div>
          <div class="fontclass">.vut-emoji_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-emoji"></i>
          <div class="name">emoji</div>
          <div class="fontclass">.vut-emoji</div>
        </li>

        <li>
          <i class="icon vut-icon vut-empty"></i>
          <div class="name">empty</div>
          <div class="fontclass">.vut-empty</div>
        </li>

        <li>
          <i class="icon vut-icon vut-empty_fill"></i>
          <div class="name">empty_fill</div>
          <div class="fontclass">.vut-empty_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-enter"></i>
          <div class="name">enter</div>
          <div class="fontclass">.vut-enter</div>
        </li>

        <li>
          <i class="icon vut-icon vut-enterinto"></i>
          <div class="name">enterinto</div>
          <div class="fontclass">.vut-enterinto</div>
        </li>

        <li>
          <i class="icon vut-icon vut-enterinto_fill"></i>
          <div class="name">enterinto_fill</div>
          <div class="fontclass">.vut-enterinto_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-feedback_fill"></i>
          <div class="name">feedback_fill</div>
          <div class="fontclass">.vut-feedback_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-feedback"></i>
          <div class="name">feedback</div>
          <div class="fontclass">.vut-feedback</div>
        </li>

        <li>
          <i class="icon vut-icon vut-flashlight"></i>
          <div class="name">flashlight</div>
          <div class="fontclass">.vut-flashlight</div>
        </li>

        <li>
          <i class="icon vut-icon vut-flashlight_fill"></i>
          <div class="name">flashlight_fill</div>
          <div class="fontclass">.vut-flashlight_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-group"></i>
          <div class="name">group</div>
          <div class="fontclass">.vut-group</div>
        </li>

        <li>
          <i class="icon vut-icon vut-group_fill"></i>
          <div class="name">group_fill</div>
          <div class="fontclass">.vut-group_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-integral_fill"></i>
          <div class="name">integral_fill</div>
          <div class="fontclass">.vut-integral_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-integral"></i>
          <div class="name">integral</div>
          <div class="fontclass">.vut-integral</div>
        </li>

        <li>
          <i class="icon vut-icon vut-label"></i>
          <div class="name">label</div>
          <div class="fontclass">.vut-label</div>
        </li>

        <li>
          <i class="icon vut-icon vut-label_fill"></i>
          <div class="name">label_fill</div>
          <div class="fontclass">.vut-label_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-like_fill"></i>
          <div class="name">like_fill</div>
          <div class="fontclass">.vut-like_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-like"></i>
          <div class="name">like</div>
          <div class="fontclass">.vut-like</div>
        </li>

        <li>
          <i class="icon vut-icon vut-lock_fill"></i>
          <div class="name">lock_fill</div>
          <div class="fontclass">.vut-lock_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-lock"></i>
          <div class="name">lock</div>
          <div class="fontclass">.vut-lock</div>
        </li>

        <li>
          <i class="icon vut-icon vut-mail"></i>
          <div class="name">mail</div>
          <div class="fontclass">.vut-mail</div>
        </li>

        <li>
          <i class="icon vut-icon vut-mail_fill"></i>
          <div class="name">mail_fill</div>
          <div class="fontclass">.vut-mail_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-manage_fill"></i>
          <div class="name">manage_fill</div>
          <div class="fontclass">.vut-manage_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-manage"></i>
          <div class="name">manage</div>
          <div class="fontclass">.vut-manage</div>
        </li>

        <li>
          <i class="icon vut-icon vut-message"></i>
          <div class="name">message</div>
          <div class="fontclass">.vut-message</div>
        </li>

        <li>
          <i class="icon vut-icon vut-message_fill"></i>
          <div class="name">message_fill</div>
          <div class="fontclass">.vut-message_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-mine"></i>
          <div class="name">mine</div>
          <div class="fontclass">.vut-mine</div>
        </li>

        <li>
          <i class="icon vut-icon vut-mine_fill"></i>
          <div class="name">mine_fill</div>
          <div class="fontclass">.vut-mine_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-mobilephone_fill"></i>
          <div class="name">mobilephone_fill</div>
          <div class="fontclass">.vut-mobilephone_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-mobilephone"></i>
          <div class="name">mobilephone</div>
          <div class="fontclass">.vut-mobilephone</div>
        </li>

        <li>
          <i class="icon vut-icon vut-more"></i>
          <div class="name">more</div>
          <div class="fontclass">.vut-more</div>
        </li>

        <li>
          <i class="icon vut-icon vut-offline_fill"></i>
          <div class="name">offline_fill</div>
          <div class="fontclass">.vut-offline_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-offline"></i>
          <div class="name">offline</div>
          <div class="fontclass">.vut-offline</div>
        </li>

        <li>
          <i class="icon vut-icon vut-people_fill"></i>
          <div class="name">people_fill</div>
          <div class="fontclass">.vut-people_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-people"></i>
          <div class="name">people</div>
          <div class="fontclass">.vut-people</div>
        </li>

        <li>
          <i class="icon vut-icon vut-picture_fill"></i>
          <div class="name">picture_fill</div>
          <div class="fontclass">.vut-picture_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-picture"></i>
          <div class="name">picture</div>
          <div class="fontclass">.vut-picture</div>
        </li>

        <li>
          <i class="icon vut-icon vut-play"></i>
          <div class="name">play</div>
          <div class="fontclass">.vut-play</div>
        </li>

        <li>
          <i class="icon vut-icon vut-play_fill"></i>
          <div class="name">play_fill</div>
          <div class="fontclass">.vut-play_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-playon_fill"></i>
          <div class="name">playon_fill</div>
          <div class="fontclass">.vut-playon_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-playon"></i>
          <div class="name">playon</div>
          <div class="fontclass">.vut-playon</div>
        </li>

        <li>
          <i class="icon vut-icon vut-praise_fill"></i>
          <div class="name">praise_fill</div>
          <div class="fontclass">.vut-praise_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-praise"></i>
          <div class="name">praise</div>
          <div class="fontclass">.vut-praise</div>
        </li>

        <li>
          <i class="icon vut-icon vut-prompt_fill"></i>
          <div class="name">prompt_fill</div>
          <div class="fontclass">.vut-prompt_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-prompt"></i>
          <div class="name">prompt</div>
          <div class="fontclass">.vut-prompt</div>
        </li>

        <li>
          <i class="icon vut-icon vut-qrcode"></i>
          <div class="name">qrcode</div>
          <div class="fontclass">.vut-qrcode</div>
        </li>

        <li>
          <i class="icon vut-icon vut-redpacket"></i>
          <div class="name">redpacket</div>
          <div class="fontclass">.vut-redpacket</div>
        </li>

        <li>
          <i class="icon vut-icon vut-refresh"></i>
          <div class="name">refresh</div>
          <div class="fontclass">.vut-refresh</div>
        </li>

        <li>
          <i class="icon vut-icon vut-remind_fill"></i>
          <div class="name">remind_fill</div>
          <div class="fontclass">.vut-remind_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-remind"></i>
          <div class="name">remind</div>
          <div class="fontclass">.vut-remind</div>
        </li>

        <li>
          <i class="icon vut-icon vut-return"></i>
          <div class="name">return</div>
          <div class="fontclass">.vut-return</div>
        </li>

        <li>
          <i class="icon vut-icon vut-right"></i>
          <div class="name">right</div>
          <div class="fontclass">.vut-right</div>
        </li>

        <li>
          <i class="icon vut-icon vut-scan"></i>
          <div class="name">scan</div>
          <div class="fontclass">.vut-scan</div>
        </li>

        <li>
          <i class="icon vut-icon vut-send"></i>
          <div class="name">send</div>
          <div class="fontclass">.vut-send</div>
        </li>

        <li>
          <i class="icon vut-icon vut-setup_fill"></i>
          <div class="name">setup_fill</div>
          <div class="fontclass">.vut-setup_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-setup"></i>
          <div class="name">setup</div>
          <div class="fontclass">.vut-setup</div>
        </li>

        <li>
          <i class="icon vut-icon vut-share_fill"></i>
          <div class="name">share_fill</div>
          <div class="fontclass">.vut-share_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-share"></i>
          <div class="name">share</div>
          <div class="fontclass">.vut-share</div>
        </li>

        <li>
          <i class="icon vut-icon vut-success_fill"></i>
          <div class="name">success_fill</div>
          <div class="fontclass">.vut-success_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-success"></i>
          <div class="name">success</div>
          <div class="fontclass">.vut-success</div>
        </li>

        <li>
          <i class="icon vut-icon vut-suspend"></i>
          <div class="name">suspend</div>
          <div class="fontclass">.vut-suspend</div>
        </li>

        <li>
          <i class="icon vut-icon vut-switch"></i>
          <div class="name">switch</div>
          <div class="fontclass">.vut-switch</div>
        </li>

        <li>
          <i class="icon vut-icon vut-systemprompt_fill"></i>
          <div class="name">systemprompt_fill</div>
          <div class="fontclass">.vut-systemprompt_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-systemprompt"></i>
          <div class="name">systemprompt</div>
          <div class="fontclass">.vut-systemprompt</div>
        </li>

        <li>
          <i class="icon vut-icon vut-text"></i>
          <div class="name">text</div>
          <div class="fontclass">.vut-text</div>
        </li>

        <li>
          <i class="icon vut-icon vut-time_fill"></i>
          <div class="name">time_fill</div>
          <div class="fontclass">.vut-time_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-time"></i>
          <div class="name">time</div>
          <div class="fontclass">.vut-time</div>
        </li>

        <li>
          <i class="icon vut-icon vut-translation_fill"></i>
          <div class="name">translation_fill</div>
          <div class="fontclass">.vut-translation_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-translation"></i>
          <div class="name">translation</div>
          <div class="fontclass">.vut-translation</div>
        </li>

        <li>
          <i class="icon vut-icon vut-trash"></i>
          <div class="name">trash</div>
          <div class="fontclass">.vut-trash</div>
        </li>

        <li>
          <i class="icon vut-icon vut-trash_fill"></i>
          <div class="name">trash_fill</div>
          <div class="fontclass">.vut-trash_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-undo"></i>
          <div class="name">undo</div>
          <div class="fontclass">.vut-undo</div>
        </li>

        <li>
          <i class="icon vut-icon vut-warning_fill"></i>
          <div class="name">warning_fill</div>
          <div class="fontclass">.vut-warning_fill</div>
        </li>

        <li>
          <i class="icon vut-icon vut-warning"></i>
          <div class="name">warning</div>
          <div class="fontclass">.vut-warning</div>
        </li>

        <li>
          <i class="icon vut-icon vut-search"></i>
          <div class="name">search</div>
          <div class="fontclass">.vut-search</div>
        </li>

        <li>
          <i class="icon vut-icon vut-packup"></i>
          <div class="name">packup</div>
          <div class="fontclass">.vut-packup</div>
        </li>

        <li>
          <i class="icon vut-icon vut-unfold"></i>
          <div class="name">unfold</div>
          <div class="fontclass">.vut-unfold</div>
        </li>

        <li>
          <i class="icon vut-icon vut-financial_fill"></i>
          <div class="name">financial_fill</div>
          <div class="fontclass">.vut-financial_fill</div>
        </li>

      </ul>

    </div>
  </div>
</template>

<script>
import "highlight.js/styles/atom-one-light.css";
import hljs from "highlight.js";

export default {
  data() {
    return {
      iconHTML1: `<vutIcon name="accessory"></vutIcon>
<vutIcon color="blue" name="collection"></vutIcon>
<vutIcon size="1" name="add"></vutIcon>
`,
      iconHTML2: `<vutIcon animation="loading" name="more"></vutIcon>
<vutIcon animation="rotating" name="refresh"></vutIcon>
<vutIcon animation="vibration" name="flashlight"></vutIcon>
<vutIcon animation="looming" name="warning" color="#eecd53"></vutIcon>
`
    };
  },
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
