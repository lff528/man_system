<template>
  <div class="huozaibaojing">
    <el-row class="wrap">
        <el-col :span="12" class="wrap_left">
            <div class="chart_box box"></div>
        </el-col>
        <el-col :span="6" class="wrap_center">
            <!-- <div class="">
              <router-link to='huozaibaojingzhuji' tag="li">火灾报警主机</router-link>
              <router-link to='shenchanzonghelou1' tag="li">生产综合楼1楼</router-link>
            </div> -->
            <div class="box">
               <router-link to='huozaibaojingzhuji' tag="p">火灾报警主机</router-link>
              <ul>
                <li></li>
              </ul>
            </div>
            <div class="box">
               <router-link to='shenchanzonghelou1' tag="p">生产综合楼1楼</router-link>
              <ul>
                <li></li>
              </ul>
            </div>
            <div class="box">
               <router-link to='shenchanzonghelou1' tag="p">220KV配电室装置楼1楼</router-link>
              <ul>
                <li></li>
              </ul>
            </div>
            <div class="box">
               <router-link to='shenchanzonghelou1' tag="p">220KV配电室装置楼2楼</router-link>
              <ul>
                <li></li>
              </ul>
            </div>
        </el-col>
        <el-col :span="6" class="wrap_right">
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
  name: 'huozaibaojing',
  data () {
    return {
      
    }
  },
  methods:{
    btn(){
      

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
  .huozaibaojing{
    height: 100%;
    background: #28468a;
    .wrap{
      height: 100%;
      padding: 15px;
      .wrap_left{
        height: 100%;
        padding-right: 15px;
      }
      .wrap_left>.box{
        height: 80%;
      // background: #ccc;
      }
      .wrap_center{
        border: 1px solid #aaa;
        height: 100%;
        overflow-y: auto;
        .box{
          height:200px;
          p{
            cursor: pointer;
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
