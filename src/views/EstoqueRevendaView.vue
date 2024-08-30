<template>
    <div>
        <TheNavTop @filterVeiculoRoute="execFilterVeiculoRoute"/>
        
        <div id="TheNavLateral" class="menu-lateral showHidden_menu-lateral bg-white" style="box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);">
          <TheNavLateral @show_menu_lateral="handle_showHidden_menu_lateral" 
          @filter_tipo="filtrar_tipo"
          @filter_novo="filtrar_novo" ref="theNavLateral" @transmiteData="sendData" @limparFiltro="clearFiltros"/>
        </div>
        
        <TheResultado_Carro @show_menu_lateral="handle_showHidden_menu_lateral" :set_tipo_veiculo="set_tipo_veiculo" @goverveiculoNow="goverveiculo" ref="theresultado"/>

          <div v-show="this.results">
            <loader/>
          </div>
    </div>
</template>

<script>
   import TheNavTop from "../components/inicioRevenda/TheNavTop.vue"
   import TheNavLateral from "../components/inicioRevenda/TheNavLateral.vue"
   import TheResultado_Carro from "../components/inicioRevenda/TheEstoque.vue"
   import loader from "../components/loaders/loader.vue" 


   export default {
        components: {
              TheNavTop,
              TheNavLateral,
              TheResultado_Carro,
              loader
            },

          data() {
            return {
              TheNavLateral: '',
              router: '1',
              set_tipo_veiculo: '',
              results: false
            }
          },  

          methods: {
            handle_showHidden_menu_lateral() {
              console.log('Emitido...')

              this.TheNavLateral.classList.toggle('showHidden_menu-lateral')
            },
            
            filtrar_tipo(tipo_veiculo) {
              this.set_tipo_veiculo = tipo_veiculo
              console.log('Tipo pai: ' + this.set_tipo_veiculo)
            },

            filter_novo(novo){
              console.log('Novo: ' + novo)
              console.log('Semi_no: ' + semi_novo)

            },

            goverveiculo(id) {
              //document.querySelector('.loader').classList.remove('d-none')
              const parametros = { id: id };
              this.$router.push({ path: '/verveiculorevenda', query: parametros });
            },

            execFilterVeiculoRoute(veiculo) {
              // this.$refs.theresultado.applyFiltro('tipo', veiculo)
              this.$refs.theNavLateral.applyFiltro('tipo_veiculo', veiculo)

            },

            sendData(chaveID, valorID) {
              this.$refs.theresultado.applyFiltro(chaveID, valorID)
            },  

            clearFiltros() {
              this.$refs.theresultado.limparFiltro()
            }

          },

          mounted() {
            this.TheNavLateral = document.getElementById("TheNavLateral")
            this.TheNavLateral_moto = document.getElementById("TheNavLateral-moto")
          }
        }
</script>