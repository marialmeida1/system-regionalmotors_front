<template>
  <!-- Footer -->

  <footer>
    <div class="rodape-dark" style="padding: 2em 3em">
      <div class="row d-flex justify-content-evenly">
        <div class="col-12 col-md-6 col-lg-3 border-smoll links">
          <h5 class="mb-3 link-footer-title">Comprar</h5>

          <p class="link-footer"><router-link to="/resultados?tipo_veiculo=carro&situacao_veiculo=1" class="link">Carro Novos</router-link></p>
          <p class="link-footer"><router-link to="/resultados?tipo_veiculo=carro&situacao_veiculo=2" class="link">Carro Usados</router-link></p>
          <p class="link-footer"><router-link to="/resultados?tipo_veiculo=moto&situacao_veiculo=1" class="link">Motos Novas</router-link></p>
          <p class="link-footer"><router-link to="/resultados?tipo_veiculo=moto&situacao_veiculo=2" class="link">Motos Usadas</router-link></p>
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
          <h5 class="mb-3 link-footer-title">Institucional</h5>
          <p class="link-footer">
            <router-link to="/termosuso" class="link">Termos de Uso</router-link>
          </p>
          <p class="link-footer"><router-link to="/privacidadeseguranca" class="link">Politicas de Privacidade e Segurança</router-link></p>
          <p class="link-footer"><router-link to="/sobreregional" class="link">Sobre a Regional Motors</router-link></p>
          <p class="link-footer"><router-link to="/segcomprar" class="link">Segurança ao comprar</router-link></p>
          <p class="link-footer"><router-link to="/sobreempresa" class="link">Sobre a empresa</router-link></p>
        </div>
      </div>
      <div class="py-4 d-flex justify-content-center">
        <div class="col-12 col-md-3 col-lg-3 text-center mb-3 links">
          <a href="https://www.instagram.com/regionalmotors/" target="_blank">
            <div class="me-3 social" style="display: inline-block; width: 45px; height: 45px; border-radius: 100px; border: 2px solid rgba(255, 255, 255, 0.2); padding-top: 10px">
              <i class="fab fa-instagram fa-lg" style="color: #f0bd84"></i>
            </div>
          </a>
          <a href="https://www.youtube.com/@RegionalMotors" target="_blank">
            <div class="me-3 social" style="display: inline-block; width: 45px; height: 45px; border-radius: 100px; border: 2px solid rgba(255, 255, 255, 0.2); padding-top: 10px">
              <i class="fab fa-youtube fa-lg" style="color: #ff5969"></i>
            </div>
          </a>
          <a href="https://www.facebook.com/people/Regional-Motors/100095121334509/" target="_blank">
            <div class="social" style="display: inline-block; width: 45px; height: 45px; border-radius: 100px; border: 2px solid rgba(255, 255, 255, 0.2); padding-top: 10px">
              <i class="fab fa-facebook-f fa-lg" style="color: #8fd1f7"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  </footer>
  <div class="py-3 text-center">© Copyright {{ year }} Regional Motors</div>
</template>

<script>
export default {
  name: "TheFooter",

  data() {
    return {
      year: '',
    }
  },

  methods: {
    
    getYear() {
      const date = new Date();
      const currentYear = date.getFullYear();
      this.year = currentYear;
    }
  },

  created() {
    this.getYear();
  }

};
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

.links p,
.links .social {
  cursor: pointer;
  color: #fff !important;
}

.link {
  color: #fff !important;
}

.link-footer-title {
  font-weight: bold;
}

.link-footer {
  font-size: 0.75rem;
  text-decoration: none;
}

.link-footer a {
  text-decoration: none;
}


</style>
