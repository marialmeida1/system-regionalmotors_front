<template>
    <div>
        <TheNavTop/>
        
        <TheDetalhesAnuncios @show_menu_lateral="handle_showHidden_menu_lateral"/>

        <div>
          <TheCarregarFoto ref="theCarregarFoto" @refrescandoFotos="refrescandoFotosNow"/>
        </div>
    </div>
</template>

<script>
   import TheNavTop from "../components/navBares/TheNavTop.vue"
   import TheNavLateral from "../components/navBares/TheNavLateral.vue"
   import TheDetalhesAnuncios from "../components/admin/TheDetalhesAnuncios.vue"
   import TheCarregarFoto from "../components/modals/TheCarregarFoto.vue"
   
   export default {
        components: {
            TheNavTop,
            TheNavLateral,
            TheDetalhesAnuncios,
            TheCarregarFoto
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