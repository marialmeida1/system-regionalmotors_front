<template>
  <div>
    <div class="bg-white">
      <div id="carregarBanner" class="text-center col-12" hidden>carregando...</div>
      <div class="bg-white card-banner0">
        <div
          id="carouselExample"
          class="carousel slide invisible"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          <div class="carousel-inner size_banner">
            <div class="carousel-item active bg-dark">
              <div class="box-carousel-1">
                <picture class="banner" v-if="bannerCarregando">
                  <source media="(max-width: 568px)" :srcset="infos?.banner_loja_movel ? `https://api.regionalmotors.com.br/${infos.banner_loja_movel}` : '/banner/foto-mobile1.jpg'" />
                  <img
                    :src="infos?.banner_loja ? `https://api.regionalmotors.com.br/${infos.banner_loja}` : '/banner/foto1.jpg'"
                    alt="Banner"
                    style="width: 100%; object-fit: cover"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import * as api from "../../services/api";

export default {
  name: "TheBanner",

  data() {
    return {
      infos: null,
      bannerCarregando: false,
    };
  },

  methods: {
    async fetchAnunciante() {
      try {
        const url = window.location.href;
        const pathname = new URL(url).pathname;
        const id = pathname.split("/")[2];

        const response = await api.encontrarAnunciante(id);

        this.infos = response.data;

      } catch (error) {
        console.error("Erro ao buscar dados do anunciante:", error);
        //this.$router.push({ path: '/'});
      }
    },
  },

  async mounted() {
    // Inicialize o carousel após o carregamento do DOM
    var myCarousel = new bootstrap.Carousel(document.getElementById("carouselExample"), {
      // Opções do carousel, se necessário
    });

    setTimeout(() => {
      this.bannerCarregando = true;
    }, 800);

    setTimeout(() => {
      document.getElementById("carouselExample").classList.remove("invisible");
    }, 100);

    await this.fetchAnunciante();
  },
};
</script>

<style>

.size_banner {
  height: 170px;
}

.banner img {
  width: 100%;
  object-fit: cover;
  height: 170px; /* Altura padrão para web */
}

@media (max-width: 568px) {
  .banner img {
    height: 215px; /* Altura menor para dispositivos móveis */
  }

  .size_banner {
    height: 215px;
  }
}
</style>
