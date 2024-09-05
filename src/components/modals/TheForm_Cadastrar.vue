<template>
<br><br>
            <div class="bg-white rounded-3 col-11 col-md-10 col-lg-10 mx-auto">
            <div class="modal-header">
              <div class="py-4">
                <h5 class="modal-title" id="exampleModalLabel">
                  <span class="far fa-user py-2 pt-0 invisible"></span> <b>Criar Conta</b>
                </h5>
                <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button> -->
              </div>
              </div>
            <div class="modal-body px-4" style="height: 370p; overflow: auto; margin-bottom: 1em;">
                <!-- Seu formulário aqui -->
                <form>
                    <div class="row">
                      <div class="px-2 col-md-6 col-lg-6">
                        <div class="mb-3">
                            <label for="Nome" class="form-label">Nome</label>
                            <select name="" id="" v-model="tipo" class="form-select">
                              <option value="Particular">Particular</option>
                              <option value="Loja">Loja</option>
                              <option value="Concessionaria">Concessionaria</option>
                            </select>
                        </div>
                      </div>
                      <div class="px-2 col-md-6 col-lg-6">
                        <div class="mb-3">
                            <label for="Nome" class="form-label">Nome</label>
                            <input type="text" id="Nome" placeholder="Nome" class="form-control">
                        </div>
                      </div>
                      <div class="px-2 col-md-6 col-lg-6">
                        <div class="mb-3">
                            <label for="Responsavel" class="form-label">Responsavel</label>
                            <input type="text" id="Responsavel" placeholder="Responsavel" class="form-control">
                        </div>
                      </div>
                      <div class="px-2 col-md-6 col-lg-6">
                        <div class="mb-3">
                            <label for="CPF" class="form-label">CPF</label>
                            <input type="text" id="CPF" placeholder="CPF" class="form-control">
                        </div>
                      </div>
                      <div class="px-2 col-md-6 col-lg-6">
                        <div class="mb-3">
                            <label for="Telefone" class="form-label">Telefone</label>
                            <input type="text" id="Telefone" placeholder="Telefone" class="form-control">
                        </div>
                      </div>
                      <div class="px-2 col-md-6 col-lg-6">
                        <div class="mb-3">
                            <label for="CEP" class="form-label">CEP</label>
                            <input type="text" id="CEP" placeholder="CEP" class="form-control">
                        </div>
                      </div>
                      <div class="px-2 col-md-6 col-lg-6">
                        <div class="mb-3">
                            <label for="Estado" class="form-label">Estado</label>
                            <input type="text" id="Estado" placeholder="Estado" class="form-control">
                        </div>
                      </div>
                      <div class="px-2 col-md-6 col-lg-6">
                        <div class="mb-3">
                            <label for="Cidade" class="form-label">Cidade</label>
                            <input type="text" id="Cidade" placeholder="Cidade" class="form-control">
                        </div>
                      </div>
                      <div class="px-2 col-md-6 col-lg-6">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input id="email" type="email" placeholder="Email" class="form-control">
                        </div>
                      </div>
                      <div class="px-2 col-md-6 col-lg-6">
                        <div class="mb-3">
                            <label for="password" class="form-label">Senha</label>
                            <input id="password" type="password" placeholder="Senha" class="form-control">
                        </div>
                      </div>
                      
                      <div class="mb-3 pt-3">
                          <input id="termos" type="checkbox" class="me-2" style="cursor: pointer;">
                          <label for="termos" class="form-label d-inline" style="cursor: pointer;">
                            Concordo com os termos e condiçoes
                          </label>
                      </div>
                    </div>

                    <div class="mb-3 pt-3">
                        <button class="btn btn-primary col-12" @click="add()" style="width: 200px;">Concluir</button>
                    </div>
                </form>
            </div>
            
            </div>

            <br><br>
        <!-- </div>
    </div>
</div> -->
</template>

<script>
    import * as api from "../../services/api";

    export default {
        name: 'TheForm_Login',

        data() {
          return {
            nome: 'Adriano',
            email: 'teste5@gmail.com',
            senha: '1234',
            tipo: '',
          }
        },

        methods: {
          async add() {
            const data = {
              "name": this.nome,
              "email": this.email,
              "password": this.senha
            }

            const dataAnunciante = {
              "nome": this.nome,
              "tipo": this.tipo,
              "responsavel": "Zola",
              "email": this.email,
              "telefone": "99345678",
              "cpf": "abcd123",
              "cep": "1234567",
              "plano_id": "1",
              "estado_id": "1",
              "cidade_id": "2"
          }

            try {
              const response = await api.adicionarUser(data, dataAnunciante)


              if (response) {

                this.$store.state.adminID = null
                // this.$store.state.categorias = await api.listarCategoria()

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
          // goAnuncios() {
          //   this.$router.push({ path: '/anuncios'});
          // },

          // goCadastrar() {
          //   this.$router.push({ path: '/cadastrar'});
          // }
        }
    }
</script>