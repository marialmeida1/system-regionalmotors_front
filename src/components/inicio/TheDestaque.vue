<template>
  <div class="col-12 px-1 col-lg-10 mx-auto p-lg-0 mb-5 list-destaque">
    <!-- Exibir a largura da tela -->
    <div class="py-4 pb-1">
      <h5 class="mb-3" style="opacity: 0.7">
        <b>Destaques</b>
      </h5>
    </div>

    <div v-if="carregar" style="height: 20vh" class="text-center">
      <div>
        <img class="caixa" src="/regLoader.png" alt="" style="width: 50px; height: 50px; background: none !important" />
      </div>
    </div>

    <div v-else>
      <div id="splide-destaque" class="splide">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide p-2" v-for="item in $store.state.anuncios" :key="item.id">
              <!-- <router-link :to="'/verveiculo?id='+item.id"> -->
              <div v-if="item.foto1" class="eliteSlide card-categ position-relative"
                style="border-radius: 8px !important; overflow: hidden; cursor: pointer" @click="execAll(item.id)">
                <div>
                  <!-- Desktop -->
                  <img class="deApagar custom-image d-none d-lg-block"
                    v-lazy="`${item.foto1}principal.jpg?v=${new Date().getTime()}`" :alt="item.nome_marca"
                    style="width: 100%; height: 130px" @load="onImageLoad" @error="onImageError" />

                  <!-- Mobile -->
                  <img class="deApagar custom-image d-lg-none"
                    v-lazy="`${item.foto1}principal.jpg?v=${new Date().getTime()}`" :alt="item.nome_marca"
                    style="width: 100%; height: 130px" />
                </div>

                <div class="m-o p-4">
                  <div class="resultados-titulos" @click="showCarroDetalhes(id)">
                    <div class="position-relative">
                      <h4 class="title-card" style="font-weight: 800;">{{ item.nome_marca }} {{ item.nome_modelo }}</h4>
                      <div style="opacity: 0.5; text-transform: uppercase; min-height: 1.5rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                        <p>{{ item.modelFipe }}</p>
                      </div>
                      <div class="row m-0 pt-0">
                        <div class="d-flex gap-3 flex-wrap px-0">
                          <div class="d-flex align-items-center" style="font-size: 12px; opacity: 0.7">
                            <i class="far fa-calendar-alt me-1"></i> {{ item.ano_modelo }}
                          </div>
                          <div class="d-flex align-items-center" style="font-size: 12px; opacity: 0.7">
                            <i class="fas fa-tachometer-alt me-1"></i> {{ item.km }} km
                          </div>
                        </div>

                      </div>
                    </div>
                    <div class="pt-4 position-relative price">
                      <h4 style="color: #000000; opacity: 0.8;">R$ {{ item.valor_preco }}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <!-- </router-link> -->
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
    };
  },

  async mounted() {
    this.$store.state.anuncios = await api.filtrarAnuncio(
      `api/anuncios/listar_anuncios_new?status_publicacao=2&vitrine=1`
    );

    if (this.$store.state.anuncios) {
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

    onImageLoad() {
      console.log('Imagem carregada com sucesso');
    },

    onImageError(event) {
      console.log('Erro ao carregar a imagem', event);
      event.target.src = '/path/to/default-image.jpg'; // Defina uma imagem padrão se o carregamento falhar
    },

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
      new Splide("#splide-destaque", {
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
            perPage: 6,
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
.desc-vitrine {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
}

.list-destaque {
  min-height: 22rem;
}

.title-card {
  font-size: 1rem !important;
}

.imagem-container2 {
  height: 200px; /* Set a fixed height for the image container */
  width: 100%;
  overflow: hidden;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imagem-container2 img {
  object-fit: cover; /* Ensure the image covers the container area without distortion */
  height: 100%; /* Make the image fill the container */
  width: 100%; /* Ensure the image width is 100% of the container */
}

.titles * {
  font-size: 14px;
}

.titles {
  background: #fff;
  padding: 10px 5px;
  border-radius: 0rem 0rem 0.5em 0.5rem;
}

.container-completo {
  border-radius: 0.5rem;
  box-shadow: 0.25rem 0.25rem 1rem #00000020;
  padding: 0rem;
  margin: 0rem;
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
  display: flex;
  justify-content: center;
  width: 100%;
}

.btn-pagination {
  background-color: crimson;
  color: #fff;
  border: 0 solid;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin: 2rem 0rem;
}

.price h4 {
  font-size: 1.5rem !important;
  font-weight: 800;
}

@media (max-width: 768px) {
  .titles {
    border-radius: 0em 0.5rem 0.5rem 0rem;
  }

  .imagem-container2 {
    border-radius: 0.5rem 0rem 0rem 0.5rem;
  }
}
</style>
