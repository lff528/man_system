<template>
  <div class="qitimiehuo">
    <el-row class="wrap">
        <el-col :span="16" class="wrap_left">
            <div class="chart_box box">
              <p></p>
              <div></div>
            </div>
        </el-col>
        <el-col :span="4" class="wrap_center">
          <div class="box">
            <p>主机</p>
            <ul>
              <li></li>
            </ul>
          </div>
          <div class="box">
            <p>2号主变水喷雾灭火</p>
            <ul>
              <li></li>
            </ul>
            
          </div>
        </el-col>
        <el-col :span="4" class="wrap_right">
          <div class="wrap_right_item">
               
          </div>
          <div class="wrap_right_item">
               
          </div>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'qitimiehuo',
  data () {
    return {
      
    }
  },
  methods:{
    btn(){
      this.$router.push('/main');

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .qitimiehuo{
     height: 100%;
     background: #28468a;
    .wrap{
      height: 100%;
      padding: 15px;
      .wrap_left{
        height: 100%;
        // padding: 15px;
        padding-right: 15px;
      }
      .wrap_left>.box{
        height: 80%;
      // background: #ccc;
      }
      .wrap_center{
        border: 1px solid #aaa;
        height: 100%;
        .box{
          height:50%;
          p{
              text-align: center;
              height: 30px;
              line-height: 30px;
              background: #169BD4;
            }
        }
      }
      .wrap_right{
        height: 100%;
        padding-left: 15px;
        .wrap_right_item{
            height: 50%;
            border: 1px solid #aaa;
            
        }
      }
      
    }
  }
</style>
