<template>
    <main class="content">
            <!--<div class="py-2" style="box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);">
            
                <div class="row">
                    <div class="col-8 col-lg-10">
                        <div class="row">
                            <div class="col-2 pesquisar-filter p-0">
                                <div class="pt-2 btn-show-Anuncios" @click="show_menu_lateral">
                                    <i class="fas fa-ellipsis-v fa-lg"></i>
                                    <i class="fas fa-ellipsis-v fa-lg"></i>
                                    <i class="fas fa-ellipsis-v fa-lg"></i>
                                </div>
                            </div>
                            <div class="col-10 col-lg-6 p-0 invisible">
                                <div class="pesquisar" style="width: 100%; position: relative; border: none;">
                                    <input type="text" class="ps-4 pt-2" style="width: 89%; color: #000;" placeholder="Digite a marca o modelo do carro"> 
                                    <i class="fas fa-search" style="position: absolute; left: 8px; top: 36%; bottom: 0; margin: auto;"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes">
                        <div class="row">
                            <div class="pesquisar-link-icon col-4 pt-3 invisible">
                                <i class="fas fa-th-large fa-lg"></i>
                            </div>
                            <div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible">
                                <i class="fas fa-th-list fa-lg"></i>
                            </div>
                            <div class="menu-link position-relative pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i>
                            <div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index: 99; width: 170px; left: -135px !important;">
                                <div class="pb-3"></div>
                                <div class="bg-dark py-0 text-center" style="border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                                    <p class="">Mais Relevantes</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>-->

           <div class="p-4 pb-0">
                <button class="btn bg-dark" @click="goBack()" style="cursor: pointer; opacity: 0.7;">
                    <div style="transform: rotate(-90deg);">
                        <i class="fas fa-arrow-up"></i>
                    </div>
                </button>
           </div>
            
           <!-- div>
                {{anunciante}}
            </div -->

            <div class="position-relative">
           <div class="p-2 pt-3 table-responsive">

                <div class="px-3 pt-2">
                <!-- <p class="" style="opacity: 0.6; font-size: 15px;">Em anúncio até  {{ detalharAnuncios.data_fim }}</p> -->
                

                <div class="rounded-3 p-3 pt-4" style="box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);">
<!--                    
                    <div style="opacity: 0.8;">
                        <hr>
                    </div> -->

                    <div>
                        
                    <!-- main detalhar -->
                    

                        <div class="">
                                <div class="row">

                                  <!-- {{anunciante}} -->
                                  <div>
                                  <div style="height: 150px"
                                        class="col-lg-3" 
                                  >
                                    <img :src="anunciante.foto" class="img-fluid img-anunciante">
                                  </div>
                                    
                                  </div>

                                  <h4 class="my-3 mt-0 p-2 ps-4" style="background-color: crimson; color: #fff; border-radius: 20px 20px 0 0;">
                                    Empresa - {{ anunciante.nome_empresa }}
                                  </h4>
                                    <div>
                                      <div style="width: 15px; height: 15px; border-radius: 100px; display: inline-block;" class="bg-success">
                                        
                                      </div>
                                      <div class="ms-2" style="display: inline-block;">
                                        Ativo
                                      </div>
                                    </div>
                                    
                                    

                                    <div class="p-2 pt-0 row mb-2 mt-md-4 mt-lg-4" style="opacity: 0.8;">
                                        <div class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1" style="border-top-left-radius: 8px; font-size: 13px;"> 
                                            Informaçoes do Anunciante
                                        </div>
                                        <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important;">
                                            <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px;">

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Tipo de Anunciante</p>
                                        {{anunciante.tipo_anunciante}}
                                    </div>


                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">CNPJ</p>
                                        {{anunciante.cnpj}}
                                    </div>


                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Telefone</p>
                                        {{anunciante.telefone}}
                                    </div>


                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Celular</p>
                                        {{anunciante.celular}}
                                    </div>


                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">WhatsApp</p>
                                        {{anunciante.whatsapp}}
                                    </div>

                                    <div class="p-2 pt-0 row mb-2 mt-md-4 mt-lg-4" style="opacity: 0.8;">
                                        <div class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1" style="border-top-left-radius: 8px; font-size: 13px;"> 
                                            Dados de usuario
                                        </div>
                                        <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important;">
                                            <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px;">

                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Email</p>
                                        {{anunciante.email}}
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;"> 
                                            Site
                                        </p>
                                        {{anunciante.site}}
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;"> 
                                            Instagram
                                        </p>
                                        {{anunciante.instagram}}
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;"> 
                                            Facebook
                                        </p>
                                        {{anunciante.facebook}}
                                    </div>



                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Responsavel</p>
                                        null
                                    </div>

                                     <div class="p-2 pt-0 row mb-2 mt-md-4 mt-lg-4" style="opacity: 0.8;">
                                        <div class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1" style="border-top-left-radius: 8px; font-size: 13px;"> 
                                            Dados de Endereço
                                        </div>
                                        <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important;">
                                            <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px;">

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">CEP</p>
                                        {{anunciante.cep}}
                                    </div>


                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Regiao</p>
                                        {{anunciante.regiao}}
                                    </div>


                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Cidade</p>
                                        {{anunciante.cidade}}
                                    </div>


                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Bairro</p>
                                        {{anunciante.bairro}}
                                    </div>


                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Endereço</p>
                                        {{anunciante.endereco}}
                                    </div>


                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Numero</p>
                                        {{anunciante.numero}}
                                    </div>


                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Complemento</p>
                                        {{anunciante.complemento}}
                                    </div>

                                    <div class="p-2 pt-0 row mb-2 mt-md-4 mt-lg-4" style="opacity: 0.8;">
                                        <div class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1" style="border-top-left-radius: 8px; font-size: 13px;"> 
                                            Endereço comercial
                                        </div>
                                        <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important;">
                                            <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px;">

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">CEP</p>
                                        {{anunciante.cep_comercial}}
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Estado</p>
                                        {{anunciante.estado}}
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Cidade</p>
                                        {{anunciante.cidade_comercial}}
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Endereço</p>
                                        {{anunciante.endereco_comercial}}
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Numero</p>
                                        {{anunciante.numero_comercial}}
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Complemento</p>
                                        {{anunciante.complemento_comercial}}
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Bairro</p>
                                        {{anunciante.bairro_comercial}}
                                    </div>

                                    <div class="p-2 pt-0 row mb-2 mt-md-4 mt-lg-4" style="opacity: 0.8;">
                                        <div class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1" style="border-top-left-radius: 8px; font-size: 13px;"> 
                                            Observaçao
                                        </div>
                                        <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important;">
                                            <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px;">

                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        {{anunciante.observacao}}
                                    </div>

                                    <hr>

                                    <!-- div>
                                        <h5>Historico de Planos</h5>
                                    </div>

                                    <div>
                                        <p>Sem historico</p>
                                        <div v-for="item in filterIdHistoty()">
                                            {{item}}
                                        </div>
                                    </div>

                                    <div>
                                        {{ this.$store.state.anunciante_id }}
                                    </div -->


                                </div>
                        </div>

                    <!-- fim main detalhar -->


                    </div>

                </div>

            </div>
            </div>
           </div>
       
        </main>
