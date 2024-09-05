<template>
    <div>
        <TheNavTop/>
        <div id="TheNavLateral" class="menu-lateral showHidden_menu-lateral">
          <TheAdminNavLateral2 @show_menu_lateral="handle_showHidden_menu_lateral"/>
        </div>
        
        <TheDetalhesAnunciantes @show_menu_lateral="handle_showHidden_menu_lateral"/>

        <div>
          <TheCarregarFoto ref="theCarregarFoto" @refrescandoFotos="refrescandoFotosNow"/>
        </div>
    </div>
</template>

<script>
   import TheNavTop from "../components/navBares/TheNavTop.vue"
   import TheAdminNavLateral2 from "../components/navBares/TheAdminNavLateral2.vue"
   import TheDetalhesAnunciantes from "../components/admin/TheDetalhesAnunciantes.vue"
   import TheCarregarFoto from "../components/modals/TheCarregarFoto.vue"
   
   export default {
        components: {
            TheNavTop,
            TheAdminNavLateral2,
            TheDetalhesAnunciantes,
            TheCarregarFoto
        },

          data() {
            return {
              TheAdminNavLateral2: ''
            }
          },  

          methods: {
            handle_showHidden_menu_lateral() {

              this.TheNavLateral.classList.toggle('showHidden_menu-lateral')
            }
          },

          mounted() {
            this.TheNavLateral = document.getElementById("TheNavLateral")
          }
        }
</script>