<template>
  <nav>
    {{active}}
    <ul class="nav" ref="nav">
      <li v-for="(v,index) in list" :key="index">
        <span>
          <a v-if="v.tag" class="nav-tag" @click="changeRouter(`${v.eng}`)">
            <span></span>
            {{v.name}}
          </a>
          <a v-if="!v.tag" class="nav-text" @click="changeRouter(`${v.eng}`)" :class='{v_eng:active==v.eng?true:false} '>
            {{v.name}}
            <small>{{v.eng}}</small>
          </a>
        </span>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      active: "",
      list: [
        {
          name: "开始准备",
          tag: 2
        },
        {
          name: "快速上手",
          eng: "QuickGo"
        },
        {
          name: "更新日志",
          eng: "updateDate"
        },
        {
          name: "基础组件",
          tag: 2
        },
        {
          name: "按钮",
          eng: "Button"
        },
        {
          name: "图标",
          eng: "Icon"
        },
        {
          name: "表单组件",
          tag: 2
        },
        {
          name: "表单基础样式",
          eng: "Cell"
        },
        {
          name: "文字/图文列表",
          eng: "List"
        },
        {
          name: "网络",
          eng: "Grids"
        },
        {
          name: "布局",
          eng: "Flexbox"
        },
        {
          name: "开关",
          eng: "Switch"
        },
        {
          name: "单选",
          eng: "Radio"
        },
        {
          name: "多选",
          eng: "Select"
        },
        {
          name: "可视工具组件",
          tag: 2
        },
        {
          name: "顶部导航",
          eng: "Navbar"
        },
        {
          name: "底部导航",
          eng: "Tabbar"
        },
        {
          name: "时间轴",
          eng: "TimeLine"
        },

        {
          name: "常规交互组件",
          tag: 2
        },
        {
          name: "提示框",
          eng: "Dialog"
        },
        {
          name: "进度条",
          eng: "ProgressBar"
        },
        {
          name: "安全键盘",
          eng: "KeyBoard"
        },
        {
          name: "发送验证码",
          eng: "SendCode"
        },
        {
          name: "下拉刷新",
          eng: "PullRefresh"
        },
        {
          name: "省市县级联动",
          eng: "CitySelect"
        },
        {
          name: "图片轮播",
          eng: "Slider"
        },
        {
          name: "搜索框",
          eng: "Search"
        },
        {
          name: "图片预览",
          eng: "LightBox"
        },
        {
          name: "时间组件",
          eng: "DateTime"
        },
        {
          name: "评分",
          eng: "Rate"
        }
      ]
    };
  },
  created() {},

  watch: {
    $route: {
      handler: (val, oldVal) => {
        this.active = val.name;
      },
      deep: true
    }
  },
  methods: {
    changeRouter(url) {
      this.$router.push({
        name: url
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.v_eng {
  color: #ff5252;
}
</style>
