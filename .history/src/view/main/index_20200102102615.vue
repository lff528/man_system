<template>
  <div class="main_box">
    <el-container>
      <el-header>

      </el-header>
      <el-container :style="{height:curHeight.height+ 'px'}">
        <el-aside width="300px">
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
       <el-footer>
         <div>
           <ul>
             <li v-for="(item,index) in footerNav" :key="index">{{item.name}}</li>
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
      leftItem:'',
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
  
  },
  beforeMount(height) {
      var h = document.documentElement.clientHeight || document.body.clientHeight;
      this.curHeight.height =h - 120; //减去页面上固定高度height
  },
  mounted(){
    
     this.leftItem = router;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .el-header {
    /* background-color: #B3C0D1; */
    /* color: #333;
    text-align: center; */
    /* line-height: 60px; */
  }
  .el-footer{
    border-top: 1px solid #ccc;
    ul{
      display: flex;
    }
    ul li{
      flex: 1;
    }
  }
  .el-aside {
    /* background-color: #D3DCE6; */
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
  
  
</style>
