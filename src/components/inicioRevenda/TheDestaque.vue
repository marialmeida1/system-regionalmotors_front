<template>
  <div class="container">
    <div class="px-2">
      <div class="">
        <h5 class="mb-3" style="opacity: 0.7">
          <b>Todas Ofertas</b>
        </h5>
      </div>
    </div>
  </div>

  <div v-if="loader" style="height: 60vh" class="text-center">
    <div>
      <img
        class="caixa"
        src="/regLoader.png"
        alt=""
        style="width: 50px; height: 50px; background: none !important"
      />
    </div>
    <span style="font-size: 12px"> Carregando... </span>
  </div>
  <div class="container">
    <div class="row p-0 m-0">
      <div class="col-lg-12 col-md-12 p-0 m-0">
        <div>
          <div class="row p-0 m-0">
            <div
              class="col-lg-3 col-md-6 p-0 m-0 mb-3 card-veiculo"
              v-for="(item, index) in $store.state.resultado"
              :key="index"
            >
              <div class="px-2 container-completo">
                <div class="row p-0 m-0">
                  <div class="col-5 col-md-12 col-lg-12 m-0 p-0">
                    <splide :options="splideOptions" class="bg-dark">
                      <splide-slide v-if="item.foto1" @click="goverveiculo(item.id)">
                        <div @click="showCarroDetalhes(item.id)">
                          <div class="imagem-container2">
                            <img
                              v-lazy="`${item.foto1}destaque_mini.jpg?v=${new Date().getTime()}`"
                              :alt="item.nome_marca"
                              alt="Sua imagem"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </splide-slide>

                      <splide-slide v-if="item.foto2" @click="goverveiculo(item.id)">
                        <div @click="showCarroDetalhes(item.id)">
                          <div class="imagem-container2">
                            <img
                              v-lazy="`${item.foto2}destaque_mini.jpg?v=${new Date().getTime()}`"
                              :alt="item.nome_marca"
                              alt="Sua imagem"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </splide-slide>

                      <splide-slide v-if="item.foto3" @click="goverveiculo(item.id)">
                        <div @click="showCarroDetalhes(item.id)">
                          <div class="imagem-container2">
                            <img
                              v-lazy="`${item.foto3}destaque_mini.jpg?v=${new Date().getTime()}`"
                              :alt="item.nome_marca"
                              alt="Sua imagem"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </splide-slide>

                      <splide-slide v-if="item.foto4" @click="goverveiculo(item.id)">
                        <div @click="showCarroDetalhes(item.id)">
                          <div class="imagem-container2">
                            <img
                              v-lazy="`${item.foto4}destaque_mini.jpg?v=${new Date().getTime()}`"
                              :alt="item.nome_marca"
                              alt="Sua imagem"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </splide-slide>

                      <splide-slide v-if="item.foto5" @click="goverveiculo(item.id)">
                        <div @click="showCarroDetalhes(item.id)">
                          <div class="imagem-container2">
                            <img
                              v-lazy="`${item.foto5}destaque_mini.jpg?v=${new Date().getTime()}`"
                              :alt="item.nome_marca"
                              alt="Sua imagem"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </splide-slide>

                      <splide-slide v-if="item.foto6" @click="goverveiculo(item.id)">
                        <div @click="showCarroDetalhes(item.id)">
                          <div class="imagem-container2">
                            <img
                              v-lazy="`${item.foto6}destaque_mini.jpg?v=${new Date().getTime()}`"
                              :alt="item.nome_marca"
                              alt="Sua imagem"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </splide-slide>

                      <splide-slide v-if="item.foto7" @click="goverveiculo(item.id)">
                        <div @click="showCarroDetalhes(item.id)">
                          <div class="imagem-container2">
                            <img
                              v-lazy="`${item.foto7}destaque_mini.jpg?v=${new Date().getTime()}`"
                              :alt="item.nome_marca"
                              alt="Sua imagem"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </splide-slide>

                      <splide-slide v-if="item.foto8" @click="goverveiculo(item.id)">
                        <div @click="showCarroDetalhes(item.id)">
                          <div class="imagem-container2">
                            <img
                              v-lazy="`${item.foto8}destaque_mini.jpg?v=${new Date().getTime()}`"
                              :alt="item.nome_marca"
                              alt="Sua imagem"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </splide-slide>

                      <splide-slide v-if="item.foto9" @click="goverveiculo(item.id)">
                        <div @click="showCarroDetalhes(item.id)">
                          <div class="imagem-container2">
                            <img
                              v-lazy="`${item.foto9}destaque_mini.jpg?v=${new Date().getTime()}`"
                              :alt="item.nome_marca"
                              alt="Sua imagem"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </splide-slide>

                      <splide-slide v-if="item.foto10" @click="goverveiculo(item.id)">
                        <div @click="showCarroDetalhes(item.id)">
                          <div class="imagem-container2">
                            <img
                              v-lazy="`${item.foto10}destaque_mini.jpg?v=${new Date().getTime()}`"
                              :alt="item.nome_marca"
                              alt="Sua imagem"
                              class="img-fluid"
                            />
                          </div>
                        </div>
                      </splide-slide>
                    </splide>

                    <div ref="glide" class="glide" hidden>
                      <div class="glide__track" data-glide-el="track">
                        <ul class="glide__slides">
                          <li class="glide__slide">
                            <div>
                              <div class="imagem-container2">
                                <img
                                  v-lazy="
                                    `${item.foto1}destaque_mini.jpg?v=${new Date().getTime()}`
                                  "
                                  :alt="item.nome_marca"
                                  alt="Sua imagem"
                                  class="img-fluid"
                                />
                              </div>
                            </div>
                          </li>
                          <li class="glide__slide">
                            <div>
                              <div class="imagem-container2">
                                <img
                                  v-lazy="
                                    `${item.foto2}destaque_mini.jpg?v=${new Date().getTime()}`
                                  "
                                  :alt="item.nome_marca"
                                  alt="Sua imagem"
                                  class="img-fluid"
                                />
                              </div>
                            </div>
                          </li>
                          <li class="glide__slide">
                            <div>
                              <div class="imagem-container2">
                                <img
                                  v-lazy="
                                    `${item.foto3}destaque_mini.jpg?v=${new Date().getTime()}`
                                  "
                                  :alt="item.nome_marca"
                                  alt="Sua imagem"
                                  class="img-fluid"
                                />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="glide__arrows" data-glide-el="controls">
                        <div
                          class="btn glide__arrow glide__arrow--left btn-voltar"
                          data-glide-dir="<"
                        >
                          <span> > </span>
                        </div>
                        <div
                          class="btn glide__arrow glide__arrow--right btn-avancar"
                          data-glide-dir=">"
                        >
                          <span> > </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-7 col-md-12 col-lg-12 titles p-0 m-0">
                    <div class="resultados-titulos" @click="showCarroDetalhes(item.id)">
                      <div class="px-2 pt-2 position-relative">
                        <h5>{{ item.nome_marca }} {{ item.nome_modelo }}</h5>
                        <div style="opacity: 0.5; text-transform: uppercase">
                          <p>{{ item.motor }} {{ item.combustivel }} {{ item.cambio }}</p>
                        </div>
                        <!-- div class="bg-dark position-absolute p-2" style="top: 0; right: 5px;"></div>
                                    <div class="bg-danger position-absolute p-2" style="top: 0; right: 25px;"></div -->
                      </div>
                      <div>
                        <div class="pt-2 pb-1 position-relative">
                          <div>
                            <h5 class="py-1 ps-2" style="color: #000000">
                              R$ {{ item.valor_preco }}
                            </h5>
                          </div>
                          <div>
                            <div class="row p-2 m-0">
                              <div class="col-6 p-0 m-0" style="font-size: 12px; opacity: 0.7">
                                {{ item.ano_modelo }}/{{ item.ano_fabricacao }}
                              </div>
                              <div
                                class="col-6 p-0 m-0 text-end"
                                style="font-size: 12px; opacity: 0.7"
                              >
                                {{ item.km }} km
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from "../../services/api";
import Glide from "@glidejs/glide";

