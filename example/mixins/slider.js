// Vue.mixin({
//     created(){
//         console.log('获取当前路由的地址')
//         console.log(this.$router)
//       console.log('global mixin')
//     }
//   });

const myMixin = {
  data () {
    return {
      routeName: this.$route.path.slice(1)
    }
  },
  watch: {
    '$route' (to, from) {
      this.routeName = to.path.slice(1)
    }
  },
  created () {
    console.log('routeName', this.routeName)
  }

}

export default myMixin
