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
                  <source media="(max-width: 568px)" srcset="/banner/foto-mobile1.jpg" />
                  <img
                    src="/banner/foto1.jpg"
                    alt="Banner"
                    style="width: 100%; height: 100%; object-fit: cover"
                  />
                </picture>
              </div>
            </div>

            <div class="carousel-item bg-dark">
              <div class="box-carousel-2">
                <picture class="banner">
                  <source media="(max-width: 568px)" srcset="/banner/foto-mobile2.jpg" />
                  <img
                    src="/banner/foto2.jpg"
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
export default {
  name: "TheBanner",

  mounted() {
    // Inicialize o carousel após o carregamento do DOM
    var myCarousel = new bootstrap.Carousel(document.getElementById("carouselExample"), {
      // Opções do carousel, se necessário
    });

    setTimeout(() => {
      document.getElementById("carouselExample").classList.remove("invisible");
    }, 100);
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
