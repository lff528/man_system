<template>
  <div class="xiaofangjiankong">
      <el-row class="wrap">
        <el-col :span="18" class="wrap_left">
            <div class="chart_box box"></div>
          </el-col>
        <el-col :span="6" class="wrap_right">
          <div class="wrap_right_box">
                <div class="wrap_right_box_item">
                  
                </div>
                <div class="wrap_right_box_item">
                  
                </div>
                <div class="wrap_right_box_item">
                  
                </div>
          </div>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'xiaofangjiankong',
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
.xiaofangjiankong{
  height: 100%;
  background: #28468a;
  .wrap{
    height: 100%;
    .wrap_left{
      height: 100%;
      padding: 15px;
    }
    .wrap_left>.box{
     height: 80%;
    //  background: #ccc;
    }
    .wrap_right_box{
      
    }
    .wrap_right_box>.wrap_right_box_item{
      height: 25vh;
      border: 1px solid #aaa;
    }
  }
}
</style>

