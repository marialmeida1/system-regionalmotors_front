<template>
  <div>
    <TheNavTop />
    <TheBanner />

    <div class="col-10 px-1 col-lg-8 mx-auto p-lg-0 mb-5 my-5 d-flex justify-content-center flex-column">
      <h1 class="fs-4 text-center pb-4 fw-bold">TERMO DE RESPONSABILIDADE REGIONAL MOTORS</h1>

      <p class="paragraph_use">
        Ao utilizar o Regional Motors, o usuário declara estar ciente e
        concordar com os seguintes termos de responsabilidade:
      </p>

      <div class="ps-4 paragraph_use py-3">
        <p>
          <span>Veracidade das Informações:</span> O usuário reconhece que é inteiramente
          responsável pela veracidade das informações fornecidas nos anúncios de
          veículos. O anunciante deve garantir que todas as informações,
          detalhes e especificações do veículo sejam precisas e atualizadas,
          evitando divulgar dados falsos ou enganosos.
        </p>

        <p>
          <span>Idoneidade do Anunciante: </span>O classificado não se responsabiliza pela
          idoneidade do anunciante ou pela qualidade dos veículos anunciados.
          Cabe ao usuário interessado tomar as devidas precauções e realizar
          suas próprias pesquisas sobre a procedência e reputação do anunciante
          antes de realizar qualquer negociação.
        </p>

        <p>
          <span>Transações e Negociações:</span> As negociações e transações realizadas entre
          as partes interessadas são de responsabilidade exclusiva dos
          envolvidos. O classificado não será responsável por quaisquer danos,
          prejuízos, perdas ou conflitos resultantes das negociações entre
          anunciantes e compradores.
        </p>

        <p>
          <span>Inspeção Prévia:</span> É recomendado que o comprador realize uma inspeção
          presencial do veículo antes de concretizar a compra. A verificação do
          estado geral do veículo, suas condições mecânicas e histórico são de
          responsabilidade do comprador.
        </p>

        <p>
          <span>Conteúdo dos Anúncios: </span>O classificado não se responsabiliza pelo
          conteúdo dos anúncios, incluindo imagens, descrições e outros
          materiais fornecidos pelos anunciantes. Os usuários são orientados a
          não publicar informações ofensivas, difamatórias, ou qualquer conteúdo
          que viole direitos autorais ou propriedade intelectual de terceiros.
        </p>
      </div>

      <p class="paragraph_use">
        Ao prosseguir com o uso deste classificado de veículos, o usuário
        concorda em acatar e respeitar integralmente os termos de
        responsabilidade mencionados acima. O Regional Motors se reserva o
        direito de remover ou suspender anúncios que violem estes termos ou que
        possam prejudicar a experiência dos demais usuários.
      </p>
    </div>
  </div>

  <TheFooter/>
</template>

<script>
import TheNavTop from "../components/navBares/TheNavTop.vue";
import TheBanner from "../components/inicio/TheBanner.vue";
import TheFooter from "../components/navBares/TheFooter.vue";

export default {
  components: {
    TheNavTop,
    TheBanner,
    TheFooter
  },

  mounted() {
    this.scrollToTop();
  },

  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
};
</script>

<style>
@import "../assets/css/termosUso.css";
</style>
