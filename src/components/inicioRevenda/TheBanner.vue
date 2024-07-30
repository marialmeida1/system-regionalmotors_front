<template>
  <div>
      <div class="bg-white" style="height: 200px; border-bottom: 1px solid rgba(165, 165, 165, 0.0);">
        <div id="carregarBanner" class="text-center col-12" hidden>
            carregando...
          </div>

        <div class="bg-white card-banner">
                  <div id="carouselExample" class="carousel slide invisible" data-bs-ride="carousel" data-bs-interval="4000">
                      <div class="carousel-inner">
                        <div class="carousel-item active bg-dark">
                          <div class="box-carousel-1" hidden>
                             <img src="/banner/foto1.jpg" class="d-none d-md-block d-lg-block w-100" alt="Regional motors">
                            <img class="d-md-none d-lg-none w-100" src="/banner/foto-mobile1.jpg" alt="Regional motors">
                          </div>
                          <div class="box-carousel-1">
                             <img :src="$store.state.fotosAnunciantes.banner_loja" class="d-none d-md-block d-lg-block w-100" alt="Regional motors">
                            <img class="d-md-none d-lg-none w-100" :src="$store.state.fotosAnunciantes.banner_loja_movel" alt="Regional motors">
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
      name: 'TheBanner',

      async created() {
        const id = parseInt(this.$route.params.revenda);
        const dados = await api.detalharAnunciante(id);
        this.$store.state.fotosAnunciantes = dados[0];
      },

      mounted() {
        // Inicialize o carousel após o carregamento do DOM
        var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
          // Opções do carousel, se necessário
        });

        setTimeout(() => {
          document.getElementById("carouselExample").classList.remove("invisible");
        }, 100);
      }
  }
</script>

<style>
.card-banner {
  height: 180px;
}

.box-carousel-1, .box-carousel-2 {
  background-size: cover;
  height: 200px;
  border-radius: 0 !important;
  width: 100%;
  background-repeat: no-repeat;
}

@media (max-width: 900px) {
  .card-banner {
    height: 155px;
  }

  .box-carousel-1, .box-carousel-2 {
    height: 155px;
  }
}

@media (max-width: 600px) {
  .card-banner {
    height: 155px;
  }

  .box-carousel-1, .box-carousel-2 {
    height: 155px;
  }
}
</style>