<template>
  <div class="bg-white" style="box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1)">
    <!-- Menu Mobile -->
    <div class="navegacao bg-succes" style="padding: 0.9em 0"></div>

    <div class="navegacao d-block d-lg-none fixed-top">
      <header class="header bg-white">
        <div
          class="logo bg-succes px-3"
          style="width: 260px; padding: 13.5px 0"
        >
          <RouterLink class="routerLink pt-2" to="/inicio">
            <div
              class="logo bg-succes px-1 d-flex align-items-center"
              style="width: 190px"
            >
              <img src="/logo.png" class="logo" />
            </div>
          </RouterLink>
        </div>

        <div class="icons bg-succes p-2 px-3">
          <div class="icon d-none d-lg-block">
            <i class="fa fa-user"></i> Entrar
          </div>
          <div class="icon"><i class="far fa-bell"></i></div>
          <div class="icon d-block d-lg-none btn-menu" @click="show_menu">
            <i class="fas fa-bars"></i>
          </div>

          <div class="menu-mobile-editado">
            <div style="padding-top: 20px">
              <div class="px-4 mx-auto content-menu col-11 col-md-8">
                <div class="d-flex justify-content-end pt-2">
                  <span
                    @click="show_menu"
                    style="font-size: 25px; cursor: pointer"
                    >x</span
                  >
                </div>
                <div class="items-menu-mobile">
                  <div class="mb-2" v-if="session">
                    <h4>
                      <div
                        style="
                          display: inline-block;
                          width: 15px;
                          height: 15px;
                          background-color: green;
                          border-radius: 100px;
                        "
                      ></div>
                      {{ $store.state.userName }}
                    </h4>
                    <div>
                      <router-link to="/conta">
                        <span class="fas fa-user me-1"></span> Conta
                      </router-link>
                      |
                      <span
                        @click="sair"
                        style="cursor: pointer; color: crimson"
                      >
                        Sair
                      </span>
                    </div>
                  </div>

                  <div v-else class="mb-2" style="font-size: 18px">
                    <span @click="abrirModal">Iniciar Sessão</span> |
                    <span style="color: crimson">Registar</span>
                  </div>

                  <h5 class="mt-4">Comprar</h5>
                  <div class="ps-2">
                    <p class="" @click="execAll('carro')">Carro</p>
                    <p class="" @click="execAll('moto')">Moto</p>
                    <!-- <p>Serviços</p> -->
                  </div>

                  <!--<h5 class="mt-3">Anunciar</h5>
                  <div class="ps-2">
                    <p type="button" data-bs-toggle="modal" @click="abrirModal">
                      Vender Carro
                    </p>
                    <p type="button" data-bs-toggle="modal" @click="abrirModal">
                      Vender Moto
                    </p>
                  </div>-->

                  <!--<h5 class="mt-3">Mais</h5>
                  <div class="ps-2">
                    <p>Serviços</p>
                    <p>Lojas & concessionarias</p>
                    <p>Contatos</p>
                  </div>-->
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
        <RouterLink class="routerLink pt-2" to="/inicio">
          <div
            class="logo bg-succes ps-4 pt-1 d-flex align-items-center"
            style="width: 210px"
          >
            <img src="/logo.png" class="logo" />
          </div>
        </RouterLink>

        <div id="men" class="bg-inf card-menu">
          <div class="card-menu-content d-flex align-items-center">

            <div class="menu-link position-relative py-3" @click="execAll('carro')">Comprar carros</div>
            <div class="menu-link position-relative py-3" @click="execAll('moto')">Comprar motos</div>

            <!--<div class="menu-link position-relative py-3">
              Comprar
              <div
                class="sub-menu-desktop position-absolute py-2"
                style="z-index: 99; width: 170px"
              >
                <div class="pb-3"></div>
                <div
                  class="bg-white px-2 py-3 rounded-3"
                  style="
                    border-bottom-left-radius: 8px;
                    border-bottom-right-radius: 8px;
                  "
                >
                  <p class="" @click="execAll('carro')">Carro</p>
                  <p class="" @click="execAll('moto')">Moto</p>
                </div>
              </div>
            </div>-->
            <!--<div class="menu-link position-relative py-3">
              Anunciar
              <div
                class="sub-menu-desktop position-absolute py-2"
                style="z-index: 99; width: 170px"
              >
                <div class="pb-3"></div>
                <div
                  class="bg-white px-2 py-3 rounded-3"
                  style="
                    border-bottom-left-radius: 8px;
                    border-bottom-right-radius: 8px;
                  "
                >
                  <p
                    class="m-0 px-3 py-2"
                    type="button"
                    data-bs-toggle="modal"
                    @click="abrirModal"
                  >
                    Vender Carro
                  </p>
                  <p
                    class="m-0 px-3 py-2"
                    type="button"
                    data-bs-toggle="modal"
                    @click="abrirModal"
                  >
                    Vender Moto
                  </p>
                </div>
              </div>
            </div>-->
            <!--<div class="menu-link position-relative py-3">Serviços</div>-->
            <!-- div class="menu-link position-relative py-3">Lojas & Concessionarias</div> -->
            <!-- <div class="menu-link position-relative py-3">Contatos</div>-->
          </div>
        </div>
        <div class="icons bg-succes px-3 d-flex align-items-center">
          <div class="icon">
            <span style="font-size: 23px" class="far fa-bell"></span>
          </div>
          <div class="icon d-none d-lg-block menu-link position-relative py-">
            <i class="fa fa-user me-2 fa-lg"></i>
            <span style="font-size: 0.8em">Conta</span>
            <div
              class="sub-menu-desktop position-absolute"
              style="left: -50px !important"
            >
              <div class="py-2" style="z-index: 99; width: 170px">
                <div class="pb-2"></div>
                <div
                  class="bg-white px-1 py-1"
                  style="
                    border-bottom-left-radius: 8px;
                    border-bottom-right-radius: 8px;
                  "
                >
                  <div class="px-3">
                    <div v-if="session">
                      <router-link to="/conta">
                        <p style="color: #000">
                          {{ $store.state.userName }}
                        </p>
                      </router-link>
                      <p
                        class="m-0 mb-2"
                        style="text-align: left !important"
                        @click="sair"
                      >
                        Sair
                      </p>
                    </div>

                    <div v-else>
                      <p
                        class="m-0"
                        style="text-align: left !important"
                        @click="abrirModal"
                      >
                        Iniciar Sessão
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="icon">
                        <i class="fas fa-heart" hidden></i>
                        <i class="far fa-heart" hidden></i>
                    </div> -->
          <div class="icon invisible">
            <span style="font-size: 23px" class="far fa-bell"></span>
          </div>
          <div class="icon d-block d-lg-none btn-menu">
            <i class="fas fa-bars"></i>
          </div>
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
  name: "TheNavTop2",

  components: {
    TheForm_Login,
    session: false,
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
  },

  async created() {
    if (localStorage.getItem("token")) {
      this.session = true;

      this.$store.state.anunciante_id = localStorage.getItem("anunciante_id");
      this.$store.state.userName = localStorage.getItem("anunciante_nome");
    }

    /*Pega a url 
            const url = "http://localhost:5173/#/inicio";
            const hostname = new URL(url).hostname; // Isso retorna "localhost"
            //alert(hostname);

            const urlRequest = "api/anunciantes/buscar_anunciante_por_site"
            
            const data = {
                    "site": "localhost"
            }

            const response = await api.getIdToUrl(urlRequest, data)

            localStorage.setItem('hostname_id', response.id) */
  },
};
</script>

<style>
@import "../../assets/css/navBar.css";
</style>
