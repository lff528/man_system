let routers = [
    {
        title:"消防系统",
        children:[
            {
                path: '/xiaofangjiankong',
                name: 'xiaofangjiankong',
                //component: resolve => require(['@/components/xiaofangjiankong'], resolve),
                title:'消防监控'
              },
              {
                path: '/huozaibaojing',
                name: 'huozaibaojing',
                //component: resolve => require(['@/components/huozaibaojing'], resolve),
                title:'火灾报警系统'
              },
              {
                path: '/qitimiehuo',
                name: 'qitimiehuo',
                //component: resolve => require(['@/components/qitimiehuo'], resolve),
                title:'气体灭火系统'
              },
              {
                path: '/xiaohuoshuan',
                name: 'xiaohuoshuan',
                //component: resolve => require(['@/components/xiaohuoshuan'], resolve),
                title:'消火栓系统'
              },
              {
                path: '/miehuoqipeizhi',
                name: 'miehuoqipeizhi',
                //component: resolve => require(['@/components/miehuoqipeizhi'], resolve),
                title:'灭火器配置'
              },
              {
                path: '/yingjizhaoming',
                name: 'yingjizhaoming',
                //component: resolve => require(['@/components/yingjizhaoming'], resolve),
                title:'应急照明及疏散指示灯系统'
              },
              {
                path: '/paizhuzhudan',
                name: 'paizhuzhudan',
               // component: resolve => require(['@/components/paizhuzhudan'], resolve),
                title:'变压器排油注氮'
              },
              {
                path: '/shuipenwumiehuo',
                name: 'shuipenwumiehuo',
                //component: resolve => require(['@/components/shuipenwumiehuo'], resolve),
                title:'变压器水喷雾灭火'
              }
        ]
    }
]
export default routers