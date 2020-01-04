<template>
  <div class="login">
     <div class="header"></div>
     <p class="footer">关于XXXXXXXX XXXXXX 客户服务 隐私政策 | XXXX版权所有 © 2018-2019</p>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .login{
      .footer{
        height: 80px;
        line-height: 80px;
        text-align: center;
      }
  }
</style>
