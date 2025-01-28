<template>
  <div>
    <div>
      <TheNavTop @scrollToFooter="scrollToFooter" @showLoader="showLoaderNow" />
      <TheBanner />

      <ThecardComprar @showLoader="showLoaderNow" />
      <TheDestaque @showLoader="showLoaderNow" />

      <TheFooter ref="footer" @showLoader="showLoaderNow" />

      <div class="loader d-none">
        <loader />
      </div>
    </div>
  </div>
</template>

<script>
import TheNavTop from "../components/inicioRevenda/TheNavTop.vue";
import TheBanner from "../components/inicioRevenda/TheBanner.vue";
import ThecardComprar from "../components/inicioRevenda/ThecardComprar.vue";
import TheDestaque from "../components/inicioRevenda/TheDestaque.vue";
import TheFooter from "../components/inicioRevenda/TheFooter.vue";
import loader from "../components/loaders/loader.vue";
import * as api from "../services/api";

export default {
  components: {
    TheNavTop,
    TheBanner,
    ThecardComprar,
    TheDestaque,
    TheFooter,
    loader,
  },

  data() {
    return {
      loader: "",
    };
  },

  methods: {
    showLoaderNow() {
      this.loader = document.querySelector(".loader");
      this.loader.classList.remove("d-none");
    },

    goVerVeiculosNow(veiculo) {
      return veiculo;
    },

    scrollToFooter() {
      const footerElement = this.$refs.footer;
      footerElement.$el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
