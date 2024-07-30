<template>
<!-- O modal Adicionar -->
<div class="modal fade" id="IDaddCarro" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">

            <div class="bg-dar">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  <span class="far fa-user py-2 pt-0"></span> <b>Adicionar Modelo</b>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <div class="modal-body" style="height: 370px; overflow: auto; margin-bottom: 1em;">
                <!-- Seu formulário aqui -->
                <form>
                  <div class="mb-3">
                    <label for="" class="form-label">Tipo de veiculo</label>
                    <select class="form-select" name="" id="" v-model="tipo_veiculo_id">
                      <option value="">Selecionar</option>
                      <option v-for="item in Api_tipo_veiculo" :key="item.id" :value="item.id">{{ item.tipo_veiculo }}</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label">Marca</label>
                    <select class="form-select" name="" id="" v-model="marca_id">
                      <option value="">Selecionar</option>
                      <option v-for="marca in filterMarcas  " :key="marca.id" :value="marca.id">{{ marca.nome_marca }}</option>
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
          marca_id: '',
          desc: 'desc',
          marcas: [],
          Api_tipo_veiculo: [],
          tipo_veiculo_id: ''
        }
      },

      methods: {
        async add() {
          const data = {
            "nome_modelo": this.nome,
            "marca_id": this.marca_id,
            "descricao": this.desc
          }

          try {
            const status = await api.adicionarModelo(data); // Espera a resposta da chamada assíncrona

            if (status) {
              this.nome = '';
              this.marca_id = '';
              this.desc = '';
              this.$store.state.modelos = await api.filtrarAnuncio('api/modelos/listar_modelos?nome_tipo_veiculo=carro')      
            }
          } catch (error) {
            // Lidar com erros, se necessário
          }
        },
      },

      async created() {
        this.$store.state.marcas = await api.listarMarca()
        this.Api_tipo_veiculo = await api.listarTipo_Veiculo()
      },

      computed: {
        filterMarcas() {
          if (!Array.isArray(this.marcas)) {
            console.error("this.marcas não é uma matriz");
            return [];
          }
          return this.$store.state.marcas.filter(item => item.tipo_veiculo_id == this.tipo_veiculo_id);
        }
      }
  }
</script>