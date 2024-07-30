<template>
  <div class="col-12 px-1 col-lg-10 mx-auto p-lg-0 mb-5">
    <!-- Exibir a largura da tela -->
    <div class="pt-5 ps-2 pb-" style="opacity: ;">
      <br><br>
         
         <h5><b>REVISTA REGIONAL MOTORS</b></h5>
         <p style="color: rgb(177, 1, 1); margin: 0;">
           <b>NOTÍCIAS AUTOMOTIVAS</b>
         </p>
         <br>
     </div>

    <div>
      <div id="splide-noticias" class="splide">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide p-2" v-for="(item, index) in items" :key="index">
              <div class="eliteSlide card-categ" style="height: 365px !important; border-radius: 8px; overflow: hidden;">
                <div class="bg-dark " style="height: 200px">
                  <img class="deApagar custom-image" :src="item.image" alt="PSD4.png" style="width: 100%; height: 200px !important; border-radius: 8px;">
                </div>
                <div class="px-2">
                  <div>
                    <span class="pt-2" style="display: inline-block; height: 50px; overflow: hidden;">
                      <b>Lançamento do novo suzuki auto</b>
                    </span>
                    
                    <span style="display: inline-block; height: 68px; overflow: hidden;">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vel commodi sit quidem. Sed quam hic unde, corporis facere nesciunt facilis veniam sit culpa quia debitis provident, saepe, est odio?
                    </span>
                  </div>
                  <span style="color: crimson; cursor: pointer;">
                    ler mais...
                  </span>
              </div>
              </div>
              <div>
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
import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';

export default {
  name: 'TheCategorias',

  data() {
    return {
      screenWidth: window.innerWidth,
      items: [
        { 
          image: 'https://scontent.flad8-2.fna.fbcdn.net/v/t1.6435-9/60656981_2426726657616675_7567303849485008896_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=111&ccb=1-7&_nc_sid=110474&efg=eyJpIjoidCJ9&_nc_ohc=Zpaev5qohCUAX9qhape&_nc_oc=AQmOQkiAFlib8-bqT4i9q-zlkFvN3JXbyaN7Jni97KbWOiR6BJncKW8IT2StRcRYSPg&_nc_ht=scontent.flad8-2.fna&oh=00_AfCszgUlJjsjiTGD6ouDkE9GDJVDJcK94wivY-0d4UbdwQ&oe=65316E2E', 
          title: 'Cupe', 
          description: 'Descrição do Slide 1' 
        },
        {  
          image: 'https://scontent.flad8-2.fna.fbcdn.net/v/t1.18169-9/21078571_1975921972697148_718222458353539765_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=107&ccb=1-7&_nc_sid=2d5d41&efg=eyJpIjoidCJ9&_nc_ohc=N_Rm3Ynb6UQAX-6LA9w&_nc_ht=scontent.flad8-2.fna&oh=00_AfCYEGnQHwUPPDrBuJmrNUY6ODYKSg8A69GFSaX7BLQ58A&oe=652DEE96', 
          title: 'Minivan', 
          description: 'Descrição do Slide 2' 
        },
        { 
          image: 'https://scontent.flad8-1.fna.fbcdn.net/v/t1.6435-9/127048770_815597649238056_8239238198031919424_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=100&ccb=1-7&_nc_sid=7aed08&efg=eyJpIjoidCJ9&_nc_ohc=v9yEhp-jstgAX83gxjB&_nc_ht=scontent.flad8-1.fna&oh=00_AfCtXxKrtmx3oeivEnw0TaqCwEIW-Lavv0mHkF0w7F8_0g&oe=65313BDB', 
          title: 'SUV', 
          description: 'Descrição do Slide 3' 
        },
        { 
          image: 'https://scontent.flad8-1.fna.fbcdn.net/v/t1.6435-9/171264973_3022957734660228_1966658585964819420_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=103&ccb=1-7&_nc_sid=dd9801&efg=eyJpIjoidCJ9&_nc_ohc=g9ZTP2eexMUAX8ws_BF&_nc_ht=scontent.flad8-1.fna&oh=00_AfCmQ8h5uFsLvOGuPlD9OwhohmD4eoUGW2b3GMfrulPmAA&oe=652E4413', 
          title: 'Conversivel', 
          description: 'Descrição do Slide 3' 
        },
        { 
          image: 'https://scontent.flad8-2.fna.fbcdn.net/v/t1.6435-9/46831529_334016694062823_3374967369708339200_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=111&ccb=1-7&_nc_sid=7aed08&efg=eyJpIjoidCJ9&_nc_ohc=QBEcIqpjXNcAX9CzVjG&_nc_ht=scontent.flad8-2.fna&oh=00_AfApEvNWXxw7O_vzZXdiFpRtCyOkdw2rb7n7CFvcAqW7tA&oe=65314D05', 
          title: 'Esportivo', 
          description: 'Descrição do Slide 3' 
        },
        { 
          image: 'https://scontent.flad8-1.fna.fbcdn.net/v/t1.6435-9/171264973_3022957734660228_1966658585964819420_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=103&ccb=1-7&_nc_sid=dd9801&efg=eyJpIjoidCJ9&_nc_ohc=g9ZTP2eexMUAX8ws_BF&_nc_ht=scontent.flad8-1.fna&oh=00_AfCmQ8h5uFsLvOGuPlD9OwhohmD4eoUGW2b3GMfrulPmAA&oe=652E4413', 
          title: 'Picape', 
          description: 'Descrição do Slide 3' 
        },
        { 
          image: 'https://scontent.flad8-1.fna.fbcdn.net/v/t1.6435-9/171264973_3022957734660228_1966658585964819420_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=103&ccb=1-7&_nc_sid=dd9801&efg=eyJpIjoidCJ9&_nc_ohc=g9ZTP2eexMUAX8ws_BF&_nc_ht=scontent.flad8-1.fna&oh=00_AfCmQ8h5uFsLvOGuPlD9OwhohmD4eoUGW2b3GMfrulPmAA&oe=652E4413', 
          title: 'Hatchback', 
          description: 'Descrição do Slide 3' 
        },
        { 
          image: 'https://scontent.flad8-1.fna.fbcdn.net/v/t1.6435-9/171264973_3022957734660228_1966658585964819420_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=103&ccb=1-7&_nc_sid=dd9801&efg=eyJpIjoidCJ9&_nc_ohc=g9ZTP2eexMUAX8ws_BF&_nc_ht=scontent.flad8-1.fna&oh=00_AfCmQ8h5uFsLvOGuPlD9OwhohmD4eoUGW2b3GMfrulPmAA&oe=652E4413', 
          title: 'Outros', 
          description: 'Descrição do Slide 3' 
        },
      ],
    };
  },

  mounted() {
    new Splide('#splide-noticias', {
      type: 'loop',
      perPage: 2,
      breakpoints: {
        380: {
          perPage: 1,
        },
        768: {
          perPage: 2,
        },
        1024: {
          perPage: 3,
        },
        1280: {
          perPage: 4,
        },
      },
      autoplay: true,
      interval: 3000,
      pagination: false
    }).mount();
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
/* Seus estilos personalizados */
.custom-image {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
  cursor: pointer;
}

.card-categ {
  box-shadow: -3px 2px 8px rgba(0, 0, 0, 0.6);
}

.titulo-categ {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  transition: height 1s ease-in-out;
}

.card-categ:hover .titulo-categ {
  cursor: pointer;
  height: 50%;
  width: 100%;
}
</style>