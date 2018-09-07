import Vue from 'vue'
import App from './App';

import {
  Button,
} from 'src/components/button'

const install = function (Vue) {
  // Vue.component(Button.name, Button);
  // Vue.component(ButtonGroup.name, ButtonGroup)

  Vue.prototype.$dialog = {
    // confirm: Confirm
  };
};




if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};