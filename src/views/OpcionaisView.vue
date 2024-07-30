<template>
    <div>
        <TheNavTop/>
        
        <div id="TheNavLateral" class="menu-lateral showHidden_menu-lateral">
          <TheAdminNavLateral2 @show_menu_lateral="handle_showHidden_menu_lateral"/>
        </div>
        
        <TheOpcionais @show_menu_lateral="handle_showHidden_menu_lateral" @editarCategoria="editarCategoriaNow"/>

        <TheAddOpcionais/>

    </div>
</template>

<script>
   import TheNavTop from "../components/navBares/TheNavTop.vue"
   import TheAdminNavLateral2 from "../components/navBares/TheAdminNavLateral2.vue"
   import TheOpcionais from "../components/admin/TheOpcionais.vue"
   import TheAddOpcionais from "../components/modals/TheAddOpcionais.vue"
  
   export default {
        components: {
            TheNavTop,
            TheAdminNavLateral2,
            TheOpcionais,
            TheAddOpcionais,
            
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