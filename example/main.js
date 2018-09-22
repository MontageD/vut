// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.scss'
import VueHighlightJS from 'vue-highlightjs'
 
// Tell Vue.js to use vue-highlightjs


Vue.config.productionTip = false

import VUT from 'temp/vut.js';


Vue.use(VUT);
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