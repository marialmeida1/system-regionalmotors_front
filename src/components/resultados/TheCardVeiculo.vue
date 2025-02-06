<template>
  <div class="col-lg-3 col-md-6 p-0 m-0 mb-3" style="cursor: pointer;">
    <div class="mx-2 container-completo">
      <div class="row p-0 m-0">
        <div class="col-5 col-md-12 col-lg-12 m-0 p-0">
          <splide :options="splideOptions">
            <splide-slide v-for="(foto, index) in fotos" :key="index" @click="goverveiculo(id)">
              <div class="imagem-container2">
                <img v-lazy="`${foto}destaque_mini.jpg?v=${new Date().getTime()}`" :alt="marca" class="img-fluid" />
              </div>
            </splide-slide>
          </splide>
        </div>

        <div class="col-7 col-md-12 col-lg-12 titles p-0 m-0">
          <div class="resultados-titulos" @click="showCarroDetalhes(id)">
            <div class="px-2 pt-2 position-relative">
              <h5 style="font-weight: 700;">{{ marca }} {{ modelo }}</h5>
              <div style="opacity: 0.5; text-transform: uppercase">
                <p>{{ combustivel }}</p>
              </div>
            </div>
            <div class="pt-2 pb-1 position-relative">
              <h5 class="py-1 ps-2" style="color: #000000">R$ {{ preco }}</h5>
              <div class="row p-2 m-0">
                <div class="col-6 p-0 m-0" style="font-size: 12px; opacity: 0.7">
                  {{ ano }}
                </div>
                <div class="col-6 p-0 m-0 text-end" style="font-size: 12px; opacity: 0.7">
                  {{ km }} km
                </div>
              </div>
            </div>
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
    }
  },

  props: {
    id: Number,
    marca: String,
    modelo: String,
    combustivel: String,
    preco: String,
    ano: String,
    km: String,
    fotos: Array
  },
  methods: {
    goverveiculo(id) {
      this.$emit("abrir-detalhes", id);
    },
    showCarroDetalhes(id) {
      this.$emit("abrir-detalhes", id);
    }
  }
};
</script>


<style>
.imagem-container2,
.glide__slides {
  /*width: 110px;*/
  height: 150px;
  overflow: hidden;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
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

.imagem-container2 {
  border-radius: 0.5em 0.5rem 0rem 0rem;
}

.imagem-container2 img {
  width: 100% !important;
}

@media (max-width: 568px) {

  .imagem-container2,
  .glide__slides,
  .imagem-container2 img {
    /*width: 110px;*/
    height: 130px;
  }
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
</style>