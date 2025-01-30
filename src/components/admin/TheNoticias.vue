<template>
    <main class="content">
            <div class="py-2" style="box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);">
                <!-- Filtros--> 
                <div class="row">
                    <div class="col-8 col-lg-10">
                        <div class="row">
                            <div class="col-2 pesquisar-filter p-0">
                                <div class="pt-2" @click="show_menu_lateral">
                                    <i class="fas fa-filter fa-lg"></i>
                                </div>
                            </div>
                            <div class="col-10 col-lg-6 p-0">
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
                            <div class="menu-link position-relative pesquisar-link-icon col-4 pt-3 "><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i>
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
            </div>

            <div>
                <!-- Links -->
                <div class="py-2 pt-3 px-2" style="font-size: 13px;">
                    <span class="me-2 p-1 px-2 rounded-3 bg-dark" style="opacity: 0.6;">
                        <b>Admin/Noticias</b>
                    </span> 
                </div>
            </div>

           <div>
            <div>
                <!-- Links -->
                <div class="pt-4 px-4 pb-2" style="font-size: 13px;">
                    <span class="btn me-2 p-1 px-3 mb-3 rounded-3"  style="background-color: crimson; color: #fff;"
                    type="button" 
                    data-bs-toggle="modal" 
                    data-bs-target="#IDaddNoticia"> 
                    <span class="fas fa-plus me-2"></span> 
                        <b>Publicar noticia</b>
                    </span>
                </div>
            </div>

            <!-- Corpo da noticia -->
            <div>
                <div v-for="(noticia,index) in noticias" :key="index">

                    <div class="p-4">
                        <hr>
                        <h3> {{ noticia.titulo }} </h3>
                        <img src="" alt="">
                        <span>
                            {{ noticia.descricao }}
                        </span>
                    </div>
                </div>
            </div>
           </div>
        </main>
</template>

<script>
import * as api from "../../services/api";

export default {
  name: 'TheCategorias',

  data() {
    return {
        noticias: [
            {
                titulo: 'titulo',
                descricao: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea deleniti fugit corporis dicta incidunt impedit, eos similique laboriosam assumenda, modi quae necessitatibus animi! Sunt dolorum itaque numquam consequuntur id totam.',
                foto1_capa: '',
                foto: ''
            },
            {
                titulo: 'titulo',
                descricao: 'Descrição da noticia',
                foto1_capa: '',
                foto: ''
            },
        ]
    }
  },

  methods: {
    show_menu_lateral(){
        this.$emit('show_menu_lateral')
    },

    showDetalhes() {
        this.$router.push({ path: '/detalhes'});
    },

    async editar(id) {
        this.$store.state.adminID = await id

        this.$emit('editarCategoria', id)
    },

    async eliminar(id) {
        this.$store.state.adminID = await id

    }
  },
  
  async created() {
    this.$store.state.categorias = await api.listarCategoria()    
  },

  mounted() {

  },

  computed: {
    anunciosReversos() {
      // Crie uma cópia reversa dos anúncios
      return [...this.$store.state.categorias].reverse();
    }
  },
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
        transition: background 0.3s ease;
        cursor: pointer;
    }

    .btn-add:hover {
        background-color: rgb(230, 45, 82); color: #fff;
    }
</style>
