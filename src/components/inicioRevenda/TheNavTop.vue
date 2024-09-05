<template>
  <div class="bg-white navbar" v-if="infos">
    <!-- Menu Mobile -->
    <div class="navegacao bg-succes" style="padding: 0.9em 0"></div>

    <div class="navegacao d-block d-lg-none fixed-top">
      <header class="header bg-white">
        <div class="logo bg-succes px-3" style="width: 260px; padding: 13.5px 0">
          <RouterLink class="routerLink pt-2" to="/inicio">
            <div class="logo bg-succes px-1 d-flex align-items-center" style="width: 190px">
              <!--<img src="/logo.png" class="logo" alt="Logo Regional Motors">-->
            </div>
          </RouterLink>
        </div>

        <div class="icons bg-succes p-2 px-3">
          <div class="icon d-none d-lg-block"><i class="fa fa-user"></i> Entrar</div>
          <div class="icon d-block d-lg-none btn-menu" @click="show_menu">
            <i class="fas fa-bars"></i>
          </div>

          <div class="menu-mobile-editado">
            <div style="padding-top: 20px">
              <div class="px-4 mx-auto content-menu col-11 col-md-8">
                <div class="d-flex justify-content-end pt-2">
                  <span @click="show_menu" style="font-size: 25px; cursor: pointer">x</span>
                </div>
                <div class="items-menu-mobile">
                  <a
                    :href="`https://api.whatsapp.com/send?phone=${infos.whatsapp}&text=testando`"
                    target="_blank"
                  >
                    <button class="btn py-1 text-center rounded-2 btn-whatsapp">
                      <img src="/whatsapp.png" width="24" class="pe-1" />
                      <span style="color: #fff; font-weight: 600">
                        <span style="font-size: 14px; font-weight: bold" @click="enviarMsg"
                          >Whatsapp</span
                        >
                      </span>
                    </button>
                  </a>

                  <div class="ps-2 pt-4">
                    <RouterLink class="menu-link-mobile" :to="`/loja/${infos.id}`">
                      Início
                    </RouterLink>
                    <RouterLink class="menu-link-mobile" :to="`/loja/${infos.id}/estoque`">
                      Estoque
                    </RouterLink>
                    <p
                      class="menu-link-mobile"
                      @click="scrollToFooter"
                    >
                      Contato
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>

    <br />

    <!-- menu desktop -->
    <div class="navegacao d-none d-lg-block fixed-top">
      <header class="header bg-dark bg-white ps-5">
        <div id="men" class="bg-inf card-menu col-md-4">
          <div class="card-menu-content d-flex justify-content-between">
            <RouterLink
              class="menu-link routerLink position-relative py-3"
              :to="`/loja/${infos.id}`"
            >
              Início
            </RouterLink>
            <RouterLink
              class="menu-link routerLink position-relative py-3"
              :to="`/loja/${infos.id}/estoque`"
            >
              Estoque
            </RouterLink>
            <p class="menu-link m-0 p-0 routerLink position-relative py-3" @click="scrollToFooter">
              Contato
            </p>
          </div>
        </div>
        <div class="icons bg-succes px-3 d-flex align-items-center">
          <a
            :href="`https://api.whatsapp.com/send?phone=${infos.whatsapp}&text=testando`"
            target="_blank"
          >
            <button class="btn py-1 text-center rounded-2 btn-whatsapp">
              <img src="/whatsapp.png" width="24" class="pe-1" />
              <span style="color: #fff; font-weight: 600">
                <span style="font-size: 14px; font-weight: bold" @click="enviarMsg">Whatsapp</span>
              </span>
            </button>
          </a>

          <!--<div class="icon invisible">
              <span style="font-size: 23px" class="far fa-bell"></span>
            </div>
            <div class="icon d-block d-lg-none btn-menu">
              <i class="fas fa-bars"></i>
            </div>-->
        </div>
      </header>
    </div>
  </div>
</template>

<script>
// import $ from "jquery"
import * as api from "../../services/api";
import TheForm_Login from "../modals/TheForm_Login.vue";

export default {
  name: "TheNavTopRevenda",

  components: {
    TheForm_Login,
    session: false,
  },

  data() {
    return {
      infos: null,
    };
  },

  methods: {
    show_menu() {
      const menu = document.querySelector(".menu-mobile-editado");
      const visibilidade = "visiblidade";

      if (menu.classList.contains(visibilidade)) {
        setTimeout(() => {
          menu.classList.remove("visiblidade");
        }, 300);
      }

      menu.classList.toggle("toggle-menu-mobile-editado");
      menu.classList.add("visiblidade");
    },

    goVerVeiculos(veiculo) {
      const parametros = { tipo_veiculo: veiculo };
      this.$router.push({ path: "/resultados", query: parametros });

      this.$emit("filterVeiculoRoute", veiculo);
    },

    emitShowLoader() {
      this.$emit("showLoader");
    },

    execAll(id) {
      this.emitShowLoader();
      this.goVerVeiculos(id);
    },

    abrirModal() {
      if (localStorage.getItem("token")) {
        this.$router.push({ path: "/anuncios" });
      } else {
        this.$router.push({ path: "/login" });

        //this.$store.state.fechaModal = false
      }
    },

    sair() {
      //Vai para a home
      //remover token
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
        this.$router.push({ path: "/inicio" }).then(() => {
          window.location.reload();
        });
      }
    },

    async fetchAnunciante() {
      try {
        const url = window.location.href;
        const id = new URL(url).hash.split("/")[2];

        const response = await api.encontrarAnunciante(id);

        this.infos = response.data;
      } catch (error) {
        console.error("Erro ao buscar dados do anunciante:", error);
        // Lide com erros conforme necessário
      }
    },

    scrollToFooter() {
      const footer = document.getElementById("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    },
  },

  async created() {
    if (localStorage.getItem("token")) {
      this.session = true;

      this.$store.state.anunciante_id = localStorage.getItem("anunciante_id");
      this.$store.state.userName = localStorage.getItem("anunciante_nome");
    }
  },

  async mounted() {
    await this.fetchAnunciante();
  },
};
</script>

<style>
@import "../../assets/css/navBar.css";
</style>
