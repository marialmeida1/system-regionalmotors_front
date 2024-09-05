<template>
<!-- O modal Adicionar -->
<div class="modal fade" id="IDaddCarro" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">

            <div class="bg-dar">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  <span class="far fa-user py-2 pt-0"></span> <b>Adicionar item Opcional</b>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <div class="modal-body" style="height: 370px; overflow: auto; margin-bottom: 1em;">
                <!-- Seu formulário aqui -->
                <form>
                  <div class="mb-3">
                    <label for="" class="form-label">Categoria Opcional</label>
                    <select class="form-select" name="" id="" v-model="categoria_opcional_id">
                      <option >Selecionar</option>
                      <option v-for="marca in categ_opcionais" :key="marca.id" :value="marca.id">{{ marca.nome }}</option>
                    </select>
                  </div>
                  <div class="mb-3">
                      <label for="nome" class="form-label">Opcional</label>
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
      name: 'TheAddModelo',

      data() {
        return {
          nome: '',
          categoria_opcional_id: '',
          desc: '',
          categ_opcionais: ''
        }
      },

      methods: {
        async add() {
          const data = {
            "categoria_opcional_id": this.categoria_opcional_id,
            "nome": this.nome,
          }

          try {
            const status = await api.adicionarOpcionais(data); // Espera a resposta da chamada assíncrona

            if (status) {
              this.nome = '';
              this.categoria_opcional_id = '';
              this.$store.state.opcionais = await api.listarOpcionais()  
            }
          } catch (error) {
            // Lidar com erros, se necessário
          }
        }
      },

      async created() {
        this.categ_opcionais = await api.listarCategoriaOpcionais()
      }
  }
</script>