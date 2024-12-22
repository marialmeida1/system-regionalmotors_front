<template>
  <footer id="footer">
    <div class="rodape-dark">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 border-smoll">
          <h5 class="pb-2">{{ infos?.nome_empresa }}</h5>
          <img :src="`https://api.regionalmotors.com.br/${infos?.foto}`" class="img-contain mb-4" />
        </div>
        <div class="col-12 col-md-6 col-lg-4 border-smoll">
          <h5 class="pb-2">Endereço:</h5>
          <div class="pt-1 mb-4">
            <p class="p-0 mb-1">
              {{ infos?.endereco_comercial }}, {{ infos?.numero_comercial }},
              {{ infos?.complemento_comercial }}
            </p>
            <p class="p-0 mb-1">{{ infos?.bairro_comercial }}, {{ infos?.cep_comercial }}</p>
            <p class="p-0 mb-1">{{ infos?.cidade_nome }}, {{ infos?.estado_nome }}</p>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-4 border-smoll">
          <h5 class="pb-2">Contato:</h5>
          <p class="p-0 mb-1">Telefone: {{ infos?.telefone }}</p>
          <p class="p-0 mb-1">Celular: {{ infos?.celular }}</p>
          <a
            :href="`https://api.whatsapp.com/send?phone=${infos?.whatsapp}&text=Olá! Tudo bem? Estou interessado em saber mais detalhes sobre os carros disponíveis para venda.`"
            target="_blank"
          >
            <button class="btn py-1 text-center rounded-2 btn-whatsapp mb-4">
              <img src="/whatsapp.png" width="24" class="pe-1" />
              <span class="whatsapp-text">
                <span class="whatsapp-button" @click="enviarMsg">Whatsapp</span>
              </span>
            </button>
          </a>
        </div>
      </div>
      <div class="pt-4 d-flex justify-content-center">
        <div class="col-12 col-md-3 col-lg-3 text-center mb-1">
          <a
            v-if="infos?.instagram"
            class="icon-border me-3"
            :href="ensureValidLink(infos.instagram, 'instagram')"
            target="_blank"
          >
            <i class="fab fa-instagram fa-lg" style="color: #f0bd84"></i>
          </a>

          <a
            v-if="infos?.facebook"
            class="icon-border"
            :href="ensureValidLink(infos.facebook, 'facebook')"
            target="_blank"
          >
            <i class="fab fa-facebook-f fa-lg" style="color: #8fd1f7"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
  <div class="py-3 text-center footer-powered">
    © Powered by <a href="https://regionalmotors.com.br/">Regional Motors</a>
  </div>
</template>

<script>
import * as api from "../../services/api";

export default {
  name: "TheFooter",

  data() {
    return {
      infos: null,
    };
  },

  methods: {
    async fetchAnunciante() {
      try {
        const id = localStorage.getItem("storeId");

        const response = await api.encontrarAnunciante(id);

        this.infos = response.data;
      } catch (error) {
        console.error("Erro ao buscar dados do anunciante:", error);
        // Lide com erros conforme necessário
      }
    },

    isValidLink(link, type) {
      if (!link) return false;

      const baseUrls = {
        instagram: ["https://www.instagram.com/", "https://"],
        facebook: ["https://www.facebook.com/", "https://"],
      };

      // Verifica se o link começa com qualquer um dos prefixos válidos
      return baseUrls[type].some((prefix) => link.startsWith(prefix));
    },

    ensureValidLink(link, type) {
      if (!link) return ""; // Retorna vazio se o link for nulo ou indefinido

      const baseUrls = {
        instagram: "https://www.instagram.com/",
        facebook: "https://www.facebook.com/",
      };

      // Se o link já é válido, retorna como está
      if (this.isValidLink(link, type)) return link;

      // Se contém "www.instagram.com" ou "www.facebook.com", completa com "https://"
      if (link.includes("www.instagram.com") && type === "instagram") {
        return `https://${link}`;
      }
      if (link.includes("www.facebook.com") && type === "facebook") {
        return `https://${link}`;
      }

      // Caso contrário, assume que é um nome de usuário e completa com o prefixo base
      return `${baseUrls[type]}${link}`;
    },
  },

  async mounted() {
    await this.fetchAnunciante();
  },
};
</script>

<style>
.rodape-dark {
  margin-top: 4rem;
  background: linear-gradient(90deg, rgb(27, 30, 36) 1%, rgb(36, 41, 49) 90%);
  color: #fff;
  padding: 2rem;
}

.img-contain {
  object-fit: contain;
  width: 200px;
}

.whatsapp-text {
  color: #fff;
  font-weight: 600;
}

.whatsapp-button {
  font-size: 14px;
  font-weight: bold;
}

.icon-border {
  display: inline-block;
  width: 45px;
  height: 45px;
  border-radius: 100px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding-top: 10px;
}

@media (max-width: 767px) {
  .border-smoll {
    border-bottom: 2px solid crimson;
    margin-bottom: 2em;
  }
}

.footer-powered a {
  color: crimson;
}
</style>
