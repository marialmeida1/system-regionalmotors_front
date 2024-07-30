<template>
    <!-- Footer -->

    <footer>
        <div class="rodape-dark" style="padding: 2em 3em;">
            <div class="row d-flex justify-content-evenly">
                <div class="col-12 col-md-6 col-lg-3 border-smoll links">
                    <h5 class="mb-3 ">
                        Comprar
                    </h5>

                    <p @click="execAll('carro')">
                        Carros usados
                    </p>
                    <p @click="execAll('carro')">
                        Carros novos
                    </p>
                    <p @click="execAll('moto')">
                        Motos usadas
                    </p>
                    <p @click="execAll('moto')">
                        Motos novas
                    </p>
                </div>

                <!--<div class="col-12 col-md-6 col-lg-3 border-smoll">
                     <h5>
                        Serviços
                    </h5>
                </div>
                <div class="col-12 col-md-6 col-lg-3 border-smoll">
                     <h5>
                        Revista
                    </h5>
                </div>-->
                
                <div class="col-12 col-md-4 col-lg-3 links">
                    <h5 class="mb-3">
                        Institucional
                    </h5>
                    <p>
                        Termos de Uso
                    </p>
                    <p>
                        Politicas de Privacidade e Segurança
                    </p>
                    <p>
                        Sobre a Regional Motors 
                    </p>
                    <p>
                        Segurança ao comprar
                    </p>
                    <p>
                        Sobre a Empresa
                    </p>
                </div>
            </div>
            <div class="py-4 d-flex justify-content-center">
                <div class="col-12 col-md-3 col-lg-3 text-center mb-3 links">
                    <a href="https://www.instagram.com/regionalmotors/" target="_blank">
                        <div class="me-3 social" style="display: inline-block; width: 45px; height: 45px; border-radius: 100px; border: 2px solid rgba(255,255,255,0.2); padding-top: 10px;">
                            <i class="fab fa-instagram fa-lg" style="color: #f0bd84;"></i>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/@RegionalMotors" target="_blank">
                        <div class="me-3 social" style="display: inline-block; width: 45px; height: 45px; border-radius: 100px; border: 2px solid rgba(255,255,255,0.2); padding-top: 10px;">
                            <i class="fab fa-youtube fa-lg" style="color: #ff5969;"></i>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/people/Regional-Motors/100095121334509/" target="_blank">
                        <div class="social" style="display: inline-block; width: 45px; height: 45px; border-radius: 100px; border: 2px solid rgba(255,255,255,0.2); padding-top: 10px;">
                            <i class="fab fa-facebook-f fa-lg" style="color: #8fd1f7;"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    <div class="py-3 text-center">
        © Copyright 2023 Regional Motors
    </div>
</template>

<script>
    //import $ from "jquery"

    export default {
        name: 'TheFooter',

        methods: {
            goVerVeiculos(veiculo) {
                const parametros = { tipo_veiculo: veiculo };
                this.$router.push({ path: '/resultados', query: parametros });

                this.$emit("filterVeiculoRoute", veiculo)
            },

            emitShowLoader() {
                this.$emit('showLoader')
            },

            execAll(id) {
                this.emitShowLoader()
                this.goVerVeiculos(id)
            },
        }
    }
</script>

<style>
    .rodape-dark {
        background: rgb(27, 30, 36);
        background: linear-gradient(90deg, rgb(27, 30, 36) 1%, rgb(36, 41, 49) 90%);
        color: #fff;
    }

    @media (max-width: 767px) {
        .border-smoll {
            border-bottom: 2px solid crimson;
            margin-bottom: 1em;
        }
    }

    .links p, .links .social {
        cursor: pointer;
    }
</style>