<template>
<!-- O modal Adicionar -->
<div class="modal fade" id="AddAnuciante" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">

            <div class="bg-dar">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  <span class="far fa-user py-2 pt-0"></span> <b>Novo Anunciante</b>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <div class="modal-body" style="height: 370px; overflow: auto; margin-bottom: 1em;">
                <!-- Seu formulário aqui -->
                <form @submit.prevent="handleSubmit">
                  <div class="p-2 pt-0 row mb-2 mt-md-1 mt-lg-1" style="opacity: 0.8;">
                        <div class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1" style="border-top-left-radius: 8px; font-size: 12px;"> 
                          Informaçoes do Anunciante
                        </div>
                        <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important;">
                          <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px;">
  
                          </div>
                        </div>
                      </div>

                    <div class="row">
                      <div class="mb-3">
                          <label for="estado" class="form-label">Tipo de Anunciante</label>
                          <select class="form-select" v-model="tipo_anunciante" required>
                            <option value="" selected disabled>Selecionar</option>
                            <option value="Revenda">
                              Revenda
                            </option>
                            <option value="Concessionaria">
                              Concessionaria
                            </option>
                            <option value="Particular">
                              Particular
                            </option>
                          </select>
                      </div>

                      <div class="px-2">
                        <div class="mb-3">
                            <label for="Nome" class="form-label">Nome da Empresa</label>
                            <input type="text" id="Nome" placeholder="Nome" class="form-control" v-model="nome_empresa" required>
                        </div>
                      </div>

                      <div class="px-2">
                        <div class="mb-3">
                            <label for="Nome" class="form-label">CNPJ</label>
                            <input type="text" id="Nome" placeholder="CNPJ" class="form-control" v-model="cnpj" @keyup="formatarCNPJ" required>
                        </div>
                      </div>

                      <div class="px-">
                        <div class="mb-3">
                            <label for="Telefone" class="form-label">Telefone</label>
                            <input type="text" id="Telefone" placeholder="Telefone" class="form-control" v-model="telefone" @keyup="formatarTelefone" required>
                        </div>
                      </div>

                      <div class="px-">
                        <div class="mb-3">
                            <label for="Telefone" class="form-label">Celular</label>
                            <input type="text" id="Telefone" placeholder="Celular" class="form-control" v-model="celular" @keyup="formatCelular" required>
                        </div>
                      </div>

                      <div class="px-">
                        <div class="mb-3">
                            <label for="Telefone" class="form-label">WhatsApp</label>
                            <input type="text" id="Telefone" placeholder="WhatsApp" class="form-control" v-model="whatsapp" @keyup="formatWhatsapp" required>
                        </div>
                      </div>

                      <div class="p-2 pt-0 row mb-2 mt-md-1 mt-lg-1" style="opacity: 0.8;">
                        <div class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1" style="border-top-left-radius: 8px; font-size: 12px;"> 
                          Dados de usuario
                        </div>
                        <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important;">
                          <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px;">
  
                          </div>
                        </div>
                      </div>

                      <div class="px-">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input id="email" type="email" placeholder="Email" class="form-control" v-model="email" required>
                        </div>
                      </div>

                      <div class="px-">
                        <div class="mb-3">
                            <label for="email" class="form-label">Senha</label>
                            <input id="email" type="text" placeholder="Senha" class="form-control" v-model="senha" required>
                        </div>
                      </div>

                      <div class="px-">
                        <div class="mb-3">
                            <label for="email" class="form-label">Site</label>
                            <input id="email" type="text" placeholder="Site" class="form-control" v-model="sites" required>
                        </div>
                      </div>

                      <div class="px-">
                        <div class="mb-3">
                            <label for="email" class="form-label">Instagram</label>
                            <input id="email" type="text" placeholder="Instagram" class="form-control" v-model="instagram">
                        </div>
                      </div>
                      <div class="px-">
                        <div class="mb-3">
                            <label for="email" class="form-label">Facebook</label>
                            <input id="email" type="text" placeholder="Facebook" class="form-control" v-model="facebook">
                        </div>
                      </div>

                      <div class="px-">
                        <div class="mb-3">
                            <label for="email" class="form-label">Pessoa Responsavel</label>
                            <input id="email" type="text" placeholder="Pessoa Responsavel" class="form-control" v-model="pessoal_responsavel" required>
                        </div>
                      </div>

                       <div class="p-2 pt-0 row mb-2 mt-md-1 mt-lg-1" style="opacity: 0.8;">
                        <div class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1" style="border-top-left-radius: 8px; font-size: 12px;"> 
                          Dados de Endereço
                        </div>
                        <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important;">
                          <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px;">
  
                          </div>
                        </div>
                      </div>

                      <div class="px-2">
                        <div class="mb-3">
                            <label for="Nome" class="form-label">CEP</label>
                            <input type="text" id="Nome" placeholder="CEP" class="form-control" v-model="cep" @keyup="formatarCEP" required>
                        </div>
                      </div>

                      <div class="mb-3">
                        <label for="nome" class="form-label">Estado</label>
                        <select class="form-select" name="" id="" v-model="id_estado" @change="listFilterRegiao" required>
                          <option value="" selected disabled>Selecionar</option>
                          <option v-for="item in $store.state.estado" :value="item.id" :key="item.id"> {{ item.estado }} </option>
                        </select>
                    </div>
                     <div class="mb-3">
                        <label for="nome" class="form-label">Regiao</label>
                        <select class="form-select" name="" id="" v-model="regiao_id" required>
                          <option value="" selected disabled>Selecionar</option>
                          <option v-for="item in regioes" :value="item.id" :key="item.id"> {{ item.regiao }} </option>
                        </select>
                    </div>
                      
                      <div class="px-">
                        <div class="mb-3">
                            <label for="email" class="form-label">Bairro</label>
                            <input id="email" type="text" placeholder="Bairro" class="form-control" v-model="bairro" required>
                        </div>
                      </div>
                      <div class="px-">
                        <div class="mb-3">
                            <label for="email" class="form-label">Endereço</label>
                            <input id="email" type="text" placeholder="Endereço" class="form-control" v-model="endereco" required>
                        </div>
                      </div>

                      <div class="px-">
                        <div class="mb-3">
                            <label for="email" class="form-label">Numero</label>
                            <input id="email" type="text" placeholder="Numero" class="form-control" v-model="numero" required>
                        </div>
                      </div>

                      <div class="px-">
                        <div class="mb-3">
                            <label for="email" class="form-label">Complemento</label>
                            <input id="email" type="text" placeholder="Complemento" class="form-control" v-model="complemento" required>
                        </div>
                      </div>
                      
                      

                      <div class="p-2 pt-0 row mb-2 mt-md-1 mt-lg-1" style="opacity: 0.8;">
                        <div class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1" style="border-top-left-radius: 8px; font-size: 13px;"> 
                          Endereço Comercial
                        </div>
                        <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important;">
                          <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px;">
                              
                          </div>
                        </div>
                      </div>

                      <div class="px-2">
                        <div class="mb-3">
                            <label for="Nome" class="form-label">CEP</label>
                            <input type="text" id="Nome" placeholder="CEP" class="form-control" v-model="cep_comercial" @keyup="formatarCEPcomercial" required>
                        </div>
                      </div>

                      <div class="mb-3">
                          <label for="estado" class="form-label">Estado</label>
                          
                          <select class="form-select" v-model="estado_id_2" @change="listFilterRegiaoComercial" required>

                            <option value="0" selected disabled>Selecionar</option>
                            <option v-for="item in $store.state.estado" :key="item.id" :value="item.id">
                              {{ item.estado }}
                            </option>
                          </select>
                      </div>

                      <div class="mb-3">
                          <label for="cidade" class="form-label">Regiao</label>
                          <select class="form-select" v-model="regiao_comercial_id" @change="listFilterCidade" required>
                            <option value="0" selected disabled>Selecionar</option>
                             <option v-for="item in regioes_comercias" :key="item.id" :value="item.id">
                              {{ item.regiao }}
                            </option>
                          </select>
                      </div>

                      <div class="mb-3">
                          <label for="estado" class="form-label">Cidade</label>
                          <select class="form-select" v-model="cidade_comercial_id" required>
                            <option value="0" selected disabled>Selecionar</option>
                            <option v-for="item in cidades" :key="item.id" :value="item.id">
                              {{ item.cidade }}
                            </option>
                          </select>
                      </div>

                      <div class="px-2">
                        <div class="mb-3">
                            <label for="Nome" class="form-label">Endereço</label>
                            <input type="text" id="Nome" placeholder="Endereco" class="form-control" v-model="endereco_comercial" required>
                        </div>
                      </div>

                      <div class="px-2">
                        <div class="mb-3">
                            <label for="Nome" class="form-label">Numero</label>
                            <input type="text" id="Nome" placeholder="Numero" class="form-control" v-model="numero_comercial" required>
                        </div>
                      </div>

                      <div class="px-2">
                        <div class="mb-3">
                            <label for="Nome" class="form-label">Complemento</label>
                            <input type="text" id="Nome" placeholder="Complemento" class="form-control" v-model="complemento_comercial" required>
                        </div>
                      </div>

                      <div class="px-2">
                        <div class="mb-3">
                            <label for="Nome" class="form-label">Bairro</label>
                            <input type="text" id="Nome" placeholder="Bairro" class="form-control" v-model="bairro_comercial" required>
                        </div>
                      </div>

                      <div class="mb-3">
                          <label for="estado" class="form-label">Marcar Activo</label>
                          <select class="form-select" v-model="status" required>
                            <option value="" selected disabled>Marcar</option>
                            <option value="1">
                              sim
                            </option>
                            <option value="2">
                              nao
                            </option>
                          </select>
                      </div>

                      <div class="mb-3">
                        <label for="nome" class="form-label">Observaçao</label>
                          <textarea class="form-control" id="exampleTextarea" rows="3" v-model="observacao">

                          </textarea>
                      </div>

                    </div>
                </form>
            </div>
            <div class="modal-footer">
              <div style="display: flex; flex-wrap: wrap;">
                <div class="col-6">
                  <button type="button" class="ms-3 btn btn-secondary" data-bs-dismiss="modal" aria-label="Fechar">Cancelar</button>
                </div>
                <div class="col-6">
                  <button type="submit" class="ms-3 btn btn-primary" @click="add()"
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
      name: 'TheAddPlano',

      data() {
        return {
          pessoal_responsavel: '',
          email: '',
          telefone: '37',

          estado_id: '',
          cidade_id: '',
          regiao_id: '',

          nome_empresa: '',
          cnpj: '',
          celular: '37',
          whatsapp: '37',
          email: '',
          sites: '',
          instagram: '',
          facebook: '',
          cep: '',
          endereco: '',
          numero: '',
          complemento: '',
          bairro: '',
          endereco_comercial: '',
          numero_comercial: '',
          complemento_comercial: '',
          complemento_comercial: '',
          cep_comercial: '',
          cidade_comercial_id: '',
          observacao: '',
          status: '1',
          tipo_anunciante: '',
          senha: '',
          regiao_comercial_id: '',

          filterRegiaoComercialvar: [],
          filterCidadeComercialvar: [],
          regioes: [],
          cidades: [],
          regioes_comercias: [],
          estado_id_2: ""

        }
      },

      methods: {
        async add() {
            const dataAnunciante =
            {
              "nome_empresa": this.nome_empresa,
              "pessoal_responsavel": this.pessoal_responsavel,
              "tipo_anunciante": this.tipo_anunciante,
              "cnpj": this.cnpj,
              "telefone": this.telefone,
              "celular": this.celular,
              "whatsapp": this.whatsapp,
              "email": this.email,
              "password": this.senha,
              "status": this.status,
              "site": this.sites,
              "instagram": this.instagram,
              "facebook": this.facebook,
              "cep": this.cep,
              "endereco": this.endereco,
              "numero": this.numero,
              "complemento": this.complemento,
              "bairro": this.bairro,
              "endereco_comercial": this.endereco_comercial,
              "numero_comercial": this.numero_comercial,
              "complemento_comercial": this.complemento_comercial,
              "bairro_comercial": this.bairro_comercial,
              "cep_comercial": this.cep_comercial,
              "estado_id": this.estado_id_2,
              "cidade_id": this.cidade_comercial_id,
              "cidade_comercial_id": this.cidade_comercial_id,
              "regiao_id": this.regiao_id,
              "observacao": this.observacao
            }

            try {
              const response = await api.criarAnunciante(dataAnunciante)
              if (response) {

                this.$store.state.anunciantes = await api.listarAnunciante()

              this.nome_empresa = ''
              this.pessoal_responsavel  = ''
              this.tipo_anunciante = ''
              this.cnpj = ''
              this.telefone = ''
              this.celular  = ''
              this.whatsapp = ''
              this.email = ''
              this.status = ''
              this.sites = ''
              this.instagram = '',
              this.facebook = '', 
              this.cep = ''
              this.endereco = ''
              this.numero = ''
              this.complemento = ''
              this.bairro = ''
              this.endereco_comercial = ''
              this.numero_comercial = ''
              this.complemento_comercial = ''
              this.bairro_comercial = ''
              this.cep_comercial = ''
              this.estado_id = ''
              this.cidade_id = ''
              this.cidade_comercial_id = ''
              this.regiao_id = ''
              this.observacao = ''

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

          async filterRegiaoComercial() {
            // Filtrar os dados onde o ID é igual a 1
            this.filterRegiaoComercialvar = await api.filtrarAnuncio( 'api/regiao/listar_regiao?estado_id=' + this.estado_id)
          },

          async filterCidadeComercial() {
            // Filtrar os dados onde o ID é igual a 1
            this.filterCidadeComercialvar = await api.filtrarAnuncio( 'api/regiao/listar_regiao?estado_id=' + this.regiao_comercial_id)
          },

          formatarTelefone() {
            // Remove qualquer caractere não numérico
            let formattedTelefone = this.telefone.replace(/\D/g, '');
            
            // Aplica a formatação (00) 0000-0000
            formattedTelefone = formattedTelefone.replace(/^(\d{2})(\d{4})(\d{4}).*/, '($1) $2-$3');
            
            // Atualiza o valor do input
            this.telefone = formattedTelefone;
          },

          formatCelular() {
            // Remove qualquer caractere não numérico
            let formattedCelular = this.celular.replace(/\D/g, '');
            
            // Aplica a formatação (00) 99999-9999
            formattedCelular = formattedCelular.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            
            // Atualiza o valor do input
            this.celular = formattedCelular;
          },
          formatWhatsapp() {
            // Remove qualquer caractere não numérico
            let formattedCelular = this.whatsapp.replace(/\D/g, '');
            
            // Aplica a formatação (00) 99999-9999
            formattedCelular = formattedCelular.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            
            // Atualiza o valor do input
            this.whatsapp = formattedCelular;
          },

          formatarCNPJ() {
                        // Remove qualquer caractere não numérico
            let formattedCnpj = this.cnpj.replace(/\D/g, '');
            
            // Adiciona a formatação 00.000.000/0000-00
            formattedCnpj = formattedCnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/, '$1.$2.$3/$4-$5');
            
            // Atualiza o valor do input
            this.cnpj = formattedCnpj;
          },
          formatarCEP() {
            // Remove qualquer caractere não numérico
            let formattedCEP = this.cep.replace(/\D/g, '');
            
            // Aplica a formatação 00000-000
            formattedCEP = formattedCEP.replace(/^(\d{5})(\d{3}).*/, '$1-$2');
            
            // Atualiza o valor do input
            this.cep = formattedCEP;
          },
          formatarCEPcomercial() {
            // Remove qualquer caractere não numérico
            let formattedCEP = this.cep_comercial.replace(/\D/g, '');
            
            // Aplica a formatação 00000-000
            formattedCEP = formattedCEP.replace(/^(\d{5})(\d{3}).*/, '$1-$2');
            
            // Atualiza o valor do input
            this.cep_comercial = formattedCEP;
          },

          async listFilterRegiao() {
            // alert("Região 2")
            this.regioes = await api.filtrarAnuncio('api/regiao/listar_regiao?estado_id='+this.id_estado)
        },

        async listFilterRegiaoComercial() {
            this.regioes_comercias = await api.filtrarAnuncio('api/regiao/listar_regiao?estado_id='+this.estado_id_2)
        },

        async listFilterCidade() {
            // alert("Região 2") api/cidade/listar_cidades?regiao_id
            this.cidades = await api.filtrarAnuncio('api/cidade/listar_cidades?regiao_id='+this.regiao_comercial_id)
        },
          
      },

      async created() {
        this.$store.state.estado = await api.listarEstado()
        // this.$store.state.regiao = await api.listarRegiao()
        // this.$store.state.cidade = await api.listarCidade()
        // this.listFilterCidade()
      }

  }
</script>