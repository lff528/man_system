<template>
  <div class="nav_header">
    <div class="header_btn">
        <span>切换</span>
        <span>
            <el-button type="primary">返回</el-button>
        </span>
        
    </div>
    <div class="header_title">
        <span><img src="" alt=""></span>
        <span>220KV河南变电站辅助设备监控系统</span>
        <span>消防系统</span>
    </div>
    <div class="header_time">
        2020/01/02 14:02:59
    </div>
    <div class="header_alt">
        <p>
            <span>安防总</span>
            <span>0</span>
        </p>
         <p>
            <span>消防总</span>
            <span>0</span>
        </p>
         <p>
            <span>故障总</span>
            <span>2</span>
        </p>
         <p>
            <span>环境总</span>
            <span>0</span>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navHeader',
  data () {
    return {
      
    }
  },
  methods:{
   
  }
}
</script>
<style  lang="less">
    .nav_header{
        display: flex;
        color: white;

        .el-button{
            padding: 6px 10px;
        }
        .header_btn{
            width: 100px;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
</style>
