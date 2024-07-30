<template>
    <div>
    <div class="modal-dialog">
        <div class="modal-content px-1 px-md-5 px-lg-5">

            <div class="rounded-3" style="box-shadow: 0px -0px 10px -3px rgba(0,0,0,0.3);">
            <div class="text-center py-4 pb-2">
                <router-link to="/">
                    <span style="font-size: 23px;">
                        Regional <span style="color: crimson;">motors</span>        
                    </span>
                </router-link>
            </div>
            <div class="text-center pb-3">
                <span class="far fa-user"></span>
                <span style="font-size: 14px;">
                    Iniciar Sessao        
                </span>
            </div>
            <div class="modal-body px-4" style="height: 370p; overflow: auto; margin-bottom: 1em;">
                <!-- Seu formulário aqui -->
                <form>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input id="email" type="email" placeholder="Email" class="form-control" v-model="user_email" required>
                    </div>
                    <div class="mb-3">
                        <label for="senha" class="form-label">Senha</label>
                        <div class="input-group">
                            <input id="senha" type="password" placeholder="Senha" class="form-control" v-model="user_senha" required>
                            <button class="btn btn-outline-secondary" type="button" @click="togglePasswordVisibility">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    <div class="mb-3">
                        <input id="checkbox" type="checkbox" placeholder="Senha" class="me-2">
                        <label for="checkbox" class="form-label d-inline">Lembrar de mim</label>
                    </div>
                    <div class="mb-3">
                        <button type="button" data-bs-dismiss="modal" aria-label="Fechar" class="btn btn-primary col-12" @click="goAnuncios">
                        <img src="/regLoader.png" class="caixa2" v-if="loderLogin"> Iniciar Sessão</button>
                    </div>
                    <div class="mb-3" hidden>
                        <button type="button" data-bs-dismiss="modal" aria-label="Fechar" class="btn btn-dark col-12" @click="goCadastrar">Criar conta</button>
                    </div> 
                    <div class="text-center pt-4">
                      <p class="m-0" style="color: rgb(36, 105, 255); font-size: 15px;">Recuperar Senha</p>
                    </div>
                </form>
            </div>
            </div>

        </div>
    </div>
</div>

<div v-show="$store.state.fechaModal" style="z-index: 9999;" hidden>
    <loader/>
</div>

</template>

<script>
    import * as api_login from "../../services/api";
    import loader from "../loaders/loader.vue"

    export default {
        name: 'TheForm_Login',

        components: {
            loader
        },

        data() {
            return {
                showLoader: false,
                user_email: '',
                user_senha: '',
                showPassword: false,
                loderLogin: false
            }
        },

        methods: {
          async goAnuncios() {

            this.$store.state.fechaModal = true

            const data = {
                "email": this.user_email,
                "password": this.user_senha
            }

            if (this.user_email.includes('@') && this.user_senha != '') {
            
            this.loderLogin = true

            try {

                const response = await api_login.Login(data)

                localStorage.setItem('token', response.token);
                localStorage.setItem('anunciante_id', response.anunciante_id);
                localStorage.setItem('anunciante_nome', response.user.name)
                localStorage.setItem('perfil', response.user.perfil)

                this.$store.state.userName = response.user.name

                if (response.token) {
                    window.location.reload();
                    this.$store.state.fechaModal = false
                }

                if (response) {
                    this.loderLogin = false
                }

            } catch (error) {

                console.log("Erro!")
                this.$store.state.fechaModal = false

                if (error) {
                    this.loderLogin = false
                }

                this.user_senha = ''
            }

            }

          },

          goCadastrar() {
            this.$router.push({ path: '/cadastrar'});
          },

          togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
            const senhaInput = document.getElementById('senha');
            if (this.showPassword) {
                senhaInput.type = 'text';
            } else {
                senhaInput.type = 'password';
            }
        } 
        },

        created() {
            if (localStorage.getItem('token')) {
                if (localStorage.getItem('perfil') == 'admin') {
                    this.$router.push({ path: '/anuncios'});
                }
                else if(localStorage.getItem('perfil') == 'superadmin') {
                    this.$router.push({ path: '/admin-anuncios'});
                }
            }
        }
    }
</script>