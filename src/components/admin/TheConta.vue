<template>
  <div>
    <br /><br />
    <div class="col-lg-8 col-11 mx-auto">
      <h4 class="op-7">
        <span @click="goToAdmin" v-if="admin" style="cursor: pointer">Admin</span>
        <span v-else>Conta</span>
        |
        <span style="font-size: 14px" class="irParaLoja" @click="visitarLoja">Ir para Loja</span> |
        <span style="font-size: 14px" class="irParaLoja" @click="visitarAdmin">Ir para Admin</span>
      </h4>
      <br />

      <div class="bg-white p-4 rounded-3 mb-3 position-relative">
        <p
          class="mb-3 mt-0 titulo-estado"
          style="position: absolute; top: -5px; left: 25px; opacity: 0.6"
        >
          <span v-if="status == 1" class="bg-success p-1 px-2 rounded-3">Ativo</span>
          <span v-else class="bg-dark p-1 rounded-3 px-2">Bloqueado</span>
        </p>

        <h5 class="op-7">Meus Dados</h5>
        <p class="titulo-text mt-0">Nome da Empresa</p>
        <p>{{ anunciante.nome_empresa }}</p>

        <p class="titulo-text mt-0">Responsavel</p>
        <p>{{ anunciante.pessoal_anunciante }}</p>

        <p class="titulo-text mt-0">Tipo de Anunciante</p>
        <p>{{ anunciante.tipo_anunciante }}</p>

        <p class="titulo-text mt-0">CNPJ</p>
        <p>{{ anunciante.cnpj }}</p>

        <p class="titulo-text mt-0">Cep</p>
        <p>{{ anunciante.cep }}</p>

        <p class="titulo-text mt-0">Cep comercial</p>
        <p>{{ anunciante.cep_comercial }}</p>

        <p class="titulo-text mt-0">Número</p>
        <p>{{ anunciante.numero }}</p>

        <p class="titulo-text mt-0">Número comercial</p>
        <p>{{ anunciante.numero_comercial }}</p>

        <p class="titulo-text mt-0">Complemento</p>
        <p>{{ anunciante.complemento }}</p>

        <p class="titulo-text mt-0">Complemento comercial</p>
        <p>{{ anunciante.complemento_comercial }}</p>
      </div>

      <div class="bg-white p-4 rounded-3 mb-3">
        <h5 class="op-7">Contato</h5>
        <p class="titulo-text mt-0">Telefone</p>
        <p>{{ anunciante.telefone }}</p>

        <p class="titulo-text mt-0">Celular</p>
        <p>{{ anunciante.celular }}</p>

        <p class="titulo-text mt-0">WhatsApp</p>
        <p>{{ anunciante.whatsapp }}</p>

        <h5 class="op-7">Plano</h5>
        <p class="titulo-text mt-0">Nome da Empresa</p>
        <p>Nome</p>

        <p class="titulo-text mt-0">Nome da Empresa</p>
        <p>Nome</p>
      </div>

      <div class="bg-white p-4 rounded-3 mb-3">
        <h5 class="op-7">Localização</h5>
        <p class="titulo-text mt-0">Endereço</p>
        <p>{{ anunciante.endereco }}</p>

        <p class="titulo-text mt-0">Bairro</p>
        <p>{{ anunciante.bairro }}</p>

        <h5 class="op-7">Plano</h5>
        <p class="titulo-text mt-0">Nome da Empresa</p>
        <p>Nome</p>

        <p class="titulo-text mt-0">Nome da Empresa</p>
        <p>Nome</p>
      </div>

      <div class="bg-white p-4 rounded-3 mb-3">
        <h5 class="op-7">Planos</h5>
        <p class="titulo-text mt-0">Plano ativo</p>
        <p>{{ anunciante.endereco }}</p>

        <p class="titulo-text mt-0">Bairro</p>
        <p>{{ anunciante.bairro }}</p>
      </div>

      <div class="bg-white p-4 rounded-3 mb-3">
        <h5 class="op-7">Imagens</h5>
        <p class="titulo-text mt-0 mb-1">Logotipo</p>
        <div class="mb-3 col-lg-4 col-6 py-3">
          <img :src="$store.state.fotosAnunciantes.foto" alt="" class="img-fluid" />
        </div>
        <div class="mb-3">
          <input
            type="file"
            name=""
            class="form-control"
            @change="handleFileUpload('api/anunciantes/uploadFoto_anuciantes/', $event, 'foto')"
          />
        </div>

        <p class="titulo-text mt-0 mb-1">Banner Desktop</p>
        <div class="mb-3 col-lg-4 col-6 py-3">
          <img :src="$store.state.fotosAnunciantes.banner_loja" class="img-fluid" />
        </div>
        <div class="mb-3">
          <input
            type="file"
            name=""
            class="form-control"
            @change="
              handleFileUpload('api/anunciantes/banner_loja_anuciantes/', $event, 'banner_loja')
            "
          />
        </div>

        <p class="titulo-text mt-0 mb-1">Banner Movel</p>
        <div class="mb-3 col-lg-4 col-6 py-3">
          <img :src="$store.state.fotosAnunciantes.banner_loja_movel" class="img-fluid" />
        </div>
        <div class="mb-3">
          <input
            type="file"
            name=""
            class="form-control"
            @change="
              handleFileUpload(
                'api/anunciantes/banner_loja_movel_anuciantes/',
                $event,
                'banner_loja_movel'
              )
            "
          />
        </div>
      </div>
    </div>

    <br /><br />
  </div>
