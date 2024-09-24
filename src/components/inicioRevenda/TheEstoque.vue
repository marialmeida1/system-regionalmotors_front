<template>
  <main class="content">
    <div class="pt-3 pe-4 pb-3 d-flex flex-row align-items-center justify-content-between">
      <!-- Links -->
      <div class="py-2 px-2" style="font-size: 13px">
        <span
          class="me-2 p-1 px-2 rounded-3 me-2"
          style="background-color: rgba(82, 82, 82, 0.2); color: #000; font-weight: 600"
          v-for="(filtro, index) in array_filtros"
          :key="index"
        >
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
        <select
          class="ordenacao_select"
          @change="getOrdenation($event.target.value)"
          id="ordenacao_select"
        >
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
        <img
          class="caixa"
          src="/regLoader.png"
          alt=""
          style="width: 50px; height: 50px; background: none !important"
        />
      </div>
      <span style="font-size: 12px"> Carregando... </span>
    </div>

    <div class="pt-5 px-3" v-show="notFound">
      <div
        class="col-lg-6 mx-auto rounded-3 text-center py-4"
        style="background-color: rgba(82, 82, 82, 0.2)"
      >
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
            <div
              class="col-lg-3 col-md-6 p-0 m-0 mb-3"
              v-for="(item, index) in $store.state.resultado"
              :key="index"
              style="cursor: pointer"
            >
              <div class="px-2 container-completo">
                <div class="row p-0 m-0">
                  <div class="col-5 col-md-12 col-lg-12 m-0 p-0">
                    <splide :options="splideOptions" class="bg-dark">
                      <splide-slide v-if="item.foto1" @click="goverveiculo(item.id)">
                        <div>
                          <div class="imagem-container2">
                            <img
                              v-lazy="`${item.foto1}destaque_mini.jpg?v=${new Date().getTime()}`"
                              :alt="item.nome_marca"
                              alt="Sua imagem"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </splide-slide>

                      <splide-slide v-if="item.foto2" @click="goverveiculo(item.id)">
                        <div>
                          <div class="imagem-container2">
                            <img
                              v-lazy="`${item.foto2}destaque_mini.jpg?v=${new Date().getTime()}`"
                              :alt="item.nome_marca"
                              alt="Sua imagem"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </splide-slide>

                      <splide-slide v-if="item.foto3" @click="goverveiculo(item.id)">
                        <div>
                          <div class="imagem-container2">
                            <img
                              v-lazy="`${item.foto3}destaque_mini.jpg?v=${new Date().getTime()}`"
                              :alt="item.nome_marca"
                              alt="Sua imagem"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </splide-slide>

                      <splide-slide v-if="item.foto4" @click="goverveiculo(item.id)">
                        <div>
                          <div class="imagem-container2">
                            <img
                              v-lazy="`${item.foto4}destaque_mini.jpg?v=${new Date().getTime()}`"
                              :alt="item.nome_marca"
                              alt="Sua imagem"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </splide-slide>

                      <splide-slide v-if="item.foto5" @click="goverveiculo(item.id)">
                        <div>
                          <div class="imagem-container2">
                            <img
                              v-lazy="`${item.foto5}destaque_mini.jpg?v=${new Date().getTime()}`"
                              :alt="item.nome_marca"
                              alt="Sua imagem"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </splide-slide>

                      <splide-slide v-if="item.foto6" @click="goverveiculo(item.id)">
                        <div>
                          <div class="imagem-container2">
                            <img
                              v-lazy="`${item.foto6}destaque_mini.jpg?v=${new Date().getTime()}`"
                              :alt="item.nome_marca"
                              alt="Sua imagem"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </splide-slide>

                      <splide-slide v-if="item.foto7" @click="goverveiculo(item.id)">
                        <div>
                          <div class="imagem-container2">
                            <img
                              v-lazy="`${item.foto7}destaque_mini.jpg?v=${new Date().getTime()}`"
                              :alt="item.nome_marca"
                              alt="Sua imagem"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </splide-slide>

                      <splide-slide v-if="item.foto8" @click="goverveiculo(item.id)">
                        <div>
                          <div class="imagem-container2">
                            <img
                              v-lazy="`${item.foto8}destaque_mini.jpg?v=${new Date().getTime()}`"
                              :alt="item.nome_marca"
                              alt="Sua imagem"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </splide-slide>

                      <splide-slide v-if="item.foto9" @click="goverveiculo(item.id)">
                        <div>
                          <div class="imagem-container2">
                            <img
                              v-lazy="`${item.foto9}destaque_mini.jpg?v=${new Date().getTime()}`"
                              :alt="item.nome_marca"
                              alt="Sua imagem"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </splide-slide>

                      <splide-slide v-if="item.foto10" @click="goverveiculo(item.id)">
                        <div>
                          <div class="imagem-container2">
                            <img
                              v-lazy="`${item.foto10}destaque_mini.jpg?v=${new Date().getTime()}`"
                              :alt="item.nome_marca"
                              alt="Sua imagem"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </splide-slide>
                    </splide>

                    <div ref="glide" class="glide" hidden>
                      <div class="glide__track" data-glide-el="track">
                        <ul class="glide__slides">
                          <li class="glide__slide">
                            <div>
                              <div class="imagem-container2">
                                <img
                                  v-lazy="
                                    `${item.foto1}destaque_mini.jpg?v=${new Date().getTime()}`
                                  "
                                  :alt="item.nome_marca"
                                  alt="Sua imagem"
                                  class="img-fluid"
                                />
                              </div>
                            </div>
                          </li>
                          <li class="glide__slide">
                            <div>
                              <div class="imagem-container2">
                                <img
                                  v-lazy="
                                    `${item.foto2}destaque_mini.jpg?v=${new Date().getTime()}`
                                  "
                                  :alt="item.nome_marca"
                                  alt="Sua imagem"
                                  class="img-fluid"
                                />
                              </div>
                            </div>
                          </li>
                          <li class="glide__slide">
                            <div>
                              <div class="imagem-container2">
                                <img
                                  v-lazy="
                                    `${item.foto3}destaque_mini.jpg?v=${new Date().getTime()}`
                                  "
                                  :alt="item.nome_marca"
                                  alt="Sua imagem"
                                  class="img-fluid"
                                />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="glide__arrows" data-glide-el="controls">
                        <div
                          class="btn glide__arrow glide__arrow--left btn-voltar"
                          data-glide-dir="<"
                        >
                          <span> > </span>
                        </div>
                        <div
                          class="btn glide__arrow glide__arrow--right btn-avancar"
                          data-glide-dir=">"
                        >
                          <span> > </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-7 col-md-12 col-lg-12 titles p-0 m-0">
                    <div class="resultados-titulos" @click="showCarroDetalhes(item.id)">
                      <div class="px-2 pt-2 position-relative">
                        <h5>{{ item.nome_marca }} {{ item.nome_modelo }}</h5>
                        <div style="opacity: 0.5; text-transform: uppercase">
                          <p>
                            {{ item.combustivel }}
                          </p>
                        </div>
                        <!-- div class="bg-dark position-absolute p-2" style="top: 0; right: 5px;"></div>
                                      <div class="bg-danger position-absolute p-2" style="top: 0; right: 25px;"></div -->
                      </div>
                      <div>
                        <div class="pt-2 pb-1 position-relative">
                          <div>
                            <h5 class="py-1 ps-2" style="color: #000000">
                              R$ {{ item.valor_preco }}
                            </h5>
                          </div>
                          <div>
                            <div class="row p-2 m-0">
                              <div class="col-6 p-0 m-0" style="font-size: 12px; opacity: 0.7">
                                {{ item.ano_modelo }}
                              </div>
                              <div
                                class="col-6 p-0 m-0 text-end"
                                style="font-size: 12px; opacity: 0.7"
                              >
                                {{ item.km }} km
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pagination">
      <button @click="changePage(current_page - 1)" :disabled="current_page === 1">Anterior</button>
      <button @click="changePage(current_page + 1)" :disabled="current_page === total_pages">
        Próximo
      </button>
      <button v-for="page in total_pages" :key="page" @click="changePage(page)">
        {{ page }}
      </button>
    </div>

    <div
      style="position: fixed; right: 15px; bottom: 25px; z-index: 99"
      class="text-center d-lg-none d-md-none"
      @click="show_menu_lateral"
    >
      <div
        class="bg-dark"
        style="border-radius: 100px; height: 55px; width: 55px; padding-top: 5px"
      >
        <i class="fas fa-filter" style="font-size: 12px"></i> <br />
        <div style="font-size: 11px">Filtrar</div>
      </div>
    </div>
  </main>
