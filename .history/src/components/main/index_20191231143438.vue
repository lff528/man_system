<template>
  <div class="main_box">
    <el-container>
      <el-header>

      </el-header>
      <el-container :style="{height:curHeight.height+ 'px'}">
        <el-aside width="300px">
            <el-menu
              default-active="2" 
              class="el-menu-vertical-demo"
               unique-opened="false" >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>消防系统</span>
                </template>
                <el-menu-item index="1-1">消防监控</el-menu-item>
                <el-menu-item index="1-2">火灾报警系统</el-menu-item>
                <el-menu-item index="1-2">气体灭火系统</el-menu-item>
                <el-menu-item index="1-2">消火栓系统</el-menu-item>
                <el-menu-item index="1-2">灭火器配置</el-menu-item>
                <el-menu-item index="1-2">应急照明及疏散指示灯系统</el-menu-item>
                <el-menu-item index="1-2">变压器排油注氮灭火</el-menu-item>
                <el-menu-item index="1-2">变压器水喷雾灭火</el-menu-item>
              </el-submenu>
              
            </el-menu>
            
        </el-aside>
        <el-main height="100vh">

        </el-main>
      </el-container>
       <el-footer>footeer</el-footer>
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
      }
    }
  },
  methods:{
   
  },
  beforeMount(height) {
      var h = document.documentElement.clientHeight || document.body.clientHeight;
      this.curHeight.height =h - 120; //减去页面上固定高度height
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    /* color: #333;
    text-align: center; */
    /* line-height: 60px; */
  }
  
  .el-aside {
    background-color: #D3DCE6;
    /* color: #333; */
    /* text-align: center; */
    /* line-height: 200px; */
  }
  
  .el-main {
    background-color: #E9EEF3;
    /* color: #333;
    text-align: center;
    line-height: 160px; */
  }
  
  body > .el-container {
    /* margin-bottom: 40px; */
  }
  
  
</style>
