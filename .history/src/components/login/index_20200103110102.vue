<template>
  <div class="login">
     <div class="login_header" :style="{height:curHeight+'px'}">
        <p>管理平台</p>
        <div>
            <p>
              <i></i>
              <select name="" id=""></select>
            </p>
            <p>
              <i></i>
              <input name="" id=""></input>
            </p>
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
      }
      .login_footer{
        height: 80px;
        line-height: 80px;
        text-align: center;
        background: white;
      }
  }
</style>
