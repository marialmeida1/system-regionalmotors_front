<template>
<!-- O modal Adicionar -->
<div class="modal fade" id="IDaddCarro" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">

            <div class="bg-dar">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  <span class="far fa-user py-2 pt-0"></span> <b>Adicionar Categoria</b>
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>
            <div hidden="">
              {{ categDetalhe }}
            </div>
            <div class="modal-body" style="height: 370px; overflow: auto; margin-bottom: 1em;">
                <!-- Seu formulário aqui -->
                <form>
                  <div class="mb-3">
                      <label for="nome" class="form-label">Nome</label>
                      <input type="text" class="text form-control" id="nome" v-model="nome">
                  </div>

                  <div>
                    Carregar foto
                    <div>
                      <input id="foto_perfil" type="file" name="" @change="handleFileUpload" class="form-control">
                    </div>

                    <div class="pt-3">
                      <img :src="thumbnailUrl" v-if="thumbnailUrl" alt="Thumbnail">
                    </div>

                  </div>
                </form>
            </div>
            <div class="modal-footer">
              <div style="display: flex; flex-wrap: wrap;">
                <div class="col-6">
                  <button type="button" class="ms-3 btn btn-secondary" data-bs-dismiss="modal" aria-label="Fechar">Cancelar</button>
                </div>
                <div class="col-6">
                  <button type="button" class="ms-3 btn btn-primary" @click="add()"
                          data-bs-dismiss="modal" aria-label="Fechar"
                  >Adicionar</button>
                </div>
              </div>  
            </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
  import * as api from "../../services/api";

  export default {
      name: 'TheAddCategoria',

      data() {
        return {
          nome: '',
          desc: 'desc',
          categDetalhe: '',
          file: null,
          thumbnailUrl: null,
          quality: 0.8 // Qualidade da imagem (opcional, ajuste conforme necessário)
        }
      },

      methods: {
        async add() {
          const data = {
            "nome": this.nome,
            "descricao": this.desc
          }

          try {
            const response = await api.adicionarCategoria(data)


            if (response) {


              this.$store.state.adminID = null
              this.$store.state.categorias = await api.listarCategoria()

              this.uploadPhoto('foto_categoria', response.id)

              this.nome = ''



            } else {
              // Caso contrário, exiba uma mensagem de erro ou faça o que for apropriado
              this.showErrorMessage = true;
            }
          } catch (error) {
            // Trate erros de requisição, se necessário
            console.error("Erro na requisição:", error);
            this.showErrorMessage = true;
          }
        
        },

        // Carregar foto
        handleFileUpload(event) {
          this.file = event.target.files[0];
          this.createThumbnail();
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
              canvas.toBlob((blob) => {
                this.file = new File([blob], this.file.name, { type: "image/jpeg" });
              }, "image/jpeg", this.quality);

              const thumbnailUrl = canvas.toDataURL("image/jpeg", this.quality);
              this.thumbnailUrl = thumbnailUrl;
            };
            img.src = event.target.result;
          };

          reader.readAsDataURL(this.file);
        },


        async uploadPhoto(varFoto, id) {
              if (!this.file) {
                alert("Please select a file.");
                return;
              }



              const formData = new FormData();
              formData.append(varFoto, this.file);



              try {

                const responseData = await api.carregarCategorias(formData, id)
                // Assuming the API returns the URL of the uploaded photo
                //this.imageUrl = responseData.imageUrl;
                //this.clearFile()

                this.file = null;
                this.thumbnailUrl = null;

              } catch (error) {
                console.error("Erro ao carregar foto:", error);
                alert("Erro ao carregar foto. Tente novamente.");

              }
          },

          // Limpar imagem e campo de seleção
          clearFile() {
            this.file = null;
            this.thumbnailUrl = null;
            this.$refs.fileInput.value = ''; // Limpa o valor do campo de seleção de arquivos
          }
      },

      async created() {
        // this.categDetalhe = await this.detalharCategoria(3)
      }
  }
</script>