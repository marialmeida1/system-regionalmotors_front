<template>
  <div>
    <TheNavTop @filterVeiculoRoute="execFilterVeiculoRoute" />

    <div id="TheNavLateral" class="menu-lateral showHidden_menu-lateral bg-white"
      style="box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1)">
      <TheNavLateral @show_menu_lateral="handle_showHidden_menu_lateral" @filter_tipo="filtrar_tipo" ref="theNavLateral"
        @transmiteData="sendData" @limparFiltro="clearFiltros" />
    </div>

    <TheResultado @show_menu_lateral="handle_showHidden_menu_lateral" :set_tipo_veiculo="set_tipo_veiculo"
      @goverveiculoNow="goverveiculo" ref="theresultado" />

    <div v-show="this.results">
      <loader />
    </div>
  </div>
</template>

<script>
import TheNavTop from "../components/inicioRevenda/TheNavTop.vue";
import TheNavLateral from "../components/inicioRevenda/TheNavLateral.vue";
import TheResultadoRevenda from "../components/resultados/TheResultadoRevenda.vue";
import loader from "../components/loaders/loader.vue";
import TheResultado from "../components/resultados/TheResultado.vue";

export default {
  components: {
    TheNavTop,
    TheNavLateral,
    TheResultado,
    loader,
  },

  data() {
    return {
      TheNavLateral: "",
      router: "1",
      set_tipo_veiculo: "",
      results: false,
    };
  },

  methods: {
    handle_showHidden_menu_lateral() {

      this.TheNavLateral.classList.toggle("showHidden_menu-lateral");
    },

    filtrar_tipo(tipo_veiculo) {
      this.set_tipo_veiculo = tipo_veiculo;
    },

    filter_novo(novo) {
    },

    goverveiculo(id) {
      const parametros = { id: id };

      this.$router.push({ path: `/verveiculorevenda`, query: parametros });
    },

    execFilterVeiculoRoute(veiculo) {
      // this.$refs.theresultado.applyFiltro('tipo', veiculo)
      this.$refs.theNavLateral.applyFiltro("tipo_veiculo", veiculo);
    },

    async sendData(chaveID, valorID) {
      const resultado = await this.$refs.theresultado.applyFiltro(chaveID, valorID);
    },

    clearFiltros() {
      this.$refs.theresultado.limparFiltro();
    },
  },

  mounted() {
    this.TheNavLateral = document.getElementById("TheNavLateral");
    this.TheNavLateral_moto = document.getElementById("TheNavLateral-moto");
  },
};
</script>
