<template></template>

<script>
import * as api from "../../services/api";

export default {
  name: "TheDestaque",

  data() {
    return {
      pageReload: false,
      carregar: true,
    };
  },

  async beforeCreate() {
    // Pega a URL atual
    const url = window.location.href;
    const hostname = new URL(url).hostname;

    // Extrair a parte principal da URL sem o hash e o caminho
    const newUrl = `${window.location.protocol}//${hostname}:${window.location.port}`;
    console.log(newUrl)

    // Verifica se a URL contém a palavra "regionalmotors"
    if (url.includes("regionalmotors")) {
      window.location.href = `${newUrl}/`;
      console.log(window.location.href);
    } else {
      const data = {
        site: hostname,
      };

      console.log("awrawea")

      const urlRequest = "api/anunciantes/buscar_anunciante_por_site";

      try {
        // Faz a requisição para obter o ID do anunciante
        const response = await api.getIdToUrl(urlRequest, data);

        if (response && response.id) {
          // Redireciona para a nova URL com o ID do anunciante
          window.location.href = `${newUrl}/loja/${response.id}`;
        } else {
          console.log("Anunciante não encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar o anunciante:", error);
      }
    }
  },
};
</script>

<style>
.desc-vitrine {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
}
</style>