</template>

<script>
import * as api from "../../services/api";

export default {
  name: 'TheDetalhesAnuncios',

  data() {
    return {

      anunciante: [],
      historico: [],
    }
  },

  methods: {
    show_menu_lateral(){
        this.$emit('show_menu_lateral')
    },

    goBack() {
        window.history.back();
    },

    filterIdHistoty() {
        return this.historico.filter(history => history.id_anunciantes === this.$store.state.anunciante_id)
    }

  },

  async created() {

        try {
             const id = parseInt(this.$route.query.id);
             const dados = await api.detalharAnunciante(id)
             this.historico = await api.listarPlanoAnunciante()
            
            this.anunciante = dados[0]


        } catch (e) {
            console.error("Erro na requisição:", e);
        }
        
        if (!(localStorage.getItem('token'))) {
            this.$router.push({ path: '/login'});
        }
    },

    mounted() {
        if(localStorage.getItem('perfil') != 'superadmin') {
            this.$router.push({ path: '/anuncios'});
        } 
  }

};
</script>

<style>
    .row {
        margin: 0;
        padding: 0;
    }

    /* Estilos personalizados para a imagem dentro do slide */
    .custom-image {
        width: 100%;
        height: auto;
         /* Altura máxima da imagem */
        object-fit: cover;
    }

    .btn-add {
        bottom: 0; background-color: crimson; color: #fff; width: 40px; height: 40px;
        transition: background 1s ease;
        transition: color 1s ease;
        cursor: pointer;
    }

    .btn-add:hover {
        background-color: crimson; color: #665d5d;
    }

    .detalhar {
        cursor: pointer;
    }

    .detalhar {
        cursor: pointer;
        border-radius: 8px;
        margin: 5px 0;
        transform: scale(95%);
        transition: transform 0.2s ease;

    }

    .detalhar:hover {
        transform: scale(115%);
    }



    .row {
        margin: 0;
        padding: 0;
    }

    /* Estilos personalizados para a imagem dentro do slide */
    .custom-image {
        width: 100%;
        height: auto;
         /* Altura máxima da imagem */
        object-fit: cover;
    }

    .btn-add {
        bottom: 0; background-color: crimson; color: #fff; width: 40px; height: 40px;
        transition: background 1s ease;
        transition: color 1s ease;
        cursor: pointer;
        position: fixed;
        bottom: 30px;
        right: 30px;
    }

    .link_des_foto_anuncio-desc:hover {
        border-bottom: 2px solid crimson;
        cursor: pointer;
    }   

    .img-preview {
        max-width: 100%;
        max-height: 200px; /* Defina a altura máxima desejada para a pré-visualização da imagem */
        margin-top: 10px;
        border-radius: 8px;
    }

    .btn-carregar:hover {
        background-color: rgb(255, 228, 234);
    }

    .btn-show-Anuncios {
        display: flex; align-items: center; justify-content: center; position: fixed; bottom: 90px; right: 24px; padding-bottom: 8px; border-radius: 100px; width: 50px; height: 50px; z-index: 999;
        background: rgb(27, 30, 36);
        background: linear-gradient(90deg, rgb(72, 81, 102) 1%, rgb(21, 24, 29) 90%);
        color: #c2c2c2;
        box-shadow: -1px 2px 10px 0px   rgba(0, 0, 0, 0.5);
    }

    .img-anunciante {
        height: 8rem;
    }
</style>