import Components from './components'

import Vue from 'vue'
import App from './App';
Vue.use(Components)

new Vue({
  render: h => h(App)
}).$mount('#app');