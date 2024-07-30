<template>
<!-- O modal Adicionar -->
<div class="modal fade" id="IDaddCidade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="bg-dar">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  <span class="far fa-user py-2 pt-0"></span> <b>Adicionar Cidade</b>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <div class="modal-body" style="height: 370px; overflow: auto; margin-bottom: 1em;">
                <!-- Seu formulário aqui -->
                <form>
                  <div class="mb-3">
                      <label for="nome" class="form-label">Estado</label>
                      <select class="form-select" name="" id="" v-model="id_estado" @change="listFilterRegiao">
                        <option value="" selected disabled>Selecionar</option>
                        <option v-for="item in $store.state.estado" :value="item.id" :key="item.id"> {{ item.estado }} </option>
                      </select>
                  </div>
                   <div class="mb-3">
                      <label for="nome" class="form-label">Regiao</label>
                      <select class="form-select" name="" id="" v-model="id_regiao">
                        <option value="" selected disabled>Selecionar</option>
                        <option v-for="item in regioes" :value="item.id" :key="item.id"> {{ item.regiao }} </option>
                      </select>
                  </div>
                  <div class="mb-3">
                      <label for="nome" class="form-label">Cidade</label>
                      <input type="text" class="text form-control" id="nome" v-model="nome" placeholder="Cidade">
                  </div>
                </form>
            </div>
            <div class="modal-footer">
              <div style="display: flex; flex-wrap: wrap;">
                <div class="col-6">
                  <button type="button" class="ms-3 btn btn-secondary" data-bs-dismiss="modal" aria-label="Fechar">Cancelar</button>
                </div>
                <div class="col-6">
                  <button type="button" class="ms-3 btn btn-primary" @click="add()"
                          data-bs-dismiss="modal" aria-label="Fechar"
                  >Adicionar</button>
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

  export default {
      name: 'TheAddCategoria',

      data() {
        return {
          nome: '',
          id_regiao: '',
          id_estado: '',
          regioes: []
        }
      },

      methods: {
        async add() {
          const data = {
              "regiao_id": this.id_regiao,
              "cidade": this.nome
          }

          try {
            const response = await api.adicionarCidade(data)

            console.log("resposta: " + response)

            if (response) {

              console.log("Eliminado... " + response.id)
              this.$store.state.cidade = await api.listarCidade()

              this.nome = ''
              this.id_regiao = ''

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
            this.regioes = []
            // alert("Região 2")
            this.regioes = await api.filtrarAnuncio('api/regiao/listar_regiao?estado_id='+this.id_estado)
        },
      },

      async created() {
        this.$store.state.estado = await api.listarEstado()

      }
  }
</script>