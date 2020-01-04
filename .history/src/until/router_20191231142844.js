let router = [
    {
        name:"消防系统",
        children:[
            {
                path: '/xiaofangjiankong',
                name: 'xiaofangjiankong',
                component: resolve => require(['@/components/main'], resolve),
                title:'消防监控'
              },
              {
                path: '/huozaibaojingxitong',
                name: 'lhuozaibaojingxitongogin',
                component: resolve => require(['@/components/main'], resolve),
                title:'火灾报警系统'
              },
              {
                path: '/qitimiehuoxitong',
                name: 'qitimiehuoxitong',
                component: resolve => require(['@/components/main'], resolve),
                title:'气体灭火系统'
              },
              {
                path: '/xiaohuoshuan',
                name: 'xiaohuoshuan',
                component: resolve => require(['@/components/xiaohuoshuan'], resolve),
                title:''
              },
              {
                path: '/',
                name: '',
                component: resolve => require(['@/components/main'], resolve),
                title:''
              },
              {
                path: '/',
                name: '',
                component: resolve => require(['@/components/main'], resolve),
                title:''
              },
              {
                path: '/',
                name: '',
                component: resolve => require(['@/components/main'], resolve),
                title:''
              },
              {
                path: '/',
                name: '',
                component: resolve => require(['@/components/main'], resolve),
                title:''
              },
              {
                path: '/',
                name: '',
                component: resolve => require(['@/components/main'], resolve),
                title:''
              },
        ]
    }
]