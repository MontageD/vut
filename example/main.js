// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueHighlightJS from 'vue-highlightjs'
// 测试环境
import './assets/style.scss'
// import VUT from 'temp/vut.js'
//  正式环境
// import '../dist/styles/vut.css'
import VUT from '../dist/vut.min.js'

// Tell Vue.js to use vue-highlightjs

Vue.config.productionTip = false

Vue.use(VUT)
Vue.use(VueHighlightJS)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: {
    App
  },
  template: '<App/>'
})
