<template>
  <div>
    <TheNavTop />
    <TheBanner />

    <div class="col-10 px-1 col-lg-8 mx-auto p-lg-0 mb-5 my-5 d-flex justify-content-center flex-column">
      <h1 class="fs-4 text-center pb-4 fw-bold">SOBRE A REGIONAL MOTORS</h1>

      <p class="paragraph_use">A Regional Motors nasceu de estudos que identificaram a necessidade de atendimento de forma mais natural ao mercado de veículos.</p>

      <p class="paragraph_use">
        Comprar um veículo usado pode ser um negócio de alto risco. O investimento não é baixo e possíveis problemas, inclusive legais, são relatados com grande frequência. Assim,
        estabelecer uma relação de compra e venda com avaliação presencial, conhecer o vendedor e ter referências ajuda muito.
      </p>

      <p class="paragraph_use">
        A Regional Motors cumpre esse papel de anunciar veículos na Região Centro-Oeste de MG, limitando certa distância para que compradores e vendedores possam negociar situações
        que favoreçam encontros presenciais para avaliação do veículo a ser adquirido. Isto tem nome: SEGURANÇA.
      </p>

      <p class="paragraph_use">
        As revendas de novos e usados da Regional Motors são cadastradas observando essa regionalidade, onde a distância para deslocamento seja relativamente fácil e permita
        negócios mais confiáveis.
      </p>

      <p class="fs-6 text-center fw-bold">Regional Motors – seu novo veículo mais perto de você.</p>
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
@import "../assets/css/sobreRm.css";
</style>
