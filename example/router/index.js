import Vue from 'vue'
import Router from 'vue-router'


import Button from '@/components/button'

import Icon from '@/components/icon'



import QuickGo from '@/components/quickGo'
import updateDate from '@/components/updateDate'
import Cell from '@/components/cell'
import List from '@/components/list'
import Grids from '@/components/grids'
import Flexbox from '@/components/flexbox'
import Switch from '@/components/switch'
import Radio from '@/components/Radio'
import Select from '@/components/Select'
//  可视化工具组件
import TimeLine from '@/components/TimeLine'
import Navbar from '@/components/Navbar'
import Tabbar from '@/components/Tabbar'
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
var router = new Router({
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
      path: '/Icon',
      name: 'Icon',
      component: Icon
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
    {
      path: '/Navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/Tabbar',
      name: 'Tabbar',
      component: Tabbar
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
// router.afterEach((to, from) => {
//   console.log(to)
//   localStorage.setItem('pathV')
//   console.log('afterEach')
// })

// router.beforeRouteUpdate((to, from, next)=>{
//   console.log()
//   // 在当前路由改变，但是该组件被复用时调用
//   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
//   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
//   // 可以访问组件实例 `this`
// })

export default router