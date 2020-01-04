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
              :unique-opened="false" >
              <el-submenu v-for="(item ,i) in leftItem" :key="i"  index="i">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{item.title}}</span>
                </template>
                <el-menu-item v-for="(itemA,indexA) in item.children" 
                  :key="indexA"  
                  :index="itemA.path">{{itemA.title}}
                  </el-menu-item>
              </el-submenu>
            </el-menu>


            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item>
</el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
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
      },
      leftItem:'',
    }
  },
  methods:{
  
  },
  beforeMount(height) {
      var h = document.documentElement.clientHeight || document.body.clientHeight;
      this.curHeight.height =h - 120; //减去页面上固定高度height
  },
  mounted(){
     console.log(router)
     this.leftItem = router;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
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
