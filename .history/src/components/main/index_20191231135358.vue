<template>
  <div class="main_box">
    <el-container>
      <el-header>
        
      </el-header>
      <el-container :style="{height:curHeight.height+ 'px'}">
        <el-aside width="200px">

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
