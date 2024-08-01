<template>
  <div>
    <TheNavTop />
    <TheBanner />

    <div class="col-10 px-1 col-lg-8 mx-auto p-lg-0 mb-5 my-5 d-flex justify-content-center flex-column">
      <h1 class="fs-4 text-center pb-4 fw-bold">SOBRE A EMPRESA</h1>

      <p class="paragraph_use">
        Nossa missão como plataforma de classificados de veículos é oferecer uma solução abrangente e confiável que simplifique o processo de compra e venda de veículos.
      </p>

      <p class="paragraph_use">
        Estamos empenhados em fornecer aos nossos usuários um ambiente seguro e transparente, onde possam encontrar as melhores ofertas, comparar opções e tomar decisões
        informadas.
      </p>

      <p class="paragraph_use">
        Ao facilitar a conexão entre compradores e vendedores, aspiramos ser a principal fonte de referência no mercado automotivo da Região Centro-Oeste de MG, promovendo
        transações justas e satisfatórias para todos os envolvidos.
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

  mounted() {
    this.scrollToTop();
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
};
</script>

<style>
@import "../assets/css/sobreEmpresa.css";
</style>
