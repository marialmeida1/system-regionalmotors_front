<template>
  <div class="mx-2 container-completo" style="cursor: pointer;">
    <div class="row p-0 m-0">
      <div class="col-5 col-md-12 col-lg-12 m-0 p-0">
        <splide :options="splideOptions">
          <splide-slide v-for="(foto, index) in fotos" :key="index" @click="goverveiculo(id)">
            <div class="imagem-container2">
              <img v-lazy="`${foto}destaque_mini.jpg`" :alt="marca" class="img-fluid" />
            </div>
          </splide-slide>
        </splide>
      </div>

      <div class="col-7 col-md-12 col-lg-12 titles p-4 m-0">
        <div class="resultados-titulos" @click="showCarroDetalhes(id)">
          <div class="position-relative">
            <h4 class="title-card" style="font-weight: 800;opacity: 0.9">{{ marca }} {{ modelo }}</h4>
            <div style="opacity: 0.5; text-transform: uppercase; min-height: 1.5rem;">
              <p style="font-size: 12px; opacity: 0.7">{{ version }}</p>
            </div>
            <div class="row m-0 pt-4">
              <div class="d-flex gap-3 flex-wrap px-0">
                <div class="d-flex align-items-center" style="font-size: 12px; opacity: 0.7">
                  <i class="far fa-calendar-alt me-1" style="font-size: 12px; opacity: 0.7"></i> <p style="font-size: 12px; opacity: 0.7">{{ ano }}</p>
                </div>
                <div class="d-flex align-items-center" style="font-size: 12px; opacity: 0.7">
                  <i class="fas fa-tachometer-alt me-1" style="font-size: 12px; opacity: 0.7"></i> <p style="font-size: 12px; opacity: 0.7">{{ km }} </p>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-4 position-relative price">
            <h4 style="opacity: 0.9">R$ {{ preco }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      splideOptions: {
        type: "carousel", // Tipo de slider
        perPage: 1,
      },
    };
  },

  props: {
    id: Number,
    marca: String,
    modelo: String,
    combustivel: String,
    preco: String,
    ano: String,
    km: String,
    fotos: Array,
    version: String,
    transmission: String,
  },

  methods: {
    goverveiculo(id) {
      this.$emit("abrir-detalhes", id);
    },

    showCarroDetalhes(id) {
      this.$emit("abrir-detalhes", id);
    },
  },

  computed: {
    km() {
      return this.km ? this.km.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "0";
    },
  },
};
</script>

<style scoped>
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
