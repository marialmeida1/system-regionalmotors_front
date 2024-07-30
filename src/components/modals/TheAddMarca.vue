<template>
<!-- O modal Adicionar -->
<div class="modal fade" id="IDaddMarcas" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">

            <div class="bg-dar">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  <span class="far fa-user py-2 pt-0"></span> <b>Adicionar Marca</b>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <div class="modal-body" style="height: 370px; overflow: auto; margin-bottom: 1em;">
                <!-- Seu formulário aqui -->
                <form>
                  <div class="mb-3">
                    <label for="" class="form-label">Tipo de veiculo</label>
                    <select class="form-select" name="" id="" v-model="id_tipo_veiculo">
                      <option value="">Selecionar</option>
                      <option v-for="marca in tipo_veiculo" :key="marca.id" :value="marca.id">{{ marca.tipo_veiculo }}</option>
                    </select>
                  </div>
                  <div class="mb-3">
                      <label for="nome" class="form-label">Marca</label>
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
      name: 'TheAddMarca',

      data() {
        return {
          nome: '',
          id_tipo_veiculo: '',
          desc: 'desc',
          tipo_veiculo: []
        }
      },

      methods: {
        async add() {
          const data = 
          {
              "nome_marca": this.nome,
              "tipo_veiculo_id": this.id_tipo_veiculo,
              "descricao": this.desc
          }
          
          try {
            const status = await api.adicionarMarca(data) // Espera a resposta da chamada assíncrona

            if (status) {
              this.nome = ''
              this.marca_id = ''
              this.desc = ''
              this.$store.state.marcas = this.applyFiltro("tipo_veiculo", "carro")
            }
          } catch (error) {
            // Lidar com erros, se necessário
          }
        
        }
      },

      async created() {
        this.tipo_veiculo = await api.listarTipo_Veiculo()
      }
  }
</script>