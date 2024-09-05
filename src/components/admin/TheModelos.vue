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
                        <b>Admin/Modelos</b>
                    </span> 
                </div>
            </div>

            <div class="position-relative" style="height: 72vh;">
           <div class="p-2 pt-3 table-responsive" style="height: 65vh;">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">                        
                        <div>
                            <select class="form-select" 
                            @change="filterModelos_nome($event.target.value)" 
                            style="width: 150px;" v-model="filter_tipo_veiculo">
                                <option value="" selected disabled>
                                    Tipo de veiculo
                                </option>
                                <option value="0">
                                    <div v-if="filter_tipo_veiculo == '0'">
                                        Tipo de veiculo
                                    </div>
                                    <div v-else>
                                        Limpar filtro
                                    </div>
                                </option>
                                <option :value="item.tipo_veiculo" v-for="item in $store.state.tipo_veiculo ">
                                    {{item.tipo_veiculo}}
                                </option>
                            </select>
                        </div>
                    </th>
                    <th scope="col">                        
                        <div>
                            <select class="form-select" 
                            @change="applyFiltro('nome_marca', $event.target.value)" 
                            style="width: 150px;" v-model="filter_marca">
                                <option value="" selected disabled>
                                    Marca
                                </option>
                                <option value="0">
                                    <div v-if="filter_marca == '0'">
                                        Marca
                                    </div>
                                    <div v-else>
                                        Limpar filtro
                                    </div>
                                </option>
                                <option :value="item.nome_marca" v-for="item in filterMarcas_nome(filter_tipo_veiculo)">
                                    {{item.nome_marca}}
                                </option>
                            </select>
                        </div>
                    </th>
                    <th scope="col">                        
                        <!-- div>
                            <select class="form-select" 
                            @change="applyFiltro('nome_modelo', $event.target.value)" 
                            style="width: 150px;" v-model="filter_modelo">
                                <option value="" selected disabled>
                                    Modelo
                                </option>
                                <option value="0">
                                    <div v-if="filter_modelo == '0'">
                                        Modelo
                                    </div>
                                    <div v-else>
                                        Limpar filtro
                                    </div>
                                </option>
                                <option :value="item.nome_modelo" v-for="item in modelos_filtrados">
                                    {{item.nome_modelo}}
                                </option>
                            </select>
                        </div -->
                    </th>
                    <th scope="col"> --- </th>
                    <th scope="col" class="text-center"> --- </th>
                    </tr>
                    <tr style="background-color: crimson; color: #fff;">
                    <th scope="col">#</th>
                    <th scope="col">Tipo de veiculo</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Descrição</th>
                    <th scope="col" class="text-center">Açoes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="modelo in $store.state.modelos" :key="modelo.id">
                        <th scope="row"> {{ modelo.id }} </th>
                        <td> {{ modelo.nome_tipo_veiculo }} </td>
                        <td> {{ modelo.nome_marca }}</td>
                        <td> {{ modelo.nome_modelo }} </td>
                        <td> ---- </td>
                        <td class="text-center">
                            <div style="width: 100%;">
                                <span @click="showDetalhes" hidden>
                                    <i class="fas fa-eye"></i>
                                </span>
                                <span class="mx-3"
                                    type="button" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#EditarModelo"
                                    @click="showgetDados(modelo.id)"
                                >
                                    <i class="fas fa-pencil-alt"></i>
                                </span>
                                <span class="fas fa-trash-alt"
                                type="button" 
                                data-bs-toggle="modal" 
                                data-bs-target="#EliminarModelo"
                                @click="modalApagar(modelo.id)"
                            ></span>
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
                <button class="btn btn-add rounded-circle 
                    position-absolute d-flex 
                    justify-content-center align-items-center" 
                    style="left: 8px;"
                    type="button" 
                    data-bs-toggle="modal" 
                    data-bs-target="#IDaddCarro"
                    > 
                    <i class="fas fa-plus"></i> 
                </button>
           </div>

           <!-- Editar Modelo -->
           <div class="modal fade" id="EditarModelo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="bg-dar" id="criarAnuncio">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel" style="font-size: 17px;">
                            <span class="fas fa-bullhorn py-2 pt-0"></span> <b>Editar Modelo</b>
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                        </div>
                        <div class="modal-body" style="height: 470px; overflow: auto; margin-bottom: 1em;">
                            <!-- Seu formulário aqui -->
                            <!-- Seu formulário aqui -->
                <form>
                  <div class="mb-3">
                    <label for="" class="form-label">Tipo de veiculo</label>
                    <select class="form-select" name="" id="" v-model="tipo_veiculo_id">
                      <option value="">Selecionar</option>
                      <option v-for="item in $store.state.tipo_veiculo" :key="item.id" :value="item.id">{{ item.tipo_veiculo }}</option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label for="" class="form-label">Marca</label>
                    <select class="form-select" name="" id="" v-model="marca_id">
                      <option value="">Selecionar</option>
                      <option v-for="marca in filterMarcas(tipo_veiculo_id)" :key="marca.id" :value="marca.id">{{ marca.nome_marca }}</option>
                    </select>
                  </div>

                  <div class="mb-3">
                      <label for="nome" class="form-label">Modelo</label>
                      <input type="text" class="text form-control" id="nome" v-model="nome">
                  </div>
                </form>
                        </div>
                        <div class="modal-footer">
                        <div style="display: flex; flex-wrap: wrap;">
                            <div class="col-6">
                            <button type="button" class="me-3 btn btn-secondary" data-bs-dismiss="modal" aria-label="Fechar">Cancelar</button>
                            </div>
                            <div class="col-6">
                                <button type="button" class="ms-3 btn btn-primary" @click="editar()"
                                data-bs-dismiss="modal" aria-label="Fechar"
                                >actualizar</button>
                            </div>
                        </div>  
                        </div>
                        </div>
                    </div>
                </div>
            </div>



            <!-- Eliminar Modelo -->
            <div class="modal fade" id="EliminarModelo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="bg-dar" id="criarAnuncio">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel" style="font-size: 17px;">
                              <span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Modelo</b>
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                        </div>
                        <div class="modal-body" style="height: 80px; overflow: auto; margin-bottom: 1em;">
                            <!-- Seu formulário aqui -->
                            <div>
                              <h5>
                                Confirme antes de <span style="color: red;">Eliminar</span>!
                              </h5>
                            </div>
                        </div>
                        <div class="modal-footer">
                          <div style="display: flex; flex-wrap: wrap;">
                            <div class="col-6">
                              <button type="button" class="me-3 btn btn-secondary" data-bs-dismiss="modal" aria-label="Fechar">Cancelar</button>
                            </div>
                            <div class="col-6">
                                <button type="button" class="btn btn-primary" @click="apagar()" data-bs-dismiss="modal" aria-label="Fechar">Confirmar</button>
                            </div>
                          </div>  
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
  name: 'TheModelos',

  data() {
    return {
        nome: '',
        marca_id: '',
        desc: 'desc',
        marcas: [],
        Api_tipo_veiculo: [],
        tipo_veiculo_id: '',
        marcas: '',
        filter_tipo_veiculo: '',
        array_filtros: [],
        filter_marca: '',
        filter_modelo: '',
        modelos_filtrados: []
    }
  },

  methods: {
    show_menu_lateral(){
        this.$emit('show_menu_lateral')
    },

    showDetalhes() {
        this.$router.push({ path: '/detalhes'});
    },

    async editar() {
        // Formata a data no formato "dia-mês-ano"
        const data = {
            "nome_modelo": this.nome,
            "marca_id": this.marca_id,
            "descricao": this.desc
        }

        this.filter_tipo_veiculo = ""

        try {
        // Editar estado
        const response = await api.editarModelo(data, this.id)


        if (response.data) {
            
            this.$store.state.modelos = await api.filtrarAnuncio('api/modelos/listar_modelos?nome_tipo_veiculo=carro')      

        } else {
            // Caso contrário, exiba uma mensagem de erro ou faça o que for apropriado
            this.showErrorMessage = true;
        }
        } catch (error) {
        // Trate erros de requisição, se necessário
        console.error("Erro na requisição:", error);
        this.showErrorMessage = true;
        } 
    },

    // Carregar as var
    showgetDados(id){
            this.id = id

            this.modelos = this.$store.state.modelos.find(objeto => objeto.id === this.id);


            this.nome = this.modelos.nome_modelo
            this.tipo_veiculo_id = this.modelos.id_tipo_veiculo
            this.marca_id = this.modelos.id_marca
        },

        modalApagar(id) {
            this.id = id

        },

        async apagar() {

              this.filter_tipo_veiculo = ""
              
                
              try {
                const response = await api.eliminarModelo(this.id)


                 setTimeout(async function () {
                    this.$store.state.modelos = await api.filtrarAnuncio('api/modelos/listar_modelos?nome_tipo_veiculo=carro')
                }.bind(this), 2000);


                if (response.data) {

                    
                    // this.$store.state.estado = await api.listarEstado()        

                } else {
                    // Caso contrário, exiba uma mensagem de erro ou faça o que for apropriado
                    this.showErrorMessage = true;
                }
                } catch (error) {
                // Trate erros de requisição, se necessário
                console.error("Erro na requisição:", error);
                this.showErrorMessage = true;
                }
                  
            },

            filterMarcas(id) {
                return this.$store.state.marcas.filter(item => item.tipo_veiculo_id == id);
            },

            filterMarcas_nome(id) {
                return this.$store.state.marcas.filter(item => item.tipo_veiculo == this.filter_tipo_veiculo);
            },

            async filterModelos_nome(valor) {
                
                this.applyFiltro('nome_tipo_veiculo', valor)

                //this.modelos_filtrados = await api.filtrarAnuncio("api/modelos/listar_modelos?nome_tipo_veiculo="+valor) 
                

                //return this.$store.state.modelos
            },

            async applyFiltro(chaveID, valorID){

            if (valorID != '0') {
            // Filtrar Varios        
            // Objeto temporário para armazenar chaves únicas
            const chavesUnicas = {};

            // Atualiza o objeto temporário com as chaves únicas e seus valores
            this.array_filtros.forEach(filtro => {
                chavesUnicas[filtro.chave] = filtro.valor;
            });

            // Adiciona ou atualiza o valor da chave no objeto temporário
            chavesUnicas[chaveID] = valorID;

            // Atualiza o array_filtros a partir do objeto temporário
            this.array_filtros = Object.keys(chavesUnicas).map(chave => ({ chave, valor: chavesUnicas[chave] }));

            // Use qs.stringify para converter os parâmetros em uma string de consulta
            const queryParams = {};
            this.array_filtros.forEach((filtro) => {
                queryParams[filtro.chave] = filtro.valor;
            });
            const queryString = Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`).join('&');

            // Construa a URL com base nos filtros
            const url = `api/modelos/listar_modelos?${queryString}`;

            // Chamada à API para filtrar anúncios com a URL construída
            //this.$store.state.anuncios = await api.filtrarAnuncio(url);
            //this.$store.state.modelos = await api.filtrarAnuncio(url)
            this.$store.state.modelos = await api.filtrarAnuncio(url)
            
            
            } else {
                this.limparFiltro()
                this.filter_tipo_veiculo = '0'
                this.filter_marca = '0'
                this.filter_modelo = '0'
            }


            if (this.$store.state.anuncios.length == 0) {
                this.$store.state.results = false 
            
            } else {
                this.$store.state.results = true 

                }
            },

            async limparFiltro(){
                this.array_filtros = []
                this.$store.state.modelos = await api.filtrarAnuncio('api/modelos/listar_modelos?nome_tipo_veiculo=carro')
            },
  },
  
  async created() {
    this.$store.state.modelos = await api.filtrarAnuncio('api/modelos/listar_modelos?nome_tipo_veiculo=carro')
    this.$store.state.marcas = await api.listarMarca()
    this.$store.state.tipo_veiculo = await api.listarTipo_Veiculo()
    
    if (!(localStorage.getItem('token'))) {
        this.$router.push({ path: '/login'});
    }
  },

  mounted() {
        if(localStorage.getItem('perfil') != 'superadmin') {
            this.$router.push({ path: '/anuncios'});
        } 
  }

}
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
