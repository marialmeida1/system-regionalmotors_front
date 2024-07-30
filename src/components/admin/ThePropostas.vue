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

            <div class="p-4">
                <!-- Links -->
                <router-link to="/anuncios">
                    <span class="btn me-2 p-1 px-3 mb-3 rounded-3"  style="background-color: crimson; color: #fff;">
                    <span class="far fa-envelope me-2"></span> 
                        <b>voltar</b>
                    </span>
                </router-link>
            </div>

            <div class="position-relative" style="height: 72vh;">
           <div class="p-2 pt-3 table-responsive" style="height: 65vh;">
            <table class="table">
                <thead style="background-color: crimson; color: #fff;">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Descrição</th>
                    <th scope="col" class="text-center">Açoes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="categ in anunciosReversos" :key="categ.id">
                        <th scope="row"> {{ categ.id }} </th>
                        <td> {{ categ.nome }} </td>
                        <td> {{categ.descricao}} </td>
                        <td class="text-center">
                            <div style="width: 100%;">
                                <span @click="showDetalhes" hidden>
                                    <i class="fas fa-eye"></i>
                                </span>
                                <span class="mx-3"
                                    type="button" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#EditarCategoria"
                                    @click="editar(categ.id)"
                                >
                                    <i class="fas fa-pencil-alt"></i>
                                </span>
                                <span class="fas fa-trash-alt"
                                type="button" 
                                data-bs-toggle="modal" 
                                data-bs-target="#EliminarCategoria"
                                @click="eliminar(categ.id)"
                            ></span>
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
                <!-- <button class="btn btn-add rounded-circle 
                    position-absolute d-flex 
                    justify-content-center align-items-center" 
                    style="left: 8px;"
                    type="button" 
                    data-bs-toggle="modal" 
                    data-bs-target="#IDaddCarro"
                    > 
                    <i class="fas fa-plus"></i> 
                </button> -->
           </div>
        </main>
</template>

<script>
import * as api from "../../services/api";

export default {
  name: 'ThePropostas',

  data() {
    return {
        categorias: []
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
        console.log('emitindo...'+id)
        this.$store.state.adminID = await id
        console.log(this.$store.state.adminID)

        this.$emit('editarCategoria', id)
    },

    async eliminar(id) {
        console.log('eliminando...' + id)
        this.$store.state.adminID = await id
        console.log(this.$store.state.adminID)

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
