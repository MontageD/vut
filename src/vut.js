import Vue from 'vue'
import './common/base.scss'
import {
  Button
} from './components/button'
import {
  cell
} from './components/cell'
import {
  navBar
} from './components/navBar'
import {
  Icon
} from './components/icon'



const install = function (Vue) {
  Vue.component(Button.name, Button);
  Vue.component(cell.name, cell);
  Vue.component(navBar.name, navBar)
  Vue.component(Icon.name, Icon)
  // Vue.component(ButtonGroup.name, ButtonGroup)

  Vue.prototype.$dialog = {
    Button: Button,
    cell: cell,
    navBar: navBar,
    Icon: Icon
  };
};


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};