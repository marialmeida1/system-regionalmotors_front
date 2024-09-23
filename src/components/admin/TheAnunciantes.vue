<template>
  <main class="content">
    <div class="py-2" style="box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2)">
      <!-- Filtros-->
      <div class="row">
        <div class="col-8 col-lg-10">
          <div class="row">
            <div class="col-2 pesquisar-filter p-0">
              <div class="pt-2" @click="show_menu_lateral">
                <i class="fas fa-filter fa-lg"></i>
              </div>
            </div>
            <div class="col-10 col-lg-12 p-0">
              <div class="pesquisar" style="width: 100%; position: relative; border: none">
                <input
                  type="text"
                  class="ps-4 pt-2"
                  style="width: 89%; color: #000"
                  v-model="filtro"
                  placeholder="Filtrar dados"
                />
                <i
                  class="fas fa-search"
                  style="position: absolute; left: 8px; top: 36%; bottom: 0; margin: auto"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 bg-inf col-lg-2 pesquisar-mais-relevantes" hidden>
          <div class="row">
            <div class="pesquisar-link-icon col-4 pt-3 invisible">
              <i class="fas fa-th-large fa-lg"></i>
            </div>
            <div class="pesquisar-link-icon col-4 text-center pt-3 pt-3 invisible">
              <i class="fas fa-th-list fa-lg"></i>
            </div>
            <div class="menu-link position-relative pesquisar-link-icon col-4 pt-3">
              <i class="fas fa-exchange-alt fa-rotate-90 fa-l relevante"></i>
              <div
                class="sub-menu-desktop mais-relevantes position-absolute py-2"
                style="z-index: 99; width: 170px; left: -135px !important"
              >
                <div class="pb-3"></div>
                <div
                  class="bg-dark p-2 text-cente"
                  style="border-bottom-left-radius: 8px; border-bottom-right-radius: 8px"
                >
                  <span class="ps-2">Filtrar Anucios</span>
                  <p class="mt-2">Todos</p>
                  <p>Pendente</p>
                  <p>Em andamento</p>
                  <p>Rejeitado</p>
                  <p>Terminado</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>

    <div>
      <!-- Links -->
      <div class="py-2 pt-3 px-2" style="font-size: 13px">
        <span class="me-2 p-1 px-2 rounded-3 bg-dark" style="opacity: 0.6">
          <b>Admin/Anunciantes</b>
        </span>
      </div>
    </div>

    <div class="position-relative" style="height: 72vh">
      <div class="p-2 pt-3 table-responsive" style="height: 100%">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                <div>
                  <select
                    class="form-select"
                    @change="applyFiltro('nome_empresa', $event.target.value)"
                  >
                    <option disabled selected>Empresa</option>
                    <option value="0">Empresa</option>
                    <option v-for="item in anunciantesOrdenados">
                      {{ item.nome_empresa }}
                    </option>
                  </select>
                </div>
              </th>
              <th scope="col">
                <div>
                  <select
                    class="form-select"
                    @change="applyFiltro('tipo_anunciante', $event.target.value)"
                  >
                    <option disabled selected>Tipo</option>
                    <option value="0">Tipo</option>
                    <option value="Revenda">Revenda</option>
                    <option value="Concessionaria">Concessionaria</option>
                    <option value="Particular">Particular</option>
                  </select>
                </div>
              </th>
              <th scope="col" class="invisible">
                <div>
                  <select class="form-select">
                    <option>Telefone</option>
                    <option disabled>sem filtros</option>
                  </select>
                </div>
              </th>
              <th scope="col" class="invisible">
                <div>
                  <select class="form-select">
                    <option>Email</option>
                    <option disabled>sem filtros</option>
                  </select>
                </div>
              </th>
              <th scope="col">
                <div>
                  <select
                    class="form-select"
                    @change="applyFiltroEstado('estado', $event.target.value)"
                  >
                    <option disabled selected>Estado</option>
                    <option value="0">Estado</option>
                    <option v-for="item in $store.state.estado">
                      {{ item.estado }}
                    </option>
                  </select>
                </div>
              </th>
              <th scope="col">
                <div>
                  <select
                    class="form-select"
                    @change="applyFiltroRegioes('regiao', $event.target.value)"
                  >
                    <option disabled selected>Regiao</option>
                    <option value="0">Regiao</option>
                    <option v-for="item in regioes">
                      {{ item.regiao }}
                    </option>
                  </select>
                </div>
              </th>
              <th scope="col">
                <div>
                  <select class="form-select" @change="applyFiltro('cidade', $event.target.value)">
                    <option disabled selected>Cidade</option>
                    <option value="0">Cidade</option>
                    <option v-for="item in cidades">
                      {{ item.cidade }}
                    </option>
                  </select>
                </div>
              </th>
              <th scope="col">
                <div>
                  <select class="form-select" @change="applyFiltro('status', $event.target.value)">
                    <option disabled selected>Status</option>
                    <option value="0">Status</option>
                    <option value="1">Ativo</option>
                    <option value="2">Bloqueado</option>
                  </select>
                </div>
              </th>
              <th scope="col" class="text-center">...</th>
            </tr>

            <tr style="background-color: crimson; color: #fff">
              <th scope="col">
                <div style="width: 70px">#</div>
              </th>
              <th scope="col">Empresa</th>
              <th scope="col">Tipo</th>
              <th scope="col">Telefone</th>
              <th scope="col">Email</th>
              <th scope="col">Estado</th>
              <th scope="col">Regiao</th>
              <th scope="col">Cidade</th>
              <th scope="col">Status</th>
              <th scope="col" class="text-center">Açoes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in anunciantesFiltradas" :key="item.id">
              <td class="py-4 pb-5">
                <div>
                  <div style="position: relative">
                    <div style="width: 100px">
                      <img :src="item.foto" class="img-fluid" />
                    </div>

                    <!-- div>
                                            <div>
                                                <label>carregar</label>
                                              <input id="foto_perfil" type="file" name="" @change="handleFileUpload($event, item.id)" class="form-control">
                                            </div>
                                            <div>
                                                <button @click="uploadPhoto('foto', '7')">
                                                    carregar
                                                </button>
                                            </div>

                                            <div class="pt-3">
                                              <img :src="thumbnailUrl" v-if="thumbnailUrl" alt="Thumbnail">
                                            </div>
                                        </div -->

                    <label
                      for="fotoAnunciante"
                      style="position: absolute; bottom: -10px; right: 5px"
                      @click="getIdUpload(item.id)"
                    >
                      <i class="fas fa-camera"></i>
                    </label>
                    <input
                      id="fotoAnunciante"
                      type="file"
                      name=""
                      @change="
                        handleFileUpload(
                          'api/anunciantes/uploadFoto_anuciantes/',
                          $event,
                          'banner_loja'
                        )
                      "
                      class="d-none"
                    />
                  </div>
                </div>
              </td>
              <td class="pt-4">
                <div>
                  {{ item.nome_empresa }}
                </div>
              </td>
              <td class="pt-4">
                <div style="width: 180px">
                  {{ item.tipo_anunciante }}
                </div>
              </td>
              <td class="pt-4">
                <div style="width: 200px">
                  {{ item.telefone }}
                </div>
              </td>
              <td class="pt-4">
                <div>
                  {{ item.email }}
                </div>
              </td>
              <td class="pt-4">
                <div style="width: 180px">
                  {{ item.estado }}
                </div>
              </td>
              <td class="pt-4">
                <div style="width: 180px">
                  {{ item.regiao }}
                </div>
              </td>
              <td class="pt-4">
                <div style="width: 180px">
                  {{ item.cidade }}
                </div>
              </td>
              <td class="pt-4">
                <div
                  style="width: 180px"
                  v-if="item.status == 1"
                  class="bg-success p-1 rounded-3 text-center"
                >
                  Ativo
                </div>
                <div
                  v-else
                  style="width: 180px; background-color: rgba(0, 0, 0, 0.5); color: #fff"
                  class="p-1 rounded-3 text-center"
                >
                  Bloqueado
                </div>
              </td>

              <td class="text-center py-4">
                <div style="width: 150px">
                  <span @click="showDetalhes(item.id)" style="cursor: pointer">
                    <i class="fas fa-eye"></i>
                  </span>

                  <span
                    class="mx-3"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#EditarAnunciante"
                    @click="showgetDados(item.id)"
                  >
                    <i class="fas fa-pencil-alt"></i>
                  </span>

                  <span
                    class="fas fa-trash-alt"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#EliminarAnunciante"
                    @click="modalApagar(item.id)"
                  ></span>

                  <span
                    class="fas fa-users ms-3"
                    style="cursor: pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#showPlano"
                    @click="mostrarPlanoAnunciante(item.id)"
                  >
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        class="btn btn-add rounded-circle position-absolute d-flex justify-content-center align-items-center"
        style="left: 8px; z-index: 99"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#AddAnuciante"
      >
        <i class="fas fa-plus"></i>
      </button>
    </div>

    <!-- Editar Anunciante  -->
    <div
      class="modal fade"
      id="EditarAnunciante"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="bg-dar" id="criarAnuncio">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel" style="font-size: 17px">
                <span class="fas fa-bullhorn py-2 pt-0"></span> <b>Editar Anunciante</b>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fechar"
              ></button>
            </div>
            <div class="modal-body" style="height: 470px; overflow: auto; margin-bottom: 1em">
              <form>
                <div class="p-2 pt-0 row mb-2 mt-md-1 mt-lg-1" style="opacity: 0.8">
                  <div
                    class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1"
                    style="border-top-left-radius: 8px; font-size: 12px"
                  >
                    Informaçoes do Anunciante
                  </div>
                  <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important">
                    <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px"></div>
                  </div>
                </div>

                <div class="row">
                  <div class="mb-3">
                    <label for="estado" class="form-label">Tipo de Anunciante</label>
                    <select class="form-select" v-model="tipo_anunciante">
                      <option value="0" selected disabled>Selecionar</option>
                      <div value="">
                        <span v-if="tipo_anunciante === 1">Revenda</span>
                        <span v-if="tipo_anunciante === 2">Concessionaria</span>
                        <span v-if="tipo_anunciante === 3">Particular</span>
                      </div>
                      <option value="Revenda">Revenda</option>
                      <option value="Concessionaria">Concessionaria</option>
                      <option value="Particular">Particular</option>
                    </select>
                  </div>

                  <div class="px-2">
                    <div class="mb-3">
                      <label for="Nome" class="form-label">Nome da Empresa</label>
                      <input
                        type="text"
                        id="Nome"
                        placeholder="Nome"
                        class="form-control"
                        v-model="nome_empresa"
                      />
                    </div>
                  </div>

                  <div class="px-2">
                    <div class="mb-3">
                      <label for="Nome" class="form-label">CNPJ</label>
                      <input
                        type="text"
                        id="Nome"
                        placeholder="CNPJ"
                        class="form-control"
                        v-model="cnpj"
                      />
                    </div>
                  </div>

                  <div class="px-">
                    <div class="mb-3">
                      <label for="Telefone" class="form-label">Telefone</label>
                      <input
                        type="text"
                        id="Telefone"
                        placeholder="Telefone"
                        class="form-control"
                        v-model="telefone"
                      />
                    </div>
                  </div>

                  <div class="px-">
                    <div class="mb-3">
                      <label for="Telefone" class="form-label">Celular</label>
                      <input
                        type="text"
                        id="Telefone"
                        placeholder="Celular"
                        class="form-control"
                        v-model="celular"
                      />
                    </div>
                  </div>

                  <div class="px-">
                    <div class="mb-3">
                      <label for="Telefone" class="form-label">WhatsApp</label>
                      <input
                        type="text"
                        id="Telefone"
                        placeholder="WhatsApp"
                        class="form-control"
                        v-model="whatsapp"
                      />
                    </div>
                  </div>

                  <div class="p-2 pt-0 row mb-2 mt-md-1 mt-lg-1" style="opacity: 0.8">
                    <div
                      class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1"
                      style="border-top-left-radius: 8px; font-size: 12px"
                    >
                      Dados de usuario
                    </div>
                    <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important">
                      <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px"></div>
                    </div>
                  </div>

                  <div class="px-">
                    <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        class="form-control"
                        v-model="email"
                      />
                    </div>
                  </div>

                  <div class="px-">
                    <div class="mb-3">
                      <label for="email" class="form-label">Senha</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Senha"
                        class="form-control"
                        v-model="senha"
                      />
                    </div>
                  </div>

                  <div class="px-">
                    <div class="mb-3">
                      <label for="email" class="form-label">Site</label>
                      <input
                        id="email"
                        type="text"
                        placeholder="Site"
                        class="form-control"
                        v-model="site"
                      />
                    </div>
                  </div>

                  <div class="px-">
                    <div class="mb-3">
                      <label for="email" class="form-label">Instagram</label>
                      <input
                        id="email"
                        type="text"
                        placeholder="Instagram"
                        class="form-control"
                        v-model="instagram"
                      />
                    </div>
                  </div>

                  <div class="px-">
                    <div class="mb-3">
                      <label for="email" class="form-label">Facebook</label>
                      <input
                        id="email"
                        type="text"
                        placeholder="Facebook"
                        class="form-control"
                        v-model="facebook"
                      />
                    </div>
                  </div>

                  <div class="px-">
                    <div class="mb-3">
                      <label for="email" class="form-label">Pessoa Responsavel</label>
                      <input
                        id="email"
                        type="text"
                        placeholder="Pessoa Responsavel"
                        class="form-control"
                        v-model="Pessoal_responsavel"
                      />
                    </div>
                  </div>

                  <div class="px-">
                    <p class="titulo-text mt-0 mb-1">Banner Desktop</p>
                    <div class="mb-3 col-lg-4 col-6 py-3">
                      <img :src="this.banner" class="img-fluid" />
                    </div>
                    <div class="mb-3">
                      <input
                        type="file"
                        name=""
                        class="form-control"
                        @change="
                          handleFileUpload(
                            'api/anunciantes/banner_loja_anuciantes/',
                            $event,
                            'banner_loja'
                          )
                        "
                      />
                    </div>
                  </div>

                  <div class="px-">
                    <p class="titulo-text mt-0 mb-1">Banner Móvel</p>
                    <div class="mb-3 col-lg-4 col-6 py-3">
                      <img :src="this.banner_movel" class="img-fluid" />
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

                  <div class="p-2 pt-0 row mb-2 mt-md-1 mt-lg-1" style="opacity: 0.8">
                    <div
                      class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1"
                      style="border-top-left-radius: 8px; font-size: 12px"
                    >
                      Dados de Endereço
                    </div>
                    <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important">
                      <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px"></div>
                    </div>
                  </div>

                  <div class="px-2">
                    <div class="mb-3">
                      <label for="Nome" class="form-label">CEP</label>
                      <input
                        type="text"
                        id="Nome"
                        placeholder="CEP"
                        class="form-control"
                        v-model="cep"
                      />
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="cidade" class="form-label">Regiao</label>
                    <select class="form-select" v-model="regiao_id">
                      <option value="0" selected disabled>Selecionar</option>
                      <option v-for="item in api_regiao" :key="item.id" :value="item.id">
                        {{ item.regiao }}
                      </option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label for="cidade" class="form-label">Cidade</label>
                    <select class="form-select" v-model="cidade_id">
                      <option value="0" selected disabled>Selecionar</option>
                      <option v-for="item in api_cidade" :key="item.id" :value="item.id">
                        {{ item.cidade }}
                      </option>
                    </select>
                  </div>

                  <div class="px-">
                    <div class="mb-3">
                      <label for="email" class="form-label">Bairro</label>
                      <input
                        id="email"
                        type="text"
                        placeholder="Bairro"
                        class="form-control"
                        v-model="bairro"
                      />
                    </div>
                  </div>
                  <div class="px-">
                    <div class="mb-3">
                      <label for="email" class="form-label">Endereço</label>
                      <input
                        id="email"
                        type="text"
                        placeholder="Endereço"
                        class="form-control"
                        v-model="endereco"
                      />
                    </div>
                  </div>

                  <div class="px-">
                    <div class="mb-3">
                      <label for="email" class="form-label">Numero</label>
                      <input
                        id="email"
                        type="text"
                        placeholder="Numero"
                        class="form-control"
                        v-model="numero"
                      />
                    </div>
                  </div>

                  <div class="px-">
                    <div class="mb-3">
                      <label for="email" class="form-label">Complemento</label>
                      <input
                        id="email"
                        type="text"
                        placeholder="Complemento"
                        class="form-control"
                        v-model="complemento"
                      />
                    </div>
                  </div>

                  <div class="p-2 pt-0 row mb-2 mt-md-1 mt-lg-1" style="opacity: 0.8">
                    <div
                      class="col-7 col-md-5 bg-dark col-lg-5 text-center p-0 py-1"
                      style="border-top-left-radius: 8px; font-size: 13px"
                    >
                      Endereço Comercial
                    </div>
                    <div class="col-5 col-md-7 col-lg-7 p-0" style="padding-top: 13.5px !important">
                      <div style="background-color: rgba(0, 0, 0, 0.5); padding: 1px"></div>
                    </div>
                  </div>

                  <div class="px-2">
                    <div class="mb-3">
                      <label for="Nome" class="form-label">CEP</label>
                      <input
                        type="text"
                        id="Nome"
                        placeholder="CEP"
                        class="form-control"
                        v-model="cep_comercial"
                      />
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="estado" class="form-label">Estado</label>
                    <select class="form-select" v-model="estado_id">
                      <option value="0" selected disabled>Selecionar</option>
                      <option v-for="item in api_estado" :key="item.id" :value="item.id">
                        {{ item.estado }}
                      </option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label for="estado" class="form-label">Cidade</label>
                    <select class="form-select" v-model="cidade_comercial_id">
                      <option value="0" selected disabled>Selecionar</option>
                      <option v-for="item in api_cidade" :key="item.id" :value="item.id">
                        {{ item.cidade }}
                      </option>
                    </select>
                  </div>

                  <div class="px-2">
                    <div class="mb-3">
                      <label for="Nome" class="form-label">Endereço</label>
                      <input
                        type="text"
                        id="Nome"
                        placeholder="Endereco"
                        class="form-control"
                        v-model="endereco_comercial"
                      />
                    </div>
                  </div>

                  <div class="px-2">
                    <div class="mb-3">
                      <label for="Nome" class="form-label">Numero</label>
                      <input
                        type="text"
                        id="Nome"
                        placeholder="Numero"
                        class="form-control"
                        v-model="numero_comercial"
                      />
                    </div>
                  </div>

                  <div class="px-2">
                    <div class="mb-3">
                      <label for="Nome" class="form-label">Complemento</label>
                      <input
                        type="text"
                        id="Nome"
                        placeholder="Complemento"
                        class="form-control"
                        v-model="complemento_comercial"
                      />
                    </div>
                  </div>

                  <div class="px-2">
                    <div class="mb-3">
                      <label for="Nome" class="form-label">Bairro</label>
                      <input
                        type="text"
                        id="Nome"
                        placeholder="Bairro"
                        class="form-control"
                        v-model="bairros_comercial"
                      />
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="estado" class="form-label">Marcar Activo</label>
                    <select class="form-select" v-model="status">
                      <option value="" selected disabled>Marcar</option>
                      <option value="1">sim</option>
                      <option value="2">nao</option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label for="nome" class="form-label">Observaçao</label>
                    <textarea
                      class="form-control"
                      id="exampleTextarea"
                      rows="3"
                      v-model="observacao"
                    >
                    </textarea>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <div style="display: flex; flex-wrap: wrap">
                <div class="col-6">
                  <button
                    type="button"
                    class="me-3 btn btn-secondary"
                    data-bs-dismiss="modal"
                    aria-label="Fechar"
                  >
                    Cancelar
                  </button>
                </div>
                <div class="col-6">
                  <button
                    type="button"
                    class="ms-3 btn btn-primary"
                    @click="editar()"
                    data-bs-dismiss="modal"
                    aria-label="Fechar"
                  >
                    Atualizar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Eliminar Anunciante -->
    <div
      class="modal fade"
      id="EliminarAnunciante"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="bg-dar" id="criarAnuncio">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel" style="font-size: 17px">
                <span class="fas fa-bullhorn py-2 pt-0"></span> <b>Apagar Anunciante</b>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fechar"
              ></button>
            </div>
            <div class="modal-body" style="height: 80px; overflow: auto; margin-bottom: 1em">
              <!-- Seu formulário aqui -->
              <div>
                <h5>Confirme antes de <span style="color: red">Eliminar</span>!</h5>
              </div>
            </div>
            <div class="modal-footer">
              <div style="display: flex; flex-wrap: wrap">
                <div class="col-6">
                  <button
                    type="button"
                    class="me-3 btn btn-secondary"
                    data-bs-dismiss="modal"
                    aria-label="Fechar"
                  >
                    Cancelar
                  </button>
                </div>
                <div class="col-6">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="apagar()"
                    data-bs-dismiss="modal"
                    aria-label="Fechar"
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mostrar Plano  -->

    <div
      class="modal fade"
      id="showPlano"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="bg-dar">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                <span class="far fa-user py-2 pt-0"></span> <b>Planos Atribuidos</b>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fechar"
              ></button>
            </div>
            <div class="modal-body" style="height: 370px; overflow: auto; margin-bottom: 1em">
              <div>
                <span
                  class="p-2 py-1 bg-success rounded-3"
                  style="font-size: 15px"
                  v-if="status_plano == 1"
                >
                  Ativo
                </span>

                <span
                  class="p-2 py-1 bg-warning rounded-3"
                  style="font-size: 15px"
                  v-if="status_plano == 2"
                >
                  Bloqueado
                </span>
              </div>

              <hr />

              <div>
                <p class="mb-1 mt-3">Selecionar Plano</p>
                <div>
                  <select class="form-select" v-model="id_plano">
                    <option v-for="item in planos" :value="item.id">
                      {{ item.nome }}
                    </option>
                  </select>
                </div>
                <p class="mb-1 mt-3">Activar Plano</p>
                <div>
                  <select class="form-select" v-model="plano_status">
                    <option value="1">sim</option>
                    <option value="2">nao</option>
                  </select>
                </div>
                <div v-if="status_plano == 1">
                  <p class="mt-3 mb-1">Data de Atribuição</p>
                  <span style="opacity: 0.7">{{ data_criacao }}</span>

                  <p class="mt-3 mb-1">Data de vencimento</p>
                  <input type="" name="" class="form-control" v-model="data_vencimento" />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div style="display: flex; flex-wrap: wrap">
                <div class="col-6">
                  <button
                    type="button"
                    class="ms-3 btn btn-secondary"
                    data-bs-dismiss="modal"
                    aria-label="Fechar"
                  >
                    Cancelar
                  </button>
                </div>
                <div class="col-6">
                  <button
                    v-if="status_plano"
                    type="button"
                    class="ms-3 btn btn-primary"
                    @click="editarPlano()"
                  >
                    Atualizar
                  </button>
                  <button v-else type="button" class="ms-3 btn btn-primary" @click="addPlano()">
                    Atribuir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import * as api from "../../services/api";

