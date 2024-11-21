<template>
  <div>
    <div class="px-2 p-lg-0">
      <div
        class="card-comprar position-relative shadow-no-top col-11 col-md-8 col-lg-10 py-2 p-lg-4 mx-auto mb-3 bg-white"
        style="
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          border-radius: 8px;
          box-shadow: -3px 3px 20px rgba(0, 0, 0, 0.1);
        "
      >
        <div class="p-2 px-4 p-lg-2">
          <h5 class="card-comprar-text">
            <span class="luz-card-comprar"></span>
            <span style="margin-left: 10px">Encontre seu veículo</span>
          </h5>
        </div>

        <div class="">
          <div class="py-3 pt-0 d-none d-lg-bloc">
            <input type="checkbox" name="" id="" /> 0km
            <input type="checkbox" name="" id="" /> usados
          </div>

          <div class="row px-3">
            <div class="col-12 col-lg-8 mb-2 p-lg-0" style="position: relative">
              <div class="form-control search-comprar py-2 position-relative">
                <div class="position-absolute" style="top: 20%; left: 10px">
                  <i class="fas fa-search"></i>
                </div>

                <input
                  type="text"
                  style="width: 90%; cursor: pointer"
                  placeholder="Digite a marca ou modelo do veiculo"
                  v-model="searchQuery"
                  @input="debouncedHandleSearch"
                />
              </div>
              <div class="contant-main-buscar">
                <div
                  class="bg-white rounded-3 pt-2"
                  style="
                    height: 350px;
                    overflow: auto;
                    box-shadow: -3px 3px 20px rgba(0, 0, 0, 0.1);
                  "
                  v-if="showBar"
                >
                  <div>
                    <div class="content-buscar">
                      <div class="titulo-buscar">Marcas</div>
                      <div>
                        <ul class="m-0">
                          <li
                            v-if="listMarcaFiltrada.length > 0"
                            v-for="item in listMarcaFiltrada"
                            class="filteres"
                            @click="applyFiltro('nome_marca', item.nome_marca)"
                          >
                            {{ item.nome_marca }}
                          </li>
                          <li v-else>marca não encontrada</li>
                        </ul>
                      </div>
                    </div>
                    <div class="content-buscar">
                      <div class="titulo-buscar" style="margin-top: 0">Modelos</div>
                      <div>
                        <ul>
                          <li
                            v-for="item in listModeloFiltrado"
                            class="filteres"
                            v-if="listModeloFiltrado.length > 0"
                            @click="applyFiltro('nome_modelo', item.nome_modelo)"
                          >
                            {{ item.nome_modelo }}
                          </li>
                          <li v-else>modelo não encontrado</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 mb-2">
              <router-link to="/resultados">
                <div
                  class="btn crimson col-12 py-2"
                  style="background: crimson; color: #fff; font-weight: bold"
                >
                  OFERTAS
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
</template>

<script>
import * as api from "../../services/api";

export default {
  name: "ThecardComprar",

  data() {
    return {
      marcaSelecionada: "",
      modeloSelecionada: "",
      searchQuery: "",
      showBar: false,
      timeout: null,
    };
  },

  methods: {
    applyFiltro(chaveID, valorID) {
      setTimeout(() => {
        const parametros = { [chaveID]: valorID };
        this.$router.push({ path: "/resultados", query: parametros });
      }, 500);
    },

    /*guardarMarca(marca) {
                this.marcaSelecionada = marca; 

                console.log('Marca selecionada:', this.marcaSelecionada);

                const parametros = { nome_marca: this.marcaSelecionada };
                this.$router.push({ path: '/resultados', query: parametros });
            },

            guardarModelo(modelo) {
                this.modeloSelecionada = modelo; 

                console.log('Modelo selecionada:', this.modeloSelecionada);

                const parametros = { nome_modelo: this.modeloSelecionada };
                this.$router.push({ path: '/resultados', query: parametros });
            },*/

    emitShowLoader() {
      this.$emit("showLoader");
    },

    execAll(marca) {
      this.emitShowLoader();
      this.guardarMarca(marca);
    },

    execAll2(modelo) {
      this.emitShowLoader();
      this.guardarModelo(modelo);
    },

    debouncedHandleSearch() {
      clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        this.closeKeyboard();
      }, 2000);
    },

    closeKeyboard() {
      const inputElement = document.querySelector("input[type='text']");
      if (inputElement) {
        inputElement.blur();
      }
    },
  },

  watch: {
    searchQuery(value) {
      this.showBar = value && value.trim() !== "";
    },
  },

  async created() {
    this.$store.state.modelos = await api.listarModelo(); // Carrega os dados da API
    this.$store.state.marcas = await api.listarMarca();
  },

  mounted() {
    document.title = "Regional Motors - Venda e troca de carros usados e novos";
  },

  computed: {
    listMarcaFiltrada() {
      const textoFormatado = this.searchQuery
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      return this.$store.state.marcas.filter((fruta) =>
        fruta.nome_marca
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(textoFormatado)
      );
    },

    listModeloFiltrado() {
      const textoFormatado = this.searchQuery
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      return this.$store.state.modelos.filter((fruta) =>
        fruta.nome_modelo
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(textoFormatado)
      );
    },
  },
};
</script>

<style>
.routerLink {
  text-decoration: none;
  color: #000;
}

.routerLink:hover > h5 {
  transition: 0.2s ease;
}

.routerLink:hover > h5 {
  color: #000;
  font-size: 22px;
}

.link {
  cursor: pointer;
}

.rodape-dark-comprar {
  background: rgb(27, 30, 36);
  background: linear-gradient(90deg, rgb(27, 30, 36) 1%, rgb(40, 47, 59) 90%);
  color: #fff;
}

.card-comprar {
  margin-top: -16px;
}

@media (max-width: 480px) {
  .card-comprar-text {
    font-size: 14px;
  }

  .card-comprar {
    margin-top: 0px;
  }
}

.luz-card-comprar {
  display: inline-block;
  /* margin-right: 8px; */
  width: 12px;
  height: 12px;
  border-radius: 100px;
  background-color: rgb(255, 0, 0);
  animation: brilho 0.5s ease-in-out infinite alternate;
}

@keyframes brilho {
  0% {
    opacity: 0.8;
    box-shadow: 0 0 10px rgba(255, 26, 26, 1);
  }
  100% {
    opacity: 1;
    box-shadow: 0px 0px 8px 4px rgb(255, 0, 0);
  }
}

.contant-main-buscar {
  position: absolute;
  z-index: 99;
  width: 100%;
  top: 45px;
}

@media (max-width: 1000px) {
  .contant-main-buscar {
    width: 96.5%;
  }
}

.content-buscar ul {
  padding: 0;
}

.content-buscar ul li {
  list-style-type: none;
  padding: 5px 15px;
  cursor: pointer;
}

.content-buscar ul li:hover {
  color: crimson;
}

.titulo-buscar {
  margin-top: 15px;
  background-color: crimson;
  width: 150px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 1px 0;
  padding-left: 15px;
}
</style>
