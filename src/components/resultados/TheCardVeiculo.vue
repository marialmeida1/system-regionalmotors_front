<template>
    <div class="col-lg-3 col-md-6 p-0 m-0 mb-3" style="cursor: pointer;">
      <div class="mx-2 container-completo">
        <div class="row p-0 m-0">
          <div class="col-5 col-md-12 col-lg-12 m-0 p-0">
            <splide :options="splideOptions">
              <splide-slide 
                v-for="(foto, index) in fotos" 
                :key="index" 
                @click="goverveiculo(id)"
              >
                <div class="imagem-container2">
                  <img
                    v-lazy="`${foto}destaque_mini.jpg?v=${new Date().getTime()}`"
                    :alt="marca"
                    class="img-fluid"
                  />
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
    props: {
      id: Number,
      marca: String,
      modelo: String,
      combustivel: String,
      preco: Number,
      ano: Number,
      km: Number,
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
  