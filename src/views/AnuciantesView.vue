<template>
    <div>
        <TheNavTop/>
        
        <div id="TheNavLateral" class="menu-lateral showHidden_menu-lateral" style="z-index: 999;">
          <TheAdminNavLateral2 @show_menu_lateral="handle_showHidden_menu_lateral"/>
        </div>
        
        <TheAnunciantes @show_menu_lateral="handle_showHidden_menu_lateral" @editarPlano="editarPlanoNow" @showPlanos_anunciante="showPlanos_anuncianteNow"/>

        <TheAddAnunciante/>

        <TheEditarPlano ref="theEditarPlano"/> 

    </div>
</template>

<script>
   import TheNavTop from "../components/navBares/TheNavTop.vue"
   import TheAdminNavLateral2 from "../components/navBares/TheAdminNavLateral2.vue"
   import TheAnunciantes from "../components/admin/TheAnunciantes.vue"
   import TheAddAnunciante from "../components/modals/TheAddAnunciante.vue"
   
   export default {
        components: {
            TheNavTop,
            TheAdminNavLateral2,
            TheAnunciantes,
            TheAddAnunciante,

            },

          data() {
            return {
              TheNavLateral: '',
              ver_plano: null
            }
          },  

          methods: {
            handle_showHidden_menu_lateral() {
              console.log('Emitido...')

              this.TheNavLateral.classList.toggle('showHidden_menu-lateral')
            },

            editarPlanoNow() {
              console.log('editar Plano')
              this.$refs.theEditarPlano.showgetDados();
            },

            showPlanos_anuncianteNow(id) {
              this.ver_plano = id
              console.log('Plano Pai id' + this.ver_plano)
            }
          },

          mounted() {
            this.TheNavLateral = document.getElementById("TheNavLateral")
          }

          /*created() {
             if (localStorage.getItem('token')) {
                this.$router.push({ path: '/login'});
            }
          }*/
        }
</script>