<template>
  <nav>
    <ul class="nav"
        ref="nav">
      <li v-for="(value,index) in list"
          :key="index">

        <div :class="['nav-li' ,{
              'nav-tag':k == 0
            },
            {
              'nav-text': k != 0
            }
            ]"
             v-for="(v,k) in value"
             :key="k"
             @click="changeRouter(index,k)">

          <a v-show="k == 0">
            {{v.name}}
          </a>

          <transition name="router-slid">
            <a v-if=" (k != 0) && v.active "
               :class='{
            v_eng: routeName==v.eng
            } '>
              {{v.name}}
              <small>{{v.eng}}</small>
            </a>
          </transition>

        </div>

      </li>
    </ul>
  </nav>
</template>
<script>
import slider from "@/mixins/slider";
import list from "@/data/slider";
export default {
  mixins: [slider],
  data() {
    return {
      active: "",
      list: list,
      routeName: this.$route.name
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
    changeRouter(_pk, _sk) {
      if (_sk == 0) {
        var list = [];
        this.list.forEach((val, key) => {
          list[key] = [];
          if (_pk != key) {
            this.list[key].forEach((element, index) => {
              list[key].push({
                name: element.name,
                eng: element.eng,
                active: false
              });
            });
          } else {
            this.list[key].forEach((element, index) => {
              // this.$set(
              //   this.list[_pk][index],
              //   "active",
              //   !this.list[_pk][index]["active"]
              // );
              list[key].push({
                name: element.name,
                eng: element.eng,
                active: !this.list[key][index]["active"]
              });
            });
          }
        });
        this.list = list;
      } else {
        this.$router.push({
          name: this.list[_pk][_sk]["eng"]
        });
      }
    }
  },
  created() {
    for (var i = 0; i < this.list.length; i++) {
      for (var j = 0; j < this.list[i].length; j++) {
        if (this.routeName == this.list[i][j].eng) {
          // console.log("我在里面我要父级也锁起来");
          this.list[i].forEach((element, index) => {
            // console.log('element',element)
            this.$set(this.list[i][index], "active", true);
          });
          break;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v_eng {
  color: #333;
  font-weight: 800;
  & > small {
    color: #333;
  }
}
.router-slid-enter-active,
.router-slid-leave-active {
  transition: all 0.3s;
}
.router-slid-enter,
.router-slid-leave-active {
  transform: translate3d(0.3rem, 0, 0);
  opacity: 0;
}
</style>
