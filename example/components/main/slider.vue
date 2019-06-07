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

          <a v-show="k == 0" >
            {{v.name}}
          </a>

          <transition name="fade">
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
import list from '@/data/slider'
export default {
  mixins: [slider],
  data() {
    return {
      active: "",
      list:list,
      routeName: ""
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
        console.log("触发头部");
        this.list[_pk].forEach((element, index) => {
          // element.active = "";
          this.$set(this.list[_pk][index], "active", !this.list[_pk][index]['active']);
        });
        console.log(this.list[_pk])
        this.$set(this.list[_pk][_sk], "active", !this.list[_pk][_sk]['active'])
      }else{
        console.log('触发跳转',this.list[_pk][_sk])
        this.$router.push({
          name: this.list[_pk][_sk]['eng']
        })
      }

      // this.$router.push({
      //   name: url
      // });
    }
  },
  created() {
    for (var i = 0; i < this.list.length; i++) {
      for (var j = 0; j < this.list[i].length; j++) {
        this.$set(this.list[i][j], "active", true);
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
</style>
