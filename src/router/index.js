import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { allowedUrls } from "../main";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/inicioregional",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/inicio",
      name: "Inicio",
      component: () => import("../views/InicioInicioView.vue"),
    },
    {
      path: "/",
      name: "Inicio Regional",
      component: () => import("../views/Redirection.vue"),
    },
    {
      path: "/resultados",
      name: "Resultados",
      component: () => import("../views/Resultados_CarroView.vue"),
    },
    {
      path: "/resultadosrevenda",
      name: "Resultados Revenda",
      component: () => import("../views/Resultados_RevendaCarroView.vue"),
    },
    {
      path: "/verveiculo",
      name: "Ver Veiculo",
      component: () => import("../views/VerVeiculoView.vue"),
    },
    {
      path: "/verveiculorevenda",
      name: "Ver Veiculo Revenda",
      component: () => import("../views/VerVeiculoRevendaView.vue"),
    },
    {
      path: "/anuncios",
      name: "Anúncios",
      component: () => import("../views/AnunciosView.vue"),
    },
    {
      path: "/admin-detalhes-anuncios",
      name: "detalhes",
      component: () => import("../views/DetalhesAnunciosAdminView.vue"),
    },
    {
      path: "/detalhes-anuncio",
      name: "Detalhar Anuncio",
      component: () => import("../views/DetalhesAnuncioView.vue"),
    },
    {
      path: "/admin-detalhes-anunciante",
      name: "Detalhar Anunciantes",
      component: () => import("../views/DetalhesAnunciantesView.vue"),
    },
    {
      path: "/admin-categorias",
      name: "Categorias",
      component: () => import("../views/CategoriasView.vue"),
    },
    {
      path: "/admin-anuncios",
      name: "Admin Anúncios",
      component: () => import("../views/AnuciosAdminView.vue"),
    },
    {
      path: "/admin-marcas",
      name: "Marcas",
      component: () => import("../views/MarcasView.vue"),
    },
    {
      path: "/admin-modelos",
      name: "Modelos",
      component: () => import("../views/ModelosView.vue"),
    },
    {
      path: "/admin-planos",
      name: "Planos",
      component: () => import("../views/PlanosView.vue"),
    },
    {
      path: "/admin-anuciantes",
      name: "Anunciantes",
      component: () => import("../views/AnuciantesView.vue"),
    },
    {
      path: "/cadastrar",
      name: "Cadastrar",
      component: () => import("../views/CadastrarView.vue"),
    },
    {
      path: "/conta",
      name: "Conta",
      component: () => import("../views/ContaView.vue"),
    },
    {
      path: "/admin-transmissao",
      name: "Transmissao",
      component: () => import("../views/TransmissaoView.vue"),
    },
    {
      path: "/admin-combustivel",
      name: "Combustivel",
      component: () => import("../views/CombustivelView.vue"),
    },
    {
      path: "/admin-tecnologia",
      name: "Tecnologia",
      component: () => import("../views/TecnologiaView.vue"),
    },
    {
      path: "/admin-cores",
      name: "Cores",
      component: () => import("../views/CoresView.vue"),
    },
    {
      path: "/admin-estado",
      name: "Estado",
      component: () => import("../views/EstadoView.vue"),
    },
    {
      path: "/admin-regiao",
      name: "Regiao",
      component: () => import("../views/RegiaoView.vue"),
    },
    {
      path: "/admin-cidade",
      name: "Cidade",
      component: () => import("../views/CidadeView.vue"),
    },
    {
      path: "/admin-tipo-de-veiculo",
      name: "Tipo de Veiculo",
      component: () => import("../views/Tipo_VeiculoView.vue"),
    },
    {
      path: "/admin-categoria-opcionais",
      name: "Categoria Opcionais",
      component: () => import("../views/CategOpcionaisView.vue"),
    },
    {
      path: "/admin-opcionais",
      name: "Opcionais",
      component: () => import("../views/OpcionaisView.vue"),
    },
    {
      path: "/admin-user",
      name: "Users",
      component: () => import("../views/UserView.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/estoque",
      name: "Estoque Revenda",
      component: () => import("../views/EstoqueRevendaView.vue"),
    },
    {
      path: "/termosuso",
      name: "Termos de Uso",
      component: () => import("../views/TermosUsoView.vue"),
    },
    {
      path: "/privacidadeseguranca",
      name: "Políticas de Privacidade e Segurança",
      component: () => import("../views/PrivSegView.vue"),
    },
    {
      path: "/sobreregional",
      name: "Sobre a Regional Motors",
      component: () => import("../views/SobreRmView.vue"),
    },
    {
      path: "/seg ",
      name: "Segurança ao Comprar",
      component: () => import("../views/SegComprar.vue"),
    },
    {
      path: "/sobreempresa",
      name: "Sobre a empresa",
      component: () => import("../views/SobreEmpresa.vue"),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const url = window.location.href;
  const hostname = new URL(url).hostname.replace(/^www\./, "");

  // CÓDIGOS DE DESENVOLVIMENTO
  if(hostname.includes("homologrm")) {
    to.meta.pageType = "principal"; 
    localStorage.setItem("typePage", "developRegional")
    return next();
  }

  if(hostname.includes("revendarm")) {
    localStorage.setItem("typePage", "developRevenda")
    localStorage.setItem("storeId", 40); // Armazena o ID de uma revenda exemplo
    to.meta.pageType = "revenda"; // Define o tipo de página
  }


  // CÓDIGOS DE PRODUÇÃO
  if (hostname.includes("regionalmotors")) {
    to.meta.pageType = "principal"; // Define tipo de página
    localStorage.setItem("typePage", "mainRegional")
    return next();
  }

  const isAllowed = allowedUrls.some((urlObj) => urlObj.site === hostname); // Verifica domínios
  if (isAllowed) {
    const targetRevenda = allowedUrls.find((urlObj) => urlObj.site === hostname)?.id;

    if (targetRevenda) {
      localStorage.setItem("typePage", "mainRevenda")
      localStorage.setItem("storeId", targetRevenda); // Armazena o ID da revenda
      to.meta.pageType = "revenda"; // Define tipo de página
    }
    return next();
  }
  
  return next(); // Caso não seja permitido, continua normalmente
});


router.afterEach((to, from) => {
  document.activeElement?.blur();
  window.scrollTo(0, 0);
  setTimeout(() => {}, 100);
});

export default router;