export default {
  name: "TheAnunciantes",

  data() {
    return {
      filtro: "",
      anunciante: [],
      planos: "",
      plano_anunciante: [
        // Seu array de planos aqui
      ],
      dados: "",

      //Editar
      nome: "",
      email: "",
      telefone: "",
      tipo: "",

      estado_id: "",
      cidade_id: "",
      regiao_id: "",

      api_estado: [],
      api_cidade: [],
      api_regiao: [],

      //Carregar foto
      marcas: [], // Exemplo de lista de marcas
      modelos: "", // Array vazio para modelos iniciais
      marcaSelecionada: null, // Inicialmente, nenhuma marca selecionada
      modeloSelecionado: "", // Inicialmente, nenhum modelo selecionado
      desc: "",
      previewImage: null,
      validate_moto: true,
      cont: 0,
      detalharAnuncios: [],
      mostrarPlano: [],

      pegaPlano: "",

      //Variaveis Editar

      nome_empresa: "",
      pessoal_responsavel: "",
      cnpj: "",
      celular: "",
      whatsapp: "",
      site: "",
      instagram: "",
      facebook: "",
      cep: "",
      endereco: "",
      numero: "",
      complemento: "",
      bairro: "",
      endereco_comercial: "",
      numero_comercial: "",
      complemento_comercial: "",
      cep_comercial: "",
      cidade_comercial_id: "",
      observacao: "",
      status: "",
      tipo_anunciante: "",
      bairros_comercial: "",
      id_anunciante: "",
      plano_status: "",
      id_plano: "",
      status_plano: null,
      data_criacao: "",
      data_vencimento: "",
      senha: "",
      array_filtros: [],
      observacao: "",
      banner: "",
      banner_movel: "",

      regiao_comercial_id: "",

      filterRegiaoComercialvar: [],
      filterCidadeComercialvar: [],
      regioes: [],
      cidades: [],
      regioes_comercias: [],
      estado_id_2: "",

      categDetalhe: "",
      file: null,
      thumbnailUrl: null,
      quality: 0.8, // Qualidade da imagem (opcional, ajuste conforme necessário)
      index: "",
      regioes: [],
    };
  },

  methods: {
    async addPlano() {
      const data = {
        plano_id: this.id_plano,
        anunciante_id: this.id_anunciante,
        status: this.plano_status,
      };

      try {
        const response = api.adicionarPlanoAnunciante(data);
      } catch (error) {
        console.log("Ocorreu um erro " + error);
      }
    },

    async editarPlano() {
      const data = {
        plano_id: this.id_plano,
        anunciante_id: this.$store.state.adminID,
        status: this.plano_status,
        data_vencimento: this.data_vencimento,
      };

      try {
        const response = api.editarPlanoAnunciante(data, this.pegaPlano.id);

        if (response) {
        }
      } catch (error) {
        console.log("Ocorreu um erro " + error);
      }
    },

    async mostrarPlanoAnunciante(id) {
      this.id_plano = "";
      this.id_anunciante = "";
      this.plano_status = "";
      this.status_plano = null;
      this.data_criacao = "";
      this.data_vencimento = "";

      this.mostrarPlano = await api.listarPlanoAnunciante();

      this.pegaPlano = await this.mostrarPlano.find((objeto) => objeto.id_anunciantes == id);

      this.id_anunciante = id;
      this.$store.state.adminID = id;

      if (this.pegaPlano) {
        this.id_plano = this.pegaPlano.id_planos;
        this.id_anunciante = this.pegaPlano.anunciante_id;
        this.plano_status = this.pegaPlano.status;
        this.status_plano = this.pegaPlano.status;
        this.data_vencimento = this.pegaPlano.data_vencimento;
        this.data_criacao = this.pegaPlano.created_at;
      }
    },

    show_menu_lateral() {
      this.$emit("show_menu_lateral");
    },

    showDetalhes() {
      this.$router.push({ path: "/detalhes" });
    },

    async editar() {
      // Formata a data no formato "dia-mês-ano"
      const data = {
        nome_empresa: this.nome_empresa,
        pessoal_responsavel: this.Pessoal_responsavel,
        tipo_anunciante: this.tipo_anunciante,
        cnpj: this.cnpj,
        telefone: this.telefone,
        celular: this.celular,
        whatsapp: this.whatsapp,
        email: this.email,
        password: this.senha,
        status: this.status,
        site: this.site,
        instagram: this.instagram,
        facebook: this.facebook,
        cep: this.cep,
        endereco: this.endereco,
        numero: this.numero,
        complemento: this.complemento,
        bairro: this.bairro,
        endereco_comercial: this.endereco_comercial,
        numero_comercial: this.numero_comercial,
        complemento_comercial: this.complemento_comercial,
        bairro_comercial: this.bairros_comercial,
        cep_comercial: this.cep_comercial,
        estado_id: this.estado_id,
        cidade_id: this.cidade_id,
        cidade_comercial_id: this.cidade_comercial_id,
        regiao_id: this.regiao_id,
        observacao: this.observacao,
        banner_loja: this.banner,
        banner_loja_movel: this.banner_movel,
      };

      try {
        // Editar estado
        const response = await api.editarAnunciante(data, this.id);

        if (response.data) {
          this.$store.state.anunciantes = await api.listarAnunciante();
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

    async filterRegiaoComercial() {
      // Filtrar os dados onde o ID é igual a 1
      this.filterRegiaoComercialvar = await api.filtrarAnuncio(
        "api/regiao/listar_regiao?estado_id=" + this.estado_id
      );
    },

    async filterCidadeComercial() {
      // Filtrar os dados onde o ID é igual a 1
      this.filterCidadeComercialvar = await api.filtrarAnuncio(
        "api/regiao/listar_regiao?estado_id=" + this.regiao_comercial_id
      );
    },

    formatarTelefone() {
      // Remove qualquer caractere não numérico
      let formattedTelefone = this.telefone.replace(/\D/g, "");

      // Aplica a formatação (00) 0000-0000
      formattedTelefone = formattedTelefone.replace(/^(\d{2})(\d{4})(\d{4}).*/, "($1) $2-$3");

      // Atualiza o valor do input
      this.telefone = formattedTelefone;
    },

    formatCelular() {
      // Remove qualquer caractere não numérico
      let formattedCelular = this.celular.replace(/\D/g, "");

      // Aplica a formatação (00) 99999-9999
      formattedCelular = formattedCelular.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");

      // Atualiza o valor do input
      this.celular = formattedCelular;
    },
    formatWhatsapp() {
      // Remove qualquer caractere não numérico
      let formattedCelular = this.whatsapp.replace(/\D/g, "");

      // Aplica a formatação (00) 99999-9999
      formattedCelular = formattedCelular.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");

      // Atualiza o valor do input
      this.whatsapp = formattedCelular;
    },

    formatarCNPJ() {
      // Remove qualquer caractere não numérico
      let formattedCnpj = this.cnpj.replace(/\D/g, "");

      // Adiciona a formatação 00.000.000/0000-00
      formattedCnpj = formattedCnpj.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/,
        "$1.$2.$3/$4-$5"
      );

      // Atualiza o valor do input
      this.cnpj = formattedCnpj;
    },
    formatarCEP() {
      // Remove qualquer caractere não numérico
      let formattedCEP = this.cep.replace(/\D/g, "");

      // Aplica a formatação 00000-000
      formattedCEP = formattedCEP.replace(/^(\d{5})(\d{3}).*/, "$1-$2");

      // Atualiza o valor do input
      this.cep = formattedCEP;
    },
    formatarCEPcomercial() {
      // Remove qualquer caractere não numérico
      let formattedCEP = this.cep_comercial.replace(/\D/g, "");

      // Aplica a formatação 00000-000
      formattedCEP = formattedCEP.replace(/^(\d{5})(\d{3}).*/, "$1-$2");

      // Atualiza o valor do input
      this.cep_comercial = formattedCEP;
    },

    async listFilterRegiao() {
      // alert("Região 2")
      this.regioes = await api.filtrarAnuncio(
        "api/regiao/listar_regiao?estado_id=" + this.id_estado
      );
    },

    async listFilterRegiaoComercial() {
      this.regioes_comercias = await api.filtrarAnuncio(
        "api/regiao/listar_regiao?estado_id=" + this.estado_id_2
      );
    },

    async listFilterCidade() {
      // alert("Região 2") api/cidade/listar_cidades?regiao_id
      this.cidades = await api.filtrarAnuncio(
        "api/cidade/listar_cidades?regiao_id=" + this.regiao_comercial_id
      );
    },

    // Carregar as var
    async showgetDados(id) {
      this.api_estado = await api.listarEstado();
      this.api_regiao = await api.listarRegiao();
      this.api_cidade = await api.listarCidade();
      this.id = id;
      this.anunciante = this.$store.state.anunciantes.find((objeto) => objeto.id == this.id);
      console.log(JSON.stringify(this.anunciante))
      this.Pessoal_responsavel = this.anunciante.Pessoal_responsavel;
      this.email = this.anunciante.email;
      this.telefone = this.anunciante.telefone;
      this.estado_id = this.anunciante.estado_id;
      this.cidade_id = this.anunciante.cidade_id;
      this.regiao_id = this.anunciante.regiao_id;
      this.nome_empresa = this.anunciante.nome_empresa;
      this.cnpj = this.anunciante.cnpj;
      this.celular = this.anunciante.celular;
      this.whatsapp = this.anunciante.whatsapp;
      this.banner = this.anunciante.banner_loja;
      this.banner_movel = this.anunciante.banner_loja_movel;

      console.log(this.banner);

      this.email = this.anunciante.email;
      this.site = this.anunciante.site;
      this.instagram = this.anunciante.instagram;
      this.facebook = this.anunciante.facebook;
      this.cep = this.anunciante.cep;
      this.endereco = this.anunciante.endereco;
      this.numero = this.anunciante.numero;
      this.complemento = this.anunciante.complemento;
      this.bairro = this.anunciante.bairro;
      this.endereco_comercial = this.anunciante.endereco_comercial;
      this.numero_comercial = this.anunciante.numero_comercial;
      this.complemento_comercial = this.anunciante.complemento_comercial;
      //this.complemento_comercial = this.anunciante.complemento_comercial
      this.cep_comercial = this.anunciante.cep_comercial;
      this.cidade_comercial_id = this.anunciante.cidade_comercial_id;
      this.observacao = this.anunciante.observacao;
      this.status = this.anunciante.status;
      this.tipo_anunciante = this.anunciante.tipo_anunciante;
      this.bairros_comercial = this.anunciante.bairro_comercial;
      this.senha = this.anunciante.password;
      this.index = id;
    },

    modalApagar(id) {
      this.id = id;
    },

    async apagar() {
      try {
        const response = await api.eliminarAnunciante(this.id);

        setTimeout(
          async function () {
            this.$store.state.anunciantes = await api.listarAnunciante();
          }.bind(this),
          2000
        );

        if (response.data) {
          // this.$store.state.estado = await api.listarEstado()
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

    showDetalhes(id) {
      const parametros = { id: id };
      this.$router.push({ path: "/admin-detalhes-anunciante", query: parametros });
    },

    filterCidade(id) {
      // Filtrar os dados onde o ID é igual a 1
      return this.$store.state.cidade.filter((cidade) => cidade.id_regiao === id);
    },

    filterRegiaoComercial(id) {
      // Filtrar os dados onde o ID é igual a 1
      return this.$store.state.regiao.filter((cidade) => cidade.id_estado === id);
    },

    filterCidadeComercial() {
      // Filtrar os dados onde o ID é igual a 1
      return this.$store.state.cidade.filter(
        (cidade) => cidade.id_regiao === this.regiao_comercial_id
      );
    },

    onFocus() {
      // Adicione aqui o código que você deseja executar quando o input está em focus
    },

    async applyFiltroEstado(chaveID, valorID) {
      this.applyFiltro(chaveID, valorID);
      this.regioes = await api.filtrarAnuncio(`api/regiao/listar_regiao?estado=${valorID}`);
    },

    async applyFiltroRegioes(chaveID, valorID) {
      this.applyFiltro(chaveID, valorID);
      this.cidades = await api.filtrarAnuncio(`api/cidade/listar_cidades?regiao=${valorID}`);
    },

    async applyFiltro(chaveID, valorID) {
      if (valorID != "0") {
        // Filtrar Varios
        // Objeto temporário para armazenar chaves únicas
        const chavesUnicas = {};

        // Atualiza o objeto temporário com as chaves únicas e seus valores
        this.array_filtros.forEach((filtro) => {
          chavesUnicas[filtro.chave] = filtro.valor;
        });

        // Adiciona ou atualiza o valor da chave no objeto temporário
        chavesUnicas[chaveID] = valorID;

        // Atualiza o array_filtros a partir do objeto temporário
        this.array_filtros = Object.keys(chavesUnicas).map((chave) => ({
          chave,
          valor: chavesUnicas[chave],
        }));

        // Use qs.stringify para converter os parâmetros em uma string de consulta
        const queryParams = {};
        this.array_filtros.forEach((filtro) => {
          queryParams[filtro.chave] = filtro.valor;
        });
        const queryString = Object.keys(queryParams)
          .map((key) => `${key}=${queryParams[key]}`)
          .join("&");

        // Construa a URL com base nos filtros
        const url = `api/anunciantes/listar_anuciantes?${queryString}`;

        // Chamada à API para filtrar anúncios com a URL construída
        this.$store.state.anunciantes = await api.filtrarAnuncio(url);

        if (this.$store.state.anuncios.length == 0) {
          this.$store.state.results = false;
        } else {
          this.$store.state.results = true;
        }
      } else {
        this.limparFiltro();
      }
    },

    async limparFiltro() {
      this.$store.state.anunciantes = await api.listarAnunciante();
    },

    getIdUpload(id) {
      this.index = id;
    },

    // Carregar foto
    /*async handleFileUpload(folder, event, varFoto) {
      this.file = event.target.files[0];
      this.createThumbnail();
      this.uploadPhoto(folder, this.index, varFoto);
    },*/

    async handleFileUpload(url, event, varFoto) {
      this.file = event.target.files[0];
      this.createThumbnail();
      this.uploadPhoto(url, varFoto, this.index);
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
      }
    },

    // Limpar imagem e campo de seleção
    clearFile() {
      this.file = null;
      this.thumbnailUrl = null;
      this.$refs.fileInput.value = ""; // Limpa o valor do campo de seleção de arquivos
    },
  },

  async created() {
    if (!localStorage.getItem("token")) {
      this.$router.push({ path: "/login" });
    }

    this.$store.state.anunciantes = await api.listarAnunciante();
    this.planos = await api.listarPlano();
    this.dados = await api.listarPlanoAnunciante();
  },

  mounted() {
    if (localStorage.getItem("perfil") != "superadmin") {
      this.$router.push({ path: "/anuncios" });
    }
  },

  computed: {
    anunciantesReversos() {
      // Crie uma cópia reversa dos anúncios
      return [...this.$store.state.anunciantes].reverse();
    },

    anunciantesFiltradas() {
      const filtroLowerCase = this.filtro.toLowerCase();

      return this.anunciantesReversos.filter((categ) => {
        const empresa = String(categ.nome_empresa).toLowerCase();
        const tipo = String(categ.tipo_anunciante).toLowerCase();
        const statusPublicacao = String(categ.status_publicacao).toLowerCase();

        return (
          empresa.includes(filtroLowerCase) ||
          tipo.includes(filtroLowerCase) ||
          statusPublicacao.includes(filtroLowerCase)
        );
      });
    },

    anunciantesOrdenados() {
      // Crie uma cópia dos anunciantes e ordene-os
      return [...this.$store.state.anunciantes].sort((a, b) => {
        // Supondo que 'a' e 'b' são objetos com as propriedades corretas

        // Compare o nome da empresa
        const nomeEmpresaA = a.nome_empresa.toUpperCase();
        const nomeEmpresaB = b.nome_empresa.toUpperCase();
        if (nomeEmpresaA < nomeEmpresaB) return -1;
        if (nomeEmpresaA > nomeEmpresaB) return 1;

        // Compare o tipo de anunciante
        const tipoAnuncianteA = a.tipo_anunciante.toUpperCase();
        const tipoAnuncianteB = b.tipo_anunciante.toUpperCase();
        if (tipoAnuncianteA < tipoAnuncianteB) return -1;
        if (tipoAnuncianteA > tipoAnuncianteB) return 1;

        // Compare o estado
        const estadoA = a.estado.toUpperCase();
        const estadoB = b.estado.toUpperCase();
        if (estadoA < estadoB) return -1;
        if (estadoA > estadoB) return 1;

        // Compare a região
        const regiaoA = a.regiao.toUpperCase();
        const regiaoB = b.regiao.toUpperCase();
        if (regiaoA < regiaoB) return -1;
        if (regiaoA > regiaoB) return 1;

        // Compare a cidade
        const cidadeA = a.cidade.toUpperCase();
        const cidadeB = b.cidade.toUpperCase();
        if (cidadeA < cidadeB) return -1;
        if (cidadeA > cidadeB) return 1;

        // Se todos os critérios de ordenação forem iguais, retorne 0
        return 0;
      });
    },
  },
};
</script>

<style>
.row {
  margin: 0;
  padding: 0;
}

/* Estilos personalizados para a imagem dentro do slide */
.custom-image {
  width: 100%;
  height: auto;
  /* Altura máxima da imagem */
  object-fit: cover;
}

.btn-add {
  bottom: 0;
  background-color: crimson;
  color: #fff;
  width: 40px;
  height: 40px;
  transition: background 0.3s ease;
  cursor: pointer;
}

.btn-add:hover {
  background-color: rgb(230, 45, 82);
  color: #fff;
}
</style>
