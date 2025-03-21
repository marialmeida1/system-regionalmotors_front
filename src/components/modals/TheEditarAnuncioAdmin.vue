<template>
  <!-- O modal Adicionar -->
  <div class="modal fade" id="EditarAnuncios" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="bg-dar">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel" style="font-size: 17px">
              <span class="fas fa-bullhorn py-2 pt-0"></span> <b>Editar Anúncio</b>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>
          <div class="modal-body" style="height: 470px; overflow: auto; margin-bottom: 1em">
            <!-- Seu formulário aqui -->
            <form>
              <div class="row">
                <div class="py-3">
                  <label for="marca" class="form-label">Status de Publicação</label>
                  <select v-model="status_publicacao" class="form-select">
                    <option value="1" v-if="status_publicacao !== '1'">Aguardando</option>
                    <option value="1" v-else selected>Aguardando</option>
                    <option value="2" v-if="status_publicacao !== '2'">Ativo</option>
                    <option value="2" v-else selected>Ativo</option>
                    <option value="3" v-if="status_publicacao !== '3'">Recusado</option>
                    <option value="3" v-else selected>Recusado</option>
                    <option value="4" v-if="status_publicacao !== '4'">Finalizado</option>
                    <option value="4" v-else selected>Finalizado</option>
                    <option value="5" v-if="status_publicacao !== '5'">Vendido</option>
                    <option value="5" v-else selected>Vendido</option>
                    <option value="6" v-if="status_publicacao !== '6'">Bloqueado</option>
                    <option value="6" v-else selected>Bloqueado</option>
                  </select>
                </div>

                <div class="p-2 pt-0 row mb-2 mt-md-1 mt-lg-1" style="opacity: 0.8">
                  <div class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1"
                    style="border-top-left-radius: 8px; font-size: 13px">
                    Informaçoes do Veiculo
                  </div>
                  <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important">
                    <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px"></div>
                  </div>
                </div>

                <div class="mb-3">
                  <div>
                    <label for="marca" class="form-label">Situaçao do Veiculo</label>
                    <select v-model="situacao_veiculo" class="form-select">
                      <option value="" selected disabled>Selecionar</option>
                      <option value="1">Novo</option>
                      <option value="2">Usado</option>
                    </select>
                  </div>
                </div>

                <div class="mb-3">
                  <div>
                    <label for="marca" class="form-label">Tipo de Veiculo</label>
                    <select v-model="tipo_veiculo" class="form-select">
                      <option value="" selected disabled>Selecionar</option>
                      <option v-for="item in $store.state.tipo_veiculo" :value="item.id" :key="item.id">
                        {{ item.tipo_veiculo }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="preco" class="form-label">Tecnologia</label>
                  <select v-model="tecnologia" class="form-select">
                    <option value="" selected disabled>Selecionar</option>
                    <option v-for="t in Api_tecnologia" :value="t.id" :key="t.id">
                      {{ t.tecnologia }}
                    </option>
                  </select>
                </div>

                <div class="mb-3">
                  <label for="nome" class="form-label">Categoria <span style="opacity: 0.6">(Opcional)</span></label>
                  <select v-model="categoria_id" class="form-select">
                    <option value="" selected disabled>Selecionar</option>
                    <option v-for="categ in Api_categorias" :value="categ.id" :key="categ.id">
                      {{ categ.nome }}
                    </option>
                  </select>
                </div>

                <div class="mb-3">
                  <div>
                    <label for="marca" class="form-label">Marca</label>
                    <select v-model="marca_id" class="form-select">
                      <option value="" selected disabled>Selecionar</option>
                      <option v-for="marca in filterMarcas(tipo_veiculo)" :value="marca.id" :key="marca.id">
                        {{ marca.nome_marca }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="mb-3">
                  <div>
                    <div class="mb-3">
                      <label for="" class="form-label">Modelo</label>
                      <select class="form-select" name="" id="" v-model="modelo_id">
                        <option value="">Selecionar</option>
                        <option v-for="modelo in filterModelos(marca_id)" :value="modelo.id" :key="modelo.id">
                          {{ modelo.nome_modelo }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="nome" class="form-label">Ano de Fabricação</label>
                  <select class="form-select" v-model="ano_fabricante">
                    <option value="" selected disabled>Selecionar</option>
                    <option v-for="(ano, index) in anos" :value="ano" :key="index">
                      {{ ano }}
                    </option>
                  </select>
                </div>

                <div class="mb-3">
                  <label for="nome" class="form-label">Ano do Modelo</label>
                  <select class="form-select" v-model="ano_modelo">
                    <option value="" selected disabled>Selecionar</option>
                    <option v-for="(ano, index) in anos" :value="ano" :key="index">
                      {{ ano }}
                    </option>
                  </select>
                </div>

                <div class="p-2 pt-0 row mb-2 mt-md-4 mt-lg-4" style="opacity: 0.8">
                  <div class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1"
                    style="border-top-left-radius: 8px; font-size: 13px">
                    Informaçoes de Preço
                  </div>
                  <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important">
                    <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px"></div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="preco" class="form-label">Preço (R$)</label>
                  <input type="text" class="text form-control" id="preco" v-model="valor_preco" @keyup="formatarNumero"
                    placeholder="" />
                </div>

                <div class="mb-3">
                  <label for="nome" class="form-label">Mostrar Preço</label>
                  <select v-model="mostrar_preco" class="form-select">
                    <option value="sim" selected>Sim</option>
                    <option value="nao">Não</option>
                  </select>
                </div>

                <div class="p-2 pt-0 row mb-2 mt-md-4 mt-lg-4" style="opacity: 0.8">
                  <div class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1"
                    style="border-top-left-radius: 8px; font-size: 13px">
                    Caracteristicas do Veiculo
                  </div>
                  <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important">
                    <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px"></div>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="nome" class="form-label">Cor</label>
                  <select v-model="cor" class="form-select">
                    <option value="" selected disabled>Selecionar</option>
                    <option v-for="cor in Api_cores" :value="cor.id" :key="cor.id">
                      {{ cor.cor }}
                    </option>
                  </select>
                </div>

                <div class="mb-3">
                  <label for="nome" class="form-label">Numero de Portas</label>
                  <select v-model="num_portas" class="form-select">
                    <option value="" selected disabled>Selecionar</option>
                    <option v-for="(porta, index) in portas" :value="porta" :key="index">
                      {{ porta }}
                    </option>
                  </select>
                </div>

                <div class="mb-3">
                  <label for="preco" class="form-label">Transmissao</label>
                  <select v-model="transmissao" class="form-select">
                    <option value="" selected disabled>Selecionar</option>
                    <option v-for="t in Api_transmissao" :value="t.id" :key="t.id">
                      {{ t.transmissao }}
                    </option>
                  </select>
                </div>

                <div class="mb-3">
                  <label for="preco" class="form-label">Combustivel</label>
                  <select v-model="combustivel" class="form-select">
                    <option value="" selected disabled>Selecionar</option>
                    <option v-for="c in Api_combustivel" :value="c.id" :key="c.id">
                      {{ c.combustivel }}
                    </option>
                  </select>
                </div>

                <div class="mb-3">
                  <label for="preco" class="form-label">Kilometragem</label>
                  <input type="number" class="text form-control" id="preco" v-model="kilometro" min="0" max="140" />
                </div>

                <div class="p-2 pt-0 row mb-2 mt-md-4 mt-lg-4" style="opacity: 0.8">
                  <div class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1" style="
                      border-top-left-radius: 8px;
                      font-size: 13px;
                      background-color: crimson !important;
                    ">
                    Privilegios
                  </div>
                  <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important">
                    <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px"></div>
                  </div>
                </div>

                <div class="mb-2 mt-2 check">
                  <input type="checkbox" v-model="vitrine" id="vitrine" @click="getVitrine" />
                  <label for="vitrine" class="ms-2 form-label">Adicionar na vitrine</label>
                </div>

                <div class="mb-2 check">
                  <input type="checkbox" v-model="destaque" id="destaque" @click="getDestaque" />
                  <label for="destaque" class="ms-2 form-label">Marcar como destaque</label>
                </div>

                <div class="p-2 pt-0 row mt-md-4 mt-lg-4 mb-2" style="opacity: 0.8">
                  <div class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1"
                    style="border-top-left-radius: 8px; font-size: 13px">
                    Opcionais & Itens de Serie
                  </div>
                  <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important">
                    <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px"></div>
                  </div>
                </div>

                <div class="mb-3">
                  <div v-for="item in Api_CategOpcionais" :key="item.id">
                    <p @click="toggleDropdown(item.id)" style="cursor: pointer; opacity: 1; margin: 0">
                      <span :class="{ 'arrow-down': isDropdownOpen(item.id) }">&#9658;</span>
                      <span class="ms-2">{{ item.nome }}</span>
                    </p>
                    <div v-if="isDropdownOpen(item.id)" class="mb-2 pt-2">
                      <div v-for="item2 in filterOpcionais(item.id)" :key="item2.id" class="ps-4">
                        <input type="checkbox" :id="'checkbox_' + item2.id" :value="item2.id" v-model="selecionados"
                          class="me-2" />
                        <label :for="'checkbox_' + item2.id">{{ item2.nome }}</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mb-1">
                  <label for="desc" class="form-label">Descrição</label>
                  <textarea class="form-control" rows="5" id="desc" v-model="desc"
                    :class="{ 'limit-reached': (desc?.length || 0) >= 140, 'warning': (desc?.length || 0) >= 140 * 0.8 }"
                    maxlength="140"></textarea>
                </div>
                <p class="text-cont">{{ desc?.length || 0 }}/140 caracteres</p>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <div style="display: flex; flex-wrap: wrap">
              <div class="col-6">
                <button type="button" class="me-3 btn btn-secondary" data-bs-dismiss="modal" aria-label="Fechar">
                  Cancelar
                </button>
              </div>
              <div class="col-6">
                <button type="button" class="ms-3 btn btn-primary" @click="criar()" data-bs-dismiss="modal"
                  aria-label="Fechar">
                  Atualizar
                </button>
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
  name: "TheEditarAnuncio",

  data() {
    return {
      anunciante_id: "",
      id: "",
      photos: [],
      Api_categorias: [],
      Api_transmissao: [],
      Api_combustivel: [],
      Api_tecnologia: [],
      Api_cores: [],
      Api_Seguranca: [],
      Api_Conforto: [],
      Api_cores: [],
      Api_CategOpcionais: [],
      Api_Opcionais: [],

      portas: [1, 2, 3, 4, 5, 6],
      Api_fabricante: ["BMW", "Suzuki", "Toyota"],
      anos: [],

      marcas: [],
      modelos: "",
      marca_id: null,
      previewImage: null,
      estado: "",
      cidade: "",

      fabricante: "",
      ano_fabricante: "",
      num_portas: "",
      cor: "",
      conforto: [],
      seguranca: [],
      vitrine: "",
      destaque: "",

      valor_preco: "",

      Api_CategOpcionais: [
        // Seus dados aqui
      ],
      dropdownState: {},
      opc: [],

      // Info inputs
      status_publicacao: '',
      situacao_veiculo: '',
      tipo_veiculo: '',
      tecnologia: '',
      categoria_id: '',
      marca_id: '',
      modelo_id: '',
      ano_fabricante: '',
      ano_modelo: '',
      valor_preco: '',
      mostrar_preco: "sim",
      cor: '',
      num_portas: '',
      transmissao: '',
      combustivel: '',
      kilometro: '',
      vitrine: '',
      destaque: '',
      selecionados: [],
      desc: '',
    };
  },

  methods: {
    getVitrine() {
      if (this.vitrine) return 1;
      else return 0;
    },

    getDestaque() {
      if (this.destaque) return 1;
      else return 0;
    },

    async criar() {
      this.titulo = this.marca_id + " " + this.modelo_id + " - " + this.ano_modelo;

      var opcionalString = JSON.stringify(this.selecionados);
      console.log(this.anunciante_id)

      const data = {
        titulo: this.titulo,
        tipo_veiculo: this.tipo_veiculo,
        tecnologia: this.tecnologia,
        marca_id: this.marca_id,
        modelo_id: this.modelo_id,
        numero_cliques: "2",
        situacao_veiculo: this.situacao_veiculo,
        anunciante_id: this.anunciante_id,
        categoria_id: this.categoria_id,
        data_inicio: "20-02-2021",
        data_fim: "20-02-2022",
        ordenacao: "2",
        status_publicacao: this.status_publicacao,
        status_pagamento: "1",
        tipo: "2",
        vendido: "1",
        vitrine: this.vitrine,
        destaque_busca: this.destaque,
        cep: "12352",
        estado_id: "2",
        cidade_id: "3",
        empresa: "null",
        tipo_preco: "1",
        valor_preco: this.valor_preco,
        mostrar_preco: this.mostrar_preco,
        fabricante_id: "2",
        ano_fabricacao: this.ano_fabricante,
        ano_modelo: this.ano_modelo,
        carroceria: "null",
        estilo: "null",
        portas: this.num_portas,
        cilindros: "4",
        motor: "2",
        cor: this.cor,
        transmissao: this.transmissao,
        combustivel: this.combustivel,
        placa: "null",
        km: this.kilometro,
        sinistrado: "null",
        opcionais_id: opcionalString,
        descricao: this.desc,
      };

      try {
        const response = await api.editarAnuncio(data, this.$store.state.anuncioID);

        if (response) {
          // A requisição foi bem-sucedida, exiba a mensagem de "criado"
          // this.criarAnuncio.classList.add('d-none')
          // this.carregarFotos.classList.remove('d-none')
          this.$store.state.anuncios = await api.listarAnuncioAdmin();

          this.id = response.id;

          // Emitir um evento personalizado para notificar outros componentes
          this.$emit("refreshAnuncio", this.id);
          // this.$emit('emitCarregarFoto')

          // Setar fotos

          // Limpar form
          this.tipo_veiculo = "";
          this.marca_id = "";
          this.modelo_id = "";
          this.situacao_veiculo = "";
          this.categoria_id = "";
          // this.getVitrine() = ''
          // this.getDestaque() = ''
          this.estado = "";
          this.cidade = "";
          this.empresa = "";

          this.valor_preco = "";
          this.fabricante = "";
          this.ano_fabricante = "";
          this.ano_modelo = "";
          this.carroceria = "";
          this.estilo = "";
          this.num_portas = "";
          this.cor = "";
          this.transmissao = "";
          this.combustivel = "";
          this.kilometro = "";
          this.conforto = "";
          this.vitrine = false;
          this.destaque = false;
        } else {
          // Caso contrário, exiba uma mensagem de erro ou faça o que for apropriado
          this.showErrorMessage = true;
        }
      } catch (error) {
        // Trate erros de requisição, se necessário
        console.error("Erro na requisição:", error);
        //this.showErrorMessage = true;
      }
    },

    showCarregarFotos() { },

    formatarNumero() {
      // Remove caracteres que não sejam dígitos ou pontos
      let value = this.valor_preco.replace(/[^\d.]/g, "");

      // Se houver mais de um ponto, mantém apenas o primeiro ponto
      const parts = value.split(".");
      value = parts.shift() + (parts.length > 0 ? "." + parts.join("") : "");

      // Remove todos os pontos existentes
      value = value.replace(/\./g, "");

      // Adiciona pontos a cada 3 dígitos
      value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

      // Atualiza o valor formatado
      this.valor_preco = value;
    },

    toggleDropdown(id) {
      // Utilize a atribuição direta para adicionar propriedades reativas
      this.$data.dropdownState[id] = !this.$data.dropdownState[id];
      this.$forceUpdate(); // Forçar a atualização para garantir reatividade
    },
    isDropdownOpen(id) {
      return this.$data.dropdownState[id] || false;
    },

    //Filtros de Seleção
    filterOpcionais(id) {
      // Implemente sua lógica para filtrar os opcionais com base na categoriaId
      // Exemplo fictício:
      return this.Api_Opcionais.filter((item) => item.categoria_opcional_id === id);
    },

    filterMarcas(id) {
      // Implemente sua lógica para filtrar os opcionais com base na categoriaId
      // Exemplo fictício:
      return this.$store.state.marcas.filter((item) => item.tipo_veiculo_id === id);
    },

    filterModelos(id) {
      return this.$store.state.modelos.filter((item) => item.id_marca === id);
    },

    // Carregar as var
    async showgetDados() {
      this.anuncios = this.$store.state.anuncios.find(
        (objeto) => objeto.id === this.$store.state.anuncioID
      );

      this.tipo_veiculo = this.anuncios.tipo_veiculo_id;
      this.tecnologia = this.anuncios.tecnologia_id;
      this.marca_id = this.anuncios.id_marca;
      this.modelo_id = this.anuncios.id_modelo;
      this.situacao_veiculo = this.anuncios.situacao_veiculo;
      this.categoria_id = this.anuncios.id_categoria;
      this.status_publicacao = this.anuncios.status_publicacao;

      if (this.anuncios.destaque_busca == 1) {
        this.destaque = true;
      } else {
        this.destaque = false;
      }
      if (this.anuncios.vitrine == 1) {
        this.vitrine = true;
      } else {
        this.vitrine = false;
      }

      this.valor_preco = this.anuncios.valor_preco;
      this.mostrar_preco = this.anuncios.mostrar_preco;
      this.ano_fabricante = this.anuncios.ano_fabricacao;
      this.ano_modelo = this.anuncios.ano_modelo;
      this.num_portas = this.anuncios.portas;
      this.cor = this.anuncios.cor_id;
      this.transmissao = this.anuncios.transmissao_id;
      this.combustivel = this.anuncios.combustivel_id;
      this.kilometro = this.anuncios.km;
      this.selecionados = JSON.parse(this.anuncios.opcionais_id);
      this.desc = this.anuncios.descricao;
      this.anunciante_id = this.anuncios.id_anunciante;
    },
  },

  async created() {
    this.$store.state.modelos = await api.listarModelo();
    this.$store.state.marcas = await api.listarMarca();
    this.Api_categorias = await api.listarCategoria();
    this.Api_combustivel = await api.listarCombustivel();
    this.Api_transmissao = await api.listarTransmissao();
    this.Api_tecnologia = await api.listarTecnologia();
    this.$store.state.tipo_veiculo = await api.listarTipo_Veiculo();
    this.Api_cores = await api.listarCores();
    this.Api_Opcionais = await api.listarOpcionais();

    this.Api_CategOpcionais = await api.listarCategoriaOpcionais();
    this.$store.state.categoriaOpcionais = this.Api_CategOpcionais;

    for (let ano = 2025; 1990 < ano; ano--) {
      this.anos.push(ano);
    }
  },
};
</script>
