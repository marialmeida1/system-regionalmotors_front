<template>
    <div>
        <TheNavTop/>
        
        <div id="TheNavLateral" class="menu-lateral showHidden_menu-lateral">
          <TheAdminNavLateral2 @show_menu_lateral="handle_showHidden_menu_lateral"/>
        </div>
        
        <TheMarcas @show_menu_lateral="handle_showHidden_menu_lateral"/>

        <TheAddMarca/>
    </div>
</template>

<script>
   import TheNavTop from "../components/navBares/TheNavTop.vue"
   import TheAdminNavLateral2 from "../components/navBares/TheAdminNavLateral2.vue"
   import TheMarcas from "../components/admin/TheMarcas.vue"
   import TheAddMarca from "../components/modals/TheAddMarca.vue"
   
   export default {
        components: {
            TheNavTop,
            TheAdminNavLateral2,
            TheMarcas,
            TheAddMarca
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
            }
          },

          mounted() {
            this.TheNavLateral = document.getElementById("TheNavLateral")
          }
        }
</script>