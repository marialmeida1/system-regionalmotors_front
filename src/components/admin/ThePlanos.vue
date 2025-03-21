<template>
    <main class="content">
        <div class="py-2" style="box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);">
            <!-- Filtros-->
            <div class="row">
                <div class="col-8 col-lg-10">
                    <div class="row">
                        <div class="col-2 pesquisar-filter p-0">
                            <div class="pt-2" @click="show_menu_lateral">
                                <i class="fas fa-filter fa-lg"></i>
                            </div>
                        </div>
                        <div class="col-10 col-lg-6 p-0">
                            <div class="pesquisar" style="width: 100%; position: relative; border: none;">
                                <input type="text" class="ps-4 pt-2" style="width: 89%; color: #000;"
                                    placeholder="Digite a marca o modelo do carro">
                                <i class="fas fa-search"
                                    style="position: absolute; left: 8px; top: 36%; bottom: 0; margin: auto;"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes">
                    <div class="row">
                        <div class="pesquisar-link-icon col-4 pt-3 invisible">
                            <i class="fas fa-th-large fa-lg"></i>
                        </div>
                        <div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible">
                            <i class="fas fa-th-list fa-lg"></i>
                        </div>
                        <div class="menu-link position-relative pesquisar-link-icon col-4 pt-3 "><i
                                class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i>
                            <div class="sub-menu-desktop mais-relevantes position-absolute py-2"
                                style="z-index: 99; width: 170px; left: -135px !important;">
                                <div class="pb-3"></div>
                                <div class="bg-dark py-0 text-center"
                                    style="border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                                    <p class="">Mais Relevantes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>

        <div>
            <!-- Links -->
            <div class="py-2 pt-3 px-2" style="font-size: 13px;">
                <span class="me-2 p-1 px-2 rounded-3 bg-dark" style="opacity: 0.6;">
                    <b>Admin/Planos</b>
                </span>
            </div>
        </div>

        <div class="position-relative" style="height: 72vh;">
            <div class="p-2 pt-3 table-responsive" style="height: 65vh;">
                <table class="table">
                    <thead style="background-color: crimson; color: #fff;">
                        <tr>
                            <th scope="col" hidden>#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Activo</th>
                            <th scope="col">
                                <div style="width: 205px;">
                                    Quantidade de anuncios
                                </div>
                            </th>
                            <th scope="col">Valor</th>
                            <th scope="col">Tipo</th>
                            <!-- <th scope="col"> 
                            <div style="width: 205px;">
                                Anuncios em destaque
                            </div>
                        </th> -->
                            <th scope="col">
                                <div style="width: 220px;">
                                    Anuncios em destaque
                                </div>
                            </th>
                            <th scope="col">
                                <div style="width: 220px;">
                                    Anuncios na vitrine
                                </div>
                            </th>
                            <th scope="col">
                                <div style="width: 180px;">
                                    Dias em publicaçao
                                </div>
                            </th>
                            <th scope="col">
                                <div style="width: 150px;">
                                    Texto do Plano
                                </div>
                            </th>
                            <th scope="col">
                                <div style="width: 105px;">
                                    Qtd de Fotos
                                </div>
                            </th>
                            <th scope="col" hidden>
                                <div style="width: 160px;">
                                    Link de Pagamento
                                </div>
                            </th>
                            <th scope="col" class="text-center">Açoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="plano in $store.state.planos" :key="plano.id">
                            <td scope="row" hidden> {{ plano.id }} </td>
                            <td scope="col">{{ plano.nome }}</td>
                            <td scope="col">{{ plano.activo }}</td>
                            <td scope="col">{{ plano.quantidade_anuncios }}</td>
                            <td scope="col">
                                <div style="width: 100px;">R$ {{ plano.valor }}</div>
                            </td>
                            <td scope="col">{{ plano.tipo }}</td>
                            <!-- <td scope="col">{{ plano.anuncio_destaque }}</td> -->
                            <td scope="col">{{ plano.quantidade_anuncio_destaque }}</td>
                            <td scope="col">{{ plano.quantidade_anuncio_vitrine }}</td>
                            <td scope="col">{{ plano.dias_publicacao }}</td>
                            <td scope="col">{{ plano.texto_plano }}</td>
                            <td scope="col">{{ plano.quantidade_fotos }}</td>
                            <td scope="col" hidden>{{ plano.link_pagamento }}</td>
                            <td class="text-center">
                                <div style="width: 100px;">
                                    <span class="mx-3" type="button" data-bs-toggle="modal"
                                        data-bs-target="#EditarPlanoNow" @click="showgetDados(plano.id)">
                                        <i class="fas fa-pencil-alt"></i>
                                    </span>
                                    <span class="fas fa-trash-alt" type="button" data-bs-toggle="modal"
                                        data-bs-target="#EliminarPlano" @click="modalApagar(plano.id)"></span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button class="btn btn-add rounded-circle 
                    position-absolute d-flex 
                    justify-content-center align-items-center" style="left: 8px;" type="button" data-bs-toggle="modal"
                data-bs-target="#IDaddCarro">
                <i class="fas fa-plus"></i>
            </button>
        </div>


        <!-- Editar Plano -->
        <div class="modal fade" id="EditarPlanoNow" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="bg-dar" id="criarAnuncio">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel" style="font-size: 17px;">
                                <span class="fas fa-bullhorn py-2 pt-0"></span> <b>Editar Plano</b>
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Fechar"></button>
                        </div>
                        <div class="modal-body" style="height: 470px; overflow: auto; margin-bottom: 1em;">
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
                                    <input type="number" class="text form-control" id="nome"
                                        v-model="quantidade_anuncios">
                                </div>

                                <div class="mb-3">
                                    <label for="nome" class="form-label">Total Anuncios em destaque</label>
                                    <input type="number" class="text form-control" id="nome"
                                        v-model="quantidade_anuncio_destaque">
                                </div>

                                <div class="mb-3">
                                    <label for="nome" class="form-label">Total Anuncios em vitrine</label>
                                    <input type="number" class="text form-control" id="nome"
                                        v-model="quantidade_anuncio_vitrine">
                                </div>

                                <div class="mb-3">
                                    <label for="" class="form-label">Total dias em Publicaçao</label>
                                    <input type="number" class="text form-control" id="nome" v-model="dias_publicacao">
                                </div>

                                <div class="mb-1">
                                    <label for="desc" class="form-label">Descrição</label>
                                    <textarea class="form-control" rows="5" id="desc" v-model="desc"
                                    :class="{ 'limit-reached': (texto_plano?.length || 0) >= 140, 'warning': (texto_plano?.length || 0) >= 140 * 0.8 }"
                                    maxlength="140"></textarea>
                                </div>
                                <p class="text-cont">{{ texto_plano?.length || 0 }}/140 caracteres</p>


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
                                    <select class="form-select" name="" id="" v-model="ativo">
                                        <option value="1">Sim</option>
                                        <option value="0">Nao</option>
                                    </select>
                                </div>

                            </form>
                        </div>
                        <div class="modal-footer">
                            <div style="display: flex; flex-wrap: wrap;">
                                <div class="col-6">
                                    <button type="button" class="me-3 btn btn-secondary" data-bs-dismiss="modal"
                                        aria-label="Fechar">Cancelar</button>
                                </div>
                                <div class="col-6">
                                    <button type="button" class="ms-3 btn btn-primary" @click="editar()"
                                        data-bs-dismiss="modal" aria-label="Fechar">Atualizar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Eliminar estado -->
        <div class="modal fade" id="EliminarPlano" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="bg-dar" id="criarAnuncio">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel" style="font-size: 17px;">
                                <span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Estado</b>
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Fechar"></button>
                        </div>
                        <div class="modal-body" style="height: 80px; overflow: auto; margin-bottom: 1em;">
                            <!-- Seu formulário aqui -->
                            <div>
                                <h5>
                                    Confirme antes de <span style="color: red;">Eliminar</span>!
                                </h5>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div style="display: flex; flex-wrap: wrap;">
                                <div class="col-6">
                                    <button type="button" class="me-3 btn btn-secondary" data-bs-dismiss="modal"
                                        aria-label="Fechar">Cancelar</button>
                                </div>
                                <div class="col-6">
                                    <button type="button" class="btn btn-primary" @click="apagar()"
                                        data-bs-dismiss="modal" aria-label="Fechar">Confirmar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import * as api from "../../services/api";

