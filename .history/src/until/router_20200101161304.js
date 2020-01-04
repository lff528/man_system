let routers = [
    {
        title:"消防系统",
        icon:"el-icon-location",
        children:[
            {
                path: '/xiaofangjiankong',
                name: 'xiaofangjiankong',
                component: resolve => require(['@/view/xiaofang/xiaofangjiankong'], resolve),
                title:'消防监控'
              },
              {
                path: '/huozaibaojing',
                name: 'huozaibaojing',
                component: resolve => require(['@/view/xiaofang/huozaibaojing'], resolve),
                title:'火灾报警系统'
              },
              {
                path: '/qitimiehuo',
                name: 'qitimiehuo',
                component: resolve => require(['@/view/xiaofang/qitimiehuo'], resolve),
                title:'气体灭火系统'
              },
              {
                path: '/xiaohuoshuan',
                name: 'xiaohuoshuan',
                component: resolve => require(['@/view/xiaofang/xiaohuoshuan'], resolve),
                title:'消火栓系统'
              },
              {
                path: '/miehuoqipeizhi',
                name: 'miehuoqipeizhi',
                component: resolve => require(['@/view/xiaofang/miehuoqipeizhi'], resolve),
                title:'灭火器配置'
              },
              {
                path: '/yingjizhaoming',
                name: 'yingjizhaoming',
                component: resolve => require(['@/view/xiaofang/yingjizhaoming'], resolve),
                title:'应急照明及疏散指示灯系统'
              },
              {
                path: '/paizhuzhudan',
                name: 'paizhuzhudan',
                component: resolve => require(['@/view/xiaofang/paizhuzhudan'], resolve),
                title:'变压器排油注氮'
              },
              {
                path: '/shuipenwumiehuo',
                name: 'shuipenwumiehuo',
                component: resolve => require(['@/view/xiaofang/shuipenwumiehuo'], resolve),
                title:'变压器水喷雾灭火'
              }
        ]
    },
    {
        title:"安全防范",
        icon:"el-icon-menu",
        children:[
            {
                path: '/anquanfangfan',
                name: 'anquanfangfan',
                component: resolve => require(['@/view/anquanfangfan/anquanfangfan'], resolve),
                title:'安全防范系统'
              },
              {
                path: '/binadianzhanZj',
                name: 'binadianzhanZj',
                component: resolve => require(['@/view/anquanfangfan/binadianzhanZj'], resolve),
                title:'变电站周界系统'
              },
              {
                path: '/shineihongwaiSj',
                name: 'shineihongwaiSj',
                component: resolve => require(['@/view/anquanfangfan/shineihongwaiSj'], resolve),
                title:'室内红外双鉴系统'
              },
              {
                path: '/menjinkongzhi',
                name: 'menjinkongzhi',
                component: resolve => require(['@/view/anquanfangfan/menjinkongzhi'], resolve),
                title:'门禁控制系统'
              },
              {
                path: '/menjinjilu',
                name: 'menjinjilu',
                component: resolve => require(['@/view/anquanfangfan/menjinjilu'], resolve),
                title:'门禁记录系统'
              },
              
        ]
    },
    {
      title:"在线监测",
      icon:"el-icon-menu",
      children:[
          {
              path: '/zaixianjiance',
              name: 'zaixianjiance',
              component: resolve => require(['@/view/zaixianjiance/zaixianjiance'], resolve),
              title:'在线监测主界面'
            },
            {
              path: '/yousepu',
              name: 'yousepu',
              component: resolve => require(['@/view/zaixianjiance/yousepu'], resolve),
              title:'油色谱在线监测'
            },
            {
              path: '/zhubianjufang',
              name: 'zhubianjufang',
              component: resolve => require(['@/view/zaixianjiance/zhubianjufang'], resolve),
              title:'主变局放在线监测'
            },
            {
              path: '/GISjufang',
              name: 'GISjufang',
              component: resolve => require(['@/view/zaixianjiance/GISjufang'], resolve),
              title:'GIS局放在线监测'
            },
            {
              path: '/bileiqi',
              name: 'bileiqi',
              component: resolve => require(['@/view/zaixianjiance/bileiqi'], resolve),
              title:'避雷器在线监测'
            },
            {
              path: '/GISqishi',
              name: 'GISqishi',
              component: resolve => require(['@/view/zaixianjiance/GISqishi'], resolve),
              title:'GIS气室SF6压力监测'
            },
            {
              path: '/shineiSF6qiti',
              name: 'shineiSF6qiti',
              component: resolve => require(['@/view/zaixianjiance/shineiSF6qiti'], resolve),
              title:'室内SF6气体泄漏监测'
            },
            
      ]
    },
    {
      title:"给排水系统",
      icon:"el-icon-menu",
      children:[
          {
              path: '/jipaishui',
              name: 'jipaishui',
              component: resolve => require(['@/view/jipaishui/jipaishui'], resolve),
              title:'给排水系统主界面'
            },
            {
              path: '/jishui',
              name: 'jishui',
              component: resolve => require(['@/view/jipaishui/jishui'], resolve),
              title:'给水系统'
            },
            {
              path: '/paishui',
              name: 'paishui',
              component: resolve => require(['@/view/jipaishui/paishui'], resolve),
              title:'排水系统'
            },
            {
              path: '/yuzhishezhi',
              name: 'yuzhishezhi',
              component: resolve => require(['@/view/jipaishui/yuzhishezhi'], resolve),
              title:'阈值设置'
            },
      ]
    }
    {
      title:"给排水系统",
      icon:"el-icon-menu",
      children:[
          {
              path: '/jipaishui',
              name: 'jipaishui',
              component: resolve => require(['@/view/jipaishui/jipaishui'], resolve),
              title:'给排水系统主界面'
            },
            {
              path: '/jishui',
              name: 'jishui',
              component: resolve => require(['@/view/jipaishui/jishui'], resolve),
              title:'给水系统'
            },
            {
              path: '/paishui',
              name: 'paishui',
              component: resolve => require(['@/view/jipaishui/paishui'], resolve),
              title:'排水系统'
            },
            {
              path: '/yuzhishezhi',
              name: 'yuzhishezhi',
              component: resolve => require(['@/view/jipaishui/yuzhishezhi'], resolve),
              title:'阈值设置'
            },
           
      ]
    }
]
export default routers