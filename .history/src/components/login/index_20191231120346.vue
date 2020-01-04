<template>
  <div class="hello">
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

            btn(){
                //直接跳转
                this.$router.push('/testDemo');
 
             
            }
        }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
