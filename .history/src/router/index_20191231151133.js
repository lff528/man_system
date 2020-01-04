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
      component: resolve => require(['@/view/main'], resolve),
      children:[{
        path: '/shouye',
        name: 'shouye',
        component: resolve => require(['@/view/main/shouye'], resolve),
      }]
    }
  ]
})
export default router