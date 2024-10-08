<template>
  <aside class="bg-dar bg-whit position-relative">
    <!-- Opções -->
    <div style="height: 88vh; overflow: auto" class="meu-menu-lateral px-2 pb-1">
      <div class="menu-lateral-btn-fechar d-flex justify-content-end">
        <div class="pt-3 pe-3" @click="show_menu_lateral" style="cursor: pointer">
          <i class="fas fa-arrow-left"></i>
        </div>
      </div>

      <div class="p-2 pt-4 pb-4 fw-bolder">
        <h5>Filtros</h5>
      </div>

      <div class="px-2 pb-2">
        <div class="title__filter pb-2">Situação do veículo</div>
        <div class="pesquisar pesquisar-lateral p-2">
          <select @change="applyFiltro('situacao_veiculo', $event.target.value)" class="filter-select" id="situacao_veiculo">
            <option value="" selected disabled>Situação do veículo</option>
            <option value="">Todos</option>
            <option value="1">Novo</option>
            <option value="2">Usado</option>
          </select>
        </div>
      </div>

      <hr />

      <div class="px-2 pb-2">
        <div class="title__filter pb-2">Tipo de veiculo</div>
        <div class="pesquisar pesquisar-lateral p-2">
          <select @change="filtrarMarca('tipo_veiculo', $event)" class="filter-select" id="tipo_veiculo">
            <option value="" selected disabled>Veículo</option>
            <option v-for="item in $store.state.tipo_veiculo" :value="item.id">
              {{ item.tipo_veiculo }}
            </option>
          </select>
        </div>
      </div>

      <hr />

      <div class="px-2 pb-2">
        <div class="title__filter pb-2">Marca</div>
        <div class="pesquisar pesquisar-lateral p-2">
          <select @change="filtrarModelo('nome_marca', $event.target.value)" class="filter-select" id="marca">
            <option value="">Marca</option>
            <option v-for="item in marcas" :value="item.nome_marca">
              {{ item.nome_marca }}
            </option>
          </select>
        </div>
      </div>

      <hr />

      <div class="px-2 pb-2">
        <div class="title__filter pb-2">Modelo</div>
        <div class="pesquisar pesquisar-lateral p-2">
          <select @change="applyFiltro('nome_modelo', $event.target.value)" class="filter-select" id="modelo">
            <option value="">Modelo</option>
            <option v-for="item in modelos" :value="item.nome_modelo">
              {{ item.nome_modelo }}
            </option>
          </select>
        </div>
      </div>

      <hr />

      <div class="px-2 pb-2">
        <div class="title__filter pb-2">Categoria</div>
        <div class="pesquisar pesquisar-lateral p-2">
          <select @change="filtrarCategoria('nome_categoria', $event.target.value)" class="filter-select" id="categoria">
            <option value="">Categoria</option>
            <option v-for="item in categorias" :value="item.nome">
              {{ item.nome }}
            </option>
          </select>
        </div>
      </div>

      <hr>

      <div class="px-2 pb-2">
        <div class="title__filter pb-2">Estado</div>
        <div class="pesquisar pesquisar-lateral p-2">
          <select @change="filtrarCidade('estado', $event.target.value)" class="filter-select" id="estado">
            <option value="">Estados</option>
            <option v-for="item in $store.state.estado" :value="item.estado">
              {{ item.estado }}
            </option>
          </select>
        </div>
      </div>

      <hr />

      <!--<div class="px-2 pb-2">
        <div class="pb-3">Região</div>
        <div class="pesquisar pesquisar-lateral p-2">
          <select
            @change="filtrarCidade('regiao', $event.target.value)"
            class="filter-select"
          >
            <option value="">Região</option>
            <option v-for="item in regioes" :value="item.cidade">
              {{ item.regiao }}
            </option>
          </select>
        </div>
      </div>
      <hr />-->

      <div class="px-2 pb-2">
        <div class="title__filter pb-2">Cidade</div>
        <div class="pesquisar pesquisar-lateral p-2">
          <select @change="applyFiltro('cidade', $event.target.value)" class="filter-select" id="cidade">
            <option value="">Cidade</option>
            <option v-for="item in cidades" :value="item.cidade">
              {{ item.cidade }}
            </option>
          </select>
        </div>
      </div>

      <hr />

      <div class="px-2 pb-3 pt-1">
        <div class="title__filter pb-2">Preço</div>
        <div class="row">
          <div class="col-6 pb-1 px-1 mt-2">
            <div class="pesquisar pesquisar-lateral">
              <input
                type="text"
                placeholder="de"
                class="form-control filter-input"
                style="background: none; border: none; color: #000 !important"
                @click="limparInputPreco2"
                v-model="precoMin"
              />
            </div>
            <span style="font-size: 12px; padding-left: 4px; opacity: 0.4">ex: 20.000</span>
          </div>
          <div class="col-6 pb-1 px-1 mt-2">
            <div class="pesquisar pesquisar-lateral" :class="{'input-error': errorPreco}">
              <input
                type="text"
                placeholder="até"
                class="form-control filter-input"
                style="background: none; border: none; color: #000 !important"
                v-model="precoMax"
                @blur="blurPreco"
              />
            </div>
            <div v-if="errorPreco" class="error-message">{{  errorPreco }}</div>
            <span style="font-size: 12px; padding-left: 4px; opacity: 0.4">ex: 50.000 </span>
          </div>
        </div>
      </div>

      <hr />

      <div class="px-2 pb-3 pt-1">
        <div class="title__filter pb-2">Ano</div>
        <div class="row">
          <div class="col-6 pb-1 px-1 mt-2">
            <div class="pesquisar pesquisar-lateral">
              <input
                type="text"
                placeholder="de"
                class="form-control filter-input"
                style="background: none; border: none; color: #000 !important"
                @click="limparInputAno2"
                v-model="anoMin"
              />
            </div>
            <span style="font-size: 12px; padding-left: 4px; opacity: 0.4">ex: 2000</span>
          </div>
          <div class="col-6 pb-1 px-1 mt-2">
            <div class="pesquisar pesquisar-lateral" :class="{'input-error': errorAno}">
              <input
                type="text"
                placeholder="até"
                class="form-control filter-input"
                style="background: none; border: none; color: #000 !important"
                v-model="anoMax"
                @blur="blurAno"
              />
            </div>
            <div v-if="errorAno" class="error-message">{{  errorAno }}</div>
            <span style="font-size: 12px; padding-left: 4px; opacity: 0.4">ex: 2024 </span>
          </div>
        </div>
      </div>

      <hr />

      <div class="px-2 pb-3 pt-1">
        <div class="title__filter pb-2">Quilometragem</div>
        <div class="row">
          <div class="col-6 pb-1 px-1 mt-2">
            <div class="pesquisar pesquisar-lateral">
              <input
                type="text"
                placeholder="de"
                class="form-control filter-input"
                style="background: none; border: none; color: #000 !important"
                @click="limparInputKm2"
                v-model="kmMin"
              />
            </div>
            <span style="font-size: 12px; padding-left: 4px; opacity: 0.4">ex: 0</span>
          </div>
          <div class="col-6 pb-1 px-1 mt-2">
            <div class="pesquisar pesquisar-lateral" :class="{'input-error': errorKm}">
              <input
                type="text"
                placeholder="até"
                class="form-control filter-input"
                style="background: none; border: none; color: #000 !important"
                v-model="kmMax"
                @blur="blurKm"
              />
            </div>
            <div v-if="errorKm" class="error-message">{{  errorKm }}</div>
            <span style="font-size: 12px; padding-left: 4px; opacity: 0.4">ex: 1000 </span>
          </div>
        </div>
      </div>

      <hr />

      <!-- <div>
        <div class="mb-3">
          <div class="mb-2">
            Itens Opcionais
            <p class="mb-0" style="font-size: 13px; opacity: 0.7">
              Click para deslizar
            </p>
          </div>
          <div v-for="item in Api_CategOpcionais" :key="item.id">
            <p
              @click="toggleDropdown(item.id)"
              style="cursor: pointer; opacity: 1; margin: 0"
            >
              <span :class="{ 'arrow-down': isDropdownOpen(item.id) }"
                >&#9658;</span
              >
              <span class="ms-2">{{ item.nome }}</span>
            </p>
            <div v-if="isDropdownOpen(item.id)" class="mb-2 pt-2">
              <div
                v-for="item2 in filterOpcionais(item.id)"
                :key="item2.id"
                class="ps-4"
              >
                <input
                  type="checkbox"
                  :id="'checkbox_' + item2.id"
                  :value="item2.id"
                  v-model="selecionados"
                  class="me-2"
                  @change="exibirEstado"
                />
                <label :for="'checkbox_' + item2.id">{{ item2.nome }}</label>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <!-- Limpar filtro -->
    <div class="px-2 text-center position-absolute pt-3 bg-white" style="left: 0; bottom: 0; width: 250px">
      <button class="col-11 pb-1 px-2 btn border border-1 border-dark" style="color: #000; cursor: pointer" @click="execAllLateral">Limpar Filtros</button>
    </div>
  </aside>
