<template>
        <aside class="bg-dar bg-whit" style="font-size: 16.3px;">
            <div class="menu-lateral-btn-fechar d-flex justify-content-end">
                <div class="pt-3 pe-3" @click="show_menu_lateral">X</div>
            </div>
            
            <div style="height: 80vh; overflow: auto;" class="pt-4 meu-menu-lateral">

                <!-- div style="padding: 10px 20px; padding-top: 15px; opacity: 0.97;">
                    <div style="font-size: 15px; border-bottom: 1px solid #fff;">
                        Autenticaçao
                    </div>
                </div>
                <routerLink to="/admin-user" class="routerLinkAdmin">
                    <div class="px-2 mb-2">
                        <div class="ps-5 py-3 navItem-admin">
                                <i class="far fa-user"></i>
                                <span class="ms-3">
                                Usuarios
                                </span>
                            </div>
                    </div>
                </routerLink -->

                <div style="padding: 10px 20px; padding-top: 15px; opacity: 0.97;">
                    <div style="font-size: 15px; border-bottom: 1px solid #fff;">
                        Localizaçao
                    </div>
                </div>

                <routerLink to="/admin-estado" class="routerLinkAdmin">
                    <div class="px-2 mb-2">
                        <div class="ps-5 py-3 navItem-admin">
                                <i class="far fa-credit-card"></i>
                                <span class="ms-3">
                                Estado
                                </span>
                            </div>
                    </div>
                </routerLink>

                <routerLink to="/admin-regiao" class="routerLinkAdmin">
                    <div class="px-2 mb-2">
                        <div class="ps-5 py-3 navItem-admin">
                                <i class="far fa-credit-card"></i>
                                <span class="ms-3">
                                Regiao
                                </span>
                            </div>
                    </div>
                </routerLink>

                <routerLink to="/admin-cidade" class="routerLinkAdmin">
                    <div class="px-2 mb-2">
                        <div class="ps-5 py-3 navItem-admin">
                                <i class="far fa-credit-card"></i>
                                <span class="ms-3">
                                Cidade
                                </span>
                            </div>
                    </div>
                </routerLink>

                <div style="padding: 10px 20px; opacity: 0.97;">
                    <div style="font-size: 15px; border-bottom: 1px solid #fff;">
                        Anuncio
                    </div>
                </div>
                
                <routerLink to="/admin-anuciantes" class="routerLinkAdmin">
                    <div class="px-2 mb-2">
                        <div class="ps-5 py-3 navItem-admin">
                                <i class="fas fa-users"></i>
                                <span class="ms-3">
                                Anunciantes
                                </span>
                            </div>
                    </div>
                </routerLink>

                <routerLink to="/admin-anuncios" class="routerLinkAdmin">
                    <div class="px-2 mb-2">
                        <div class="ps-5 py-3 navItem-admin">
                                <i class="fas fa-bullhorn"></i>
                                <span class="ms-3">
                                Anúncios
                                </span>
                            </div>
                    </div>
                </routerLink>

                <!-- routerLink to="/admin-propostas" class="routerLinkAdmin">
                    <div class="px-2 mb-2">
                        <div class="ps-5 py-3 navItem-admin">
                                <i class="far fa-envelope"></i>
                                <span class="ms-3">
                                Propostas
                                </span>
                            </div>
                    </div>
                </routerLink -->

                <div style="padding: 10px 20px; padding-top: 15px; opacity: 0.97;">
                    <div style="font-size: 15px; border-bottom: 1px solid #fff;">
                        Pagamentos
                    </div>
                </div>

                <routerLink to="/admin-planos" class="routerLinkAdmin">
                    <div class="px-2 mb-2">
                        <div class="ps-5 py-3 navItem-admin">
                                <i class="far fa-credit-card"></i>
                                <span class="ms-3">
                                Planos
                                </span>
                            </div>
                    </div>
                </routerLink>

                <div style="padding: 10px 20px; padding-top: 15px; opacity: 0.97;">
                    <div style="font-size: 15px; border-bottom: 1px solid #fff;">
                        Extras
                    </div>
                </div>

                <routerLink to="/admin-tipo-de-veiculo" class="routerLinkAdmin">
                    <div class="px-2 mb-2">
                        <div class="ps-5 py-3 navItem-admin">
                                <i class="fas fa-car"></i>
                                <span class="ms-3" style="font-size: 13px;">
                                Tipos de Veiculos
                                </span>
                            </div>
                    </div>
                </routerLink>

                <routerLink to="/admin-marcas" class="routerLinkAdmin">
                    <div class="px-2 mb-2">
                        <div class="ps-5 py-3 navItem-admin">
                                <i class="fas fa-car"></i>
                                <span class="ms-3">
                                Marcas
                                </span>
                            </div>
                    </div>
                </routerLink>

                <routerLink to="/admin-modelos" class="routerLinkAdmin">
                    <div class="px-2 mb-2">
                        <div class="ps-5 py-3 navItem-admin">
                                <i class="fas fa-cube"></i>
                                <span class="ms-3">
                                Modelos
                                </span>
                            </div>
                    </div>
                </routerLink>

                <routerLink to="/admin-tecnologia" class="routerLinkAdmin">
                    <div class="px-2 mb-2">
                        <div class="ps-5 py-3 navItem-admin">
                                <i class="fas fa-cogs"></i>
                                <span class="ms-3">
                                Tecnologia
                                </span>
                            </div>
                    </div>
                </routerLink>

                <routerLink to="/admin-categorias" class="routerLinkAdmin">
                    <div class="px-2 mb-2">
                        <div class="ps-5 py-3 navItem-admin">
                                <i class="fas fa-tags"></i>
                                <span class="ms-3">
                                Categorias
                                </span>
                            </div>
                    </div>
                </routerLink>

                <routerLink to="/admin-transmissao" class="routerLinkAdmin">
                    <div class="px-2 mb-2">
                        <div class="ps-5 py-3 navItem-admin">
                            <i class="fas fa-wrench"></i>
                                <span class="ms-3">
                                Transmissao
                                </span>
                            </div>
                    </div>
                </routerLink>

                <routerLink to="/admin-Combustivel" class="routerLinkAdmin">
                    <div class="px-2 mb-2">
                        <div class="ps-5 py-3 navItem-admin">
                                <i class="fas fa-gas-pump"></i>
                                <span class="ms-3">
                                Combustivel
                                </span>
                            </div>
                    </div>
                </routerLink>

                <routerLink to="/admin-cores" class="routerLinkAdmin">
                    <div class="px-2 mb-2">
                        <div class="ps-5 py-3 navItem-admin">
                                <i class="fas fa-circle"></i>
                                <span class="ms-3">
                                Cores
                                </span>
                            </div>
                    </div>
                </routerLink>

                <div style="padding: 10px 20px; padding-top: 15px; opacity: 0.97;">
                    <div style="font-size: 15px; border-bottom: 1px solid #fff;">
                        Itens Opcionais
                    </div>
                </div>

                <routerLink to="/admin-categoria-opcionais" class="routerLinkAdmin">
                    <div class="px-2 mb-2">
                        <div class="ps-5 py-3 navItem-admin">
                                <i class="far fa-credit-card"></i>
                                <span class="ms-3" style="font-size: 13px;">
                                    Categ. Opcionais
                                </span>
                            </div>
                    </div>
                </routerLink>

                <routerLink to="/admin-opcionais" class="routerLinkAdmin">
                    <div class="px-2 mb-2">
                        <div class="ps-5 py-3 navItem-admin">
                                <i class="far fa-credit-card"></i>
                                <span class="ms-3">
                                    Opcionais
                                </span>
                            </div>
                    </div>
                </routerLink>
                
                <div style="padding: 10px 20px; padding-top: 15px; opacity: 0.97;">
                    <div style="font-size: 15px; border-bottom: 1px solid #fff;">
                        Noticias
                    </div>
                </div>
                <routerLink to="/revista" class="routerLinkAdmin">
                    <div class="px-2 mb-2">
                        <div class="ps-5 py-3 navItem-admin">
                                <i class="far fa-newspaper"></i>
                                <span class="ms-3">
                                Revista
                                </span>
                            </div>
                    </div>
                </routerLink>
                
                <br>
            </div>
        </aside>
</template>

<script>
    import $ from 'jquery'
    import * as api from "../../services/api";


    export default {
        name: 'TheNavLateral',

        data() {
            return {
                anuncios: []
            }
        },

        methods: {
            show_menu_lateral(){
            console.log('ola mundos')
            this.$emit('show_menu_lateral')
            },

            showDetalhes() {
                //enviar o id
                this.$router.push({ path: '/detalhes'});
            },

            goAnuncios(id) {
               // Emitir um evento personalizado para notificar outros componentes
                this.$emit('refreshAnuncio', id);
            }
        },

        async created() {
            //this.$store.state.anuncios = await api.listarAnuncio()    
        },

        mounted() {
            //const menu_lateral = $('.menu-lateral').css({'color':'red'})
        }
    }
</script>

<style>
    @import "../../assets/css/navBar.css"
</style>