<!--  -->
<template>
    <div class="shenchanzonghelou1">
        <el-row class="wrap wrap_b">
            <el-col :span="12" class="wrap_left">
                <div class="box chart_box"></div>
                <div class="box_bottom">
                    <p class="box_bottom_title">单个装置基本信息</p>
                    <div class="box_bottom_item">
                        <div>
                            <p>感烟探头单个装置三维图</p>
                            <p><img src="" alt=""></p>
                        </div>
                        <ul>
                            <li>厂家：海湾公司</li>
                            <li>型号：VLP-666-CH标准型</li>
                            <li>投运日期：2014-08-08</li>
                            <li>布设位置：36KV高压室</li>
                            <li>供电电压：18-30V DC</li>
                            <li>IP等级：IP30</li>
                            <li>接线方式：两线制</li>
                            <li>尺寸（长×高×宽）：350mm×255mm×125mm</li>
                            <li>报警灵敏度范围：0.005%至20%obs/m</li>
                            <li><span style="width:70px;">运行条件：</span><span>探测环境（-5℃至45℃）</br> 探测环境（-20℃至60℃）</br> 探测环境（5℃至95℃）</span></li>
                        </ul>
                    </div>
                </div>
            </el-col>
           
            <el-col :span="12" class="wrap_right">
                <div class="box table_box">
                    <p>运行信息</p>
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="address" label="地址" width="" align="center"></el-table-column>
                        <el-table-column prop="name" label="指示灯" width="" align="center"> </el-table-column>
                        <el-table-column prop="stuats" label="正常故障" width="" align="center"></el-table-column>
                        <el-table-column prop="currentStatus" label="说明" width="" align="center"></el-table-column>
                         <el-table-column  label="操作区" width="" align="center">
                             <template slot-scope="scope">
                                 <el-button @click="shieldBtn(scope.row)" type="primary" size="small">屏蔽</el-button>
                                
                             </template>
                         </el-table-column>
                    </el-table>
                </div>
            </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                    address: '安全工器具室',
                    name: '1号感烟探头',
                    stuats: '正常',
                    currentStatus: '运行'
                }, {
                    address: '蓄电池室',
                    name: '2号感烟探头',
                    stuats: '正常',
                    currentStatus: '运行'
                }, {
                    address: '220Kv保护室',
                    name: '3号感烟探头',
                    stuats: '正常',
                    currentStatus: '运行'
                }, {
                    address: '380kv配电室',
                    name: '4号感烟探头',
                    stuats: '正常',
                    currentStatus: '运行'
                }]
        }
    },
    created() {

    },
    mounted() {

    }
}
</script>
<style lang='less'>
.table_box .el-table th,.table_box .el-table tr{
	background: #28468a;
	color: white;
}
.table_box .el-table td,.table_box .el-table th{
   padding: 2px 0;
}
.table_box /deep/ .el-table tbody tr:hover>td {
    background: #aaa;
	color: white;
 }
.shenchanzonghelou1{
    // height: 100%;
     background: #28468a;
    .wrap{
        // height: 100%;
         padding: 15px;
        .wrap_left{
            // height: 100%;
            // padding: 15px;
            border-right: 1px solid #aaa;
            .box{
                height: 400px;
                background: #ccc;
            }
            .box_bottom{
                padding: 15px;
                .box_bottom_title{
                    text-align: center;
                    line-height: 30px;
                    font-size: 16px;
                    font-weight: bold;
                }
                .box_bottom_item{
                    display: flex;
                }
                .box_bottom_item>div{
                    width: 250px;
                    p:last-child{
                        border: 1px solid #aaa;
                        width: 100px;
                        height: 100px;
                        margin: 20px auto;
                    }
                }
                .box_bottom_item>ul{
                    flex: 1;
                    margin-top: 30px;
                }
                .box_bottom_item>ul li{
                    display: flex;
                    font-size: 13px;
                    // span{
                    //     flex: 1;
                    // }
                }

            }
        }
        .wrap_right{
            // border-left: 1px solid #aaa;
            height: 100%;
            padding: 0 15px 15px;
            p{
                 text-align: center;
                    line-height: 30px;
                    font-size: 16px;
                    font-weight: bold;
            }
        }
    }
}
</style>