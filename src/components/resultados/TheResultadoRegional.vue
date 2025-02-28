<template>
  <main class="content">
    <div class="pt-3 pe-4 pb-3 d-flex flex-row align-items-center justify-content-between">
      <!-- Links -->
      <div class="py-2 px-2" style="font-size: 13px">
        <span class="me-2 p-1 px-2 rounded-3 me-2"
          style="background-color: rgba(82, 82, 82, 0.2); color: #000; font-weight: 600"
          v-for="(filtro, index) in array_filtros" :key="index">
          <span v-if="filtro.chave == 'situacao_veiculo'">
            <span v-if="filtro.valor == '1'"> Novo </span>
            <span v-if="filtro.valor == '2'"> Usado </span>
          </span>
          <span v-else-if="filtro.chave == 'opcionais_id'"> Itens Opcionais </span>
          <span v-else> {{ filtro.valor }}</span>
        </span>
      </div>

      <!-- Ordenação -->
      <div class="ordenacao">
        <i class="fa fa-sort fa-md"></i>
        <select class="ordenacao_select" @change="getOrdenation($event.target.value)" id="ordenacao_select">
          <option value="0" selected>MAIS RELEVANTES</option>
          <option value="1">MENOR PREÇO</option>
          <option value="2">MAIOR PREÇO</option>
          <option value="3">ANO MAIS NOVO</option>
        </select>
      </div>
    </div>

    <div hidden>
      <div class="px-2 py-2">
        <h4>
          Resultados
          <span class="me-2" v-for="(filtro, index) in $store.state.todosFiltros" :key="index">
            oa {{ filtro.valor }},
          </span>
          | Regionalmotors
        </h4>
      </div>
    </div>

    <div v-if="loader" style="height: 60vh" class="text-center">
      <div>
        <img class="caixa" src="/regLoader.png" alt="" style="width: 50px; height: 50px; background: none !important" />
      </div>
      <span style="font-size: 12px"> Carregando... </span>
    </div>

    <div class="pt-5 px-3" v-show="notFound">
      <div class="col-lg-6 mx-auto rounded-3 text-center py-4" style="background-color: rgba(82, 82, 82, 0.2)">
        <h4>Nenhum resultado!</h4>
        <p class="m-0">
          Click para
          <span style="color: crimson; cursor: pointer" @click="verTodos"> Ver todos </span>
        </p>
      </div>
    </div>

    <div class="row p-0 m-0" v-if="!notFound && !loader">
      <div class="col-lg-12 col-md-12 p-0 m-0">
        <RecycleScroller :items="filteredResultados" :item-size="1" key-field="id" direction="horizontal"
          v-slot="{ item }">

          <TheCardVeiculo :key="item.id" :id="item.id" :marca="item.nome_marca" :modelo="item.nome_modelo"
            :combustivel="item.combustivel" :preco="item.valor_preco" :ano="item.ano_modelo" :km="item.km" :fotos="[
              item.foto1 || '/public/assets/pictures/placeholder', // Se não existir, usa a imagem padrão
              item.foto2, item.foto3, item.foto4, item.foto5,
              item.foto6, item.foto7, item.foto8, item.foto9, item.foto10
            ].filter(Boolean)" @abrir-detalhes="goverveiculo" />
        </RecycleScroller>

      </div>
    </div>

    <div style="position: fixed; right: 15px; bottom: 25px; z-index: 99"
      class="filter-icon text-center d-lg-none d-md-none" @click="show_menu_lateral">
      <div>
        <i class="fas fa-filter" style="font-size: 12px"></i>
        <div style="font-size: 11px">Filtrar</div>
      </div>
    </div>
  </main>
</template>

<script>
import * as api from "../../services/api";
import Glide from "@glidejs/glide";
import TheCardVeiculo from "./TheCardVeiculo.vue";
import { useStore } from "vuex";
import { RecycleScroller } from "vue3-virtual-scroller";

