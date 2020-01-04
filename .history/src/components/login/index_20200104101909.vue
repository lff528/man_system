<template>
  <div class="login">
     <div class="login_header" :style="{height:curHeight+'px'}">
       <div class="main">
           <p class="main_title">管理平台</p>
          <div class="from_box">
              <p class="user_p">
                <span class="el-icon-user"></span>
                <!-- <el-select v-model="form.name" >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select> -->
                <el-select v-model="form.name" placeholder="请选择">
                  <el-option
                    v-for="item in userArr"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </p>
              <p class="user_p">
                <span class="el-icon-goods" style="width:45px"></span>
                <el-input" v-model="form.password"></el-input>
              </p>
              <p>
                 <el-button type="primary"  @click="onSubmit">验证指纹</el-button>
                 <el-button type="primary" @keyup.enter.native="onSubmit">登录</el-button>
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
      curHeight:window.innerHeight - 80,
      form:{
        name:"1",
        password:''
      },
      userArr:[
        {
          value: '1',
          label: 'sysadmin'
        },{
          value: '2',
          label: 'user2'
        },{
          value: '3',
          label: 'admin'
        }
        
      ]
    }
  },
  methods:{
    onSubmit(){
      if(this.form.name == "" || this.form.password==""){
        this.$message('用户名或密码不能为空');
        return
      }
      this.$router.push('/main');

    },
    btn(){
      conosle.log(11)
    }
  },
  mounted(){
    let that = this;
    window.onresize = function windowResize () {
       that.curHeight = window.innerHeight - 80;
    }
  },
  // beforeMount(height) {
  //     var h = document.documentElement.clientHeight || document.body.clientHeight;
  //     const that = this
  //       window.onresize = () => {
  //         return (() => {
  //          var h = document.documentElement.clientHeight || document.body.clientHeight;
  //           that.curHeight =h - 80; //减去页面上固定高度height
  //         })()
  //       }
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .login .el-input__inner{
    border-radius: 0;
  }
  .login .el-button--primary{
    background: #2e558e;
    border-color: #2e558e;
    width: 100px;
  }
  .login .el-select{
    width: 100%;
  }
</style>
<style scoped lang="less">

  .login{
      .login_header{
        background: white;
        .main{
          width: 360px;
          height: 250px;
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
              margin-top: 20px;
              display: flex;
              span:first-child{
                display: inline-block;
                width: 40px;
                height: 40px;
                background: #ccc;
                font-size: 25px;
                line-height: 40px;
                text-align: center;
                color: white;
              }
              
            }
            p:first-child{
              margin-top: 30px;
            }
            .user_p{
              margin-left: 10px;
              margin-right: 10px;
            }
            p:last-child{
              display: flex;
              justify-content: space-around;
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
