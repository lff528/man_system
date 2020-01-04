<template>
  <div class="nav_header">
    <div class="header_btn">
        <span class="el-icon-s-fold huan" @click="collapseBtn"></span>
        <span>
            <el-button type="primary">返回</el-button>
        </span>
    </div>
    <div class="header_title">
        <span><img src="" alt=""></span>
        <span>220KV河南变电站辅助设备监控系统</span>
        <span>消防系统</span>
    </div>
    <div class="header_right">
         <div class="header-user">
            <el-popover
                placement="bottom"
                width=""
                trigger="click">
                <div class="btn" style="cursor: pointer;">
                    <span>修改密码</span>
                    <span>注销用户</span>
                    <span>修改时间</span>
                    <span>退出</span>
                </div>
                <p class="el-icon-user-solid" slot="reference"></p>
            </el-popover>
        </div>
        <p>
             2020/01/02 14:02:59
        </p>
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
  </div>
</template>

<script>
export default {
  name: 'navHeader',
  data () {
    return {
      isCollapse:true
    }
  },
  methods:{
      collapseBtn(){
          let falg =  this.isCollapse? false: true
          this.$emit('s', falg);
      }
  }
}
</script>
<style  lang="less">
    .nav_header{
        display: flex;
        color: white;
        align-items: center;
        height: 56px;
        .el-button{
            padding: 6px 10px;
        }
        .header_btn{
            width: 15%;
            display: flex;
            // justify-content: space-around;
            .huan{
                height: 28px;
                font-size: 24px;
                margin: 0 5px;
                cursor: pointer;
            }
        }
        .header_title{
            flex: 1;
            text-align: center;
            font-size: 20px;
        }
      
        .header_right{
            width: 30%;
            display: flex;
            .header_alt{
                display: flex;
                margin-left:10px;
            }
            .header-user{
                margin-right:10px;
                cursor: pointer;
                p{
                    font-size: 20px;
                }
            }

        }
    }
</style>
