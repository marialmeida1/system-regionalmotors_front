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

.eliteSlide {
  display: flex;
  flex-direction: column;
  height: 100%; /* Garante que todos os cartões tenham altura uniforme */
}

.eliteSlide img {
  height: 130px !important; /* Define uma altura fixa para as imagens */
  width: 100%;
  object-fit: cover; /* Mantém a proporção e cobre o espaço disponível */
}

.m-o {
  flex-grow: 1; /* Faz com que o conteúdo do card ocupe o espaço disponível */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Mantém os elementos organizados */
}

</style>