</template>

<script>
import * as api from "../../services/api";
import Glide from "@glidejs/glide";

export default {
  name: "TheResultado_Carro",

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

  methods: {
    show_menu_lateral() {
      this.$emit("show_menu_lateral");
    },

    showCarroDetalhes(id) {
      const parametros = { id: id };
      const url = window.location.href;
      const pathname = new URL(url).pathname;
      const id_anunciante = pathname.split("/")[2];

      this.$router.push({ path: `/loja/${id_anunciante}/verveiculorevenda`, query: parametros });
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
      const url = window.location.href;
      const id = new URL(url).hash.split("/")[2];

      const newPath = `/loja/${id}/estoque/#/${url_title_min}`;
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
      this.$store.state.resultado = await api.filtrarAnuncio(
        `api/anuncios/listar_anuncios/${this.ordenacao_type}?anunciante_id=${this.infos.id}&${this.queryString}&destaque_busca=1&status_publicacao=2&page=${this.current_page}`
      );
    },

    async getOrdenation(value) {
      this.ordenacao_type = value;
      await this.fetchAnuncios();
    },

    verTodos() {
      this.limparFiltro();
    },

    async changePage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.total_pages) {
        this.current_page = pageNumber;
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

      const url = window.location.href;
      const id = new URL(url).hash.split("/")[2];

      const path = `/loja/${id}/estoque/`;
      this.$router.replace(path);
    },

    async fetchAnunciante() {
      try {
        const url = window.location.href;
        const id = new URL(url).hash.split("/")[2];

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

    // Faz a chamada para a API com a query string construída dinamicamente
    this.$store.state.resultado = await api.filtrarAnuncio(
      `api/anuncios/listar_anuncios?anunciante_id=${this.infos.id}&${this.queryString}&destaque_busca=1&status_publicacao=2`
    );

    if (this.$store.state.resultado) {
      this.results = true;
      this.loader = false;

      if (this.$store.state.resultado.length == 0) {
        this.notFound = true;
      } else {
        this.notFound = false;
      }
    }

    const url = window.location.href;
    const id = new URL(url).hash.split("/")[2];

    const path = `/loja/${id}/estoque/`;
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
/*@import "../../assets/css/resultadosPesquisa.css"*/

.imagem-container2,
.glide__slides {
  /*width: 110px;*/
  height: 150px;
  overflow: hidden;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .container-completo {
  
      }
  
      .glide__arrows button {
          background: rgba(0,0,0,0.2);
          border-radius: 100px;
      }
  
      .glide__arrows button:hover {
          background: rgba(0,0,0,0.6);
      }
  
      .glide__arrows button span {
          color: #fff;
      }*/

.titles * {
  font-size: 14px;
}

.titles {
  background: #fff;
  padding: 10px 5px;
}

.imagem-container2 img {
  width: 100% !important;
}

@media (max-width: 568px) {
  .imagem-container2,
  .glide__slides,
  .imagem-container2 img {
    /*width: 110px;*/
    height: 130px;
  }
}

.ano-km * {
  font-size: 12px;
  opacity: 0.7;
}

.glide__arrows * {
  border: none;
  box-shadow: none;
}

.glide__arrows span {
  font-size: 32px;
}

.glide__arrow--right {
  right: 0rem !important;
}

.glide__arrow--left {
  left: 0rem !important;
}

.glide__arrow--left span {
  display: inline-block;
  transform: rotate(180deg);
}

.ordenacao {
  color: rgba(51, 51, 51, 0.562);
}

.ordenacao_select {
  appearance: none;
  border: 0px solid;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  font-size: 14px;
  color: rgba(51, 51, 51, 0.562);
  padding-left: 0.5rem;
  max-width: 8rem;
  cursor: pointer;
}

.pagination {
  width: 100%;
  gap: 0.25rem;
  padding: 1rem 0rem 1rem 0rem;
  display: flex;
  justify-content: center;
}

.pagination button {
  border: 1px solid #0000003b;
  padding: 0.5rem 1rem;
  border-radius: 0.125rem;
  color: #000000d2;
  font-size: 0.75rem;
}

.pagination button:disabled {
  color: #00000071;
}
</style>
