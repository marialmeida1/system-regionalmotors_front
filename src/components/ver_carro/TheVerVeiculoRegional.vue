<template>
  <div v-show="showTheVerVeiculos">
    <loader />
  </div>
  <div v-show="veiculo">
    <div class="col-12 col-lg-12">
      <!-- Exibir a largura da tela -->
      <div class="" style="position: relative">
        <splide :options="splideOptions">
          <splide-slide v-for="(item, index) in veiculos" :key="index" class="custom-slide px-0">
            <!-- Conteúdo do slide -->
            <div class="" style="
                background-color: #e3e3e3;
                border: 3px solid transparent;
                border-top: none;
                border-bottom: none;
              ">
              <!-- Mobile mudar o nome do Fancybox -->
              <a :href="item.image + 'detalhe_mini.jpg'" data-fancybox="minha-galeria"
                :data-caption="`${veiculo.marca} - ${veiculo.modelo}`">
                <img :src="item.image + 'destaque.jpg'" :alt="`${veiculo.marca} - ${veiculo.modelo}`"
                  class="custom-image" />
              </a>
            </div>
          </splide-slide>
        </splide>
      </div>
    </div>

    <!-- div hidden>
      {{ veiculo }}
    </div -->

    <!-- div class="ponta-pe">
      
    </div -->

    <div style="position: relative" class="row titles-em-card p-0 m-0 col-12 col-lg-10 col-md-10 mx-auto">
      <div class="col-12 px-md-3 mb-3">
        <div class="mb-3 rounded-3 px-0 bg-white card-ver-form"
          style="box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2); overflow: hidden">
          <div class="pt-0 px-4 pb-4">
            <div class="pb-2">
              <button class="btn btn-danger btn-sm my-3 mb-2" @click="backPage">
                <span class="fas fa-arrow-left me-2"></span><strong>Voltar</strong>
              </button>
            </div>

            <div>
              <div class="line__markprice">
                <div>
                  <h3>
                    <strong>{{ veiculo.marca }}
                      <span style="color: crimson"> {{ veiculo.modelo }} </span></strong>
                  </h3>
                  <p style="opacity: 0.6">{{ veiculo.modelFipe }}</p>
                </div>

                <h1 class="line__markprice--price" id="preco-veiculo" style="font-weight: 600; opacity: 0.8">
                  R$ {{ veiculo.valor_preco }}
                </h1>
              </div>

            </div>

            <div class="row">
              <div class="col-6 col-lg-4">
                <div class="mb-2">
                  <p class="rotulo">Cidade</p>
                  <p class="valor-rotulo">{{ veiculo.cidade }} - {{ veiculo.uf }}</p>
                </div>

                <div class="mb-2">
                  <p class="rotulo">Ano</p>
                  <p class="valor-rotulo">{{ veiculo.ano_modelo }}</p>
                </div>

                <div class="mb-2">
                  <p class="rotulo">Cor</p>
                  <p class="valor-rotulo">{{ veiculo.cor }}</p>
                </div>
              </div>

              <div class="col-6 col-lg-4">
                <div class="mb-2">
                  <p class="rotulo">KM</p>
                  <p class="valor-rotulo">{{ veiculo.km }}</p>
                </div>

                <div class="mb-2">
                  <p class="rotulo">Combustível</p>
                  <p class="valor-rotulo">{{ veiculo.combustivel }}</p>
                </div>
              </div>

              <div class="col-6 col-lg-4">
                <div class="mb-2">
                  <p class="rotulo">Câmbio</p>
                  <p class="valor-rotulo">{{ veiculo.transmissao }}</p>
                </div>
              </div>

              <div>
                <hr />
              </div>

              <div>
                <p class="rotulo">Sobre este carro</p>
                <p>
                  {{ veiculo.descricao }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Itens de veiculo -->
        <div class="mb-3 rounded-3 px-0 bg-white card-ver-form"
          style="box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2); overflow: hidden">
          <div class="p-4">
            <div>
              <p class="rotulo">Itens de Veículo</p>
            </div>

            <div class="row pt-2">
              <div class="col-12 col-md-6 col-lg-6 mb-3 p-0" v-for="item in Api_CategOpcionais">
                <p class="mb-1 d-none mx-2">
                  <b>{{ item.nome }}</b>
                </p>

                <div v-for="item2 in listOpcionais(item.id)">
                  <p class="mb-1 mx-2">
                    <img src="/bom.png" width="22" style="margin-top: -3px" />
                    {{ item2.nome }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Compare preços -->
        <!--<div class="mb-3 rounded-3 px-0 bg-dark card-ver-form" v-if="priceFipe"
          style="box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2); overflow: hidden">
          <div class="p-4">
            <div>
              <p class="rotulo">Compare os preços</p>
            </div>

            <div class="pt-4 compare-price">

              <div>
                <p>Valor Anunciado</p>
                <h1>R$ {{ veiculo.valor_preco }}</h1>
              </div>

              <div>
                <p>Tabela FIPE</p>
                <h1>{{ this.priceFipe }}</h1>
              </div>
            </div>
          </div>
        </div>-->

        <!-- Informações do vendedor -->
        <div class="mb-3 rounded-3 px-0 bg-white card-ver-form"
          style="box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2); overflow: hidden">
          <div class="p-4">
            <div>
              <div>
                <p v-if="nameLink === 'Regional Motors'" class="rotulo">Sobre o vendedor</p>
              </div>
            </div>

            <div class="my-" style="opacity: 0.7">
              <div class="row p-0">

                <div class="p-0">
                  <p class="rotulo">Sobre o vendedor</p>
                </div>

                <div class="about__sailor">
                  <div class="col-lg-6 mb-2 p-0">
                    <div>
                      <h3 class="m-0 pt-1">{{ veiculo.empresa }}</h3>
                      <p class="pt-1 mb-1">{{ veiculo.cidade }}, {{ veiculo.uf }}</p>
                    </div>
                  </div>
                  <div class="col-lg-6 mb-3">
                    <div class="col-lg-8 col-md-10 p-0">
                      <div style="height: 50px">
                        <img :src="veiculo.foto" class="img-fluid" style="height: 100%" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="py-2">
                <span style="color: #000">
                  <span style="color: #000" v-if="mostraContato">
                    <p class="mb-1" style="opacity: 0.7">
                      <span class="fw-bold">Telefone:</span> {{ veiculo.celular }}
                    </p>
                    <p class="mb-3" style="opacity: 0.7">
                      <span class="fw-bold">Celular:</span> {{ veiculo.telefone }}
                    </p>

                    <WhatsappShowVehicle variant="secondary" size="md" icon="whatsapp" iconType="fab" :veiculo="veiculo"
                      :namePage="'Regional Motors'" :linkPage="this.linkPage">
                      Enviar mensagem
                    </WhatsappShowVehicle>
                  </span>
                  <span v-else style="cursor: pointer" @click="mostrarContato">
                    (37)...
                    <span style="font-weight: normal; font-size: 14px; font-weight: bold">
                      <br />
                      <button class="btn btn-danger btn-sm my-3 mb-2">Ver contato</button>
                    </span>
                  </span>
                </span>
              </div>
              <p style="font-size: 14px; font-weight: bold; opacity: 0.7" class="mt-2">
                {{ veiculo.tipo_anunciante }}
              </p>
            </div>
          </div>
        </div>

        <div class="button__mobile">
          <WhatsappShowVehicle variant="primary" size="lg" icon="whatsapp" iconType="fab" :veiculo="veiculo"
            :namePage="'Regional Motors'" :linkPage="this.linkPage">
            Enviar mensagem
          </WhatsappShowVehicle>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
import "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js";
import * as api from "../../services/api";
import loader from "../loaders/loader.vue";
import WhatsappShowVehicle from "../commons/buttons/WhatsappShowVehicle.vue";

export default {
  name: "TheVerVeiculo_Carousel",

  components: {
    loader,
    WhatsappShowVehicle
  },

  data() {
    return {
      splideOptions: "",
      items: [
        {
          image: "",
          title: "Slide 1",
          description: "Descrição do Slide 1",
        },
      ],
      screenWidth: window.innerWidth,
      resizeTimer: null, // Temporizador para controlar redimensionamento
      veiculo: "",
      veiculos: [],
      Api_CategOpcionais: [],
      mostraContato: false,
      isVisible: false,
      showTheVerVeiculos: true,
      id: "",
      linkPage: "",
      namePage: "",
      priceFipe: "",
    };
  },

  async mounted() {
    this.handleResize(); // Chame a função handleResize no carregamento da aplicação
    window.addEventListener("resize", this.debouncedHandleResize);

    //Lightbox
    this.$nextTick(() => {
      $("[data-fancybox='minha-galeria']").fancybox({
        buttons: ["close"],
        thumbs: {
          autoStart: true,
          axis: "x",
        },
      });
    });

    window.addEventListener("scroll", this.handleScroll);

    this.veiculo = [];

    const id = parseInt(this.$route.query.id); // Converter para número
    const dados = await api.detalharAnuncio(id);
    this.veiculo = dados[0];

    // Formatando valor do preço
    this.veiculo.km = this.formatarMilhar(this.veiculo.km);

    const typeVehicle = this.findTypeVehicle(this.veiculo.tipo_veiculo);
    if (this.veiculo.codeFipe != null || this.veiculo.yearId != null) {
      console.log(typeVehicle, this.veiculo.codeFipe, this.veiculo.yearId)
      const responde = await fetch(`https://fipe.parallelum.com.br/api/v2/${typeVehicle}/${this.veiculo.codeFipe}/years/${this.veiculo.yearId}`)
      const dataFipe = await responde.json();
      console.log(dataFipe)
      this.priceFipe = dataFipe.price;
    }

    this.id = this.veiculo.id_anunciante;

    let url_page =
      `${this.veiculo.marca}-${this.veiculo.modelo}-${this.veiculo.ano_modelo}-${this.veiculo.cor}-${this.veiculo.combustivel}-${this.veiculo.transmissao}-${this.veiculo.id}`.toLowerCase();
    let title_page = `${this.veiculo.marca} ${this.veiculo.modelo} ${this.veiculo.ano_modelo} ${this.veiculo.cor} ${this.veiculo.combustivel} ${this.veiculo.transmissao}`;

    let newPath = "";
    title_page += " - Regional Motors";
    url_page += "-regionalmotors";
    this.namePage = "Regional Motors";
    newPath = `/verveiculo?id=${this.veiculo.id}/${url_page}`;
    this.$router.replace(newPath);

    const urlPage = window.location.href;
    this.linkPage = urlPage;

    document.title = title_page;

    if (this.veiculo) {
      this.showTheVerVeiculos = false;
    }

    if (this.veiculo != undefined) {
      if (this.veiculo.foto1) {
        this.veiculos.push({ image: this.veiculo.foto1 });
      }
      if (this.veiculo.foto2) {
        this.veiculos.push({ image: this.veiculo.foto2 });
      }
      if (this.veiculo.foto3) {
        this.veiculos.push({ image: this.veiculo.foto3 });
      }
      if (this.veiculo.foto4) {
        this.veiculos.push({ image: this.veiculo.foto4 });
      }
      if (this.veiculo.foto5) {
        this.veiculos.push({ image: this.veiculo.foto5 });
      }
      if (this.veiculo.foto6) {
        this.veiculos.push({ image: this.veiculo.foto6 });
      }
      if (this.veiculo.foto7) {
        this.veiculos.push({ image: this.veiculo.foto7 });
      }
      if (this.veiculo.foto8) {
        this.veiculos.push({ image: this.veiculo.foto8 });
      }
      if (this.veiculo.foto9) {
        this.veiculos.push({ image: this.veiculo.foto9 });
      }
      if (this.veiculo.foto10) {
        this.veiculos.push({ image: this.veiculo.foto10 });
      }
    } else {
    }
  },

  async created() {
    this.Api_CategOpcionais = await api.listarCategoriaOpcionais();
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.debouncedHandleResize);
  },

  computed: {
    whatsappLink() {
      let nome_carro = this.veiculo.marca + " " + this.veiculo.modelo;
      nome_carro = nome_carro.toLowerCase();

      return `https://api.whatsapp.com/send?phone=${this.veiculo.whatsapp}&text=Olá! Gostaria de obter mais informações sobre o anúncio da ${this.namePage} para o veículo ${nome_carro}. Vi no link do anúncio: ${this.linkPage}.`;
    },
  },

  methods: {
    formatarMilhar(valor) {
      console.log(valor)
      if (!valor) return "0";
      return valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },

    async mostrarContato() {
      this.mostraContato = true;
      await api.numClick("api/anuncios/contadorContacto/", this.veiculo.id);
    },

    async enviarMsg() {
      await api.numClick("api/anuncios/contadorMensagem/", this.veiculo.id);
    },

    backPage() {
      if (document.referrer) {
        window.history.back();
      } else {
        window.location.href = "/resultados";
      }
    },


    handleScroll() {
      if (window.scrollY == 0 || window.pageYOffset == 0) {
        this.isVisible = false;
      } else {
        this.isVisible = true;
      }
    },

    listOpcionais(id) {
      const opcionaisFiltrados = this.veiculo.opcionais_id.filter(
        (opcional) => opcional.categoria_opcional_id == id
      );

      return opcionaisFiltrados;
    },

    debouncedHandleResize() {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.handleResize();
      }, 250); // Tempo de atraso em milissegundos (ajuste conforme necessário)
    },

    handleResize() {
      this.screenWidth = window.innerWidth;

      if (this.screenWidth <= 435) {
        this.splideOptions = {
          type: "carousel",
          perPage: 1,
          pagination: false,
        };
      } else if (435 < this.screenWidth && this.screenWidth <= 568) {
        this.splideOptions = {
          type: "carousel",
          perPage: 2,
          pagination: false,
        };
      } else if (568 < this.screenWidth && this.screenWidth <= 900) {
        this.splideOptions = {
          type: "carousel",
          perPage: 2,
          pagination: false,
        };
      } else if (900 < this.screenWidth) {
        this.splideOptions = {
          type: "carousel",
          perPage: 3,
          pagination: false,
        };
      }

    },

    visitarLoja() {
      this.$router.push({ path: "/" + this.id });
    },

    findTypeVehicle(tipo_veiculo) {
      let typeVehicle = "cars"
      if (tipo_veiculo == 'Moto') {
        typeVehicle = "motorcycles";
      } else if (tipo_veiculo == 'Caminhão') {
        typeVehicle = "trucks";
      }

      return typeVehicle;
    },
  },
};
</script>

