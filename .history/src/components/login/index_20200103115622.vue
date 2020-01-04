<template>
  <div class="login">
     <div class="login_header" :style="{height:curHeight+'px'}">
       <div class="main">
           <p class="main_title">管理平台</p>
          <div class="from_box">
              <p>
                <span class="iconfont icon-yonghu"></span>
                <el-select v-model="form.name" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </p>
              <p>
                <span></span>
                <el-input v-model="form.password"></el-input>
              </p>
              <p>
                 <el-button type="primary"  @click="onSubmit">验证指纹</el-button>
                  <el-button type="primary" @click="onSubmit">登录</el-button>
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
    onSubmit(){
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
          width: 360px;
          height: 280px;
          border: 1px solid #ccc;
          position: relative;
          left: 50%;
          margin-left: -205px;
          top: 10%;
          padding: 25px;
          background: white;
          border-top: 8px solid #2e558e;
          .main_title{
            height: 40px;
            text-align: center;
            line-height: 40px;
            border-bottom: 1px solid #2e558e;
            font-size: 18px;
            font-family: "\5FAE\8F6F\96C5\9ED1"
          }
          .from_box{
            p{
              margin-top: 15px;
            }
          }
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
