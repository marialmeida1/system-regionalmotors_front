<template>
    <div>
        <TheNavTop/>
        
        <div id="TheAdminNavLateral2" class="menu-lateral showHidden_menu-lateral">
          <TheAdminNavLateral2 @show_menu_lateral="handle_showHidden_menu_lateral"/>
        </div>
        
        <TheAnuciosAdmin @show_menu_lateral="handle_showHidden_menu_lateral" @handdleCarregarFotos="showCarregarFotos" @editarAnuncio="editarAnuncioNow" ref="theAnuncios" @hiddenLoading="hiddenLoadingNow" @caregouFotos="refrescandoFotosNow"/>
        
        <TheCriarAnuncio @refreshAnuncio="refreshAnuncioVar" ref="theCriarAnuncio"/>

        <div>
          <TheCarregarFoto ref="theCarregarFoto" @refrescandoFotos="refrescandoFotosNow"/>
        </div>


        <TheEditarAnuncioAdmin ref="TheEditarAnuncioAdmin"/>


        <div class="loader" v-if="loading">
            <loader/>
        </div>

    </div>
</template>

<script>
   import TheNavTop from "../components/navBares/TheNavTop.vue"
   import TheAdminNavLateral2 from "../components/navBares/TheAdminNavLateral2.vue"
   import TheAnuciosAdmin from "../components/admin/TheAnuciosAdmin.vue"
   import TheCriarAnuncio from "../components/modals/TheCriarAnuncio.vue"
   import TheEditarAnuncioAdmin from "../components/modals/TheEditarAnuncioAdmin.vue"
   import TheCarregarFoto from "../components/modals/TheCarregarFoto.vue"
   import loader from "../components/loaders/loader.vue" 
   
   export default {
        components: {
          TheNavTop,
          TheAdminNavLateral2,
          TheAnuciosAdmin,
          TheCriarAnuncio,
          TheCarregarFoto,
          TheEditarAnuncioAdmin,
          loader
      },

          data() {
            return {
              TheAdminNavLateral2: '',
              exibeModalCarregarFoto: false,
              loading: false
            }
          },  

          methods: {
            handle_showHidden_menu_lateral() {

              this.TheAdminNavLateral2.classList.toggle('showHidden_menu-lateral')
            },

            async refreshAnuncioVar(id){
              this.$store.state.anuncioID = id
              this.$refs.TheAnuciosAdmin.recarregarDados(this.$store.state.anuncioID);

              this.$refs.theCarregarFoto.exibeCarregarFoto()

              //this.loading = true
              this.$store.state.anuncioID = id


            },

            showCarregarFotos() {
              this.$refs.theCriarAnuncio.showCarregarFotos();
            },
            
            showCarregarFotos() {
              this.$refs.theCarregarFoto.refreshFotos();
            },

            editarAnuncioNow(id) {

              this.$store.state.anuncioID = id

              this.$refs.TheEditarAnuncioAdmin.showgetDados();
            },

            exibeCarregarFoto() {
              this.exibeModalCarregarFoto = true
              this.$refs.theCarregarFoto.showCarregarFotos();
            },

            refrescandoFotosNow() {
              this.$refs.TheAnuciosAdmin.recarregarDados();
            },

            hiddenLoadingNow() {
              this.loading = false
            },
            
          },

          mounted() {
            this.TheAdminNavLateral2 = document.getElementById("TheAdminNavLateral2")
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
