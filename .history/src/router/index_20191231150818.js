import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import main from "@/view/main"

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
      component: main,
      // children:[{
      //   path: '/shouye',
      //   name: 'shouye',
      //   component: resolve => require(['@/components/main/shouye'], resolve),
      // }]
    }
  ]
})
export default router