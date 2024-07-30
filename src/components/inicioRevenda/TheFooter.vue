<template>
    <!-- Footer -->

    <footer>
        <div class="rodape-dark" style="padding: 2em 3em;">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 border-smoll">
                    <h5>
                        Endereço
                    </h5>
                    <p>
                        {{ $store.state.fotosAnunciantes.endereco }}
                    </p>
                    <p>
                        {{ $store.state.fotosAnunciantes.bairro }}
                    </p>
                    <p>
                        {{ $store.state.fotosAnunciantes.cidade }}
                    </p>
                    <p>
                        {{ $store.state.fotosAnunciantes.telefone }}
                    </p>
                </div>
                <div class="col-12 col-md-6 col-lg-4 border-smoll">
                     <h5>
                        Sobre nós
                    </h5>
                </div>
                <div class="col-12 col-md-4 col-lg-4 border-smoll">
                    <h5>
                        Institucional
                    </h5>
                    <p>
                        Termos de Uso
                    </p>
                    <p>
                        Politicas de Privacidade e Segurança
                    </p>
                </div>
            </div>
            <div class="py-4 d-flex justify-content-center">
                <!-- div class="col-12 col-md-3 col-lg-3 text-center mb-3">
                    <div class="me-3" style="display: inline-block; width: 45px; height: 45px; border-radius: 100px; border: 2px solid rgba(255,255,255,0.2); padding-top: 10px;">
                        <i class="fab fa-instagram fa-lg" style="color: #f0bd84;"></i>
                    </div>
                    <div class="me-3" style="display: inline-block; width: 45px; height: 45px; border-radius: 100px; border: 2px solid rgba(255,255,255,0.2); padding-top: 10px;">
                        <i class="fab fa-youtube fa-lg" style="color: #ff5969;"></i>
                    </div>
                    <div style="display: inline-block; width: 45px; height: 45px; border-radius: 100px; border: 2px solid rgba(255,255,255,0.2); padding-top: 10px;">
                        <i class="fab fa-facebook-f fa-lg" style="color: #8fd1f7;"></i>
                    </div>
                </div -->
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
</style>