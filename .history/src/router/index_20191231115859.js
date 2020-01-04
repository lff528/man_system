import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'

Vue.use(Router)

 const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: resolve => require(['@/components/homePage'], resolve)
    }
  ]
})
export default router