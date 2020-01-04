<template>
  <div class="nav_header">
    <div class="header_btn">
        <span class="el-icon-s-fold huan" @click="collapseBtn"></span>
        <span>
            <el-button type="primary" v-show="!isShowHeader">返回</el-button>
        </span>
    </div>
   
    <div class="header_right">
       
        <div class="header_title2" v-if="isShowHeader" >
            <div class="header_title2_p">
                <p>
                    <img src="" alt="">
                    <span class="header_title2_box">
                        <span>国家电网</span>
                        <span>STATE GRID</span>
                    </span>
                </p>
                <p>220KV河南变电站辅助设备监控系统</p>
            </div>
            
        </div>
         <div class="header_title" v-else>
             <div class="header_title_p">
                 <span><img src="" alt=""></span>
                <span>220KV河南变电站辅助设备监控系统</span>
                <span>{{title}}</span>
             </div>
        </div>
         <div class="header-user">
            <el-popover
                placement="bottom"
                width=""
                trigger="click">
                <div class="btn" style="cursor: pointer;">
                    <el-button type="text">修改密码</el-button>
                    <el-button type="text">注销用户</el-button>
                    <el-button type="text">修改时间</el-button>
                    <el-button type="text" @click="loginOUt">退出</el-button>
                </div>
                <p class="el-icon-user-solid" slot="reference"></p>
            </el-popover>
        </div>  
        <p>
             2020/01/02 14:02:59
        </p>
        <div class="header_alt" v-show="isShowHeader">
            <p>
                <span>安防总</span>
                <span class="bg_green"  @click="alarmBtn('安防总')">0</span>
            </p>
            <p>
                <span>消防总</span>
                <span class="bg_green"  @click="alarmBtn('消防总')">0</span>
            </p>
            <p>
                <span>故障总</span>
                <span class="bg_red"  @click="alarmBtn('故障总')">2</span>
            </p>
            <p>
                <span>环境总</span>
                <span class="bg_green"  @click="alarmBtn('环境总')">0</span>
            </p>
        </div>
       
    </div>
    <div class="alarm_layer">
        <el-dialog :title="alarmTitle" :visible.sync="alarmLayer">
         <ul>
             <li>第一条记录</li>
         </ul>
         <div slot="footer" class="dialog-footer">
            <el-button @click="alarmLayer = false">取 消</el-button>
            <el-button type="primary" @click="alarmLayer = false">确 定</el-button>
        </div>
        </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navHeader',
  data () {
    return {
      isCollapse:false,
      isShowHeader:true,
      title:'',
      alarmLayer:false,
      alarmTitle:'',
    }
  },
  methods:{
      collapseBtn(){
        this.isCollapse = !this.isCollapse
        let width = this.isCollapse?64:230
        console.log( this.isCollapse)
        this.$emit('update',  this.isCollapse,width);
      },
      loginOUt(){
          this.$router.push({path:'/'})
      },
      alarmBtn(title){
          this.alarmLayer = true;
          this.alarmTitle = title;
      }
  }
}
</script>
<style  lang="less">
    .nav_header{
        display: flex;
        color: white;
        align-items: center;
        height: 66px;
        position: relative;
        .header_btn{
            width: 15%;
            height: 66px;
            display: flex;
            align-items: center;
            // justify-content: space-around;
            .el-button{
                padding: 6px 10px;
            }
            .huan{
                height: 28px;
                font-size: 24px;
                margin: 0 5px;
                cursor: pointer;
            }
        }
        .header_right{
            flex: 1;
            display: flex;
            align-items: center;
            height: 66px;
            padding-right: 10px;
            .header_title2{
                height: 100%;
                flex: 1;
                text-align: center;
                font-size: 20px;
                p{
                    font-size: 20px;
                    display:flex;
                    justify-content: center;
                }
                .header_title2_p{
                    height: 100%;
                    position: absolute; 
                    top:0;
                    left: 50%;
                    margin-left: -160px;
                }
                .header_title2_p .header_title2_box{
                    span{
                        font-size: 10px;
                        display: block;
                    }
                    
                }
            }
            .header_title{
                flex: 1;
                text-align: center;
                span{
                     font-size: 20px;
                }
                .header_title_p{
                    position: absolute;
                    top:0;
                    left: 50%;
                    margin-left: -160px;
                }
            }
            .header_alt{
                display: flex;
                margin-left:10px;
                p{
                    flex: 1;
                    margin: 0 5px;
                }
                span:last-child{
                    padding: 1px 5px;
                    border-radius: 50%;
                    color: white;
                }
                .bg_red{
                    background: red;
                    cursor: pointer;
                }
                .bg_green{
                    background: green;
                    cursor: pointer;
                }
            }
            .header-user{
                margin-right:10px;
                cursor: pointer;
                p{
                    font-size: 25px;
                }
            }

        }
        //告警弹框
        .alarm_layer{
            position: absolute;
            border: 1px solid #aaa;
        }
    }
</style>
