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
          <span style="color: crimson; cursor: pointer" @click="verTodos"> ver todos </span>
        </p>
      </div>
    </div>

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

    <div class="pagination">
      <button v-if="current_page < total_pages" @click="verMais" class="btn-pagination">
        Ver mais
      </button>
    </div>

    <div style="position: fixed; right: 15px; bottom: 25px; z-index: 99" class="text-center d-lg-none d-md-none"
      @click="show_menu_lateral">
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
      arrayTitles: [],
      ordenacao_type: "0",
      url: "",
      queryString: "",
      infos: null,
      total_pages: 0,
      current_page: 1,
    };
  },

  components: {
    TheCardVeiculo
  },

  methods: {
    show_menu_lateral() {
      this.$emit("show_menu_lateral");
    },

    showCarroDetalhes(id) {
      const parametros = { id: id };

      this.$router.push({ path: `/verveiculorevenda`, query: parametros });
    },

    upPage() {
      // Mover o scroll para o topo da página
      window.scrollTo(0, 0);
    },

    goverveiculo(id) {
      this.$emit("goverveiculoNow", id);
    },

    async listData(data) {
      this.$store.state.resultado = await data;
    },

    async applyFiltro(chaveID, valorID) {
      this.notFound = false;
      this.loader = true;

      const chavesUnicas = {};

      this.$store.state.resultado = [];

      // Atualiza o objeto temporário com as chaves únicas e seus valores
      this.array_filtros.forEach((filtro) => {
        chavesUnicas[filtro.chave] = filtro.valor;
      });

      // Adiciona ou atualiza o valor da chave no objeto temporário
      chavesUnicas[chaveID] = valorID;

      // Atualiza o array_filtros a partir do objeto temporário
      this.array_filtros = Object.keys(chavesUnicas).map((chave) => ({
        chave,
        valor: chavesUnicas[chave],
      }));

      // Use qs.stringify para converter os parâmetros em uma string de consulta
      const queryParams = {};
      this.array_filtros.forEach((filtro) => {
        queryParams[filtro.chave] = filtro.valor;
      });

      this.arrayTitles = [];
      var titles = "Comprar ";
      var url_title = "";

      // Para iterar sobre os valores de queryParams
      Object.values(queryParams).forEach((el) => {
        if (el == 1) {
          el = "Novo";
        } else if (el == 2) {
          el = "Usado";
        }
        this.arrayTitles.push(el);
        titles += el + " ";
        url_title += el + "%";
      });

      document.title = titles;

      const url_title_min = url_title.toLowerCase();
      const newPath = `/estoque/#/${url_title_min}`;
      this.$router.replace(newPath);

      this.queryString = Object.keys(queryParams)
        .map((key) => `${key}=${queryParams[key]}`)
        .join("&");

      // Construa a URL com base nos filtros
      this.url = `api/anuncios/listar_anuncios?anunciante_id=${this.infos.id}&${this.queryString}&destaque_busca=1&status_publicacao=2`;

      // Chamada à API para filtrar anúncios com a URL construída
      this.$store.state.resultado = await api.filtrarAnuncio(this.url);

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

    async fetchAnuncios() {
      let allResults = [];

      for (let page = 1; page <= this.current_page; page++) {
        const resultado = await api.filtrarAnuncio(
          `api/anuncios/listar_anuncios/${this.ordenacao_type}?anunciante_id=${this.infos.id}&${this.queryString}&destaque_busca=1&status_publicacao=2&page=${this.current_page}`
        );

        allResults = [...allResults, ...resultado];
      }

      this.$store.state.resultado = allResults;
    },

    async getOrdenation(value) {
      this.ordenacao_type = value;
      await this.fetchAnuncios();
    },

    verTodos() {
      this.limparFiltro();
    },

    async verMais() {
      if (this.current_page < this.total_pages) {
        this.current_page += 1;
        await this.fetchAnuncios();
      }
    },

    async limparFiltro() {
      this.$store.state.resultado = [];
      this.loader = true;
      this.notFound = false;
      this.array_filtros = [];
      this.$store.state.resultado = await api.filtrarAnuncio(
        `api/anuncios/listar_anuncios?anunciante_id=${this.infos.id}&destaque_busca=1&status_publicacao=2`
      );
      const resultado = this.$store.state.resultado;
      const currentPage = resultado[0].current_page;
      const totalPages = resultado[0].total_pages;
      this.current_page = currentPage;
      this.total_pages = totalPages;
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

      const path = `/estoque`;
      this.$router.replace(path);
    },

    async fetchAnunciante() {
      try {
        const id = localStorage.getItem("storeId")

        const response = await api.encontrarAnunciante(id);

        this.infos = response.data;
      } catch (error) {
        console.error("Erro ao buscar dados do anunciante:", error);
        // Lide com erros conforme necessário
      }
    },
  },

  async mounted() {
    await this.fetchAnunciante();
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

    if (info_url == "estoque") {
      this.$store.state.resultado = await api.filtrarAnuncio(
        `api/anuncios/listar_anuncios?anunciante_id=${this.infos.id}&${this.queryString}&destaque_busca=1&status_publicacao=2&situacao_veiculo=2&tipo_veiculo=Carro`
      );
    } else {
      this.$store.state.resultado = await api.filtrarAnuncio(
        `api/anuncios/listar_anuncios?anunciante_id=${this.infos.id}&${this.queryString}&destaque_busca=1&status_publicacao=2`
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


    const pathname = new URL(url).pathname;
    const id = pathname.split("/")[2];

    const path = `/estoque`;
    this.$router.replace(path);

    const resultado = this.$store.state.resultado;

    const currentPage = resultado[0].current_page;
    const totalPages = resultado[0].total_pages;
    this.current_page = currentPage;
    this.total_pages = totalPages;
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
</style>
