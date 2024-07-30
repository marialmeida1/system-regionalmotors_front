import { createStore } from 'vuex'

const store = createStore({
  state: {
    userName: '',
    
    modalCriarAnuncio: '',
    
    anunciante_id: null,

    vitrine: [],

    todosFiltros: [],

    results: true,
    
    fechaModal: false,

    anuncios: '',

    fotosAnunciantes: '',

    foto1: null,
    foto2: null,
    foto3: null,
    foto4: null,
    foto5: null,
    foto6: null,
    foto7: null,
    foto8: null,
    foto9: null,
    foto10: null,

    anunciantes: '',

    categorias: '',

    planos: '',

    planos_anunciantes: '',

    anuncioID: null,

    adminID: null,

    detalharAnuncio: null,

    progressImg: 0,

    marcas: [],

    modelos: [],

    combustivel: [],

    transmissao: [],

    tecnologia: [],

    cores: [],

    estado: [],

    regiao: [],

    cidade: [],

    tipo_veiculo: [],

    fabricante: [],

    seguranca: [],

    conforto: [],

    categoriaOpcionais: [],

    opcionais: [],

    user: [],

    resultados: []

  },
  mutations: {
    updateProgress(state, progress) {
      state.progressImg = progress;
    },

    updateFotos(state, fotos) {
      state.dados_fotos = fotos;
    },
  },
  actions: {
    // Suas ações aqui
  },
  getters: {
    // Seus getters aqui
  }
})

export default store