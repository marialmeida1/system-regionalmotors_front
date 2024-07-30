<template>
  <div class="col-12 px-1 col-lg-10 mx-auto p-lg-0">
    <!-- Exibir a largura da tela -->
    <br><br>
    <div class="text-center pb-3 my-3 mt-0">
      <h2>
        Anuncie os seus Serviços e produtos automotivos
      </h2>
      <p style="color: red;">PEÇAS E ACESSÓRIOS, SOM, OFICINAS E LAVAÇÃO</p>
     </div>

    <div>
      <div id="splide-cards" class="splide">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide p-2" v-for="(item, index) in items" :key="index">
              <div class="rounded-2 p-2 px-lg-0">
            <div class="rounded-3 carde p-4" style="height: 230px; color: #fff;">
            <div class="text-center">
            <div style="display: inline-flex; justify-content: center; align-items: center; width: 60px; height: 60px; background-color: #242424; border-radius: 100px; font-size: 30px;" class="mb-2">
                <span :class="item.icon"></span>
            </div>
        </div>
        <div>
            <p class="text-center mb-2">
              <b>{{ item.titulo }}</b>
            </p>
            <p>
              {{ item.desc }}
            </p>
           
        </div>
        </div>
        </div>
            </li>
            <!-- Adicione mais slides conforme necessário -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@splidejs/splide/dist/css/splide.min.css'
import Splide from '@splidejs/splide'
import * as api from "../../services/api"

export default {
  name: 'TheCardes',

  data() {
    return {
      screenWidth: window.innerWidth,
      items: [
        { 
          icon: 'fas fa-car', 
          titulo: 'Auto Peças', 
          desc: 'Quem tem um carro precisa comprar peças e acessórios' 
        },
        { 
          icon: 'fas fa-car-crash', 
          titulo: 'Pinturas e Reparos', 
          desc: 'Oficinas de qualidade e reconhecidas pelos clientes' 
        },
        { 
          icon: 'fas fa-file-audio', 
          titulo: 'Som e acessórios', 
          desc: 'Nada melhor que um som bacana, insulfilm, rodas etc' 
        },
        { 
          icon: 'fas fa-shower', 
          titulo: 'Lavação e polimento', 
          desc: 'Nada melhor que um carro limpinho e brilhando' 
        },
      ],
    };
  },

  mounted() {
    new Splide('#splide-cards', {
      type: 'loop',
      perPage: 1,
      breakpoints: {
        640: {
          perPage: 1,
        },
        768: {
          perPage: 2,
        },
        1024: {
          perPage: 3,
        },
        3000: {
          perPage: 4,
        },
      },
      autoplay: true,
      interval: 3000,
      pagination: false
    }).mount();
  },

  async created() {
    //this.$store.state.anunciantes = await api.listarAnunciante()
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.debouncedHandleResize);
  },

  methods: {
    debouncedHandleResize() {
      // Sua função de redimensionamento
    },
  },
};
</script>

<style>
.carde {
  background: rgb(219,14,14);
  background: linear-gradient(90deg, rgba(219,14,14,1) 2%, rgba(236,8,8,1) 13%, rgba(205,23,23,1) 83%, rgba(184,16,16,1) 100%);
  box-shadow: -5px 5px 8px rgba(0,0,0,0.4 );
  border-radius: 15px !important;
 }
</style>