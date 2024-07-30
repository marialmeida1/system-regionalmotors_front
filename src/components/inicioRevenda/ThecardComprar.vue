<template>
    <div>
        <div class="px-2 p-lg-0">
            <div class="card-comprar position-relative shadow-no-top  col-11 col-md-6 col-lg-4 py-2 p-lg-4 mx-auto mb-3 bg-white" style="border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-radius: 8px; box-shadow: -3px 3px 20px rgba(0,0,0,0.1);">

                <div class="p-2 px-3 p-lg-2">
                    <!-- div style="height: 50px;">
                        <img :src="$store.state.fotosAnunciantes.foto" style="object-fit: contain; width: 100%; height: 100%;">
                    </div -->
                    <div>
                        <h4 class="mb-0 text-center" style="opacity: 0.4; font-weight: 700;">
                            {{ $store.state.fotosAnunciantes.nome_empresa }}
                        </h4>
                    </div>
                    <!-- div class="pt-3 pb-0 text-center">
                        <h4 class="mb-0" style="opacity: 0.4; font-weight: 700;">
                            Loja <i class="fa fa-store ms-1"></i>
                        </h4>
                    </div -->
                    <div style="position: absolute; top: 8px; left: 10px; opacity: 0.4; font-size: 14px;">
                       <strong>
                            Loja <i class="fa fa-store"></i>
                       </strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>

</template>

<script>
  import * as api from "../../services/api";

    export default {
        name: 'ThecardComprar',

        data() {
            return {
                marcaSelecionada: '',
                modeloSelecionada: '',
                searchQuery: '',
                showBar: false

            }
        },

        methods: {
            applyFiltro(chaveID, valorID){

                console.log(chaveID)
                console.log(valorID)

                setTimeout(() => {
                        const parametros = { [chaveID]: valorID};
                    this.$router.push({ path: '/resultados', query: parametros });
                }, 500)
            },

            emitShowLoader() {
                this.$emit('showLoader')
            },

            execAll(marca) {
                this.emitShowLoader()
                this.guardarMarca(marca)
            },

            execAll2(modelo) {
                this.emitShowLoader()
                this.guardarModelo(modelo)
            },

            onFocus() {
                this.showBar = true
                
                window.scrollTo({
                    top: 160, // posição desejada em pixels
                    behavior: 'smooth' // rolagem suave
                });
            },

            onBlur() {
                setTimeout(()=> {
                    this.showBar = false
                    
                    window.scrollTo(0, 0);

                }, 200)
            }
        },

    }
</script>


<style>
    .routerLink {
        text-decoration: none;
        color: #000;
    }

    .routerLink:hover > h5 {
        transition: 0.2s ease;
    }

    .routerLink:hover > h5 {
        color: #000;
        font-size: 22px;
    }

    .link {
        cursor: pointer;
    }

    .rodape-dark-comprar {
        background: rgb(27, 30, 36);
        background: linear-gradient(90deg, rgb(27, 30, 36) 1%, rgb(40, 47, 59) 90%);
        color: #fff;
    }

    @media (max-width: 480px) {
        .card-comprar-text {
            font-size: 14px;
        }
    }

    .contant-main-buscar {
        position: absolute; z-index: 99; width: 100%;
        top: 45px;
    }

    @media(max-width: 1000px) {
        .contant-main-buscar {
            width: 96.5%;
        }
    }

    .content-buscar ul {
        padding: 0;
    }

    .content-buscar ul li {
        list-style-type: none;
        padding: 5px 15px;
        cursor: pointer;
    }

    .content-buscar ul li:hover {
        color: crimson;
    }

    .titulo-buscar {
        margin-top: 15px;
        background-color: crimson;
        width: 150px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 1px 0;
        padding-left: 15px;
    }

</style>