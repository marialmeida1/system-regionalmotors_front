<template>
  <div>
    
  </div>
</template>

<script>
  /* import "../assets/bootstrap/css/bootstrap.min.css"
  import "../assets/jquery/jquery" */

  export default {
    created(){
      if(localStorage.getItem('Auth') === null) {
        const data = JSON.parse(localStorage.getItem('Auth'))

        //const parametros = { id: data.user.id, name: data.user.name };
        //this.$router.push({ path: '/gerenciador', query: parametros });
        this.$router.push({ path: '/'});
      }
      else {
        this.$router.push({ path: '/login'});
      }
      
    }
  }
</script>