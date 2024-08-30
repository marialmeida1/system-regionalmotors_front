<template>
  <div>
    <div class="bg-white size-banner">
      <div id="carregarBanner" class="text-center col-12" hidden>carregando...</div>
      <div class="bg-white card-banner0">
        <div
          id="carouselExample"
          class="carousel slide invisible"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          <div class="carousel-inner">
            <div class="carousel-item active bg-dark">
              <div class="box-carousel-1">
                <picture class="banner">
                  <source media="(max-width: 568px)" :srcset="infos?.foto ? `https://api.regionalmotors.com.br/${infos.foto}` : '/banner/foto-mobile1.jpg'" />
                  <img
                    :src="infos?.banner_mobile ? `https://api.regionalmotors.com.br/${infos.banner_mobile}` : '/banner/foto1.jpg'"
                    alt="Banner"
                    style="width: 100%; height: 100%; object-fit: cover"
                  />

                </picture>
              </div>
            </div>

            <!--<div class="carousel-item bg-dark">
              <div class="box-carousel-2">
                <picture class="banner">
                  <source media="(max-width: 568px)" srcset="/banner/foto-mobile3.png" />
                  <img
                    src="/banner/foto3.png"
                    alt="Banner"
                    style="width: 100%; height: 100%; object-fit: cover"
                  />
                </picture>
              </div>
            </div>-->
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
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
    };
  },

  methods: {
    async fetchAnunciante() {
      try {
        const url = window.location.href;
        const id = new URL(url).hash.split("/")[2];

        const response = await api.encontrarAnunciante(id);

        this.infos = response.data;
        console.log(this.infos);

      } catch (error) {
        console.error("Erro ao buscar dados do anunciante:", error);
        // Lide com erros conforme necessário
      }
    },
  },

  async mounted() {
    // Inicialize o carousel após o carregamento do DOM
    var myCarousel = new bootstrap.Carousel(document.getElementById("carouselExample"), {
      // Opções do carousel, se necessário
    });

    setTimeout(() => {
      document.getElementById("carouselExample").classList.remove("invisible");
    }, 100);

    await this.fetchAnunciante();
  },
};
</script>

<style>
.banner {
  width: 100%;
  background-size: cover; /* Redimensiona a imagem para cobrir o banner */
  background-position: center; /* Centraliza a imagem */
}

/* Estilos para mobile */
@media (max-width: 568px) {
  .banner {
    height: 250px; /* Altura para mobile */
  }

  .size-banner {
    height: 250px;
  }
}
</style>
