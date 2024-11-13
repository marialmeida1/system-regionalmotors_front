import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSplide from "@splidejs/vue-splide";
import VueLazyload from "vue-lazyload";
import { api } from "./services/api";

export let allowedUrls = [];

// Função para carregar os domínios permitidos
async function loadAllowedUrls() {
  try {
    const urlRequest = "api/anunciantes/buscar_site_anunciante";
    const response = await api.get(urlRequest);

    allowedUrls = response.data;
  } catch (error) {
    console.error("Erro ao carregar URLs permitidas:", error);
  }
}

async function initializeApp() {
  await loadAllowedUrls(); // Carrega as URLs permitidas antes de inicializar o app
  const app = createApp(App);

  // Usar o Vue Router, Vuex, VueSplide e VueLazyload
  app.use(router);
  app.use(store);
  app.use(VueSplide);
  app.use(VueLazyload, {
    preLoad: 1.3,
    error: "imgError.png",
    attempt: 1,
    listenEvents: ["scroll", "resize", "animationend", "transitionend"],
  });

  // Montar a aplicação
  app.mount("#app");
}

initializeApp(); // Iniciar a aplicação