</template>

<script>
import * as api from "../../services/api";

export default {
  name: "TheConta",

  data() {
    return {
      anunciante: [],
      categDetalhe: "",
      file: null,
      thumbnailUrl: null,
      quality: 0.8, // Qualidade da imagem (opcional, ajuste conforme necessário)
      index: "",
      imageLogo: "",
      imageBanner: "",
      imageBannerMovel: "",
      admin: false,
    };
  },

  methods: {
    // Carregar foto
    async handleFileUpload(url, event, varFoto) {
      this.file = event.target.files[0];
      this.createThumbnail();

      const id = localStorage.getItem("anunciante_id");

      this.uploadPhoto(url, varFoto, id);
    },

    // Redimensionar foto antes de fazer o upload
    createThumbnail() {
      if (!this.file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          // Calcula as novas dimensões mantendo a proporção
          let maxWidth = 400;
          let maxHeight = 400;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;

          ctx.drawImage(img, 0, 0, width, height);

          // Converte a imagem redimensionada para Blob com qualidade controlada
          canvas.toBlob(
            (blob) => {
              this.file = new File([blob], this.file.name, { type: "image/jpeg" });
            },
            "image/jpeg",
            this.quality
          );

          const thumbnailUrl = canvas.toDataURL("image/jpeg", this.quality);
          this.thumbnailUrl = thumbnailUrl;
        };
        img.src = event.target.result;
      };

      reader.readAsDataURL(this.file);
    },

    async uploadPhoto(url, varFoto, id) {
      if (!this.file) {
        alert("Please select a file.");
        return;
      }

      const formData = new FormData();
      formData.append(varFoto, this.file);

      try {
        const responseData = await api.carregarFotoAnunciante(url, formData, id);
        // Assuming the API returns the URL of the uploaded photo
        //this.imageUrl = responseData.imageUrl;
        if (responseData) {
          const dados = await api.detalharAnunciante(localStorage.getItem("anunciante_id"));
          this.$store.state.fotosAnunciantes = dados[0];
        }
      } catch (error) {
        console.error("Error uploading photo:", error);
        alert("Error uploading photo. Please try again later.");
      }
    },

    // Limpar imagem e campo de seleção
    clearFile() {
      this.file = null;
      this.thumbnailUrl = null;
      this.$refs.fileInput.value = ""; // Limpa o valor do campo de seleção de arquivos
    },

    visitarLoja() {
      this.$router.push({ path: "/loja/" + localStorage.getItem("anunciante_id") });
    },

    visitarAdmin() {
      if (localStorage.getItem("token")) {
        if (localStorage.getItem("perfil") == "admin") {
          this.$router.push({ path: "/anuncios" });
        } else if (localStorage.getItem("perfil") == "superadmin") {
          this.$router.push({ path: "/admin-anuncios" });
        }
      }
    },

    goToAdmin() {
      this.$router.push({ path: "/admin-anuciantes" });
    },
  },

  async created() {
    //const id = parseInt(this.$route.query.id);
    const dados = await api.detalharAnunciante(localStorage.getItem("anunciante_id"));
    this.anunciante = dados[0];
    this.$store.state.fotosAnunciantes = dados[0];

    if (localStorage.getItem("perfil") == "superadmin") {
      this.admin = true;
    }
  },
};
</script>

<style>
.titulo-text {
  font-size: 14px;
  opacity: 0.7;
  margin-bottom: 0px;
  margin-top: 15px;
}

.titulo-estado {
  font-size: 8px;
}

.op-7 {
  opacity: 0.7;
}

.irParaLoja:hover {
  color: crimson;
  cursor: pointer;
}
</style>
