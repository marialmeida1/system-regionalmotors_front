<template>
    <div>
        <TheNavTop/>
        
        <TheAnuncios @show_menu_lateral="handle_showHidden_menu_lateral" @handdleCarregarFotos="showCarregarFotos" @editarAnuncio="editarAnuncioNow" ref="theAnuncios" @hiddenLoading="hiddenLoadingNow" @caregouFotos="refrescandoFotosNow"/>
        
        <TheCriarAnuncio @refreshAnuncio="refreshAnuncioVar" ref="theCriarAnuncio"/>

        <div>
          <TheCarregarFoto ref="theCarregarFoto" @refrescandoFotos="refrescandoFotosNow"/>
        </div>


        <TheEditarAnuncio ref="theEditarAnuncio"/>


        <div class="loader" v-if="loading">
            <loader/>
        </div>

    </div>
</template>

<script>
   import TheNavTop from "../components/navBares/TheNavTop.vue"
   import TheAnuncios from "../components/admin/TheAnuncios.vue"
   import TheCriarAnuncio from "../components/modals/TheCriarAnuncio.vue"
   import TheEditarAnuncio from "../components/modals/TheEditarAnuncio.vue"
   import TheCarregarFoto from "../components/modals/TheCarregarFoto.vue"
   import loader from "../components/loaders/loader.vue" 
   
   export default {
        components: {
          TheNavTop,
          TheAnuncios,
          TheCriarAnuncio,
          TheCarregarFoto,
          TheEditarAnuncio,
          loader
      },

          data() {
            return {
              TheAdminNavLateral: '',
              exibeModalCarregarFoto: false,
              loading: false
            }
          },  

          methods: {
            handle_showHidden_menu_lateral() {
              console.log('Emitido...')

              this.TheAdminNavLateral.classList.toggle('showHidden_menu-lateral')
            },

            async refreshAnuncioVar(id){
              console.log('Recebido no Pai' + id)
              this.$store.state.anuncioID = id
              
              console.log('Actualizado' + id)
              this.$refs.theAnuncios.recarregarDados(this.$store.state.anuncioID);

              this.$refs.theCarregarFoto.exibeCarregarFoto()

              console.log("Exibindo loader")
              //this.loading = true
              this.$store.state.anuncioID = id


            },

            showCarregarFotos() {
              console.log('Show carregar fotos')
              this.$refs.theCriarAnuncio.showCarregarFotos();
            },
            
            showCarregarFotos() {
              console.log('Refresh Page')
              this.$refs.theCarregarFoto.refreshFotos();
            },

            editarAnuncioNow(id) {
              console.log('ola ' + id)

              this.$store.state.anuncioID = id

              this.$refs.theEditarAnuncio.showgetDados();
            },

            exibeCarregarFoto() {
              this.exibeModalCarregarFoto = true
              console.log('Exibindo Carregar Fotos') 
              this.$refs.theCarregarFoto.showCarregarFotos();
            },

            refrescandoFotosNow() {
              this.$refs.theAnuncios.recarregarDados();
            },

            hiddenLoadingNow() {
              console.log("Emitiu Loading")
              this.loading = false
            },
            
          },

          mounted() {
            this.TheAdminNavLateral = document.getElementById("TheAdminNavLateral")
          }
        }
</script>

<style>
  body {
    background-color: #f0f0f0;
  }

  .carregarFoto {
    width: 100vh; height: 100vh; position: absolute; top: 0; background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
