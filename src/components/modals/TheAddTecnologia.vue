<template>
<!-- O modal Adicionar -->
<div class="modal fade" id="IDaddTecnologia" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">

            <div class="bg-dar">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  <span class="far fa-user py-2 pt-0"></span> <b>Adicionar Tecnologia</b>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <div class="modal-body" style="height: 370px; overflow: auto; margin-bottom: 1em;">
                <!-- Seu formulário aqui -->
                <form>
                  <div class="mb-3">
                      <label for="nome" class="form-label">Nome</label>
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
          desc: 'desc'
        }
      },

      methods: {
        async add() {
          const data = {
            "tecnologia": this.nome,
            "descricao": this.desc
          }

          try {
            const response = await api.adicionarTecnologia(data)


            if (response) {

              this.$store.state.adminID = null
              this.$store.state.tecnologia = await api.listarTecnologia()

              this.nome = ''
              this.desc = ''

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
      }
  }
</script>