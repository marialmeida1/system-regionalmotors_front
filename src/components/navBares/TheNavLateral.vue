<template>
    <aside class="bg-dar bg-whit position-relative">
        <div style="height: 88vh; overflow: auto;" class="meu-menu-lateral px-2" >
            <div class="menu-lateral-btn-fechar d-flex justify-content-end">
                <div class="pt-3 pe-3" @click="show_menu_lateral" style="cursor: pointer;">
                    <i class="fas fa-arrow-left"></i>
                </div>
            </div>

            <div class="p-2 pt-4">
                <h5 style="font-size: 16px;">Filtros</h5> 
            </div>

            <div class="px-2 pb-2">
                <div class="pb-3">
                    Situação do veiculo
                </div>
                <div class="pesquisar pesquisar-lateral py-2">
                  <select @change="applyFiltro('situacao_veiculo', $event.target.value)" style="width: 90%; background: none; border: none;" class="filter-select">
                    <option  value="" selected disabled>
                      Situação do veiculo
                    </option>
                    <option value="1">
                        Novo
                    </option>
                    <option value="2">
                        Usado
                    </option>
                  </select>
                </div>

            </div>

            <hr>

            <div class="px-2 pb-2">
                <div class="pb-3">
                    Tipo de veiculo
                </div>
                <div class="pesquisar pesquisar-lateral py-2">
                  <select @change="filtrarMarca('tipo_veiculo', $event)" style="width: 90%; background: none; border: none;" class="filter-select" v-model="valorTipoVeiculo">
                    <option  value="">
                      veiculo
                    </option>
                    <option v-for="item in $store.state.tipo_veiculo" :value="item.id">
                      {{item.tipo_veiculo}}
                    </option>
                  </select>
                </div>
            </div>

            <hr>

            <div class="px-2 pb-2">
                <div class="pb-3">
                    Marca
                </div>
                <div class="pesquisar pesquisar-lateral py-2">
                  <select @change="filtrarModelo('nome_marca', $event.target.value)" style="width: 90%; background: none; border: none;" class="filter-select">
                    <option  value="">
                      Marca
                    </option>
                    <option v-for="item in marcas" :value="item.nome_marca">
                      {{item.nome_marca}}
                    </option>
                  </select>
                </div>

            </div>

            <hr>

            <div class="px-2 pb-2">
                <div class="pb-3">
                    Modelo
                </div>
                <div class="pesquisar pesquisar-lateral py-2">
                  <select @change="applyFiltro('nome_modelo', $event.target.value)" style="width: 90%; background: none; border: none;" class="filter-select">
                    <option  value="">
                      Modelo
                    </option>
                    <option v-for="item in modelos" :value="item.nome_modelo">
                      {{item.nome_modelo}}
                    </option>
                  </select>
                </div>

            </div>

            <hr>

            <div class="px-2 pb-2">
                <div class="pb-3">
                    Estado
                </div>
                <div class="pesquisar pesquisar-lateral py-2">
                  <select @change="filtrarRegiao('estado', $event.target.value)" style="width: 90%; background: none; border: none;" class="filter-select">
                    <option  value="">
                      Estados
                    </option>
                    <option v-for="item in $store.state.estado" :value="item.estado">
                      {{item.estado}}
                    </option>
                  </select>
                </div>

            </div>

            <hr>

            <div class="px-2 pb-2">
                <div class="pb-3">
                    Região
                </div>
                <div class="pesquisar pesquisar-lateral py-2">
                  <select @change="filtrarCidade('regiao', $event.target.value)" style="width: 90%; background: none; border: none;" class="filter-select">
                    <option  value="">
                      Região
                    </option>
                    <option v-for="item in regioes" :value="item.cidade">
                      {{item.regiao}}
                    </option>
                  </select>
                </div>

            </div>
            <hr>

            <div class="px-2 pb-2">
                <div class="pb-3">
                    Cidade
                </div>
                <div class="pesquisar pesquisar-lateral py-2">
                  <select @change="applyFiltro('cidade', $event.target.value)" style="width: 90%; background: none; border: none;" class="filter-select">
                    <option  value="">
                      Cidade
                    </option>
                    <option v-for="item in cidades" :value="item.cidade">
                      {{item.cidade}}
                    </option>
                  </select>
                </div>

            </div>

             <hr>

            <div class="px-2 pb-3 pt-1">
                Preço
                <div class="row">
                    <div class="col-6 pb-1 px-1 mt-2">
                        <div class="pesquisar pesquisar-lateral">
                            <input type="text" placeholder="de" class="form-control" style="background: none; border: none; color: #000 !important;"
                                @click="limparInputPreco2"
                                v-model="precoMin"
                            >
                        </div>
                        <span style="font-size: 14px; opacity: 0.7;">ex: 20.000</span>
                    </div>
                    <div class="col-6 pb-1 px-1 mt-2">
                        <div class="pesquisar pesquisar-lateral">
                            <input type="text" placeholder="até" class="form-control" style="background: none; border: none; color: #000 !important;" 
                             v-model="precoMax"
                             @blur="blurPreco"
                            >
                        </div>
                        <span style="font-size: 14px; opacity: 0.7;">ex: 50.000 </span>
                    </div>
                </div>
            </div>

            <hr>

            <div class="px-2 pb-3 pt-1">
                Ano
                <div class="row">
                    <div class="col-6 pb-1 px-1 mt-2">
                        <div class="pesquisar pesquisar-lateral">
                            <input type="text" placeholder="de" class="form-control" style="background: none; border: none; color: #000 !important;"
                                @click="limparInputAno2"
                                v-model="anoMin"
                            >
                        </div>
                        <span style="font-size: 14px; opacity: 0.7;">ex: 2000</span>
                    </div>
                    <div class="col-6 pb-1 px-1 mt-2">
                        <div class="pesquisar pesquisar-lateral">
                            <input type="text" placeholder="até" class="form-control" style="background: none; border: none; color: #000 !important;" 
                             v-model="anoMax"
                             @blur="blurAno"
                            >
                        </div>
                        <span style="font-size: 14px; opacity: 0.7;">ex: 2024 </span>
                    </div>
                </div>
            </div>

            <hr>

            <div class="px-2 pb-3 pt-1">
                Quilometragem
                <div class="row">
                    <div class="col-6 pb-1 px-1 mt-2">
                        <div class="pesquisar pesquisar-lateral">
                            <input type="text" placeholder="de" class="form-control" style="background: none; border: none; color: #000 !important;"
                                @click="limparInputKm2"
                                v-model="kmMin"
                            >
                        </div>
                        <span style="font-size: 14px; opacity: 0.7;">ex: 0</span>
                    </div>
                    <div class="col-6 pb-1 px-1 mt-2">
                        <div class="pesquisar pesquisar-lateral">
                            <input type="text" placeholder="até" class="form-control" style="background: none; border: none; color: #000 !important;" 
                             v-model="kmMax"
                             @blur="blurKm"
                            >
                        </div>
                        <span style="font-size: 14px; opacity: 0.7;">ex: 1000 </span>
                    </div>
                </div>
            </div>

            <hr>

            <div>
                <div class="mb-3">
                    <div class="mb-2">
                        Itens Opcionais
                        <p class="mb-0" style="font-size: 13px; opacity: 0.7;">Click para deslizar</p>
                    </div>
                    <div v-for="item in Api_CategOpcionais" :key="item.id">
                        <p @click="toggleDropdown(item.id)" style="cursor: pointer; opacity: 1; margin: 0;">
                        <span :class="{ 'arrow-down': isDropdownOpen(item.id) }">&#9658;</span>
                        <span class="ms-2">{{ item.nome }}</span>
                        </p>
                        <div v-if="isDropdownOpen(item.id)" class="mb-2 pt-2">
                        <div v-for="item2 in filterOpcionais(item.id)" :key="item2.id" class="ps-4">
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
            </div>

            <br> <br> <br>

            </div>

            <div class="px-2 text-center position-absolute pt-3 bg-white" style="left: 0; bottom: 0; width: 250px;">
                <button class="col-11 pb-1 px-2 btn border border-1 border-dark" style="color: #000; cursor: pointer;" @click="execAllLateral">
                    Limpar Filtros
                </button>
            </div>
            
        </aside>
