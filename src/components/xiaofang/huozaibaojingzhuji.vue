<!-- 火灾报警主机 -->
<template>
    <div class="huozaibaojinzhuji">
        <el-row class="wrap wrap_b">
            <el-col :span="12" class="wrap_left">
                <div class="box chart_box"></div>
            </el-col>
            <el-col :span="7" class="wrap_center">
                <div class="box">1</div>
            </el-col>
            <el-col :span="5" class="wrap_right">
                <div class="box">1</div>
            </el-col>
      </el-row>
      <el-row class="wrap">
            <el-col :span="19" class="wrap_left2">
                <div class="box table_box">
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="index" label="序号" width="50" align="center"></el-table-column>
                        <el-table-column prop="indicatorLight" label="指示灯" width="120" align="center"> </el-table-column>
                        <el-table-column prop="fault" label="正常故障" width="120" align="center"></el-table-column>
                        <el-table-column prop="explain" label="说明" width="" align="center"></el-table-column>
                    </el-table>
                </div>
            </el-col>
            <el-col :span="5" class="wrap_right2">
                <div class="box">1</div>
            </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
             tableData: [{
                index: '1',
                indicatorLight: '火灾',
                fault: '不亮',
                explain: '未隔离系统中一个或多个设备启动了控制器的报警，变亮'
                }, {
               index: '1',
                indicatorLight: '火灾',
                fault: '不亮',
                explain: '未隔离系统中一个或多个设备启动了控制器的报警，变亮'
                }, {
                index: '1',
                indicatorLight: '火灾',
                fault: '不亮',
                explain: '未隔离系统中一个或多个设备启动了控制器的报警，变亮'
                }, {
                index: '1',
                indicatorLight: '火灾',
                fault: '不亮',
                explain: '未隔离系统中一个或多个设备启动了控制器的报警，变亮'
                }]
        }
    },
    created() {

    },
    mounted() {

    }
}
</script>
<style lang="less">
.huozaibaojinzhuji{
    height: 100%;
    background: #28468a;
    
    .wrap{
        height: 50%;
        // padding: 15px;
        .wrap_left{
            height: 100%;
            // padding: 15px;
            .box{
                height: 100%;
            // background: #ccc;
            }
        }
        .wrap_center{
            
        }
       
        .wrap_right{
            border-left: 1px solid #aaa;
            height: 100%;
        }
        .wrap_left2{
            height: 100%;
            border-right: 1px solid #aaa;
            padding: 10px;
           
        }
    }
    .wrap_b{
        border-bottom: 1px solid #aaa
    }
}
</style>