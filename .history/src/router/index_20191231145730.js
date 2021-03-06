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
      path: '/main',
      name: 'main',
      component: resolve => require(['@/components/main'], resolve),
      children:[{
        path: '/main',
        name: 'main',
        component: resolve => require(['@/view/xiaofang/xiaofangjiankong'], resolve),
      }]
    }
  ]
})
export default router