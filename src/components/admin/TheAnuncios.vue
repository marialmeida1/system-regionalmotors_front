<template>
  <main class="content m-0">
    <br />
    <div class="py-2" style="box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2)" hidden>
      <!-- Filtros-->
      <div class="row">
        <div class="col-8 col-lg-10">
          <div class="row">
            <div class="col-2 pesquisar-filter p-0">
              <div class="pt-2" @click="show_menu_lateral">
                <i class="fas fa-filter fa-lg"></i>
              </div>
            </div>
            <div class="col-10 col-lg-12 p-0">
              <div class="pesquisar" style="width: 100%; position: relative; border: none">
                <input
                  type="text"
                  class="ps-4 pt-2"
                  style="width: 89%; color: #000"
                  v-model="filtro"
                  placeholder="Buscar"
                />
                <i
                  class="fas fa-search"
                  style="position: absolute; left: 8px; top: 36%; bottom: 0; margin: auto"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes" hidden>
          <div class="row">
            <div class="pesquisar-link-icon col-4 pt-3 invisible">
              <i class="fas fa-th-large fa-lg"></i>
            </div>
            <div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible">
              <i class="fas fa-th-list fa-lg"></i>
            </div>
            <div class="menu-link position-relative pesquisar-link-icon col-4 pt-3">
              <i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i>
              <div
                class="sub-menu-desktop mais-relevantes position-absolute py-2"
                style="z-index: 99; width: 170px; left: -135px !important"
              >
                <div class="pb-3"></div>
                <div
                  class="bg-dark p-2 text-cente"
                  style="border-bottom-left-radius: 8px; border-bottom-right-radius: 8px"
                >
                  <span class="ps-2">Filtrar Anúncios</span>
                  <p class="mt-2">Todos</p>
                  <p>Pendente</p>
                  <p>Em andamento</p>
                  <p>Rejeitado</p>
                  <p>Terminado</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>

    <div class="px-2 px-lg-3">
      <div>
        <!-- Links -->
        <div class="py-2 pt-3 px-2" style="font-size: 13px">
          <span class="me-2 p-1 px-2 rounded-3 bg-dark" style="opacity: 0.6">
            <b>Gerenciar/Meus anuncios</b>
          </span>
        </div>
      </div>

      <!-- div class="p-2">
                <span class="me-2">| Filtrar:</span> 
                <span v-for="item in array_filtros">
                    <span v-if="item.chave === 'situacao_veiculo'">
                        <span v-if="item.valor === '1'">
                            Novo
                        </span>
                        <span v-if="item.valor === '2'">
                            Usado
                        </span>
                    </span>
                    <span v-else-if="item.chave === 'status_publicacao'">
                        <span v-if="item.valor === '1'">
                            Aguardando
                        </span>
                        <span v-if="item.valor === '2'">
                            Ativo
                        </span>
                        <span v-if="item.valor === '3'">
                            Recusado
                        </span>
                        <span v-if="item.valor === '4'">
                            Finalizado
                        </span>
                        <span v-if="item.valor === '5'">
                            Vendido
                        </span>
                        <span v-if="item.valor === '6'">
                            Bloqueado
                        </span>
                    </span>
                    <span v-else>{{ item.valor }}</span> /
                </span> 
            </div -->

      <div
        v-if="carregar"
        style="height: 20vh"
        class="d-flex justify-content-center align-items-center"
      >
        <div class="caixa" style="background: none">
          <img src="/regLoader.png" alt="" style="width: 100%" />
        </div>
      </div>

      <div v-else class="position-relative" style="height: 68vh">
        <div class="p-2 pt-3 table-responsive" style="height: 65vh">
          <table class="table">
            <thead>
              <!-- tr>
                    <th scope="col">
                        <button class="form-select" @click="limparFiltro">
                            Limpar
                        </button>
                    </th>
                    <th scope="col">
                        <div>
                            <select class="form-select">
                                <option value="" selected disabled>
                                    Anunciante
                                </option>
                            </select>
                        </div>
                    </th>
                    <th scope="col">                        
                        <div>
                            <select class="form-select" 
                            @change="applyFiltro('tipo_veiculo', $event.target.value)" 
                            style="width: 150px;">
                                <option value="" selected disabled>
                                    Tipo de veiculos
                                </option>
                                <option :value="item.tipo_veiculo" v-for="item in $store.state.tipo_veiculo">
                                    {{item.tipo_veiculo}}
                                </option>
                            </select>
                        </div>
                    </th>
                    <th scope="col">
                        <div>
                            <select class="form-select" @change="applyFiltro('situacao_veiculo', $event.target.value)">
                                <option value="" selected disabled>
                                    Situção do veiculo
                                </option>
                                <option value="1">
                                    Novo
                                </option>
                                <option value="2">
                                    Usado
                                </option>
                            </select>
                        </div>
                    </th>
                    <th scope="col">
                        <div>
                            <select class="form-select" @change="applyFiltro('nome_marca', $event.target.value)" style="width: 150px;">
                                <option value="" selected disabled>
                                    Marcas
                                </option>
                                <option :value="item.nome_marca" v-for="item in $store.state.marcas">
                                    {{item.nome_marca}}
                                </option>
                            </select>
                        </div>
                    </th>
                    <th scope="col">
                        <div>
                            <select class="form-select" @change="applyFiltro('nome_modelo', $event.target.value)" style="width: 150px;">
                                <option value="" selected disabled>
                                    Modelos
                                </option>
                                <option :value="item.nome_modelo" v-for="item in $store.state.modelos">
                                    {{item.nome_modelo}}
                                </option>
                            </select>
                        </div>
                    </th>                    
                    <th scope="col">
                        <div>
                            <select class="form-select" @change="applyFiltro('status_publicacao', $event.target.value)">
                                <option selected disabled>
                                    Status
                                </option>
                                <option value="1">
                                    Aguardando
                                </option>
                                <option value="2">
                                    Ativo
                                </option>
                                <option value="3">
                                    Recusado
                                </option>
                                <option value="4">
                                    Finalizado
                                </option>
                                <option value="5">
                                    Vendido
                                </option>
                                <option value="6">
                                    Bloqueado
                                </option>
                            </select>
                        </div>
                    </th>
                    <th scope="col" class="text-center">...</th>
                    </tr -->

              <tr style="background-color: crimson; color: #fff">
                <th scope="col">#</th>
                <!-- th scope="col">Anuciante</th -->
                <th scope="col">
                  <div style="width: 130px">Tipo de veiculo</div>
                </th>
                <th scope="col">
                  <div style="width: 170px">Situaçao do veiculo</div>
                </th>
                <th scope="col">Marca</th>
                <th scope="col">Modelo</th>
                <!-- <th scope="col">Data Inicial</th>
                    <th scope="col">Data Final</th> -->
                <th scope="col">Status</th>
                <th scope="col" class="text-center">Açõe  s</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="semAnuncio">
                <td class="text-center" colspan="8">Sem Anuncios</td>
              </tr>
              <tr v-else v-for="anuncio in $store.state.anuncios" :key="anuncio.id">
                <th>{{ anuncio.id }}</th>
                <!-- td> {{ anuncio.nome_empresa }} </td -->
                <td>{{ anuncio.tipo_veiculo }}</td>
                <td>
                  <span v-if="anuncio.situacao_veiculo == 1"> Novo </span>
                  <span v-if="anuncio.situacao_veiculo == 2"> Usado </span>
                </td>
                <td>{{ anuncio.nome_marca }}</td>
                <td>{{ anuncio.nome_modelo }}</td>
                <td>
                  <div name="">
                    <div class="py-2">
                      <div
                        style="width: 150px"
                        v-if="anuncio.status_publicacao == 1"
                        class="text-center bg-warning p-2 rounded-3"
                      >
                        Aguardando
                      </div>
                      <div
                        style="width: 150px; background-color: rgb(0, 221, 0)"
                        v-else-if="anuncio.status_publicacao == 2"
                        class="text-center p-2 rounded-3"
                      >
                        Activo
                      </div>
                      <div
                        style="width: 150px; color: #fff"
                        v-else-if="anuncio.status_publicacao == 3"
                        class="text-center bg-danger p-2 rounded-3"
                      >
                        Reprovado
                      </div>
                      <div
                        style="width: 150px"
                        v-else-if="anuncio.status_publicacao == 4"
                        class="text-center bg-dark p-2 rounded-3"
                      >
                        Finalizado
                      </div>
                      <div
                        style="width: 150px; background-color: rgb(0, 214, 221)"
                        v-else-if="anuncio.status_publicacao == 5"
                        class="text-center p-2 rounded-3"
                      >
                        Vendido
                      </div>
                      <div
                        style="
                          width: 150px;
                          background-color: rgb(168, 168, 168);
                          color: rgb(104, 101, 101);
                        "
                        v-else-if="anuncio.status_publicacao == 6"
                        class="text-center p-2 rounded-3"
                      >
                        Bloqueado
                      </div>
                    </div>
                  </div>
                </td>
                <td class="text-center">
                  <div style="width: 150px">
                    <span @click="showDetalhes(anuncio.id)" style="cursor: pointer">
                      <i class="fas fa-eye"></i>
                    </span>
                    <span
                      @click="recarregarDados(anuncio.id)"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#CarregarFotos"
                    >
                      <i class="fas fa-camera ms-3"></i>
                    </span>
                    <span
                      class="mx-3"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#EditarAnuncios"
                      @click="editarAnuncioEmit(anuncio.id)"
                    >
                      <i class="fas fa-pencil-alt"></i>
                    </span>
                    <span
                      class="fas fa-trash-alt"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#EliminarAnuncio"
                      @click="modalApagar(anuncio.id)"
                    ></span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          class="btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center"
          style="left: 8px"
          type="button"
          @click="openModal"
        >
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>

    <!-- Eliminar Anuncio -->
    <div
      class="modal fade"
      id="EliminarAnuncio"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="bg-dar" id="criarAnuncio">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel" style="font-size: 17px">
                <span class="fas fa-bullhorn py-2 pt-0"></span> <b>Remover Anuncio</b>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fechar"
              ></button>
            </div>
            <div class="modal-body" style="height: 80px; overflow: auto; margin-bottom: 1em">
              <!-- Seu formulário aqui -->
              <div>
                <h5>Confirme antes de <span style="color: red">Eliminar</span>!</h5>
              </div>
            </div>
            <div class="modal-footer">
              <div style="display: flex; flex-wrap: wrap">
                <div class="col-6">
                  <button
                    type="button"
                    class="me-3 btn btn-secondary"
                    data-bs-dismiss="modal"
                    aria-label="Fechar"
                  >
                    Cancelar
                  </button>
                </div>
                <div class="col-6">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="apagar()"
                    data-bs-dismiss="modal"
                    aria-label="Fechar"
                  >
                    Confirmar
                  </button>
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
  name: "TheAnuncios",

  data() {
    return {
      anuncios: [],
      detalharAnuncios: [],
      descricao: "",
      fotos: "",
      mostrarFotos: false, // Inicialmente, não mostrar as fotos
      mostrarDescricao: true, // Inicialmente, mostrar a descrição
      confortoArray: [],
      segurancaArray: [],
      contador: 0,
      verifyContador: true,
      selectedFile: null,
      fileFoto: null,

      selectedFile: null,
      //imagePreview: this.$store.state.detalharAnuncios.foto1, // Assuming you have the initial image URL in the store
      carregar: true,
      vazio: false,
      array_filtros: [],
      filtro: "",
      semAnuncio: true,
    };
  },

  methods: {
    openModal() {
      var modal = document.getElementById("IDaddCarro");
      this.$store.state.modalCriarAnuncio = new bootstrap.Modal(modal);
      this.$store.state.modalCriarAnuncio.show();
    },

    show_menu_lateral() {
      this.$emit("show_menu_lateral");
    },

    async recarregarDados(id) {
      this.$store.state.foto1 = "";
      this.$store.state.foto2 = "";
      this.$store.state.foto3 = "";
      this.$store.state.foto4 = "";
      this.$store.state.foto5 = "";
      this.$store.state.foto6 = "";
      this.$store.state.foto7 = "";
      this.$store.state.foto8 = "";
      this.$store.state.foto9 = "";
      this.$store.state.foto10 = "";

      this.$store.state.anuncioID = id;
      try {
        const dados = await api.detalharAnuncio(this.$store.state.anuncioID);

        this.$store.state.detalharAnuncios = dados[0];

        if (this.$store.state.detalharAnuncios) {
          this.$emit("hiddenLoading");
        }

        this.$store.state.foto1 = this.$store.state.detalharAnuncios.foto1;
        this.$store.state.foto2 = this.$store.state.detalharAnuncios.foto2;
        this.$store.state.foto3 = this.$store.state.detalharAnuncios.foto3;
        this.$store.state.foto4 = this.$store.state.detalharAnuncios.foto4;
        this.$store.state.foto5 = this.$store.state.detalharAnuncios.foto5;
        this.$store.state.foto6 = this.$store.state.detalharAnuncios.foto6;
        this.$store.state.foto7 = this.$store.state.detalharAnuncios.foto7;
        this.$store.state.foto8 = this.$store.state.detalharAnuncios.foto8;
        this.$store.state.foto9 = this.$store.state.detalharAnuncios.foto9;
        this.$store.state.foto10 = this.$store.state.detalharAnuncios.foto10;
      } catch (error) {
        console.error("Erro ao listar anúncios:", error);
      }
    },

    async applyFiltro(chaveID, valorID) {
      //Filtrar Varios
      // Objeto temporário para armazenar chaves únicas
      const chavesUnicas = {};

      // Atualiza o objeto temporário com as chaves únicas e seus valores
      this.array_filtros.forEach((filtro) => {
        chavesUnicas[filtro.chave] = filtro.valor;
      });

      // Adiciona ou atualiza o valor da chave no objeto temporário
      chavesUnicas[chaveID] = valorID;

      // Atualiza o array_filtros a partir do objeto temporário
      this.array_filtros = Object.keys(chavesUnicas).map((chave) => ({
        chave,
        valor: chavesUnicas[chave],
      }));

      // Função para construir a URL com base nos filtros
      const queryParams = {};
      this.array_filtros.forEach((filtro) => {
        queryParams[filtro.chave] = filtro.valor;
      });

      // Use qs.stringify para converter os parâmetros em uma string de consulta
      const queryString = Object.keys(queryParams)
        .map((key) => `${key}=${queryParams[key]}`)
        .join("&");

      const url = `api/anuncios/listar_anuncios?${chaveID}=${valorID}`;

      this.$store.state.anuncios = await api.filtrarAnuncio(url);

      if (this.$store.state.anuncios.length == 0) {
        this.vazio = true;
      } else {
        this.vazio = false;
      }
    },

    async limparFiltro() {
      this.array_filtros = [];
      this.$store.state.anuncios = await api.listarAnuncioAnunciante();
      this.vazio = false;
      this.filtro = "";
    },

    showFotos() {
      this.mostrarFotos = true;
      this.mostrarDescricao = false;
    },

    showDetalhes(id) {
      // Faça o que quiser com a marcaSelecionada, como exibir em algum lugar
      const parametros = { id: id };
      this.$router.push({ path: "/detalhes-anuncio", query: parametros });
    },

    handdleCarregarFotos() {
      this.$emit("handdleCarregarFotos");
    },

    modalApagar(id) {
      this.id = id;
    },

    async apagar() {
      try {
        const response = await api.eliminarAnuncio(this.id);
        setTimeout(
          async function () {
            this.$store.state.anuncios = await api.listarAnuncioAnunciante();
          }.bind(this),
          2000
        );

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

    async editarAnuncioEmit(id) {
      this.$emit("editarAnuncio", id);
    },
  },

  created() {
    if (!localStorage.getItem("token")) {
      this.$router.push({ path: "/login" });
    }

    this.recarregarDados();
  },

  async mounted() {
    try {
      this.$store.state.anuncios = await api.listarAnuncioAnunciante();
      if (this.$store.state.anuncios != null) {
        this.$store.state.detalharAnuncios = this.$store.state.anuncios.find(
          (objeto) => objeto.id == this.$store.state.anuncioID
        );
      }
    } catch (error) {
      console.error("Erro ao listar anúncios:", error);
    }

    this.$store.state.fechaModal = false;


    this.semAnuncio = false;

    if (this.$store.state.anuncios) {
      this.carregar = false;
      if (this.$store.state.anuncios.length == 0) {
        this.semAnuncio = true;
      }
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
  bottom: 0;
  background-color: crimson;
  color: #fff;
  width: 40px;
  height: 40px;
  transition: background 0.3s ease;
  cursor: pointer;
}

.btn-add:hover {
  background-color: rgb(230, 45, 82);
  color: #fff;
}
</style>
