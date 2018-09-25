import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/components/button'
import QuickGo from '@/components/quickGo'
import updateDate from '@/components/updateDate'
import Cell from '@/components/cell'
import List from '@/components/list'
import Grids from '@/components/grids'
import Flexbox from '@/components/flexbox'
import Switch from '@/components/switch'
import Radio from '@/components/Radio'
import Select from '@/components/Select'
import TimeLine from '@/components/TimeLine'
// js  组件
import Dialog from '@/components/dialog'
import ProgressBar from '@/components/progressBar'
import KeyBoard from '@/components/keyBoard'
import SendCode from '@/components/sendCode'
import PullRefresh from '@/components/pullRefresh'
import CitySelect from '@/components/citySelect'
import Slider from '@/components/slider'
import Search from '@/components/search'
import LightBox from '@/components/lightBox'
import DateTime from '@/components/dateTime'
import Rate from '@/components/rate'






Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      name: 'QuickGo',
      component: QuickGo
    },
    {
      path: '/quickGo',
      name: 'quickGo',
      component: QuickGo
    },
    {
      path: '/updateDate',
      name: 'updateDate',
      component: updateDate
    },
    {
      path: '/Button',
      name: 'Button',
      component: Button
    },
    {
      path: '/Cell',
      name: 'Cell',
      component: Cell
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Grids',
      name: 'Grids',
      component: Grids
    },
    {
      path: '/Flexbox',
      name: 'Flexbox',
      component: Flexbox
    },
    {
      path: '/Switch',
      name: 'Switch',
      component: Switch
    },
    {
      path: '/Select',
      name: 'Select',
      component: Select
    },
    {
      path: '/Radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/TimeLine',
      name: 'TimeLine',
      component: TimeLine
    },
    // js组件
    {
      path: '/Dialog',
      name: 'Dialog',
      component: Dialog
    },
    {
      path: '/ProgressBar',
      name: 'ProgressBar',
      component: ProgressBar
    },
    {
      path: '/KeyBoard',
      name: 'KeyBoard',
      component: KeyBoard
    },
    {
      path: '/SendCode',
      name: 'SendCode',
      component: SendCode
    },
    {
      path: '/PullRefresh',
      name: 'PullRefresh',
      component: PullRefresh
    },
    {
      path: '/CitySelect',
      name: 'CitySelect',
      component: CitySelect
    },
    {
      path: '/Slider',
      name: 'Slider',
      component: Slider
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/LightBox',
      name: 'LightBox',
      component: LightBox
    },
    {
      path: '/DateTime',
      name: 'DateTime',
      component: DateTime
    },
    {
      path: '/Rate',
      name: 'Rate',
      component: Rate
    },
  ]
})