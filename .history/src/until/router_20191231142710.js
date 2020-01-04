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
                path: '/',
                name: '',
                component: ,
                title:''
              },
              {
                path: '/',
                name: 'login',
                component: login
              },
        ]
    }
]