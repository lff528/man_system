let routers = [
  
   
    {
        title:"首页",
        icon:"el-icon-menu",
        children:[
            {
                path: '/anquanfangfan',
                name: 'anquanfangfan',
                component: resolve => require(['@/view/anquanfangfan/anquanfangfan'], resolve),
                title:'个人信息'
              },
              {
                path: '/binadianzhanZj',
                name: 'binadianzhanZj',
                component: resolve => require(['@/view/anquanfangfan/binadianzhanZj'], resolve),
                title:'个人相关'
              },
              {
                path: '/shineihongwaiSj',
                name: 'shineihongwaiSj',
                component: resolve => require(['@/view/anquanfangfan/shineihongwaiSj'], resolve),
                title:'技师空闲状态'
              },
              // {
              //   path: '/menjinkongzhi',
              //   name: 'menjinkongzhi',
              //   component: resolve => require(['@/view/anquanfangfan/menjinkongzhi'], resolve),
              //   title:'门禁控制系统'
              // },
              // {
              //   path: '/menjinjilu',
              //   name: 'menjinjilu',
              //   component: resolve => require(['@/view/anquanfangfan/menjinjilu'], resolve),
              //   title:'门禁记录系统'
              // },
              
        ]
    },
    {
      title:"账单",
      icon:"el-icon-menu",
      children:[
            // {
            // // icon:"el-icon-menu",
            //   path: '/xiaofangjiankong',
            //   name: 'xiaofangjiankong',
            //   component: resolve => require(['@/view/xiaofang/xiaofangjiankong'], resolve),
            //   title:'消防监控'
            // },
            {
              title:"店面采购",
              // icon:"el-icon-location-outline",
              children:[{
                path: '/huozaibaojing',
                name: 'huozaibaojing',
                component: resolve => require(['@/view/xiaofang/huozaibaojing'], resolve),
                title:'店面采购',
              },
              {
                path: '/shenchanzonghelou1',
                name: 'shenchanzonghelou1',
                component: resolve => require(['@/components/xiaofang/shenchanzonghelou1'], resolve),
                title:'画板1',
              }]
            },
            {
              title:"账单录入",
              // icon:"el-icon-location-outline",
              children:[{
                path: '/qitimiehuo',
                name: 'qitimiehuo',
                component: resolve => require(['@/view/xiaofang/qitimiehuo'], resolve),
                title:'充值界面'
                },{
                  path: '/xiaohuoshuan',
                  name: 'xiaohuoshuan',
                  component: resolve => require(['@/view/xiaofang/xiaohuoshuan'], resolve),
                  title:'点单录入'
                },
                {
                  path: '/miehuoqipeizhi',
                  name: 'miehuoqipeizhi',
                  component: resolve => require(['@/view/xiaofang/miehuoqipeizhi'], resolve),
                  title:'画板1'
                },
                // {
                //   path: '/yingjizhaoming',
                //   name: 'yingjizhaoming',
                //   component: resolve => require(['@/view/xiaofang/yingjizhaoming'], resolve),
                //   title:'应急照明及疏散指示灯系统'
                // }
              ],
            },
            {
               title:'订单查询',
               // icon:"el-icon-location-outline",
               children:[{path: '/paizhuzhudan',
                  name: 'paizhuzhudan',
                  component: resolve => require(['@/view/xiaofang/paizhuzhudan'], resolve),
                  title:'快速查询'
                  },
                  // {
                  //   path: '/zhubianpaizhuzhudan2',
                  //   name: 'zhubianpaizhuzhudan',
                  //   component: resolve => require(['@/view/xiaofang/zhubianpaizhuzhudan'], resolve),
                  //   title:'2号主编变压器排油注氮'
                  // }
                ]
            },
      ]
    },
    {
      title:"会员管理",
      icon:"el-icon-menu",
      children:[
          {
              path: '/zaixianjiance',
              name: 'zaixianjiance',
              component: resolve => require(['@/view/zaixianjiance/zaixianjiance'], resolve),
              title:'画板1'
            },
            {
              path: '/yousepu',
              name: 'yousepu',
              component: resolve => require(['@/view/zaixianjiance/yousepu'], resolve),
              title:'画板2'
            },
      ]
    },
    {
      title:"技师管理",
      icon:"el-icon-menu",
      children:[
          {
              path: '/jipaishui',
              name: 'jipaishui',
              component: resolve => require(['@/view/jipaishui/jipaishui'], resolve),
              title:'技师提成管理'
            },
            {
              path: '/jishui',
              name: 'jishui',
              component: resolve => require(['@/view/jipaishui/jishui'], resolve),
              title:'技师管理'
            },
            
      ]
    },
    {
      title:"客房管理",
      icon:"el-icon-menu",
      children:[
          {
              path: '/huanjingjiankong',
              name: 'huanjingjiankong',
              component: resolve => require(['@/view/huanjingjiankong/huanjingjiankong'], resolve),
              title:'客房管理'
            },
           
           
      ]
    },
    {
      title:"套餐管理",
      icon:"el-icon-menu",
      children:[
          {
              path: '/zhaomingkongzhi',
              name: 'zhaomingkongzhi',
              component: resolve => require(['@/view/zhaomingkongzhi/zhaomingkongzhi'], resolve),
              title:'套餐管理'
            },
            {
              path: '/shengchanzonghelou',
              name: 'shengchanzonghelou',
              component: resolve => require(['@/view/zhaomingkongzhi/shengchanzonghelou'], resolve),
              title:'添加套餐'
            },
      ]
    },
    {
      title:"系统管理",
      icon:"el-icon-menu",
      children:[
          {
            path: '/yonghuguanli',
            name: 'yonghuguanli',
            component: resolve => require(['@/view/xitongpeizhi/yonghuguanli'], resolve),
            title:'会员管理'
          },
          {
            path: '/caidanguanli',
            name: 'caidanguanli',
            component: resolve => require(['@/view/xitongpeizhi/caidanguanli'], resolve),
            title:'店铺管理'
          },
          {
            path: '/jueseguanli',
            name: 'jueseguanli',
            component: resolve => require(['@/view/xitongpeizhi/jueseguanli'], resolve),
            title:'权限管理'
          },
          {
            path: '/zuzhijiagou',
            name: 'zuzhijiagou',
            component: resolve => require(['@/view/xitongpeizhi/zuzhijiagou'], resolve),
            title:'用户管理'
          },
          
      ]
    }
]
export default routers