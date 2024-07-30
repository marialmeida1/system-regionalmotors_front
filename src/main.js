import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // Importe o arquivo Vuex Store
import VueSplide from '@splidejs/vue-splide';
import VueLazyload from 'vue-lazyload'

const app = createApp(App)

app.use(router)
app.use(store) // Use o Vuex Store
app.use(VueSplide)
app.use(VueLazyload, {
  preLoad: 1.3,
  error: 'imgError.png',
  //loading: 'assets/load.gif',
  attempt: 1,
  listenEvents: [ 'scroll','resize','animationend', 'transitionend' ]
});

app.mount('#app')