<style>
.titles-em-card {
  margin-top: -25px !important;
}

/* Estilos personalizados para a imagem dentro do slide */
.custom-image {
  width: 100%;
  max-height: 270px !important;
  /* Altura desejada para suas imagens */
  object-fit: cover;
  object-position: center top !important;
}

.ponta-pe {
  height: 900px;
}

.fixed-bottom-bottom-desktop {
  position: fixed;
  bottom: 5px;
  right: 5px;
}

@media (max-width: 568px) {
  .custom-image {
    width: 100%;
    max-height: 270px !important;
    /* Altura máxima da imagem */
    object-fit: cover;
  }

  .fixed-bottom-bottom {
    position: fixed;
    bottom: 5px;
    left: 50%;
    transform: translate(-50%);
  }
}

@media (max-width: 1000px) {
  .ponta-pe {
    height: 1350px;
  }
}

.card-ver-form p {
  margin: 0;
}

.rotulo {
  opacity: 0.6;
  font-size: 12px;
}

.valor-rotulo {
  font-weight: 600;
  opacity: 0.8;
  font-size: 16px;
}

.ver-loja {
  font-size: 12px;
}

.ver-loja:hover {
  font-size: 13px;
  transition: 0.2s ease-in-out;
}

.button__mobile {
  display: none;
}

@media (max-width: 768px) {
  .button__mobile {
    display: block;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: #fff;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 1000;
    padding: 0rem 1rem;
  }
}

.button__mobile--btn {
  width: 100%;
  background-color: crimson;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
}

.compare-price {
  display: flex;
  flex-direction: row;
  gap: 4rem;
}

@media (max-width: 768px) {
  .compare-price {
    flex-direction: column;
    gap: 1rem;
  }
}


.compare-price p {
  font-size: 0.8rem;
  padding-bottom: 0.5rem;
}

.compare-price h1 {
  font-weight: bold;
  font-size: 2rem;
}

.line__markprice {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.line__markprice--price {
  margin-right: 4rem;
  font-weight: 600 !important;
  font-size: 3rem;
}

.about__sailor {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media screen and (min-width: 480px) {
  .line__markprice {
    margin-bottom: 2rem;
  }
}

@media screen and (max-width: 480px) {
  .line__markprice {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: baseline;
    margin-bottom: 1rem;
  }

  .line__markprice h3 {
    font-size: 1.25rem;
  }

  .line__markprice--price {
    font-size: 2.5rem;
    margin-top: 1rem;
  }

  .about__sailor {
    display: flex;
    flex-direction: column;
  }
}
</style>
