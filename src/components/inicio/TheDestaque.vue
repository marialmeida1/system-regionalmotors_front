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
        <img
          class="caixa"
          src="/regLoader.png"
          alt=""
          style="width: 50px; height: 50px; background: none !important"
        />
      </div>
    </div>

    <div v-else>
      <div id="splide-destaque" class="splide">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide p-2" v-for="item in $store.state.anuncios" :key="item.id">
              <!-- <router-link :to="'/verveiculo?id='+item.id"> -->
              <div
                v-if="item.foto1"
                class="eliteSlide card-categ position-relative"
                style="border-radius: 8px !important; overflow: hidden; cursor: pointer"
                @click="execAll(item.id)"
              >
                <div>
                  <!-- Desktop -->
                  <img
                    class="deApagar custom-image d-none d-lg-block"
                    v-lazy="`${item.foto1}principal.jpg?v=${new Date().getTime()}`"
                    :alt="item.nome_marca"
                    style="width: 100%; height: 130px"
                    @load="onImageLoad"
                    @error="onImageError"
                  />

                  <!-- Mobile -->
                  <img
                    class="deApagar custom-image d-lg-none"
                    v-lazy="`${item.foto1}principal.jpg?v=${new Date().getTime()}`"
                    :alt="item.nome_marca"
                    style="width: 100%; height: 130px"
                  />
                </div>
                <div class="resultados-titulos" style="height: 145px">
                  <div class="px-2 pt-2 position-relative">
                    <h5 class="mb-1">{{ item.nome_marca }}</h5>
                    <p class="mb-1">{{ item.nome_modelo }}</p>
                    <div style="opacity: 0.5; text-transform: uppercase">
                      <p>{{ item.combustivel }}</p>
                    </div>
                    <!-- div class="bg-dark position-absolute p-2" style="top: 0; right: 5px;"></div>
                                    <div class="bg-danger position-absolute p-2" style="top: 0; right: 25px;"></div -->
                  </div>
                  <div>
                    <div class="pt-2 pb-1 position-relative">
                      <div>
                        <h5 class="py-1 ps-2" style="color: #000000">R$ {{ item.valor_preco }}</h5>
                      </div>
                      <div>
                        <div class="row p-2 m-0">
                          <div class="col-6 p-0 m-0" style="font-size: 12px; opacity: 0.7">
                            {{ item.ano_modelo }}
                          </div>
                          <div class="col-6 p-0 m-0 text-end" style="font-size: 12px; opacity: 0.7">
                            {{ item.km.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }} km
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
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
      `api/anuncios/listar_anuncios?status_publicacao=2&vitrine=1`
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
</style>
