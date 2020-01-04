<template>
  <div class="main_box">
    <el-container>
      <el-header>

      </el-header>
      <el-container :style="{height:curHeight.height+ 'px'}">
        <el-aside width="200px">
            <el-menu
              default-active="1" class="el-menu-vertical-demo">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>消防系统</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
              
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
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