</template>

<script>
import * as api from "../../services/api";

export default {
  name: "TheNavLateral",

  data() {
    return {
      card_resultado: "",
      tipo_veiculo: "",
      novo: "",
      semi_novo: "",
      selectedVehicle: "",

      Api_CategOpcionais: [],
      selecionados: [],
      dropdownState: {},
      array_filtros: [],
      filterMarcas: "",
      filterModelo: "",

      showMarcas: false,
      showModelos: false,
      showEstados: false,

      textMarca: "",
      textModelo: "",
      textEstado: "",

      tipo_de_veiculo: "",

      marcas: [],
      modelos: [],
      categorias: [],
      regioes: [],
      cidades: [],
      precoMax: "",
      precoMin: "",
      anoMax: "",
      anoMin: "",
      errorAno: "",
      errorPreco: "",
      errorKm: "",
      kmMax: "",
      kmMin: "",
      valorTipoVeiculo: "1",
      selectedText: "",

    };
  },

  methods: {
    show_menu_lateral() {
      this.$emit("show_menu_lateral");
    },

    applyFiltro(chaveID, valorID) {
      this.$emit("transmiteData", chaveID, valorID);

      //Fechar navLateral
      //this.show_menu_lateral()
    },

    execAllLateral() {
      this.show_menu_lateral();
      this.$emit("limparFiltro");

      // Limpando inputs
      this.anoMax = "";
      this.anoMin = "";
      this.precoMax = "";
      this.precoMin = "";
      this.kmMax = "";
      this.kmMin = "";
      
      document.getElementById('situacao_veiculo').value = '';
      document.getElementById('tipo_veiculo').value = '';
      document.getElementById('marca').value = '';
      document.getElementById('modelo').value = '';
      document.getElementById('categoria').value = '';
      document.getElementById('estado').value = '';
      document.getElementById('cidade').value = '';

      this.errorAno = "";
      this.errorKm = "";
      this.errorPreco = "";
    },

    /* applyFiltroTipoVeiculo(chaveID, valorID) {
                this.applyFiltro(chaveID, valorID)
                this.filtrarMarca(valorID)
            }, */

    async filtrarMarca(chaveID, event) {
      const selectedIndex = event.target.selectedIndex;
      this.selectedText = event.target.options[selectedIndex].text;

      this.applyFiltro(chaveID, this.selectedText);

      this.marcas = await api.filtrarAnuncio(`api/marcas/listar_marcas?tipo_veiculo=${this.selectedText}`);
    },

    async filtrarModelo(chaveID, valorID) {
      this.applyFiltro(chaveID, valorID);

      this.modelos = await api.filtrarAnuncio(`api/modelos/listar_modelos?nome_marca=${valorID}`);
    },

    async filtrarCategoria(chaveID, valorID) {
      this.applyFiltro(chaveID, valorID);

      this.categorias = await api.filtrarAnuncio(`api/categorias/listar_categorias?nome_categoria=${valorID}`);
    },


    /*async filtrarRegiao(chaveID, valorID) {
      this.applyFiltro(chaveID, valorID);

      this.regioes = await api.filtrarAnuncio(`api/regiao/listar_regiao?estado=${valorID}`);
    },*/

    async filtrarCidade(chaveID, valorID) {
      this.applyFiltro(chaveID, valorID);
      this.cidades = await api.filtrarAnuncio(`api/cidade/listar_cidades?estado=${valorID}`);
    },

    /*async filtrarCidade(chaveID, valorID) {
      this.applyFiltro(chaveID, valorID);

      this.cidades = await api.filtrarAnuncio(`api/cidade/listar_cidades?regiao=${valorID}`);
    },*/

    blurPreco() {
      this.errorPreco = "";

      if(this.precoMax < this.precoMin) {
        this.errorPreco = "O valor máximo deve ser maior que o mínimo."
        return;
      }

      if(this.precoMin == ""){
        this.precoMin = "0";
      }
      
      this.applyFiltro("preco_min", this.precoMin);
      this.applyFiltro("preco_max", this.precoMax);
    },

    limparInputPreco2() {
      this.precoMax = "";
    },

    blurAno() {
      this.errorAno = "";

      if(this.anoMax < this.anoMin) {
        this.errorAno = "O valor máximo deve ser maior que o mínimo."
        return;
      }

      if(this.anoMin == ""){
        this.anoMin = "0";
      }

      this.applyFiltro("ano_modelo_min", this.anoMin);
      this.applyFiltro("ano_modelo_max", this.anoMax);
    },

    limparInputAno2() {
      // alert('limpando')
      this.anoMax = "";
    },

    blurKm() {

      this.erroKm = "";

      if(this.kmMax < this.kmMin) {
        this.errorKm = "O valor máximo deve ser maior que o mínimo."
        return;
      }

      if(this.kmMin == ""){
        this.kmMin = "0";
      }

      this.applyFiltro("quilometragem_min", this.kmMin);
      this.applyFiltro("quilometragem_max", this.kmMax);
    },

    limparInputKm2() {
      //alert('limpando')
      this.kmMax = "";
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
      return this.Api_Opcionais.filter((item) => item.categoria_opcional_id == id);
    },

    exibirEstado() {
      this.applyFiltro("opcionais_id", this.selecionados);
    },
  },

  async created() {

    this.$store.state.tipo_veiculo = await api.listarTipo_Veiculo();
    this.$store.state.estado = await api.listarEstado();
    this.Api_CategOpcionais = await api.listarCategoriaOpcionais();
    this.$store.state.categoriaOpcionais = this.Api_CategOpcionais;
    this.Api_Opcionais = await api.listarOpcionais();
    this.marcas = await api.filtrarAnuncio(`api/marcas/listar_marcas`);
    this.categorias = await api.filtrarAnuncio(`api/categorias/listar_categorias`);

    const url = window.location.href;
    const baseUrl = window.location.origin; 
    const info_url = url.replace(baseUrl, '');  
    console.log(info_url);

    if (info_url == "/resultados") {
      document.getElementById('tipo_veiculo').value = "1";
      document.getElementById('situacao_veiculo').value = "2";
    }
  },
};
</script>

<style>
@import "../../assets/css/navBar.css";
</style>
