<template>
  <div class="login">
     <div class="login_header" :style="{height:curHeight+'px'}">
       <div class="main">
           <p>管理平台</p>
          <div>
              <p>
                <i></i>
                <el-select v-model="form.name" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </p>
              <p>
                <i></i>
                <el-input v-model="form.password"></el-input>
              </p>
              <p>
                 <el-button type="primary" @click="onSubmit">立即创建</el-button>
                  <el-button type="primary" @click="onSubmit">立即创建</el-button>
              </p>
          </div>
       </div>
       
     </div>
     <p class="login_footer">关于XXXXXXXX XXXXXX 客户服务 隐私政策 | XXXX版权所有 © 2018-2019</p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      curHeight:'',
      form:{
        name:'',
        password:''
      }
    }
  },
  methods:{
    btn(){
      this.$router.push('/main');

    }
  },
  beforeMount(height) {
      var h = document.documentElement.clientHeight || document.body.clientHeight;
      this.curHeight =h - 80; //减去页面上固定高度height
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .login{
      .login_header{
        background: white;
        .main{
          width: 100px;
          height: 328px;
        }
      }
      .login_footer{
        height: 80px;
        line-height: 80px;
        text-align: center;
        background: white;
      }
  }
</style>
