<template>
<!-- O modal Adicionar -->
<div class="modal fade" id="IDRegiao" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="bg-dar">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  <span class="far fa-user py-2 pt-0"></span> <b>Adicionar Regiao</b>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <div class="modal-body" style="height: 370px; overflow: auto; margin-bottom: 1em;">
                <!-- Seu formulário aqui -->
                <form>
                  <div class="mb-3">
                      <label for="nome" class="form-label">Estado</label>
                      <select class="form-select" name="" id="" v-model="id_estado">
                        <option value="0" selected disabled>Selecionar</option>
                        <option v-for="item in $store.state.estado" :value="item.id" :key="item.id"> {{ item.estado }} </option>
                      </select>
                  </div>
                  <div class="mb-3">
                      <label for="nome" class="form-label">Regiao</label>
                      <input type="text" class="text form-control" id="nome" v-model="nome">
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
          id_estado: ''
        }
      },

      methods: {
        async add() {
          const data = {
              "estado_id": this.id_estado,
              "regiao": this.nome
          }

          try {
            const response = await api.adicionarRegiao(data)

            console.log("resposta: " + response)

            if (response) {

              console.log("Eliminado... " + response.id)
              this.$store.state.adminID = null
              this.$store.state.regiao = await api.listarRegiao()

              this.nome = ''
              this.id_estado = ''

            } else {
              // Caso contrário, exiba uma mensagem de erro ou faça o que for apropriado
              this.showErrorMessage = true;
            }
          } catch (error) {
            // Trate erros de requisição, se necessário
            console.error("Erro na requisição:", error);
            this.showErrorMessage = true;
          }
        
        }
      },

      async created() {
        this.$store.state.estado = await api.listarEstado()
      }
  }
</script>