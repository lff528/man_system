<template>
  <div class="main_box">
    <el-container>
      <!-- 头部 -->
      <el-header height="56px">
        <navHeader @update="collapseBtn" ref="navHeader"></navHeader>
      </el-header>
      <!-- 主体 -->
      <el-container :style="{height:curHeight.height+ 'px'}">
        <el-aside :width="curHeight.width+'px'" class="left_sub">
            <el-menu
              :default-active="this.$router.path" router 
              class="el-menu-vertical-demo"
              :collapse="isCollapse"
              :unique-opened="true" >
              <el-menu-item   @click="switchBtn">
                  <i class="el-icon-menu"></i>
                  <span slot="title">选择 220KV河南变电站</span>
              </el-menu-item>
             
              <el-submenu v-for="(item ,index) in leftItem" :key="index"  :index="`${index+1}`">
                <template slot="title" >
                  <i :class="item.icon"></i>
                  <span>{{item.title}}</span>
                </template>
                <el-menu-item 
                  v-for="(itemA,indexA) in item.children" 
                  :key="indexA"  
                  :index="itemA.path"
                  >
                  <i :class="itemA.icon"></i>
                  <span @click="routerBtn(itemA.title)">{{itemA.title}}</span>
                </el-menu-item>
                
              </el-submenu>
             
            </el-menu>
            
        </el-aside>
        <el-main height="100vh">
            <router-view></router-view>
        </el-main>
      </el-container>
      <!-- 底部 -->
       <el-footer height='50px'>
         <div>
           <ul>
             <li v-for="(item,index) in footerNav" :key="index" @click="footBtn(index,item)" :class="footIndex== index? 'footer_active':''">{{item.name}}</li>
           </ul>
         </div>
       </el-footer>
    </el-container>
    <div class="switch_layer" :style="{left:curHeight.width+'px'}" v-show="switchShow">
      <el-tree :data="treeData" :props="defaultProps" :expand-on-click-node='false'></el-tree>
    </div>
  </div>
</template>

<script>
  import router from  '../../until/router'
  import navHeader from "@/components/main/navHeader";
  export default {
    name: 'mainBox',
    components:{navHeader},
    data () {
      return {
        curHeight:{
          height:500,
          width:230
        },
        isCollapse:false, //菜单收起放开
        leftItem:'', //左侧导航数据
        footIndex:0,//底部导航索引
        switchShow:false, //站端切换
        footerNav:[
          {
            name:"首页",
            path:"/main"
          },{
            name:"全站总览",
            path:"/quanzhanzonglan"
          },{
            name:"全站报文",
            path:"/quanzhanbaowen"
          },{
            name:"越线信息",
            path:"/yuexianxinxi"
          },{
            name:"异常设备",
            path:"/yichangshebei"
          },{
            name:"消防系统",
            path:"/xiaofangjiankong"
          },{
            name:"在线监测",
            path:"/zaixianjiance"
          },{
            name:"给排水系统",
            path:"/jipaishui"
          },{
            name:"环境监测",
            path:"/huanjingjiankong"
          },{
            name:"照明控制",
            path:"/zhaomingkongzhi"
          },{
            name:"智能锁控",
            path:"/zhinengsuokong"
          },{
            name:"智能联动",
            path:"/liandongpeizhi"
          }
        ],
        treeData: [{
          label: '福州运维班',
          children: [{
            label: '运维1班',
            children: [{
              label: '220KV河南变电站'
            }]
          },{
            label: '运维2班',
            children: [{
              label: '站端2'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods:{
      //底部导切换
      footBtn(index,item){
        this.footIndex = index;
        this.$router.push({"path":item.path});
        if(item.name=="首页"){
          this.$refs.navHeader.isShowHeader = true;
        }else{
           this.$refs.navHeader.isShowHeader = false;
        }
      },
      routerBtn(name){
        this.$refs.navHeader.isShowHeader = false;
        console.log(name)
          this.$refs.navHeader.title = name;
      },
      //左侧菜单收起展开
      collapseBtn(flag,width){
        this.isCollapse = flag;
        this.curHeight.width = width;
      },
      //站端切换
      switchBtn(){
         this.switchShow = !this.switchShow;
      }
    },
    beforeMount() {
        const that = this
        window.onresize = () => {
          return (() => {
           var h = document.documentElement.clientHeight || document.body.clientHeight;
            that.curHeight.height =h - 107; //减去页面上固定高度height
          })()
        }
    },
    mounted(){
      this.leftItem = router;
      let that = this;
      window.onresize = function windowResize () {
        that.curHeight.height = window.innerHeight - 107;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  /* 一级菜单标题 */
  .left_sub .el-menu .el-submenu>.el-submenu__title {
    background-color: #16355d ;
    color: white;
    height:44px;
    line-height: 44px;
  } 
  .left_sub .el-menu .el-submenu>.el-submenu__title:hover{
    background-color: #006bbc !important;
  }
  /* 一级内容 */
  .left_sub .el-menu .el-menu-item {
    background-color: #16355d ;
    color: #aaa;
    height:30px;
    line-height: 30px;
  } 
  .left_sub .el-menu-item.is-active {
    /* background-color: red !important; */
    color: white !important;
  }
  .left_sub .el-menu-item:hover{
   /* background-color: red !important; */
   color: white !important;
  }
  .left_sub .el-menu{
    border-right: none;
  }
  .el-tree-node{
    background: #006bbc;
    color: white;
  }
  .el-tree-node.is-current > .el-tree-node__content {
    background-color: #2F8DFB !important;
    color: black;
  }
  .el-tree-node__content:hover{
    background: #2F8DFB !important;
    color:black;
  }

</style>
<style scoped lang="less">
  
  .main_box{
    .footer_active{
      background: #006bbc;
    }
    .el-header {
      padding: 0;
    }
    .el-footer{
      border: 1px solid #2f769F;
      background-color: #07375f;
      padding: 0;
      ul{
        display: flex;
        height: 100%;
      }
      ul>li{
        flex: 1;
        border-right: 1px solid #2f769F;;
        text-align: center;
        line-height: 50px;
        color: white;
        cursor: pointer;
      }
    }
    .el-aside {
      background-color: #16355d;
    }
    
    .el-main {
       color: white;
    }
    
    body > .el-container {
      
    }
    .switch_layer{
      position: absolute;
      top: 56px;
      left: 230px;
      background: #0066bc;
      padding: 15px;
      width: 210px;
      min-height: 160px;
    }
  }
</style>
