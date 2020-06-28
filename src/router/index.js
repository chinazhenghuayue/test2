import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import computedWatch from '@/pages/computedAndWatch.vue'
import sendSMS from '@/pages/sendSms.vue'
import table from '@/pages/table.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'computedWatch',
      component: computedWatch
    },
    {
      path: '/sendSms',
      name: 'sendSms',
      component: sendSMS
    },
    {
      path: '/table',
      name: 'Ztable',
      component: table
    }
  ]
})
