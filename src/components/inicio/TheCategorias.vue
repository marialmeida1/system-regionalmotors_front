<template>
  <div class="col-12 px-1 col-lg-10 mx-auto p-lg-0 mb-5 list-categorias">
    <!-- Exibir a largura da tela -->
    <div class="py-4 pb-1">
      <h5 class="mb-3" style="opacity: 0.7">
        <b>Categorias</b>
      </h5>
    </div>

    <div v-if="carregar" style="height: 20vh" class="text-center">
      <div>
        <img
          class="caixa"
          src="/regLoader.png"
          alt=""
          style="width: 50px; height: 50px; background: none !important"
        />
      </div>
    </div>

    <div v-else>
      <div id="splide-categoria" class="splide">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide p-2" v-for="item in Api_categorias" :key="item.id">
              <router-link :to="'/resultados?nome_categoria=' + item.nome">
                <div
                  class="eliteSlide bg-dark0 card-categ position-relative"
                  style="height: 170px !important; border-radius: 8px; overflow: hidden"
                >
                  <img
                    class="deApagar custom-image"
                    v-lazy="`${item.foto_categoria}?v=${new Date().getTime()}`"
                    alt="regional motors"
                    style="width: 100%; height: 100%; filter: brightness(75%)"
                  />

                  <div class="position-absolute p-3 nome-categ" style="bottom: 0; z-index: 99">
                    <b>{{ item.nome }}</b>
                  </div>
                </div>
              </router-link>
            </li>

            <!-- Adicione mais slides conforme necessário -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from "../../services/api";
import "@splidejs/splide/dist/css/splide.min.css";
import Splide from "@splidejs/splide";

export default {
  name: "TheDestaque",

  data() {
    return {
      pageReload: false,
      carregar: true,
      Api_categorias: [],
    };
  },

  async mounted() {
    this.Api_categorias = await api.listarCategoria();

    if (this.Api_categorias) {
      this.carregar = false;
    }

    this.pageReload = true;

    setTimeout(() => {
      this.pageReload = false;
    }, 100);
  },

  watch: {
    pageReload() {
      if (!this.pageReload) {
        this.initializeSplide();
      }
    },
  },

  methods: {
    goVeiculo(id) {
      const parametros = { id: id };
      this.$router.push({ path: "/verveiculo", query: parametros });
    },

    emitShowLoader() {
      this.$emit("showLoader");
    },

    execAll(id) {
      this.emitShowLoader();
      this.goVeiculo(id);
    },

    initializeSplide() {
      new Splide("#splide-categoria", {
        type: "loop",
        perPage: 2,
        breakpoints: {
          640: {
            perPage: 2,
          },
          768: {
            perPage: 3,
          },
          1024: {
            perPage: 4,
          },
          3000: {
            perPage: 4,
          },
        },
        autoplay: true,
        interval: 3000,
        pagination: false,
      }).mount();
    },
  },
};
</script>

<style>
/* Seus estilos personalizados */
.custom-image {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
  cursor: pointer;
}

.card-categ {
  box-shadow: -3px 2px 8px rgba(0, 0, 0, 0.2) !important;
  cursor: pointer;
}

.desc-vitrine {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
}

.card-categ * {
  font-size: 13px;
}

/* Seus estilos personalizados */
.custom-image {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
  cursor: pointer;
}

.card-categ {
  box-shadow: -3px 2px 8px rgba(0, 0, 0, 0.6);
}

.nome-categ {
  /*background-color: rgba(255, 31, 31, 0.8);*/
  width: 100%;
  font-weight: 900;
  color: #fff;
  /* transition: height 1s ease-in-out; */
  border-top-right-radius: 50px;
}

.nome-categ b {
  font-size: 1.25rem;
}

.list-categorias {
  min-height: 22rem;
}
</style>
