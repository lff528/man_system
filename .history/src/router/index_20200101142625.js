import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import routers from "../until/router"


Vue.use(Router)

let routerAll = {
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
      // {
      //   path: '/xiaofangjiankong',
      //   name: 'xiaofangjiankong',
      //   component: resolve => require(['@/view/xiaofang/xiaofangjiankong'], resolve),
      // },
    ]
    }
  ]
}
routers.forEach((item=>{
  item.children.forEach((itemA)=>{
    routerAll.routes[1].children.push({
      path: itemA.path,
      name: itemA.name,
      component: itemA.component,
    })
  })
}))

console.log(routerAll.routes[1].children)
const router = new Router(routerAll)


export default router