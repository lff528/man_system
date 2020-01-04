<template>
  <div class="login">
     <div class="login_header" style="{height:}"></div>
     <p class="login_footer">关于XXXXXXXX XXXXXX 客户服务 隐私政策 | XXXX版权所有 © 2018-2019</p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      
    }
  },
  methods:{
    btn(){
      this.$router.push('/main');

    }
  },
  beforeMount(height) {
      var h = document.documentElement.clientHeight || document.body.clientHeight;
      this.curHeight.height =h - 80; //减去页面上固定高度height
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .login{
      .login_header{

      }
      .login_footer{
        height: 80px;
        line-height: 80px;
        text-align: center;
      }
  }
</style>
