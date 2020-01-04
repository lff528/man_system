import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import routers from "../until/router"


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
        path: '/',
        name: 'shouye',
        component: resolve => require(['@/view/main/shouye'], resolve),
      },
      {
        path: '/xiaofangjiankong',
        name: 'xiaofangjiankong',
        component: resolve => require(['@/view/main/xiaofangjiankong'], resolve),
      },
    ]
    }
  ]
})

console.log(router)
routers.forEach((item=>{
 
}))
export default router