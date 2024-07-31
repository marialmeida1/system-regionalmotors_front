<template>
    <div>
      <TheNavTop />
      <TheBanner />
  
      <div class="col-10 px-1 col-lg-8 mx-auto p-lg-0 mb-5 my-5 d-flex justify-content-center flex-column">
        <h1 class="fs-4 text-center pb-4 fw-bold">SEGURANÇA AO COMPRAR</h1>
  
        <p class="paragraph_use">Ao buscar adquirir um veículo, é essencial tomar precauções, como verificar a reputação do vendedor.</p>
  
        <p class="paragraph_use">
            O Regional Motors não se responsabiliza pela venda, mas apenas por anunciar veículos. A responsabilidade da aquisição é única e exclusivamente das partes envolvidas, ou seja vendedor e comprador.
        </p>
  
        <p class="paragraph_use">
            Pesquise o histórico do veículo por meio de documentos e relatórios confiáveis. Além disso, recomenda-se sempre realizar inspeções presenciais antes de fechar qualquer negócio, a fim de examinar pessoalmente o estado do veículo.
        </p>
  
        <p class="paragraph_use">
            Não compartilhe informações sensíveis por canais não seguros, evitando fraudes ou golpes. 
        </p>
  
      </div>
    </div>
  
    <TheFooter />
  </template>
  
  <script>
  import TheNavTop from "../components/navBares/TheNavTop.vue";
  import TheBanner from "../components/inicio/TheBanner.vue";
  import TheFooter from "../components/navBares/TheFooter.vue";
  
  export default {
    components: {
      TheNavTop,
      TheBanner,
      TheFooter,
    },
  
    methods: {},
  };
  </script>
  
  <style>
  @import "../assets/css/segComprar.css";
  </style>
  