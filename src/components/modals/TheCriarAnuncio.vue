<template>
  <!-- O modal Adicionar -->
  <div class="modal fade" id="IDaddCarro" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="bg-dar">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel" style="font-size: 17px">
              <span class="fas fa-bullhorn py-2 pt-0"></span> <b>Criar Anúncio</b>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>
          <div class="modal-body" style="height: 470px; overflow: auto; margin-bottom: 1em">
            <!-- Seu formulário aqui -->
            <form>
              <div class="row">

                <!-- Placa Fipe -->
                <div class="p-2 pt-0 row mb-2 mt-md-1 mt-lg-1" style="opacity: 0.8">
                  <div class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1"
                    style="border-top-left-radius: 8px; font-size: 13px">
                    Informações Gerais
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
                  <label for="nome" class="form-label">Categoria</label>
                  <select v-model="categoria_id" :disabled="tipo_veiculo === 2" class="form-select">
                    <option value="" selected disabled>Selecionar</option>
                    <option v-for="categ in Api_categorias" :value="categ.id" :key="categ.id">
                      {{ categ.nome }}
                    </option>
                  </select>
                </div>

                <!-- Informações do Veículo -->
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
                    <label for="marca" class="form-label">Marca</label>
                    <select v-model="marca_id" class="form-select">
                      <option value="" selected disabled>Selecionar</option>
                      <!-- filterMarcas(tipo_veiculo) -->
                      <option v-for="marca in filterMarcas(tipo_veiculo)" :value="marca.id" :key="marca.id">
                        {{ marca.nome_marca }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="ano_fabricante" class="form-label">Ano de Fabricação</label>
                  <select class="form-select" v-model="ano_fabricante">
                    <option value="" selected disabled>Selecionar</option>
                    <option v-for="(ano, index) in anos" :value="ano" :key="index">
                      {{ ano }}
                    </option>
                  </select>
                </div>

                <div class="mb-3">
                  <label for="ano_modelo" class="form-label">Ano do Modelo</label>
                  <select class="form-select" v-model="ano_modelo">
                    <option value="" selected disabled>Selecionar</option>
                    <option v-for="(ano, index) in anos_modelo" :value="ano" :key="index">
                      {{ ano }}
                    </option>
                  </select>
                </div>

                <div class="mb-3">
                  <div>
                    <label for="modelo" class="form-label">Modelo</label>
                    <select v-model="modelo_id" class="form-select">
                      <option value="" selected disabled>Selecionar</option>
                      <option v-for="modelo in filterModelos(marca_id)" :value="modelo.id" :key="modelo.id">
                        {{ modelo.nome_modelo }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="mb-3">
                  <label for="versao" class="form-label">Versões</label>
                  <select class="form-select" v-model="modelId">
                    <option value="" selected disabled>Selecionar</option>
                    <option v-for="(versao, index) in versionsOption" :value="versao" :key="index">
                      {{ versao.name }}
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

                <!--<div class="mb-3">
                  <label for="nome" class="form-label">Mostrar Preço</label>
                  <select v-model="mostrar_preco" class="form-select">
                    <option value="sim" selected>Sim</option>
                    <option value="nao">Não</option>
                  </select>
                </div>-->

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
                  <label for="nome" class="form-label">Número de Portas</label>
                  <select v-model="num_portas" :disabled="tipo_veiculo === 2" class="form-select">
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
                  <input type="number" class="text form-control" id="preco" v-model="kilometro"
                    :disabled="situacao_veiculo === '1'" :required="situacao_veiculo === '2'" min="0" max="100" />
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
              <button type="button" class="ms-3 btn btn-primary" @click="criar()">Criar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// import { setTransitionHooks } from "vue";
import { version } from "vuex/dist/vuex.cjs.js";
import * as api from "../../services/api";

export default {
  name: "TheCriarAnuncio",

  data() {
    return {
      id: "",
      tipo_veiculo: "",
      categoria_id: "",
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
      anos_modelo: [],

      marcas: [], // Exemplo de lista de marcas
      modelos: "", // Array vazio para modelos iniciais
      marca_id: null, // Inicialmente, nenhuma marca selecionada
      nome_marca: "",
      modelo_id: "", // Inicialmente, nenhum modelo selecionado
      ano_modelo: "",
      desc: "",
      previewImage: null,
      estado: "",
      cidade: "",

      fabricante: "",
      ano_fabricante: "",
      num_portas: "",
      cor: "",
      transmissao: "",
      combustivel: "",
      kilometro: "",
      desc: "",
      conforto: [],
      seguranca: [],
      situacao_veiculo: "",
      vitrine: "",
      destaque: "",
      tecnologia: "",
      mostrar_preco: "sim",
      typeVehicle: "",
      brandId: "",
      modelId: "",
      yearId: "",
      versionsOption: [],
      yearsId: [],

      valor_preco: "",
      selecionados: [],

      Api_CategOpcionais: [
        // Seus dados aqui
      ],
      selecionados: [],
      dropdownState: {},
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

    // Função para fechar o modal
    fecharModal() {
      this.$store.state.modalCriarAnuncio.hide();
    },

    async criar() {
      this.titulo = this.marca_id + " " + this.modelo_id + " - " + this.ano_modelo;

      var opcionalString = JSON.stringify(this.selecionados);

      if (this.kilometro == "" && this.situacao_veiculo == "1") {
        this.kilometro = "0";
      }

      const response = await fetch(`https://fipe.parallelum.com.br/api/v2/${this.typeVehicle}/brands/${this.brandId.code}/models/${this.modelId.code}/years/${this.yearId}`);
      const fipeInfo = await response.json();

      const dataModels = this.filterModelos(this.marca_id);
      const model = dataModels.find(item => {
        return item.id === this.modelo_id;
      });
      const nome_modelo = model.nome_modelo;

      const versionSave = this.extrairVersao(this.modelId.name, nome_modelo);

      if (this.situacao_veiculo !== "" && this.tipo_veiculo !== "" && this.kilometro !== "") {
        const data = {
          titulo: this.titulo,
          tipo_veiculo: this.tipo_veiculo,
          tecnologia: this.tecnologia,
          marca_id: this.marca_id,
          modelo_id: this.modelo_id,
          numero_cliques: "2",
          situacao_veiculo: this.situacao_veiculo,
          anunciante_id: this.$store.state.anunciante_id,
          categoria_id: this.categoria_id,
          data_inicio: "20-02-2021",
          data_fim: "20-02-2022",
          ordenacao: "2",
          status_publicacao: "2",
          status_pagamento: "1",
          tipo: "2",
          vendido: "1",
          vitrine: this.getVitrine(),
          destaque_busca: this.getDestaque(),
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
          placa: this.plate,
          km: this.kilometro,
          sinistrado: "null",
          opcionais_id: opcionalString,
          descricao: this.desc,
          codeFipe: fipeInfo.codeFipe,
          yearId: this.yearId,
          modelFipe: versionSave,
        };

        try {
          const response = await api.adicionarAnuncio(data);

          if (response) {
            // A requisição foi bem-sucedida, exiba a mensagem de "criado"
            // this.criarAnuncio.classList.add('d-none')
            // this.carregarFotos.classList.remove('d-none')
            this.$store.state.anuncios = await api.listarAnuncioAnunciante();

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

            // Fechar modal
            this.fecharModal();

            // Abre modal de fotos
            var modal = document.getElementById("CarregarFotos");
            this.$store.state.modalCarregarFoto = new bootstrap.Modal(modal);
            this.$store.state.modalCarregarFoto.show();
          } else {
            // Caso contrário, exiba uma mensagem de erro ou faça o que for apropriado
            this.showErrorMessage = true;
          }
        } catch (error) {
          // Trate erros de requisição, se necessário
          console.error("Erro na requisição:", error);
          //this.showErrorMessage = true;
        }
      } else {
        api.erro("Preencha todos os campos!");
      }
    },

    async findBrandCode() {
      try {
        const brandsResponse = await fetch(`https://fipe.parallelum.com.br/api/v2/${this.typeVehicle}/brands`);
        const brands = await brandsResponse.json();

        const dataMarks = this.filterMarcas(this.tipo_veiculo);
        const mark = dataMarks.find(item => {
          return item.id === this.marca_id;
        });

        this.nome_marca = mark.nome_marca;

        this.brandId = brands.find(b =>
          b.name.toLowerCase().includes(this.nome_marca.toLowerCase())
        );
        if (!this.brandId) {
          console.error("Marca não encontrada!");
          return;
        }
        console.log(this.brandId)
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    },

    async findVersions() {

      this.versionsOption = "";

      const modelsResponses = await Promise.all(
        this.yearsId.map(async (yearId) => {
          const response = await fetch(`https://fipe.parallelum.com.br/api/v2/${this.typeVehicle}/brands/${this.brandId.code}/years/${yearId.code}/models`);
          return response.json(); // Converte a resposta para JSON
        })
      ); // Todos os modelos de acordo com os anos

      const models = modelsResponses.flat(); // Junta todos

      const dataModels = this.filterModelos(this.marca_id);
      const model = dataModels.find(item => {
        return item.id === this.modelo_id;
      });
      const nome_modelo = model.nome_modelo; // Encontra o nome do modelo usado

      this.versionsOption = models.filter(m => m.name.toLowerCase().includes(nome_modelo.toLowerCase()));
      console.log(this.versionsOption)

      if (this.versionsOption.length === 0) {
        console.error("Modelos não encontrado!");
        return;
      }
    },

    extrairVersao(versao, modelo) {
      return versao.replace(new RegExp(`^${modelo}\\s*`, "i"), "").trim();
    },

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
      return this.Api_Opcionais.filter((item) => item.categoria_opcional_id == id);
    },
    filterMarcas(id) {
      return this.$store.state.marcas.filter((item) => item.tipo_veiculo_id == id);
    },

    filterModelos(id) {
      return this.$store.state.modelos.filter((item) => item.id_marca == id);
    },

    handleInput() {

      this.plate = this.plate.toUpperCase();

      if (this.typingTimeout) {
        clearTimeout(this.typingTimeout);
      }

      if (this.plate.length >= 7 && this.usePlate == '1') {
        this.typingTimeout = setTimeout(() => {
          this.searchFipe();
        }, 1000);
      }
    },

    async findYearId() {
      if (!this.typeVehicle || !this.brandId?.code) {
        console.error("Faltam parâmetros para buscar os anos!");
        return;
      }

      const response = await fetch(
        `https://fipe.parallelum.com.br/api/v2/${this.typeVehicle}/brands/${this.brandId.code}/years`
      );

      const years = await response.json();

      this.yearsId = years.filter(item => {
        const yearIdItem = item.code.slice(0, 4);
        return yearIdItem == this.ano_fabricante;
      });

      if (this.modelo_id != '') {
        this.findVersions();
      } else {
        console.log("Não foi selecionado modelo ainda")
      }
    },

    findTypeVehicle() {
      let tV = "cars"
      if (this.tipo_veiculo == 2) {
        tV = "motorcycles";
      } else if (this.tipo_veiculo == 3) {
        tV = "trucks";
      }

      this.typeVehicle = tV;
    },

    clearPlate() {
      if (this.usePlate === '0') {
        this.plate = '';
        this.marca_id = '';
        this.modelo_id = '';
        this.cor = '';
        this.combustivel = '';
        this.ano_fabricante = '';
        this.ano_modelo = '';
      }
    }

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
    this.Api_CategOpcionais = await api.listarCategoriaOpcionais();
    this.$store.state.categoriaOpcionais = this.Api_CategOpcionais;
    this.Api_Opcionais = await api.listarOpcionais();

    // Padrao
    this.situacao_veiculo = 2;
    this.tipo_veiculo = 1;
    this.tecnologia = 1;
    this.num_portas = 4;

    // Ano
    const currentYear = new Date().getFullYear();

    for (let ano = currentYear + 1; 1990 < ano; ano--) {
      this.anos.push(ano);
    }
  },

  watch: {
    ano_fabricante(newVal) {
      this.ano_modelo = newVal;
      this.anos_modelo = [];
      let ano_ant = this.ano_modelo + 1;

      this.anos_modelo.push(this.ano_modelo);
      this.anos_modelo.push(ano_ant);

      this.findYearId();
    },

    num_portas(newVal) {
      if (this.tipo_veiculo == 1) {
        this.num_portas = 4;
      }
    },

    marca_id() {
      this.findBrandCode()
    },

    modelo_id() {
      this.findVersions();
    },

    async modelId() {
      const response = await fetch(`https://fipe.parallelum.com.br/api/v2/${this.typeVehicle}/brands/${this.brandId.code}/models/${this.modelId.code}/years`);
      const getYearId = await response.json();

      const year = getYearId.find(item => {
        const yearIdItem = item.code.slice(0, 4);
        return yearIdItem == this.ano_fabricante;
      });

      this.yearId = year.code;
    },

    tipo_veiculo() {
      this.findTypeVehicle();
      if (this.tipo_veiculo == '2') {
        this.num_portas = null;
      }
    },
  },
};
</script>


<style>
.text-cont {
  font-size: 0.75rem;
}
</style>
