<template>
  <main class="content">
    <div class="py-2" style="box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2)">
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
              <div class="pesquisar" style="width: 100%; position: relative; border: none">
                <input
                  type="text"
                  class="ps-4 pt-2"
                  style="width: 89%; color: #000"
                  placeholder="Digite a marca o modelo do carro"
                />
                <i
                  class="fas fa-search"
                  style="position: absolute; left: 8px; top: 36%; bottom: 0; margin: auto"
                ></i>
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
            <div class="menu-link position-relative pesquisar-link-icon col-4 pt-3">
              <i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i>
              <div
                class="sub-menu-desktop mais-relevantes position-absolute py-2"
                style="z-index: 99; width: 170px; left: -135px !important"
              >
                <div class="pb-3"></div>
                <div
                  class="bg-dark py-0 text-center"
                  style="border-bottom-left-radius: 8px; border-bottom-right-radius: 8px"
                >
                  <p class="">Mais Relevantes</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>

    <div>
      <!-- Links -->
      <div class="py-2 pt-3 px-2" style="font-size: 13px">
        <span class="me-2 p-1 px-2 rounded-3 bg-dark" style="opacity: 0.6">
          <b>Admin/Cidade</b>
        </span>
      </div>
    </div>

    <div class="position-relative" style="height: 72vh">
      <div class="p-2 pt-3 table-responsive" style="height: 65vh">
        <table class="table">
          <tr>
            <th class="invisible">ID</th>
            <th scope="col" class="invisible">
              <div>
                <select class="form-select" @change="applyFiltro('estado', $event.target.value)">
                  <option disabled selected>Estado</option>
                  <option value="0">Estado</option>
                  <option v-for="item in $store.state.estado">
                    {{ item.estado }}
                  </option>
                </select>
              </div>
            </th>
            <th scope="col">
              <div>
                <select class="form-select" @change="filterCidade($event.target.value)">
                  <option disabled selected>Regiao</option>
                  <option value="0">Regiao</option>
                  <option :value="item.id" v-for="item in $store.state.regiao" :key="item.id">
                    {{ item.regiao }}
                  </option>
                </select>
              </div>
            </th>
            <th class="text-center">...</th>
          </tr>
          <tr style="background-color: crimson; color: #fff">
            <th scope="col">
              <div class="">#</div>
            </th>
            <th scope="col">Cidade</th>
            <th scope="col">Regiao</th>
            <th scope="col" class="text-center">Ações</th>
          </tr>
          <tbody>
            <tr v-for="categ in $store.state.cidade" :key="categ.id">
              <th scope="row">{{ categ.id }}</th>
              <td>{{ categ.cidade }}</td>
              <td class="">{{ categ.regiao }}</td>
              <td class="text-center">
                <div style="width: 100%">
                  <span @click="showDetalhes" hidden>
                    <i class="fas fa-eye"></i>
                  </span>
                  <span
                    class="mx-3"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#EditarCidadeNow"
                    @click="showgetDados(categ.id)"
                  >
                    <i class="fas fa-pencil-alt"></i>
                  </span>
                  <span
                    class="fas fa-trash-alt"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#EliminarCidade"
                    @click="modalApagar(categ.id)"
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
        data-bs-toggle="modal"
        data-bs-target="#IDaddCidade"
      >
        <i class="fas fa-plus"></i>
      </button>
    </div>

    <!-- Editar Cidade -->
    <div
      class="modal fade"
      id="EditarCidadeNow"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="bg-dar" id="criarAnuncio">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel" style="font-size: 17px">
                <span class="fas fa-bullhorn py-2 pt-0"></span> <b>Editar Cidade</b>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fechar"
              ></button>
            </div>
            <div class="modal-body" style="height: 470px; overflow: auto; margin-bottom: 1em">
              <!-- Seu formulário aqui -->
              <form>
                <div class="mb-3">
                  <label for="nome" class="form-label">Estado</label>
                  <select
                    class="form-select"
                    name=""
                    id=""
                    v-model="id_estado"
                    @change="listFilterRegiao()"
                  >
                    <option selected disabled>Selecionar</option>
                    <option v-for="item in $store.state.estado" :value="item.id" :key="item.id">
                      {{ item.estado }}
                    </option>
                  </select>
                </div>

                <div class="mb-3">
                  <label for="nome" class="form-label">Regiao</label>
                  <select class="form-select" name="" id="" v-model="novaRegiao_id">
                    <option value="" selected disabled>selecionar</option>
                    <option v-for="item in regioes" :value="item.id" :key="item.id">
                      {{ item.regiao }}
                    </option>
                  </select>
                </div>

                <div class="mb-3">
                  <label for="nome" class="form-label">Cidade</label>
                  <input type="text" class="text form-control" id="nome" v-model="novaCidade" />
                </div>
              </form>
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
                    class="ms-3 btn btn-primary"
                    @click="editar()"
                    data-bs-dismiss="modal"
                    aria-label="Fechar"
                  >
                    Atualizar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Eliminar Cidade -->
    <div
      class="modal fade"
      id="EliminarCidade"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="bg-dar" id="criarAnuncio">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel" style="font-size: 17px">
                <span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Cidade</b>
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
  name: "Thecidade",

  data() {
    return {
      cidade: [],
      id: "",
      novaRegiao_id: "",
      novaCidade: "",
      novaCidade_id: "",
      id_estado: "",
      regioes: [],
      cidades: [],
    };
  },

  methods: {
    show_menu_lateral() {
      this.$emit("show_menu_lateral");
    },

    showDetalhes() {
      this.$router.push({ path: "/detalhes" });
    },

    async editar(id) {
      this.$store.state.adminID = await id;
      this.$emit("editarCategoria", id);
    },

    async eliminar(id) {
      this.$store.state.adminID = await id;
    },

    async editar() {
      // Formata a data no formato "dia-mês-ano"
      const data = {
        regiao_id: this.novaRegiao_id,
        cidade: this.novaCidade,
      };

      try {
        // Editar categorias
        const response = await api.editarCidade(data, this.id);
        if (response.data) {
          this.$store.state.cidade = await api.listarCidade();
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
    showgetDados(id) {
      this.id = id;

      this.cidade = this.$store.state.cidade.find((objeto) => objeto.id === this.id);
      this.novaCidade = this.cidade.cidade;
      this.id_estado = this.cidade.id_estado;
      this.novaRegiao_id = this.cidade.regiao_id;

      this.listFilterRegiao();
    },

    modalApagar(id) {
      this.id = id;
    },

    async apagar() {
      try {
        const response = await api.eliminarCidade(this.id);

        setTimeout(
          async function () {
            this.$store.state.cidade = await api.listarCidade();
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

    async listFilterRegiao() {
      this.regioes = await api.filtrarAnuncio(
        "api/regiao/listar_regiao?estado_id=" + this.id_estado
      );
    },

    async filterCidade(valorID) {
      // Filtrar os dados onde o ID é igual a 1
      this.$store.state.cidade = await api.filtrarAnuncio(
        "api/cidade/listar_cidades?regiao_id=" + valorID
      );

      if (valorID == 0) {
        this.$store.state.cidade = await api.filtrarAnuncio("/api/cidade/listar_cidades");
      }
    },
  },

  async created() {
    this.cidades = await api.listarCidade();
    this.$store.state.cidade = this.cidades;
    this.$store.state.regiao = await api.listarRegiao();
    //this.$store.state.estado = await api.listarEstado()

    if (!localStorage.getItem("token")) {
      this.$router.push({ path: "/login" });
    }
  },

  mounted() {
    if (localStorage.getItem("perfil") != "superadmin") {
      this.$router.push({ path: "/anuncios" });
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
