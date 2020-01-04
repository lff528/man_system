<template>
  <div class="nav_header">
    <div>
        <span>切换</span>
        <el-button type="primary">返回</el-button>
    </div>
    <div>
        <span><img src="" alt=""></span>
        <span>220KV河南变电站辅助设备监控系统</span>
        <span>消防系统</span>
    </div>
    <div>
        2020/01/02 14:02:59
    </div>
    <div>
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
    }
</style>
