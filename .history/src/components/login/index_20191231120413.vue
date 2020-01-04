<template>
  <div class="hello">
    <button @click="btn"></button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      
    }
  },
  metheds:{
    btn(){
      this.$router.push('/homePage');

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
