<template>
  <div class="main_box">
    <el-container>
      <el-header height="56px">
        
      </el-header>
      <el-container :style="{height:curHeight.height+ 'px'}">
        <el-aside width="230px" class="left_sub">
            <el-menu
              :default-active="this.$router.path" router 
              class="el-menu-vertical-demo"
             
              :unique-opened="true" >
              <el-submenu v-for="(item ,index) in leftItem" :key="index"  :index="`${index+1}`">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span>{{item.title}}</span>
                </template>
                <el-menu-item 
                  v-for="(itemA,indexA) in item.children" 
                  :key="indexA"  
                  :index="itemA.path"
                  >
                  <i :class="itemA.icon"></i>
                  <span>{{itemA.title}}</span>
                </el-menu-item>
              </el-submenu>
              
            </el-menu>
            
        </el-aside>
        <el-main height="100vh">
            <router-view></router-view>
        </el-main>
      </el-container>
       <el-footer height='50px'>
         <div>
           <ul>
             <li v-for="(item,index) in footerNav" :key="index" @click="footBtn(index)" :class="footIndex== index? 'footer_active':''">{{item.name}}</li>
           </ul>
         </div>
       </el-footer>
    </el-container>
  </div>
</template>

<script>
  import router from  '../../until/router'
export default {
  name: 'mainBox',
  data () {
    return {
      curHeight:{
        height:500
      },
      leftItem:'', //左侧导航数据
      footIndex:0,//底部导航索引
      footerNav:[
        {
          name:"首页",
          path:"/main"
        },{
          name:"全站总览",
          path:"/main"
        },{
          name:"全站报文",
          path:"/main"
        },{
          name:"越线信息",
          path:"/main"
        },{
          name:"异常设备",
          path:"/main"
        },{
          name:"消防系统",
          path:"/xiaofang"
        },{
          name:"在线监测",
          path:"/zaixianjiance"
        },{
          name:"给排水系统",
          path:"/main"
        },{
          name:"环境监测",
          path:"/jipaishui"
        },{
          name:"照明控制",
          path:"/zhaomingkongzhi"
        },{
          name:"智能锁控",
          path:"/zhinengsuokong"
        },{
          name:"智能联动",
          path:"/zhinengliandong"
        }
      ]
    }
  },
  methods:{
    footBtn(index){
      this.footIndex = index
    }
  },
  beforeMount(height) {
      var h = document.documentElement.clientHeight || document.body.clientHeight;
      this.curHeight.height =h - 112; //减去页面上固定高度height
  },
  mounted(){
     this.leftItem = router;
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
</style>
<style scoped lang="less">
  
  .main_box{
    .footer_active{
      background: #006bbc;
    }
    .el-header {
      /* background-color: #B3C0D1; */
      /* color: #333;
      text-align: center; */
      /* line-height: 60px; */
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
      /* color: #333; */
      /* text-align: center; */
      /* line-height: 200px; */
    }
    
    .el-main {
      /* background-color: #E9EEF3; */
      /* color: #333;
      text-align: center;
      line-height: 160px; */
    }
    
    body > .el-container {
      /* margin-bottom: 40px; */
    }
  
  }
</style>
