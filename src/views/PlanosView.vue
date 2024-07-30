<template>
    <div>
        <TheNavTop/>
        
        <div id="TheNavLateral" class="menu-lateral showHidden_menu-lateral">
          <TheAdminNavLateral2 @show_menu_lateral="handle_showHidden_menu_lateral"/>
        </div>
        
        <ThePlanos @show_menu_lateral="handle_showHidden_menu_lateral" @editarCategoria="editarCategoriaNow"/>

        <TheAddPlano/>

    </div>
</template>

<script>
   import TheNavTop from "../components/navBares/TheNavTop.vue"
   import TheAdminNavLateral2 from "../components/navBares/TheAdminNavLateral2.vue"
   import ThePlanos from "../components/admin/ThePlanos.vue"
   import TheAddPlano from "../components/modals/TheAddPlano.vue"
  
   export default {
        components: {
            TheNavTop,
            TheAdminNavLateral2,
            ThePlanos,
            TheAddPlano,
            
            },

          data() {
            return {
              TheNavLateral: ''
            }
          },  

          methods: {
            handle_showHidden_menu_lateral() {
              console.log('Emitido...')

              this.TheNavLateral.classList.toggle('showHidden_menu-lateral')
            },

            editarCategoriaNow() {
              console.log('editar Categoria')
              this.$refs.theEditarCategoria.showgetDados();
            }
          },

          mounted() {
            this.TheNavLateral = document.getElementById("TheNavLateral")
          }
        }
</script>