export default {
    name: 'Theplanoorias',

    data() {
        return {
            planos: [],
            nome: '',
            quantidade_anuncios: '',
            valor: '',
            quantidade_anuncio_destaque: '',
            quantidade_anuncio_vitrine: '',
            dias_publicacao: '',
            texto_plano: '',
            quantidade_fotos: '',
            tipo: '',
            ativo: '',
        }
    },

    methods: {
        show_menu_lateral() {
            this.$emit('show_menu_lateral')
        },

        showDetalhes() {
            this.$router.push({ path: '/detalhes' });
        },

        async editar(id) {
            this.$store.state.adminID = await id

            this.$emit('editarplanooria', id)
        },

        async editar() {
            // Formata a data no formato "dia-mês-ano"
            const data = {
                "nome": this.nome,
                "activo": this.ativo,
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
                // Editar estado
                const response = await api.editarPlano(data, this.id)


                if (response.data) {

                    this.$store.state.planos = await api.listarPlano()

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

        // Carregar as var
        showgetDados(id) {
            this.id = id

            this.planos = this.$store.state.planos.find(objeto => objeto.id == this.id);


            //this.novoEstado = this.estado.estado
            this.nome = this.planos.nome
            this.quantidade_anuncios = this.planos.quantidade_anuncios
            this.valor = this.planos.valor
            this.quantidade_anuncio_destaque = this.planos.quantidade_anuncio_destaque
            this.quantidade_anuncio_vitrine = this.planos.quantidade_anuncio_vitrine
            this.dias_publicacao = this.planos.dias_publicacao
            this.texto_plano = this.planos.texto_plano
            this.quantidade_fotos = this.planos.quantidade_fotos
            this.tipo = this.planos.tipo
            this.ativo = this.planos.activo

        },

        modalApagar(id) {
            this.id = id

        },

        async apagar() {


            try {
                const response = await api.eliminarPlano(this.id)


                setTimeout(async function () {
                    this.$store.state.planos = await api.listarPlano();
                }.bind(this), 2000);


                if (response.data) {


                    // this.$store.state.estado = await api.listarEstado()        

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


    },

    async created() {
        this.$store.state.planos = await api.listarPlano()

        if (!(localStorage.getItem('token'))) {
            this.$router.push({ path: '/login' });
        }

    },

    mounted() {
        if (localStorage.getItem('perfil') != 'superadmin') {
            this.$router.push({ path: '/anuncios' });
        }

    },
};
</script>

<style>
.row {
    margin: 0;
    padding: 0;
}

/* Estilos personalizados para a imagem dentro do slide */
.custom-image {
    width: 100%;
    height: auto;
    /* Altura máxima da imagem */
    object-fit: cover;
}

.btn-add {
    bottom: 0;
    background-color: crimson;
    color: #fff;
    width: 40px;
    height: 40px;
    transition: background 0.3s ease;
    cursor: pointer;
}

.btn-add:hover {
    background-color: rgb(230, 45, 82);
    color: #fff;
}

.text-cont {
  font-size: 0.75rem;
}
</style>

