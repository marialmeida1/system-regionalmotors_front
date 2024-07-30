<template>
    <main class="content">
            <div class="py-2" style="box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);">
                <!-- Filtros--> 
                <div class="row">
                    <div class="col-8 col-lg-10">
                        <div class="row">
                            <div class="col-2 pesquisar-filter p-0">
                                <div class="pt-2 btn-show-Anuncios" @click="show_menu_lateral">
                                    <i class="fas fa-ellipsis-v fa-lg"></i>
                                    <i class="fas fa-ellipsis-v fa-lg"></i>
                                    <i class="fas fa-ellipsis-v fa-lg"></i>
                                </div>
                            </div>
                            <div class="col-10 col-lg-6 p-0 invisible">
                                <div class="pesquisar" style="width: 100%; position: relative; border: none;">
                                    <input type="text" class="ps-4 pt-2" style="width: 89%; color: #000;" placeholder="Digite a marca o modelo do carro"> 
                                    <i class="fas fa-search" style="position: absolute; left: 8px; top: 36%; bottom: 0; margin: auto;"></i>
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
                            <div class="menu-link position-relative pesquisar-link-icon col-4 pt-3 invisible"><i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i>
                            <div class="sub-menu-desktop mais-relevantes position-absolute py-2" style="z-index: 99; width: 170px; left: -135px !important;">
                                <div class="pb-3"></div>
                                <div class="bg-dark py-0 text-center" style="border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
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

           <div class="p-4 pb-0">
                <button class="btn bg-dark" @click="goBack()" style="cursor: pointer; opacity: 0.7;">
                    <div style="transform: rotate(-90deg);">
                        <i class="fas fa-arrow-up"></i>
                    </div>
                </button>
           </div>
            

            <div class="position-relative">
           <div class="p-2 pt-3 table-responsive">

                <div class="px-3 pt-2">
                <!-- <p class="" style="opacity: 0.6; font-size: 15px;">Em anúncio até  {{ detalharAnuncios.data_fim }}</p> -->

                <div class="rounded-3 p-3 mb-" style="box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);">
                    <div class="mb-2 row">
                        <div class="col-12 col-md-6 col-lg-6 mb-1 p-0">
                            <span class="ms-2">
                                {{ veiculo.marca }} - {{ veiculo.modelo }} - {{ veiculo.ano_modelo }}
                            </span>
                            <span 
                                @click="recarregarDados()"
                                type="button" 
                                data-bs-toggle="modal" 
                                data-bs-target="#CarregarFotos"
                            >
                                <i class="fas fa-camera ms-3"></i> Fotos
                            </span>
                            <span class="link_des_foto_anuncio pb-1 ms-3 d-none">Estatísticas</span>
                            <!-- <span class="fas fa-edit mx-4"
                                type="button" 
                                data-bs-toggle="modal" 
                                data-bs-target="#EditarAnuncio"
                                @click="editar"
                            ></span>
                            <span class="fas fa-trash-alt"
                                type="button" 
                                data-bs-toggle="modal" 
                                data-bs-target="#EliminarAnuncio"
                            ></span> -->
                        </div>
                        <!-- <div class="col-12 col-md-4 col-lg-4 mb-3 mb-1">
                            <p class="m-0" style="opacity: 0.6; font-size: 15px;">Criado em {{ $store.state.detalharAnuncios.data_inicio }}</p>                            
                        </div> -->
                        <div class="col-12 col-md-3 col-lg- mb-1 d-none">
                            <input type="checkbox" id="vendido" class="me-2">
                            <label for="vendido">Marcar como vendido</label>                         
                        </div>
                        <div class="col-12 col-md-4 col-lg-4 mb-1">
                            <p v-if="(veiculo.status_publicacao) === 1" class="m-0 bg-warning text-center rounded-3" style="opacity: 1; font-size: 15px;">
                                Aguardando
                            </p>
                            <p v-else-if="(veiculo.status_publicacao) === 2" class="m-0 text-center rounded-3" style="opacity: 1; font-size: 15px; background-color: rgb(0, 214, 221);">
                                Anuncio Ativo
                            </p>
                            <p v-else-if="(veiculo.status_publicacao) === 3" class="m-0 bg-danger text-center rounded-3" style="opacity: 1; font-size: 15px; color: #fff;">
                                Anuncio foi Reprovado
                            </p>
                            <p v-else-if="(veiculo.status_publicacao) === 4" class="m-0 bg-dark text-center rounded-3" style="opacity: 1; font-size: 15px;">
                                Anuncio Finalizado   
                            </p>
                            <p v-else-if="(veiculo.status_publicacao) === 4" class="m-0 bg-dark text-center rounded-3" style="opacity: 1; font-size: 15px;">
                                Veiculo vendido   
                            </p>
                            <p v-else-if="(veiculo.status_publicacao) === 4" class="m-0 bg-dark text-center rounded-3" style="opacity: 1; font-size: 15px;">
                                Anuncio Bloqueado   
                            </p>
                        </div>
                    </div> 