export default {
  name: "TheResultado_Carro",

  props: {
    set_tipo_veiculo: String,
  },

  data() {
    return {
      splideOptions: {
        type: "carousel", // Tipo de slider
        perPage: 1,
      },

      array_filtros: [],
      results: false,
      loader: true,
      notFound: false,
    };
  },

  methods: {
    show_menu_lateral() {
      this.$emit("show_menu_lateral");
    },

    showCarroDetalhes(id) {
      const parametros = { id: id };
      const url = window.location.href;
      const id_anunciante = new URL(url).hash.split("/")[2];
      console.log(this.$router);
      this.$router.push({ path: `/loja/${id_anunciante}/verveiculorevenda`, query: parametros });
    },

    upPage() {
      // Mover o scroll para o topo da página
      window.scrollTo(0, 0);
    },

    goverveiculo(id) {
      this.$emit("goverveiculoNow", id);
    },
  },

  async mounted() {
    this.$store.state.resultado = [];

    const id = this.$route.params.revenda;

    this.$store.state.resultado = await api.filtrarAnuncio(
      `api/anuncios/listar_anuncios?anunciante_id=${id}&status_publicacao=2`
    );

    if (this.$store.state.resultado) {
      this.results = true;
      this.loader = false;

      if (this.$store.state.resultado.length == 0) {
        this.notFound = true;
      }
    }
  },

  updated() {
    this.$nextTick(() => {
      if (this.$store.state.resultado) {
        Object.values(this.$refs).forEach((glideRefs) => {
          glideRefs.forEach((glideRef) => {
            const glide = new Glide(glideRef, {
              type: "carousel",
              perView: 1,
              gap: 0,
              peek: { before: 0, after: 0 },
              hoverpause: false,
              pagination: {
                el: ".glide__pagination", // elemento onde a paginação será renderizada
              },
            });
            glide.mount();
          });
        });
      }
    });
  },
};
</script>

<style>
/*@import "../../assets/css/resultadosPesquisa.css"*/

.imagem-container2,
.glide__slides {
  /*width: 110px;*/
  height: 150px;
  overflow: hidden;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .container-completo {

    }

    .glide__arrows button {
        background: rgba(0,0,0,0.2);
        border-radius: 100px;
    }

    .glide__arrows button:hover {
        background: rgba(0,0,0,0.6);
    }

    .glide__arrows button span {
        color: #fff;
    }*/

.titles * {
  font-size: 14px;
}

.titles {
  background: #fff;
  padding: 10px 5px;
}

.imagem-container2 img {
  width: 100% !important;
}

@media (max-width: 568px) {
  .imagem-container2,
  .glide__slides,
  .imagem-container2 img {
    /*width: 110px;*/
    height: 130px;
  }
}

.ano-km * {
  font-size: 12px;
  opacity: 0.7;
}

.glide__arrows * {
  border: none;
  box-shadow: none;
}

.glide__arrows span {
  font-size: 32px;
}

.glide__arrow--right {
  right: 0rem !important;
}

.glide__arrow--left {
  left: 0rem !important;
}

.glide__arrow--left span {
  display: inline-block;
  transform: rotate(180deg);
}

.card-veiculo {
  cursor: pointer;
}
</style>
