<template>
  <div class="navHeader">
    <button @click="btn">点击</button>
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
<style scoped>

</style>
