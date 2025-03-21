<template>
  <!-- O modal Adicionar -->
  <div class="modal fade" id="IDaddCarro" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="bg-dar">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <span class="far fa-user py-2 pt-0"></span> <b>Novo Plano</b>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>
          <div class="modal-body" style="height: 370px; overflow: auto; margin-bottom: 1em;">
            <!-- Seu formulário aqui -->
            <form>
              <div class="mb-3">
                <label for="nome" class="form-label">Nome do Plano</label>
                <input type="text" class="text form-control" id="nome" v-model="nome">
              </div>

              <div class="mb-3">
                <label for="" class="form-label">Tipo</label>
                <select class="form-select" name="" id="" v-model="tipo">
                  <option value="Particular">Particular</option>
                  <option value="Revenda">Revenda</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="nome" class="form-label">Valor</label>
                <input type="number" class="text form-control" id="nome" v-model="valor">
              </div>

              <div class="mb-3">
                <label for="nome" class="form-label">Quantidade de Anuncios</label>
                <input type="number" class="text form-control" id="nome" v-model="quantidade_anuncios">
              </div>

              <div class="mb-3">
                <label for="nome" class="form-label">Total Anuncios em destaque</label>
                <input type="number" class="text form-control" id="nome" v-model="quantidade_anuncio_destaque">
              </div>

              <div class="mb-3">
                <label for="nome" class="form-label">Total Anuncios em vitrine</label>
                <input type="number" class="text form-control" id="nome" v-model="quantidade_anuncio_vitrine">
              </div>

              <div class="mb-3">
                <label for="" class="form-label">Total dias em Publicaçao</label>
                <input type="number" class="text form-control" id="nome" v-model="dias_publicacao">
              </div>

              <div class="mb-1">
                <label for="texto_plano" class="form-label">Descrição</label>
                <textarea class="form-control" rows="5" id="texto_plano" v-model="texto_plano"
                  :class="{ 'limit-reached': (texto_plano?.length || 0) >= 200, 'warning': (texto_plano?.length || 0) >= 200 * 0.8 }"
                  maxlength="200"></textarea>
              </div>
              <p class="text-cont">{{ texto_plano?.length || 0 }}/200 caracteres</p>

              <div class="mb-3">
                <label for="" class="form-label">Quantidade de Fotos</label>
                <input type="number" class="text form-control" id="nome" v-model="quantidade_fotos">
              </div>

              <div class="mb-3 d-none">
                <label for="nome" class="form-label">Link de pagamento</label>
                <input type="text" class="text form-control" id="nome" v-model="nome">
              </div>

              <div class="mb-3">
                <label for="" class="form-label">Activo</label>
                <select class="form-select" name="" id="" v-model="activo">
                  <option value="1">Sim</option>
                  <option value="0">Nao</option>
                </select>
              </div>

            </form>
          </div>
          <div class="modal-footer">
            <div style="display: flex; flex-wrap: wrap;">
              <div class="col-6">
                <button type="button" class="ms-3 btn btn-secondary" data-bs-dismiss="modal"
                  aria-label="Fechar">Cancelar</button>
              </div>
              <div class="col-6">
                <button type="button" class="ms-3 btn btn-primary" @click="add()" data-bs-dismiss="modal"
                  aria-label="Fechar">Adicionar</button>
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
  name: 'TheAddPlano',

  data() {
    return {
      nome: '',
      quantidade_anuncios: '',
      valor: '',
      quantidade_anuncio_destaque: '',
      quantidade_anuncio_vitrine: '',
      dias_publicacao: '',
      texto_plano: '',
      quantidade_fotos: '',
      tipo: '',
      activo: '1',
    }
  },

  methods: {
    async add() {
      const data = {
        "nome": this.nome,
        "activo": this.activo,
        "quantidade_anuncios": this.quantidade_anuncios,
        "valor": this.valor,
        "tipo": this.tipo,
        "anuncio_destaque": "0",
        "quantidade_anuncio_destaque": this.quantidade_anuncio_destaque,
        "quantidade_anuncio_vitrine": this.quantidade_anuncio_vitrine,
        "dias_publicacao": this.dias_publicacao,
        "texto_plano": this.texto_plano,
        "quantidade_fotos": this.quantidade_fotos,
        "link_pagamento": "null"
      }


      try {
        const status = await api.adicionarPlano(data); // Espera a resposta da chamada assíncrona


        if (status) {
          this.nome = ''
          this.quantidade_anuncios = ''
          this.valor = ''
          this.quantidade_anuncio_destaque = ''
          this.quantidade_anuncio_vitrine = ''
          this.dias_publicacao = ''
          this.texto_plano = ''
          this.quantidade_fotos = ''
          this.tipo = ''

          this.$store.state.planos = await api.listarPlano()
        }
      } catch (error) {
        // Lidar com erros, se necessário
      }
    }
  },

  async created() {
    this.marcas = await api.listarPlano()
  }
}
</script>