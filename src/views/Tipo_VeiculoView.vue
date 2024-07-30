<template>
    <div>
        <TheNavTop/>
        
        <div id="TheNavLateral" class="menu-lateral showHidden_menu-lateral">
          <TheAdminNavLateral2 @show_menu_lateral="handle_showHidden_menu_lateral"/>
        </div>
        
        <TheTipo_Veiculo @show_menu_lateral="handle_showHidden_menu_lateral" @editarCategoria="editarCategoriaNow"/>

        <TheAddTipo_Veiculo/>

    </div>
</template>

<script>
   import TheNavTop from "../components/navBares/TheNavTop.vue"
   import TheAdminNavLateral2 from "../components/navBares/TheAdminNavLateral2.vue"
   import TheTipo_Veiculo from "../components/admin/TheTipo_Veiculo.vue"
   import TheAddTipo_Veiculo from "../components/modals/TheAddTipo_Veiculo.vue"
  
   export default {
        components: {
            TheNavTop,
            TheAdminNavLateral2,
            TheTipo_Veiculo,
            TheAddTipo_Veiculo,
           
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