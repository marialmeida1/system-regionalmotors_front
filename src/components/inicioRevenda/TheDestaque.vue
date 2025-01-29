<template>
  <div class="container">
    <div class="px-2">
      <div class="">
        <h5 class="mb-3" style="opacity: 0.7">
          <b>Todas Ofertas</b>
        </h5>
      </div>
    </div>
  </div>

  <div v-if="loader" style="height: 60vh" class="text-center">
    <div>
      <img class="caixa" src="/regLoader.png" alt="" style="width: 50px; height: 50px; background: none !important" />
    </div>
    <span style="font-size: 12px"> Carregando... </span>
  </div>
  <div class="container">
    <div class="row p-0 m-0">
      <div class="col-lg-12 col-md-12 p-0 m-0">
        <div>
          <div class="row p-0 m-0">

            <!-- Card -->
            <TheCardVeiculo v-for="(item, index) in $store.state.resultado" :key="index" :id="item.id"
              :marca="item.nome_marca" :modelo="item.nome_modelo" :combustivel="item.combustivel"
              :preco="item.valor_preco" :ano="item.ano_modelo" :km="item.km"
              :fotos="[item.foto1, item.foto2, item.foto3, item.foto4, item.foto5, item.foto6, item.foto7, item.foto8, item.foto9, item.foto10].filter(Boolean)"
              @abrir-detalhes="goverveiculo" />

          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container d-flex justify-content-end">
    <router-link :to="`/estoque`">
      <div class="btn crimson col-12 py-2"
        style="border: #242424 solid 1px; color: #242424; font-weight: 600; font-size: 0.75rem">
        Ver Estoque
      </div>
    </router-link>
  </div>
</template>

<script>
import * as api from "../../services/api";
import Glide from "@glidejs/glide";
import TheCardVeiculo from "../resultados/TheCardVeiculo.vue";

export default {
  name: "TheResultadoRegional",

  props: {
    set_tipo_veiculo: String,
  },

  data() {
    return {
      splideOptions: {
        type: "carousel", // Tipo de slider
        perPage: 1,
      },

      array_filtros: [],
      results: false,
      loader: true,
      notFound: false,
      id: ''
    };
  },

  components: {
    TheCardVeiculo
  },

  methods: {
    show_menu_lateral() {
      this.$emit("show_menu_lateral");
    },

    upPage() {
      // Mover o scroll para o topo da página
      window.scrollTo(0, 0);
    },

    goverveiculo(id) {
      const parametros = { id: id };
      console.log(parametros)
      this.$router.push({ path: `/verveiculorevenda`, query: parametros });
    },
  },

  async mounted() {
    this.$store.state.resultado = [];

    const id = localStorage.getItem("storeId");
    console.log("ID: ", id)

    this.$store.state.resultado = await api.filtrarAnuncio(
      `api/anuncios/listar_anuncios?anunciante_id=${id}&status_publicacao=2`
    );

    if (this.$store.state.resultado) {
      this.results = true;
      this.loader = false;

      if (this.$store.state.resultado.length == 0) {
        this.notFound = true;
      }
    }

    this.id = id;
  },

  updated() {
    this.$nextTick(() => {
      if (this.$store.state.resultado) {
        Object.values(this.$refs).forEach((glideRefs) => {
          glideRefs.forEach((glideRef) => {
            const glide = new Glide(glideRef, {
              type: "carousel",
              perView: 1,
              gap: 0,
              peek: { before: 0, after: 0 },
              hoverpause: false,
              pagination: {
                el: ".glide__pagination", // elemento onde a paginação será renderizada
              },
            });
            glide.mount();
          });
        });
      }
    });
  },
};
</script>