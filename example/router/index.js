import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/components/button'
import QuickGo from '@/components/quickGo'
import updateDate from '@/components/updateDate'

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
    }
  ]
})