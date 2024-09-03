<template>
  <div>
    <div class="px-2 p-lg-0">
      <div
        class="card-comprar position-relative shadow-no-top col-11 col-md-6 col-lg-4 py-2 px-2 p-lg-3 mx-auto mb-3 bg-white"
      >
        <div>
          <div class="card-comprar-loja">
            <strong> Loja <i class="fa fa-store"></i> </strong>
          </div>
          <div class="card-comprar-align">
            <div>
              <img
                :src="`https://api.regionalmotors.com.br/${infos?.foto}`"
                style="object-fit: contain; width: 100%; height: 100%"
              />
            </div>
            <div class="card-comprar-title">
              <h4 class="mb-0 ms-4 card-comprar-title-text">
                {{ infos?.nome_empresa }}
              </h4>
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
      infos: null,
      showBar: false,
    };
  },

  methods: {
    applyFiltro(chaveID, valorID) {
      setTimeout(() => {
        const parametros = { [chaveID]: valorID };
        this.$router.push({ path: "/resultados", query: parametros });
      }, 500);
    },

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

    onFocus() {
      this.showBar = true;

      window.scrollTo({
        top: 160, // posição desejada em pixels
        behavior: "smooth", // rolagem suave
      });
    },

    onBlur() {
      setTimeout(() => {
        this.showBar = false;

        window.scrollTo(0, 0);
      }, 200);
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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-radius: 8px;
  box-shadow: -3px 3px 20px rgba(0, 0, 0, 0.1);
}

.card-comprar-loja {
  opacity: 0.4;
  font-size: 14px;
}

.card-comprar-align {
  display: flex;
  flex-direction: row;
  margin-top: 0.75rem;
  justify-content: space-around;
}

.card-comprar-title {
    margin: 0rem 1rem 0rem 1rem;
    border-left: solid #0000001f 2px;
}

.card-comprar-title-text {
  opacity: 0.6;
  font-weight: 900;
}

@media (max-width: 480px) {
  .card-comprar-text {
    font-size: 14px;
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
