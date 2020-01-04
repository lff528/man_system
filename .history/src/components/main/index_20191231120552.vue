<template>
  <div class="hello">
    <button @click="btn">www</button>
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
      this.$router.push('/homePage');

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
