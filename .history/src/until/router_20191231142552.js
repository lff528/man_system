let router = [
    {
        name:"消防系统",
        children:[
            {
                path: '/xiaofangjiankong',
                name: 'xiaofangjiankong',
                component: xiaofangjiankong,
                title:'消防监控'
              },
              {
                path: '/huozaibaojingxitong',
                name: 'lhuozaibaojingxitongogin',
                component: huozaibaojingxitong,
                title:'消防监控'
              },
              {
                path: '/qitimiehuoxitong',
                name: 'qitimiehuoxitong',
                component: qitimiehuoxitong,
                title:'消防监控'
              },
              {
                path: '/',
                name: 'login',
                component: login
              },
              {
                path: '/',
                name: 'login',
                component: login
              },
        ]
    }
]