<template>
  <footer>
    <div class="rodape-dark" style="padding: 2em 2em">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 border-smoll">
          <h5 class="pb-2">{{ infos?.nome_empresa }}</h5>
          <img
            :src="`https://api.regionalmotors.com.br/${infos?.foto}`"
            class="img-contain mb-4"
          />
        </div>
        <div class="col-12 col-md-6 col-lg-4 border-smoll">
          <h5 class="pb-2">Endereço:</h5>
          <div class="pt-1 mb-4">
            <p class="p-0 mb-1">
              {{ infos?.endereco_comercial }}, {{ infos?.numero_comercial }},
              {{ infos?.complemento_comercial }}
            </p>
            <p class="p-0 mb-1">{{ infos?.bairro_comercial }}, {{ infos?.cep_comercial }}</p>
            <p class="p-0 mb-1">
              {{ infos?.cidade_nome }}, {{ infos?.regiao_nome }}, {{ infos?.estado_nome }}
            </p>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-4 border-smoll">
          <h5 class="pb-2">Contato:</h5>
          <p class="p-0 mb-1">Telefone: {{ infos?.telefone }}</p>
          <p class="p-0 mb-1">Celular: {{ infos?.celular }}</p>
          <a
            :href="`https://api.whatsapp.com/send?phone=${infos?.whatsapp}&text=testando`"
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
          <div class="icon-border me-3">
            <i class="fab fa-instagram fa-lg" style="color: #f0bd84"></i>
          </div>
          <div class="icon-border me-3">
            <i class="fab fa-youtube fa-lg" style="color: #ff5969"></i>
          </div>
          <div class="icon-border">
            <i class="fab fa-facebook-f fa-lg" style="color: #8fd1f7"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="py-3 text-center footer-powered">© Powered by <a href="https://regionalmotors.com.br/">Regional Motors</a></div>
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
        const url = window.location.href;
        const id = new URL(url).hash.split("/")[2];

        const response = await api.encontrarAnunciante(id);
        console.log(response.data);

        this.infos = response.data;
      } catch (error) {
        console.error("Erro ao buscar dados do anunciante:", error);
        // Lide com erros conforme necessário
      }
    },
  },

  async mounted() {
    await this.fetchAnunciante();
  },
};
</script>

<style>
.rodape-dark {
  background: linear-gradient(90deg, rgb(27, 30, 36) 1%, rgb(36, 41, 49) 90%);
  color: #fff;
  padding: 2em 2em;
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

.footer-powered a{
  color: crimson;
}
</style>