<!--                    
                    <div style="opacity: 0.8;">
                        <hr>
                    </div> -->

                    <div>
                        
                    <!-- main detalhar -->

                        <div class="">
                                <div class="row">
                                    <div class="p-2 pt-0 row mb-2 mt-md-4 mt-lg-4" style="opacity: 0.8;">
                                        <div class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1" style="border-top-left-radius: 8px; font-size: 13px;"> 
                                            Informaçoes de Localizaçao
                                        </div>
                                        <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important;">
                                            <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px;">

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Estado</p> 
                                        {{ veiculo.estado }} - {{ veiculo.uf }}    
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3" hidden>
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Regiao</p>
                                        {{ veiculo.regiao }}

                                    </div>
                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Cidade</p>
                                        {{ veiculo.cidade }}

                                    </div>
                                    
                                    <div class="p-2 pt-0 row mb-2 mt-md-4 mt-lg-4" style="opacity: 0.8;">
                                        <div class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1" style="border-top-left-radius: 8px; font-size: 13px;"> 
                                            Informaçoes do Veiculo
                                        </div>
                                        <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important;">
                                            <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px;">

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Situaçao do veiculo</p>
                                        <span v-if="veiculo.situacao_veiculo == '1'">
                                            Novo
                                        </span>
                                        <span v-else>
                                            Usado
                                        </span>
                                    </div>
                                    
                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Tipo do veiculo</p>
                                        {{ veiculo.tipo_veiculo }}
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Categoria</p>
                                        {{ veiculo.categoria_id }}
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Marca</p>
                                        {{ veiculo.marca }}
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Modelo</p>
                                        {{ veiculo.modelo }}
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Ano de Fabricaçao</p>
                                        {{ veiculo.ano_fabricacao }}
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Ano do Modelo</p>
                                        {{ veiculo.ano_modelo }}
                                    </div>

                                    <div class="p-2 pt-0 row mb-2 mt-md-4 mt-lg-4" style="opacity: 0.8;">
                                        <div class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1" style="border-top-left-radius: 8px; font-size: 13px;"> 
                                            Informaçoes de Preço
                                        </div>
                                        <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important;">
                                            <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px;">

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Preço
                                        </p>
                                        {{ veiculo.valor_preco }}
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Mostrar Preço
                                        </p>
                                        {{ veiculo.mostrar_preco }}
                                    </div>

                                    <div class="p-2 pt-0 row mb-2 mt-md-4 mt-lg-4" style="opacity: 0.8;">
                                        <div class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1" style="border-top-left-radius: 8px; font-size: 13px;"> 
                                            Caracteristicas do Veiculo  
                                        </div>
                                        <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important;">
                                            <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px;">

                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Cor</p>
                                        {{ veiculo.cor }}
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;"> Numero de Portas
                                        </p>
                                        {{ veiculo.portas }}
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;"> Transmissao
                                        </p>
                                        {{ veiculo.transmissao }}
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Kilometragem</p>
                                        {{ veiculo.km }}
                                    </div>

                                    <div class="col-12 col-md-4 col-lg-4 mb-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Combustivel</p>
                                        {{ veiculo.combustivel }}
                                    </div>

                                    <div class="p-2 pt-0 row mb-2 mt-md-4 mt-lg-4" style="opacity: 0.8;">
                                        <div class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1" style="border-top-left-radius: 8px; font-size: 13px;"> 
                                            Itens Opcionais
                                        </div>
                                        <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important;">
                                            <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px;">

                                            </div>
                                        </div>
                                    </div>

                                    <div class="row ps-2">
                                      <div class="col-12 col-md-6 col-lg-6 p-0" v-for="item in Api_CategOpcionais">
                                          <p class="mb-1 invisible">
                                            <b>{{item.nome}}</b>
                                          </p>

                                          <div v-for="item2 in listOpcionais(item.id)">
                                            <p class="mb-1">
                                             <img src="/bom.png" width="22" style="margin-top: -3px;">
                                              {{item2.nome}}
                                            </p>
                                          </div>
                                      </div>
                                    </div>

                                    <div class="col-12 mt-3">
                                        <p class="mb-1" style="opacity: 0.6; font-size: 15px;">Descriçao</p>
                                        {{ veiculo.descricao }}
                                    </div>
                                </div>
                        </div>

                    <!-- fim main detalhar -->


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
  name: 'TheDetalhesAnuncios',

  data() {
    return {
        veiculo: {
            "tipo_veiculo": "",
            "marca_id": '',
            "modelo_id": "",
            "numero_cliques": "",
            "situacao_veiculo": "",
            "anunciante_id": "",
            "categoria_id": "",
            "data_inicio": "",
            "data_fim": "",
            "ordenacao": "",
            "status_publicacao": "",
            "status_pagamento": "",
            "tipo": "",
            "vendido": "",
            "vitrine": "",
            "destaque_busca": "",
            "cep": "",
            "estado_id": "",
            "cidade_id": "",
            "empresa": "",
            "tipo_preco": "",
            "valor_preco": "",
            "fabricacao": "",
            "ano_fabricacao": "",
            "ano_modelo": "",
            "carroceria": "",
            "estilo": "",
            "portas": "",
            "cilindros": "",
            "motor": "",
            "cor": "",
            "transmissao": "",
            "combustivel": "",
            "placa": "",
            "km": '',
            "sinistrado": "",
            "conforto": '[]',
            "seguranca": '[]',
            "som": "",
            "descricao": ""
        },

      detalharAnuncios: '',
      confortoArray: [],
      segurancaArray: [],
      mostrarFotos: false, // Inicialmente, não mostrar as fotos
      mostrarDescricao: true, // Inicialmente, mostrar a descrição

      id: '',
          tipo_veiculo: "",
          empresa: "",
          estado: "",
          cidade: "",

          sel_categoria: "",
          // photos: [],
          Api_modelos: [],
          Api_marcas: [],
          Api_categorias: "",
          cores: [
            'Vermelho',
            'Amarelo',
            'Azul',
            'Branco',
            'Preto',
          ],
          portas: [
            2,4,6,8,10
          ],
          Api_fabricante: [
            'BMW',
            'Suzuki',
            'Toyota'
          ],
          anos: [],

          marcas: [], // Exemplo de lista de marcas
          modelos: "", // Array vazio para modelos iniciais
          marcaSelecionada: null, // Inicialmente, nenhuma marca selecionada
          modeloSelecionado: null, // Inicialmente, nenhum modelo selecionado
          ano_modelo: '',
          desc: "",
          previewImage: null,
          validate_moto: true,

          valor_preco: "",
          fabricacao: "",
          ano_fabricante: '',
          num_portas: "",
          cor: "",
          transmissao: "",
          combustivel: "",
          kilometro: "",
          desc: "",
          conforto: [],
          seguranca: [],
          situacao_veiculo: '',

          menuItems: [
        {
          label: 'Opcionais de Conforto',
          isOpen: false,
          inputs: [
            "Ar condicionado",
            "Ar quente",
          ]
        },
        {
          label: 'Opcionais de Segurança',
          isOpen: false,
          inputs: [
            "Cinto de Segurança",
            "Segurança 2",
            "Segurança 3"
          ]
        },
      ],
      selectedInputs: {
        'Opcionais de Conforto': [],
        'Opcionais de Segurança': [],
      },
      
      conforto: [],
      seguranca: [],
      // checkboxValue: true, 
      categoryLabel: [],
      categoryLabel2: [],

      nome_marca: '',
      status_anuncio: '',
      Api_CategOpcionais: ''
    }
  },

  methods: {
    show_menu_lateral(){
        console.log('ola mundos')
        this.$emit('show_menu_lateral')
    },

    async editar() {
           // Obtém a data atual
           console.log('Marca')
           console.log(this.marcaSelecionada)
          const dataAtual = new Date();

          // Obtém o dia, mês e ano
          const dia = dataAtual.getDate();
          const mes = dataAtual.getMonth() + 1; // Os meses são baseados em zero, portanto, somamos 1
          const ano = dataAtual.getFullYear();

          // Formata a data no formato "dia-mês-ano"
          const dataDoSistema = `${dia}-${mes}-${ano}`;

          console.log('Passando Opcionais')
          console.log(this.conforto)
          console.log(this.seguranca)

          const confortoArray = JSON.stringify(this.conforto);
          const segurancaArray = JSON.stringify(this.seguranca);


        //   this.marcaSelecionada

          const data = 
          {
            "tipo_veiculo": "Carro Actualizado",
            "marca_id": '1',
            "modelo_id": "1",
            "numero_cliques": "2",
            "situacao_veiculo": "1",
            "anunciante_id": "1",
            "categoria_id": "1",
            "data_inicio": "20-02-2021",
            "data_fim": "20-02-2022",
            "ordenacao": "2",
            "status_publicacao": this.status_anuncio,
            "status_pagamento": "1",
            "tipo": "2",
            "vendido": "1",
            "vitrine": "1",
            "destaque_busca": "1",
            "cep": "12352",
            "estado_id": "1",
            "cidade_id": "1",
            "empresa": "Gloart",
            "tipo_preco": "1",
            "valor_preco": "200",
            "fabricacao": "2000",
            "ano_fabricacao": "2020",
            "ano_modelo": "2020",
            "carroceria": "sim",
            "estilo": "Abc",
            "portas": "4",
            "cilindros": "4",
            "motor": "2",
            "cor": "Azul",
            "transmissao": '1',
            "combustivel": '1',
            "placa": "22LB1",
            "km": '1',
            "sinistrado": "sim",
            "conforto": ["Ar Condicionado", "Direção Hidráulica", "Vidros Elétricos"],
            "seguranca": ["Airbag", "ABS"],
            "som": "sim",
            "descricao": "Carro à Disel"
        }


            
          try {
            let id = this.$route.query.id;
            console.log("Editando ID: " + id)
            const response = await api.editarAnuncio(data, id)

            if (response) {

              console.log("Anuncio Editado... " + response.id)
              // A requisição foi bem-sucedida, exiba a mensagem de "criado"
              // this.criarAnuncio.classList.add('d-none')
              // this.carregarFotos.classList.remove('d-none')
              // this.$store.state.anuncios = await api.listarAnuncio()  
              

              this.id = response.id
              // Emitir um evento personalizado para notificar outros componentes
              // this.$emit('refreshAnuncio', this.id);
              // this.$emit('emitCarregarFoto')
              this.$emit('emitAnuncioEditado')


              console.log('Limpando...')
              // Limpar form
              // this.marcaSelecionada = ''
              // this.modeloSelecionado = ''
              // this.numero_cliques = ''
              // this.valor_preco = ''
              // this.desc = ''

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

        showgetDados() {
            let id = this.$route.query.id;
            this.detalharAnuncios = this.$store.state.anuncios.find(objeto => objeto.id === parseInt(id));


        console.log('Dados')
        console.log(this.detalharAnuncios.nome_marca)
        console.log(this.detalharAnuncios.fabricante)

        this.empresa = this.detalharAnuncios.empresa
        this.estado = this.detalharAnuncios.estado_id
        this.cidade = this.detalharAnuncios.cidade_id
        this.situacao_veiculo = this.detalharAnuncios.situacao_veiculo

        this.tipo_veiculo = this.detalharAnuncios.tipo_veiculo
        this.marcaSelecionada = this.detalharAnuncios.id_marca
        this.nome_marca = this.detalharAnuncios.nome_marca 


        this.modeloSelecionado = this.detalharAnuncios.nome_modelo
        this.ano_modelo = this.detalharAnuncios.ano_modelo
        this.sel_categoria = this.detalharAnuncios.nome_categoria
        this.fabricacao = this.detalharAnuncios.fabricacao
        this.ano_fabricante = this.detalharAnuncios.ano_fabricacao

        this.carroceria = this.detalharAnuncios.carroceria
        this.estilo = this.detalharAnuncios.estilo
        this.valor_preco = this.detalharAnuncios.valor_preco 
        this.cor = this.detalharAnuncios.cor
        this.num_portas = this.detalharAnuncios.portas
        this.transmissao = this.detalharAnuncios.transmissao
        this.combustivel = this.detalharAnuncios.combustivel
        this.kilometro = this.detalharAnuncios.km

        this.status_anuncio = this.detalharAnuncios.status_publicacao

        this.conforto = JSON.parse(this.detalharAnuncios.conforto)
        this.seguranca = JSON.parse(this.detalharAnuncios.seguranca)
        
        //Visualizar Anuncio
        //Carregar foto
        //Editar Estado
        //Listar Opcionais
      
      },

      showFotos() {
      this.mostrarFotos = true;
      this.mostrarDescricao = false;
    },

    async recarregarDados() {

        const id = parseInt(this.$route.query.id);
        this.$store.state.anuncioID = id

        console.log("Recarregar fotos nos anuncios...#")

        try {
            this.$store.state.anuncios = await api.listarAnuncio();

            console.log('Id ' + this.$store.state.anuncioID);

            if (this.$store.state.anuncios != null) {
                this.$store.state.detalharAnuncios = this.$store.state.anuncios.find(objeto => objeto.id == this.$store.state.anuncioID);
            }

            if(this.$store.state.detalharAnuncios) {
                this.$emit('hiddenLoading')
            }

            this.$store.state.foto1 = this.$store.state.detalharAnuncios.foto1
            this.$store.state.foto2 = this.$store.state.detalharAnuncios.foto2
            this.$store.state.foto3 = this.$store.state.detalharAnuncios.foto3
            this.$store.state.foto4 = this.$store.state.detalharAnuncios.foto4 
            this.$store.state.foto5 = this.$store.state.detalharAnuncios.foto5
            this.$store.state.foto6 = this.$store.state.detalharAnuncios.foto6
            this.$store.state.foto7 = this.$store.state.detalharAnuncios.foto7
            this.$store.state.foto8 = this.$store.state.detalharAnuncios.foto8
            this.$store.state.foto9 = this.$store.state.detalharAnuncios.foto9 
            this.$store.state.foto10 = this.$store.state.detalharAnuncios.foto10


            console.log("Novo contador " + this.contador)

            console.log('Detalhar ' + JSON.stringify(this.$store.state.detalharAnuncios.seguranca_id));

            this.confortoArray = JSON.parse(this.$store.state.detalharAnuncios.conforto_id)
            // this.confortoArray = JSON.parse(confortoString)

            this.segurancaArray = JSON.parse(this.$store.state.detalharAnuncios.seguranca_id)
            // this.segurancaArray = JSON.parse(segurancaString)

            console.log('opcionais ' + this.confortoArray);
            
            } catch (error) {
                console.error('Erro ao listar anúncios:', error);
        }
    },

    goBack() {
        window.history.back();
    },

    listOpcionais(id) {
      const opcionaisFiltrados = this.veiculo.opcionais_id.filter(opcional => opcional.categoria_opcional_id == id);

      return opcionaisFiltrados
    },
  },

  async created() {
        if (!(localStorage.getItem('token'))) {
            this.$router.push({ path: '/login'});
        }

        this.Api_CategOpcionais = await api.listarCategoriaOpcionais()

        try {
             const id = parseInt(this.$route.query.id);
             const dados = await api.detalharAnuncio(id)
            this.veiculo = dados[0]

            console.log('veiculos')
            console.log(this.veiculo.id)

        } catch (e) {
            console.error("Erro na requisição:", e);
        }
    },

    mounted() {
        if(localStorage.getItem('perfil') != 'superadmin') {
            this.$router.push({ path: '/anuncios'});
        } 
  }
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
        bottom: 0; background-color: crimson; color: #fff; width: 40px; height: 40px;
        transition: background 1s ease;
        transition: color 1s ease;
        cursor: pointer;
    }

    .btn-add:hover {
        background-color: crimson; color: #665d5d;
    }

    .detalhar {
        cursor: pointer;
    }

    .detalhar {
        cursor: pointer;
        border-radius: 8px;
        margin: 5px 0;
        transform: scale(95%);
        transition: transform 0.2s ease;

    }

    .detalhar:hover {
        transform: scale(115%);
    }



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
        bottom: 0; background-color: crimson; color: #fff; width: 40px; height: 40px;
        transition: background 1s ease;
        transition: color 1s ease;
        cursor: pointer;
        position: fixed;
        bottom: 30px;
        right: 30px;
    }

    .link_des_foto_anuncio-desc:hover {
        border-bottom: 2px solid crimson;
        cursor: pointer;
    }   

    .img-preview {
        max-width: 100%;
        max-height: 200px; /* Defina a altura máxima desejada para a pré-visualização da imagem */
        margin-top: 10px;
        border-radius: 8px;
    }

    .btn-carregar:hover {
        background-color: rgb(255, 228, 234);
    }

    .btn-show-Anuncios {
        display: flex; align-items: center; justify-content: center; position: fixed; bottom: 90px; right: 24px; padding-bottom: 8px; border-radius: 100px; width: 50px; height: 50px; z-index: 999;
        background: rgb(27, 30, 36);
        background: linear-gradient(90deg, rgb(72, 81, 102) 1%, rgb(21, 24, 29) 90%);
        color: #c2c2c2;
        box-shadow: -1px 2px 10px 0px   rgba(0, 0, 0, 0.5);

    }
</style>