export default {
  name: "TheResultado",

  components: {
    RecycleScroller,
    TheCardVeiculo
  },

  computed: {
    filteredResultados() {
      if (Array.isArray(this.$store.state.resultado)) {
        return this.$store.state.resultado;
      }
      return [];
    }
  },

  data() {
    return {
      array_filtros: [],
      results: false,
      loader: true,
      notFound: false,
      arrayTitles: [],
      url: "",
      queryString: "",
      infos: null,
      ordenacao_type: "0",
      chamada: 0
    };
  },

  methods: {
    show_menu_lateral() { // Botão de filtragem mobile
      this.$emit("show_menu_lateral");
    },

    goverveiculo(id) { // Emite informações para abrir página 
      this.$emit("goverveiculoNow", id);
    },

    async applyFiltro(chaveID, valorID) {
      this.chamada += 1;
      console.log("Chamada", this.chamada);

      this.notFound = false;
      this.loader = true;
      console.log(chaveID, valorID);

      this.updateFiltros(chaveID, valorID); // Update nos filtros
      const queryParams = this.createQueryParams(); // Cria
      this.formatTitleUrl(queryParams);

      this.url = this.constructUrl(queryParams);

      console.log("Iniciando requisição para:", this.url);
      const startTime = Date.now(); // Registra o tempo inicial

      this.$store.state.resultado = await api.filtrarAnuncio(this.url);

      const endTime = Date.now(); // Registra o tempo final
      console.log(`Requisição concluída em ${endTime - startTime}ms`);
      console.log(this.$store.state.resultado);

      if (this.$store.state.resultado) {
        this.results = true;
        this.loader = false;

        if (this.$store.state.resultado.length == 0) {
          this.notFound = true;
        } else {
          this.notFound = false;
        }
      }

    },


    updateFiltros(chaveID, valorID) {
      const chavesUnicas = {};


      this.$store.state.resultado = []; // Reseta os dados antes de buscar
      this.array_filtros.forEach((filtro) => { // Atualiza os filtros no objeto temporário
        chavesUnicas[filtro.chave] = filtro.valor;
      });


      chavesUnicas[chaveID] = valorID; // Adiciona ou atualiza o filtro
      this.array_filtros = Object.keys(chavesUnicas).map((chave) => ({ // Atualiza o array de filtros com as chaves únicas
        chave,
        valor: chavesUnicas[chave],
      }));
    },

    createQueryParams() { // Gera a string de parametros
      const queryParams = {};

      this.array_filtros.forEach((filtro) => {
        queryParams[filtro.chave] = filtro.valor;
      });

      return queryParams;
    },

    formatTitleUrl(queryParams) {
      this.arrayTitles = [];
      var titles = "Comprar ";
      var url_title = "";

      Object.values(queryParams).forEach((el) => {
        el = el === '1' ? "Novo" : el === '2' ? "Usado" : el;
        this.arrayTitles.push(el);
        titles += el + " ";
        url_title += el + "%";
      });

      document.title = titles;
      const url_title_min = url_title.toLowerCase();
      const newPath = `/resultados/#/${url_title_min}`;
      this.$router.replace(newPath);
    },

    constructUrl(queryParams) {
      this.queryString = Object.keys(queryParams)
        .map((key) => `${key}=${queryParams[key]}`)
        .join("&");

      return `api/anuncios/listar_anuncios_new?${this.queryString}&destaque_busca=1&status_publicacao=2`;
    },

    async fetchAnuncios() {
      const resultado = await api.filtrarAnuncio(
        `api/anuncios/listar_anuncios_new/${this.ordenacao_type}?${this.queryString}&destaque_busca=1&status_publicacao=2`
      );

      this.$store.state.resultado = resultado;
    },

    async getOrdenation(value) {
      this.ordenacao_type = value;
      await this.fetchAnuncios();
    },

    verTodos() {
      this.limparFiltro();
    },

    async limparFiltro() {
      this.$store.state.resultado = [];
      this.loader = true;
      this.notFound = false;
      this.array_filtros = [];
      this.$store.state.resultado = await api.filtrarAnuncio(
        `api/anuncios/listar_anuncios_new?destaque_busca=1&status_publicacao=2`
      );
      const resultado = this.$store.state.resultado; 4
      this.$store.state.results = true;
      this.filtro = "";
      this.textMarca = "";
      this.textModelo = "";
      this.$store.state.todosFiltros = [];
      this.queryString = "";

      if (this.$store.state.resultado) {
        this.results = true;
        this.loader = false;

        if (this.$store.state.resultado.length == 0) {
          this.notFound = true;
        }
      }

      const path = `/resultados`;
      this.$router.replace(path);
    },
  },

  async mounted() {
    this.$store.state.resultado = [];
    const keys = Object.keys(this.$route.query);

    let titles = "Comprar ";
    this.queryString = "";

    keys.forEach((key, index) => {
      let valor = this.$route.query[key];
      titles += `${valor} `;

      if (index === 0) {
        this.queryString += `${key}=${valor}`;
      } else {
        this.queryString += `&${key}=${valor}`;
      }
    });

    document.title = titles;

    const url = window.location.href;
    const baseUrl = window.location.origin;
    const info_path = url.replace(baseUrl, '');
    const info_url = info_path.split("/")[3];

    if (info_url == "resultados") {
      this.$store.state.resultado = await api.filtrarAnuncio(
        `api/anuncios/listar_anuncios_new?${this.queryString}&destaque_busca=1&status_publicacao=2&situacao_veiculo=2&tipo_veiculo=Carro`
      );
    } else {
      this.$store.state.resultado = await api.filtrarAnuncio(
        `api/anuncios/listar_anuncios_new?${this.queryString}&destaque_busca=1&status_publicacao=2`
      );
    }

    if (this.$store.state.resultado) {
      this.results = true;
      this.loader = false;

      if (this.$store.state.resultado.length == 0) {
        this.notFound = true;
      } else {
        this.notFound = false;
      }
    }

    const path = `/resultados`;
    this.$router.replace(path);

    const resultado = this.$store.state.resultado;
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

<style>
.filter-icon {
  border-radius: 100px;
  height: 55px;
  width: 55px;
  padding-top: 5px;
  background-color: crimson;
  color: #fff;
}

.vue-recycle-scroller__item-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 0rem 1rem 0rem 0rem;
  margin: 0;
}

@media screen and (min-width: 481px) and (max-width: 1204px) {
  .vue-recycle-scroller__item-wrapper {
    grid-template-columns: repeat(2, 1fr);
    padding: 0rem;
  }
}


@media (max-width: 768px) {
  .vue-recycle-scroller__item-wrapper {
    grid-template-columns: repeat(1, 1fr);
    padding: 0rem;
  }

}

@media (max-width: 480px) {
  .row.p-0.m-0 {
    grid-template-columns: 1fr;
  }
}

.vue-recycle-scroller__item-view {
  transform: translate(0px) !important;
}
</style>