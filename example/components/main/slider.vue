<template>
  <nav>
    <ul class="nav" ref="nav">
      <li v-for="(v,index) in list" :key="index">
        <a v-if="v.tag" class="nav-tag" @click="changeRouter(`${v.eng}`)">
          <span></span>
          {{v.name}}
        </a>
        <a v-if="!v.tag" class="nav-text" @click="changeRouter(`${v.eng}`)">
          {{v.name}}
          <small>{{v.eng}}</small>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          name: "开始准备",
          tag: 1
        },
        {
          name: "快速上手",
          eng: 'QuickGo'
        },
        {
          name: "更新日志",
            eng: 'updateDate'
        },
        {
          name: "样式组件",
          tag: 2
        },
        {
          name: "按钮",
          eng: "Button"
        },
        {
          name: "表单",
          eng: "Cell"
        },
        {
          name: "列表",
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
          name: "时间轴",
          eng: "TimeLine"
        },
        {
          name: "JavaScript组件",
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
  methods: {
    changeRouter(url) {
      console.log("/" + url);
      this.$router.push({
        name: url
      });
      // if (url) {
      //   this.$router.push({
      //     path: url
      //   });
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  padding-top: 20px;
  display: block;
  min-width: 218px;
  width: 218px;
  color: #555;
  overflow-x: hidden;
  overflow-y: auto;
  padding-left: 25px;
  ul {
    position: relative;
    padding-bottom: 20px;
    li {
      list-style: none;
      .nav-tag {
        font-size: 18px;
        span {
          display: inline-block;
          height: 10px;
          width: 10px;
          border-radius: 50%;
          background-color: #ff5252;
          margin-right: 10px;
        }
      }
      .nav-text {
        font-size: 14px;
        padding-left: 15px;
        display: block;
        text-indent: 35px;
        small {
          margin-left: 6px;
          color: #999;
          font-size: 12px;
        }
      }
      a {
        cursor: pointer;
        display: block;
        padding-left: 16px;
        padding-top: 5px;
        padding-bottom: 5px;
        position: relative;
      }
    }
  }
}
</style>