</template>

<script>
    import * as api from "../../services/api";

    export default {
        name: 'TheNavLateral',

        data() {
            return {
                card_resultado: '',
                tipo_veiculo: '',
                novo: '',
                semi_novo: '',
                selectedVehicle: '',

                Api_CategOpcionais: [],
                selecionados: [],
                dropdownState: {},
                array_filtros: [],
                filterMarcas: '',
                filterModelo: '',
                
                showMarcas: false,
                showModelos: false,
                showEstados: false,
                
                textMarca: '',
                textModelo: '',
                textEstado: '',

                tipo_de_veiculo: '',

                marcas: [],
                modelos: [],
                regioes: [],
                cidades: [],
                precoMax: '',
                precoMin: '',
                anoMax: '',
                anoMin: '',
                kmMax: '',
                kmMin: '',
                valorTipoVeiculo: '1',
                selectedText: ''
            }
        },

        methods: {
            show_menu_lateral(){
                this.$emit('show_menu_lateral')
            },

            applyFiltro(chaveID, valorID){
                this.$emit("transmiteData", chaveID, valorID)

                //Fechar navLateral
                //this.show_menu_lateral()
            },


            execAllLateral() {
                this.show_menu_lateral()
                this.$emit("limparFiltro")

            },

            /* applyFiltroTipoVeiculo(chaveID, valorID) {
                this.applyFiltro(chaveID, valorID)
                this.filtrarMarca(valorID)
            }, */

            async filtrarMarca(chaveID, event) {
                console.log("ola mundo")

                const selectedIndex = event.target.selectedIndex;
                this.selectedText = event.target.options[selectedIndex].text;

                //console.log(selectedIndex)
                //console.log("texto" + this.selectedText)

                this.applyFiltro(chaveID, this.selectedText)

                this.marcas = await api.filtrarAnuncio(`api/marcas/listar_marcas?tipo_veiculo=${this.selectedText}`)
            },

            async filtrarModelo(chaveID, valorID) {
                this.applyFiltro(chaveID, valorID)

                this.modelos = await api.filtrarAnuncio(`api/modelos/listar_modelos?nome_marca=${valorID}`)
            },

            async filtrarRegiao(chaveID, valorID) {
                this.applyFiltro(chaveID, valorID)

                this.regioes = await api.filtrarAnuncio(`api/regiao/listar_regiao?estado=${valorID}`)
            },

            async filtrarCidade(chaveID, valorID) {
                this.applyFiltro(chaveID, valorID)

                this.cidades = await api.filtrarAnuncio(`api/cidade/listar_cidades?regiao=${valorID}`)
            },

            blurPreco() {
                this.applyFiltro("preco_min", this.precoMin)
                this.applyFiltro("preco_max", this.precoMax)
            },

            limparInputPreco2() {
                // alert('limpando')
                this.precoMax = ""
            },

            blurAno() {
                this.applyFiltro("ano_modelo_min", this.anoMin)
                this.applyFiltro("ano_modelo_max", this.anoMax)
            },

            limparInputAno2() {
                // alert('limpando')
                this.anoMax = ""
            },

            blurKm() {

                this.applyFiltro("quilometragem_min", this.kmMin)
                this.applyFiltro("quilometragem_max", this.kmMax)
            },

            limparInputKm2() {
                //alert('limpando')
                this.kmMax = ""
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
                return this.Api_Opcionais.filter(item => item.categoria_opcional_id == id);
            },

            exibirEstado() {
                console.log(this.selecionados);
                this.applyFiltro('opcionais_id', this.selecionados)

            }
        },

        async mounted() {
           this.card_resultado = document.getElementById('card-resultado')

           if (keys[0] == 'tipo_veiculo') {
                this.valor = this.$route.query.tipo_veiculo
            } else {
                this.valor = "carro"
            }

            this.valor = "ola mundo"
        },

        async created() {
            this.$store.state.tipo_veiculo = await api.listarTipo_Veiculo()
            this.$store.state.estado = await api.listarEstado()
            this.Api_CategOpcionais = await api.listarCategoriaOpcionais()
            this.$store.state.categoriaOpcionais = this.Api_CategOpcionais
            this.Api_Opcionais = await api.listarOpcionais()
            this.marcas = await api.filtrarAnuncio(`api/marcas/listar_marcas?tipo_veiculo=carro`)

            //alert(JSON.stringify(this.marcas))

        },
    }
</script>

<style>
    @import "../../assets/css/navBar.css"
</style>