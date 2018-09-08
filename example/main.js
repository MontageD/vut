// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

import XAM from 'temp/xam.js';



Vue.use(XAM);




/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    components: {
        App
    },
    template: '<App/>'
})