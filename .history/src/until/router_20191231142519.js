let router = [
    {
        name:"消防系统",
        children:[
            {
                path: '/xiaofangjiankong',
                name: 'xiaofangjiankong',
                component: xiaofangjiankong
              },
              {
                path: '/huozaibaojingxitong',
                name: 'lhuozaibaojingxitongogin',
                component: huozaibaojingxitong
              },
              {
                path: '/qitimiehuoxitong',
                name: 'qitimiehuoxitong',
                component: qitimiehuoxitong
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