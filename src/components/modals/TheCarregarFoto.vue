<template>
    <!-- O modal Adicionar -->
    <div class="modal fade" id="CarregarFotos" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">

              <!-- Selecionar fotos -->
    
              <div class="bg-dar">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel" style="font-size: 17px;">
                      <span class="fas fa-images py-2 pt-0"></span> <b>Carregar Fotos</b>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar" @click="fecharCarregarFotos"></button>
                </div>
                <div class="modal-body" style="height: 480px !important; overflow: auto; margin-bottom: 1em; position: relative;">
                    <form >
                      <div class="row">

                        <!-- row row row row row row row -->
                                                                                                
                         <div class="mb-3 col-md-6 col-lg-6" v-if="$store.state.foto1 != null">
                          <div class="image-preview position-relative bg-dark rounded-3 overflow-hidden" style="height: 200px;">
                          <!-- <div v-if="!allowed">Número inválido de imagens</div> -->
                            <img v-if="$store.state.foto1" :src="`${$store.state.foto1}principal.jpg?v=${new Date().getTime()}`" alt="Imagem carregada" class="rounded-3" style="width: 100%; height: 200px;"/>

                            <div class="py-2 pe-3 col-12 d-flex justify-content-end" style="position: absolute; background-color: rgba(0,0,0,0.5); bottom: 0px; height: 35px;">
                              <label for="editarFoto1" class="ms-2 fas fa-edit" @change="event => handleFileChange(event, 'foto1')" style="cursor: pointer;"></label>

                              <input type="file" id="editarFoto1" class="d-none" ref="fileInput" @change="event => handleFileChange(event, 'foto1')" />

                              <span class="ms-2 fas fa-trash-alt" @click="eliminarFoto" style="cursor: pointer;"></span>  
                            </div>
                          </div>
                          <div hidden>{{ $store.state.progressImg }}</div>
                        </div>

                      <div v-else class="col-md-6 col-lg-6 px-1">
                        <div class="mb-3 bg-dark rounded-3 position-relative" style="height: 200px;">
                             <label for="foto1" class="position-absolute d-flex justify-content-center align-items-center" style="top: 0; left: 0; width: 100%; height: 100%; z-index: 99;">  
                                <div class="d-flex justify-content-center align-items-center rounded-circle" style="width: 120px; height: 120px; background-color: rgba(0, 0, 0, 0.9); cursor: pointer; position: relative;">    
                                  <span style="color: #fff;" class="fas fa-camera"></span>
                                  <span style="position: absolute; top: 68px; left: 40px;" class="me-2">1 foto</span>
                                </div>
                              </label>
                         <input type="file" id="foto1" class="invisible" ref="fileInput" @change="event => handleFileChange(event, 'foto1')" />
                        </div>
                        </div>

                        <div class="mb-3 col-md-6 col-lg-6" v-if="$store.state.foto2 != null">
                          <div class="image-preview bg-dark position-relative overflow-hidden rounded-3" style="height: 200px;">
                          <!-- <div v-if="!allowed">Número inválido de imagens</div> -->
                            <img v-if="$store.state.foto2" :src="`${$store.state.foto2}principal.jpg?v=${new Date().getTime()}`" alt="Imagem carregada" class="rounded-3" style="width: 100%; height: 200px;"/>
                            <div class="py-2 pe-3 col-12 d-flex justify-content-end" style="position: absolute; background-color: rgba(0,0,0,0.5); bottom: 0px; height: 35px;">
                              <label for="editarFoto2" class="ms-2 fas fa-edit" @change="event => handleFileChange(event, 'foto2')" style="cursor: pointer;"></label>

                              <input type="file" id="editarFoto2" class="d-none" ref="fileInput" @change="event => handleFileChange(event, 'foto2')" />

                              <span class="ms-2 fas fa-trash-alt" @click="eliminarFoto" style="cursor: pointer;"></span>  
                            </div>

                          </div>
                          <div hidden>{{ $store.state.progressImg }}</div>
                        </div>

                        <!-- Carregar varias v-else -->

                        <div v-else v-if="$store.state.foto1 != null" class="col-md-6 col-lg-6 px-1">
                        <div class="mb-3 bg-dark rounded-3 position-relative" style="height: 200px;">
                             <label for="foto1" class="position-absolute d-flex justify-content-center align-items-center" style="top: 0; left: 0; width: 100%; height: 100%; z-index: 99;">  
                                <div class="d-flex justify-content-center align-items-center rounded-circle" style="width: 120px; height: 120px; background-color: rgba(0, 0, 0, 0.9); cursor: pointer; position: relative;">    
                                  <span style="color: #fff;" class="fas fa-camera"></span>
                                  <span style="font-size: 10px; position: absolute; top: 68px; left: 20px;" class="me-2">carregar varias</span>
                                </div>
                              </label>
                         <input ref="fileInput" type="file" multiple id="foto1" class="invisible" @change="multFileUpload" />
                        </div>
                        </div>

                        <!-- Fim carregar varias -->

                        <div class="mb-3 col-md-6 col-lg-6" v-if="$store.state.foto3 != null">
                          <div class="position-relative overflow-hidden image-preview bg-dark rounded-3" style="height: 200px;">
                            <img v-if="$store.state.foto3" :src="`${$store.state.foto3}principal.jpg?v=${new Date().getTime()}`" alt="Imagem carregada" class="rounded-3" style="width: 100%; height: 200px;"/>
                            
                            <div class="py-2 pe-3 col-12 d-flex justify-content-end" style="position: absolute; background-color: rgba(0,0,0,0.5); bottom: 0px; height: 35px;">
                              <label for="editarFoto3" class="ms-2 fas fa-edit" @change="event => handleFileChange(event, 'foto3')" style="cursor: pointer;"></label>

                              <input type="file" id="editarFoto3" class="d-none" ref="fileInput" @change="event => handleFileChange(event, 'foto3')" />

                              <span class="ms-2 fas fa-trash-alt" @click="eliminarFoto" style="cursor: pointer;"></span>  
                            </div>

                          </div>
                          <div hidden>{{ $store.state.progressImg }}</div>
                        </div>

                      <div v-else v-if="$store.state.foto2 != null" class="col-md-6 col-lg-6 px-1">
                        <div class="mb-3 bg-dark rounded-3 position-relative" style="height: 200px;">
                             <label for="foto3" class="position-absolute d-flex justify-content-center align-items-center" style="top: 0; left: 0; width: 100%; height: 100%; z-index: 99;">  
                                <div class="d-flex justify-content-center align-items-center rounded-circle" style="width: 120px; height: 120px; background-color: rgba(0, 0, 0, 0.9); cursor: pointer; position: relative;">    
                                  <span style="color: #fff;" class="fas fa-camera"></span>
                                  <span style="position: absolute; top: 68px; left: 40px;" class="me-2">1 foto</span>
                                </div>
                              </label>
                              <input type="file" id="foto3" class="invisible" ref="fileInput" @change="event => handleFileChange(event, 'foto3')" />
                        </div>
                        </div>

                        <div class="mb-3 col-md-6 col-lg-6" v-if="$store.state.foto4 != null">
                          <div class="position-relative overflow-hidden image-preview bg-dark rounded-3" style="height: 200px;">
                          <!-- <div v-if="!allowed">Número inválido de imagens</div> -->
                            <img v-if="$store.state.foto4" :src="`${$store.state.foto4}principal.jpg?v=${new Date().getTime()}`" alt="Imagem carregada" class="rounded-3" style="width: 100%; height: 200px;"/>
                            
                            <div class="py-2 pe-3 col-12 d-flex justify-content-end" style="position: absolute; background-color: rgba(0,0,0,0.5); bottom: 0px; height: 35px;">
                              <label for="editarFoto4" class="ms-2 fas fa-edit" @change="event => handleFileChange(event, 'foto4')" style="cursor: pointer;"></label>

                              <input type="file" id="editarFoto4" class="d-none" ref="fileInput" @change="event => handleFileChange(event, 'foto4')" />

                              <span class="ms-2 fas fa-trash-alt" @click="eliminarFoto" style="cursor: pointer;"></span>  
                            </div>


                          </div>
                          <div hidden>{{ $store.state.progressImg }}</div>
                        </div>

                      <div v-else v-if="$store.state.foto2 != null" class="col-md-6 col-lg-6 px-1">
                        <div class="mb-3 bg-dark rounded-3 position-relative" style="height: 200px;">
                             <label for="foto4" class="position-absolute d-flex justify-content-center align-items-center" style="top: 0; left: 0; width: 100%; height: 100%; z-index: 99;">  
                                <div class="d-flex justify-content-center align-items-center rounded-circle" style="width: 120px; height: 120px; background-color: rgba(0, 0, 0, 0.9); cursor: pointer; position: relative;">    
                                  <span style="color: #fff;" class="fas fa-camera"></span>
                                  <span style="position: absolute; top: 68px; left: 40px;" class="me-2">1 foto</span>
                                </div>
                              </label>
                              <input type="file" id="foto4" class="invisible" ref="fileInput" @change="event => handleFileChange(event, 'foto4')" />
                        </div>
                        </div>

                        <div class="mb-3 col-md-6 col-lg-6" v-if="$store.state.foto5 != null">
                          <div class="position-relative image-preview bg-dark rounded-3" style="height: 200px;">
                          <!-- <div v-if="!allowed">Número inválido de imagens</div> -->
                            <img v-if="$store.state.foto5" :src="`${$store.state.foto5}principal.jpg?v=${new Date().getTime()}`" alt="Imagem carregada" class="rounded-3" style="width: 100%; height: 200px;"/>
                            
                            <div class="py-2 pe-3 col-12 d-flex justify-content-end" style="position: absolute; background-color: rgba(0,0,0,0.5); bottom: 0px; height: 35px;">
                              <label for="editarFoto5" class="ms-2 fas fa-edit" @change="event => handleFileChange(event, 'foto5')" style="cursor: pointer;"></label>

                              <input type="file" id="editarFoto5" class="d-none" ref="fileInput" @change="event => handleFileChange(event, 'foto5')" />

                              <span class="ms-2 fas fa-trash-alt" @click="eliminarFoto" style="cursor: pointer;"></span>  
                            </div>

                          </div>
                          <div hidden>{{ $store.state.progressImg }}</div>
                        </div>

                      <div v-else v-if="$store.state.foto2 != null" class="col-md-6 col-lg-6 px-1">
                        <div class="mb-3 bg-dark rounded-3 position-relative" style="height: 200px;">
                             <label for="foto5" class="position-absolute d-flex justify-content-center align-items-center" style="top: 0; left: 0; width: 100%; height: 100%; z-index: 99;">  
                                <div class="d-flex justify-content-center align-items-center rounded-circle" style="width: 120px; height: 120px; background-color: rgba(0, 0, 0, 0.9); cursor: pointer; position: relative;">    
                                  <span style="color: #fff;" class="fas fa-camera"></span>
                                  <span style="position: absolute; top: 68px; left: 40px;" class="me-2">1 foto</span>
                                </div>
                              </label>
                              <input type="file" id="foto5" class="invisible" ref="fileInput" @change="event => handleFileChange(event, 'foto5')" />

                        </div>
                        </div>


                        <!-- ########################################################## -->
                        <!-- Carregar mais 6 fotos -->
                        <!-- ########################################################## -->                                                                          

                        <div class="mb-3 col-md-6 col-lg-6" v-if="$store.state.foto6 != null">
                          <div class="position-relative overflow-hidden image-preview bg-dark rounded-3" style="height: 200px;">
                          <!-- <div v-if="!allowed">Número inválido de imagens</div> -->
                            <img v-if="$store.state.foto6" :src="`${$store.state.foto6}principal.jpg?v=${new Date().getTime()}`" alt="Imagem carregada" class="rounded-3" style="width: 100%; height: 200px;"/>
                            
                            <div class="py-2 pe-3 col-12 d-flex justify-content-end" style="position: absolute; background-color: rgba(0,0,0,0.5); bottom: 0px; height: 35px;">
                              <label for="editarFoto6" class="ms-2 fas fa-edit" @change="event => handleFileChange(event, 'foto6')" style="cursor: pointer;"></label>

                              <input type="file" id="editarFoto6" class="d-none" ref="fileInput" @change="event => handleFileChange(event, 'foto6')" />

                              <span class="ms-2 fas fa-trash-alt" @click="eliminarFoto" style="cursor: pointer;"></span>  
                            </div>

                          </div>
                          <div hidden>{{ $store.state.progressImg }}</div>
                        </div>

                      <div v-else v-if="$store.state.foto2 != null" class="col-md-6 col-lg-6 px-1">
                        <div class="mb-3 bg-dark rounded-3 position-relative" style="height: 200px;">
                             <label for="foto6" class="position-absolute d-flex justify-content-center align-items-center" style="top: 0; left: 0; width: 100%; height: 100%; z-index: 99;">  
                                <div class="d-flex justify-content-center align-items-center rounded-circle" style="width: 120px; height: 120px; background-color: rgba(0, 0, 0, 0.9); cursor: pointer; position: relative;">    
                                  <span style="color: #fff;" class="fas fa-camera"></span>
                                  <span style="position: absolute; top: 68px; left: 40px;" class="me-2">1 foto</span>
                                </div>
                              </label>
                              <input type="file" id="foto6" class="invisible" ref="fileInput" @change="event => handleFileChange(event, 'foto6')" />
                            <!-- <div v-if="($store.state.progressImg) !== 100" id="progressBar" class="progressImg" :style="{ height: $store.state.progressImg + '%' }">
                              <span>{{ $store.state.progressImg }}</span>
                        </div> -->
                        </div>
                        </div>

                        <div class="mb-3 col-md-6 col-lg-6" v-if="$store.state.foto7 != null">
                          <div class="position-relative overflow-hidden image-preview bg-dark rounded-3" style="height: 200px;">
                          <!-- <div v-if="!allowed">Número inválido de imagens</div> -->
                            <img v-if="$store.state.foto7" :src="`${$store.state.foto7}principal.jpg?v=${new Date().getTime()}`" alt="Imagem carregada" class="rounded-3" style="width: 100%; height: 200px;"/>
                            
                            <div class="py-2 pe-3 col-12 d-flex justify-content-end" style="position: absolute; background-color: rgba(0,0,0,0.5); bottom: 0px; height: 35px;">
                              <label for="editarFoto7" class="ms-2 fas fa-edit" @change="event => handleFileChange(event, 'foto7')" style="cursor: pointer;"></label>

                              <input type="file" id="editarFoto7" class="d-none" ref="fileInput" @change="event => handleFileChange(event, 'foto7')" />

                              <span class="ms-2 fas fa-trash-alt" @click="eliminarFoto" style="cursor: pointer;"></span>  
                            </div>

                          </div>
                          <div hidden>{{ $store.state.progressImg }}</div>
                        </div>

                      <div v-else v-if="$store.state.foto2 != null" class="col-md-6 col-lg-6 px-1">
                        <div class="mb-3 bg-dark rounded-3 position-relative" style="height: 200px;">
                             <label for="foto7" class="position-absolute d-flex justify-content-center align-items-center" style="top: 0; left: 0; width: 100%; height: 100%; z-index: 99;">  
                                <div class="d-flex justify-content-center align-items-center rounded-circle" style="width: 120px; height: 120px; background-color: rgba(0, 0, 0, 0.9); cursor: pointer; position: relative;">    
                                  <span style="color: #fff;" class="fas fa-camera"></span>
                                  <span style="position: absolute; top: 68px; left: 40px;" class="me-2">1 foto</span>
                                </div>
                              </label>
                              <input type="file" id="foto7" class="invisible" ref="fileInput" @change="event => handleFileChange(event, 'foto7')" />
                            <!-- <div v-if="($store.state.progressImg) !== 100" id="progressBar" class="progressImg" :style="{ height: $store.state.progressImg + '%' }">
                              <span>{{ $store.state.progressImg }}</span>
                        </div> -->
                        </div>
                        </div>

                        <div class="mb-3 col-md-6 col-lg-6" v-if="$store.state.foto8 != null">
                          <div class="position-relative overflow-hidden image-preview bg-dark rounded-3" style="height: 200px;">
                          <!-- <div v-if="!allowed">Número inválido de imagens</div> -->
                            <img v-if="$store.state.foto8" :src="`${$store.state.foto8}principal.jpg?v=${new Date().getTime()}`" alt="Imagem carregada" class="rounded-3" style="width: 100%; height: 200px;"/>
                            
                            <div class="py-2 pe-3 col-12 d-flex justify-content-end" style="position: absolute; background-color: rgba(0,0,0,0.5); bottom: 0px; height: 35px;">
                              <label for="editarFoto8" class="ms-2 fas fa-edit" @change="event => handleFileChange(event, 'foto8')" style="cursor: pointer;"></label>

                              <input type="file" id="editarFoto8" class="d-none" ref="fileInput" @change="event => handleFileChange(event, 'foto8')" />

                              <span class="ms-2 fas fa-trash-alt" @click="eliminarFoto" style="cursor: pointer;"></span>  
                            </div>

                          </div>
                          <div hidden>{{ $store.state.progressImg }}</div>
                        </div>

                      <div v-else v-if="$store.state.foto2 != null" class="col-md-6 col-lg-6 px-1">
                        <div class="mb-3 bg-dark rounded-3 position-relative" style="height: 200px;">
                             <label for="foto8" class="position-absolute d-flex justify-content-center align-items-center" style="top: 0; left: 0; width: 100%; height: 100%; z-index: 99;">  
                                <div class="d-flex justify-content-center align-items-center rounded-circle" style="width: 120px; height: 120px; background-color: rgba(0, 0, 0, 0.9); cursor: pointer; position: relative;">    
                                  <span style="color: #fff;" class="fas fa-camera"></span>
                                  <span style="position: absolute; top: 68px; left: 40px;" class="me-2">1 foto</span>
                                </div>
                              </label>
                              <input type="file" id="foto8" class="invisible" ref="fileInput" @change="event => handleFileChange(event, 'foto8')" />
                            <!-- <div v-if="($store.state.progressImg) !== 100" id="progressBar" class="progressImg" :style="{ height: $store.state.progressImg + '%' }">
                              <span>{{ $store.state.progressImg }}</span>
                        </div> -->
                        </div>
                        </div>

                        <div class="mb-3 col-md-6 col-lg-6" v-if="$store.state.foto9 != null">
                          <div class="position-relative overflow-hidden image-preview bg-dark rounded-3" style="height: 200px;">
                          <!-- <div v-if="!allowed">Número inválido de imagens</div> -->
                            <img v-if="$store.state.foto9" :src="`${$store.state.foto9}principal.jpg?v=${new Date().getTime()}`" alt="Imagem carregada" class="rounded-3" style="width: 100%; height: 200px;"/>
                            
                            <div class="py-2 pe-3 col-12 d-flex justify-content-end" style="position: absolute; background-color: rgba(0,0,0,0.5); bottom: 0px; height: 35px;">
                              <label for="editarFoto9" class="ms-2 fas fa-edit" @change="event => handleFileChange(event, 'foto9')" style="cursor: pointer;"></label>

                              <input type="file" id="editarFoto9" class="d-none" ref="fileInput" @change="event => handleFileChange(event, 'foto9')" />

                              <span class="ms-2 fas fa-trash-alt" @click="eliminarFoto" style="cursor: pointer;"></span>  
                            </div>

                          </div>
                          <div hidden>{{ $store.state.progressImg }}</div>
                        </div>

                      <div v-else v-if="$store.state.foto2 != null" class="col-md-6 col-lg-6 px-1">
                        <div class="mb-3 bg-dark rounded-3 position-relative" style="height: 200px;">
                             <label for="foto9" class="position-absolute d-flex justify-content-center align-items-center" style="top: 0; left: 0; width: 100%; height: 100%; z-index: 99;">  
                                <div class="d-flex justify-content-center align-items-center rounded-circle" style="width: 120px; height: 120px; background-color: rgba(0, 0, 0, 0.9); cursor: pointer; position: relative;">    
                                  <span style="color: #fff;" class="fas fa-camera"></span>
                                  <span style="position: absolute; top: 68px; left: 40px;" class="me-2">1 foto</span>
                                </div>
                              </label>
                              <input type="file" id="foto9" class="invisible" ref="fileInput" @change="event => handleFileChange(event, 'foto9')" />
                            <!-- <div v-if="($store.state.progressImg) !== 100" id="progressBar" class="progressImg" :style="{ height: $store.state.progressImg + '%' }">
                              <span>{{ $store.state.progressImg }}</span>
                        </div> -->
                        </div>
                        </div>

                        

                        <div class="mb-3 col-md-6 col-lg-6" v-if="$store.state.foto10 != null">
                          <div class="position-relative overflow-hidden image-preview bg-dark rounded-3" style="height: 200px;">
                          <!-- <div v-if="!allowed">Número inválido de imagens</div> -->
                            <img v-if="$store.state.foto10" :src="`${$store.state.foto10}principal.jpg?v=${new Date().getTime()}`" alt="Imagem carregada" class="rounded-3" style="width: 100%; height: 200px;"/>
                            
                            <div class="py-2 pe-3 col-12 d-flex justify-content-end" style="position: absolute; background-color: rgba(0,0,0,0.5); bottom: 0px; height: 35px;">
                              <label for="editarFoto10" class="ms-2 fas fa-edit" @change="event => handleFileChange(event, 'foto10')" style="cursor: pointer;"></label>

                              <input type="file" id="editarFoto10" class="d-none" ref="fileInput" @change="event => handleFileChange(event, 'foto10')" />

                              <span class="ms-2 fas fa-trash-alt" @click="eliminarFoto" style="cursor: pointer;"></span>  
                            </div>

                          </div>
                          <div hidden>{{ $store.state.progressImg }}</div>
                        </div>

                      <div v-else v-if="$store.state.foto2 != null" class="col-md-6 col-lg-6 px-1">
                        <div class="mb-3 bg-dark rounded-3 position-relative" style="height: 200px;">
                             <label for="foto10" class="position-absolute d-flex justify-content-center align-items-center" style="top: 0; left: 0; width: 100%; height: 100%; z-index: 99;">  
                                <div class="d-flex justify-content-center align-items-center rounded-circle" style="width: 120px; height: 120px; background-color: rgba(0, 0, 0, 0.9); cursor: pointer; position: relative;">    
                                  <span style="color: #fff;" class="fas fa-camera"></span>
                                  <span style="position: absolute; top: 68px; left: 40px;" class="me-2">1 foto</span>
                                </div>
                              </label>
                              <input type="file" id="foto10" class="invisible" ref="fileInput" @change="event => handleFileChange(event, 'foto10')" />
                            <!-- <div v-if="($store.state.progressImg) !== 100" id="progressBar" class="progressImg" :style="{ height: $store.state.progressImg + '%' }">
                              <span>{{ $store.state.progressImg }}</span>
                        </div> -->
                        </div>
                        </div>
    
                      </div>
                    </form>

                    <div  class="progresso" v-if="uploading">
                        <div class="progresso-field">
                          <div 
                          >
                            <img src="/upload1.gif">
                            <div class="pt-2" style="color: #000; margin-top: -8px; padding-bottom: 3px;">

                              <span v-if="totalFotos">
                                carregando {{ totalFotos }} de {{ multiArray }}
                              </span>
                              <span v-else>
                                carregando 1 de 1
                              </span>
                            </div>
                          </div>
                          
                        </div>
                    </div>
                
                </div>
                <div class="modal-footer">
                  <div style="display: flex; flex-wrap: wrap;">
                    <div class="col-12">
                      <button type="button" class="me-3 btn btn-secondary" data-bs-dismiss="modal" aria-label="Fechar" @click="fecharCarregarFotos">Fechar</button>
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
            name: 'TheCarregarFoto',
    
            data() {
            return {
              id: '',
              criarAnuncio: "",
              maxWidth: 300,
              maxHeight: 300,
              photos: [],
             
    
              marcas: [], // Exemplo de lista de marcas
              modelos: "", // Array vazio para modelos iniciais
              marcaSelecionada: null, // Inicialmente, nenhuma marca selecionada
              modeloSelecionado: "", // Inicialmente, nenhum modelo selecionado
              desc: "",
              previewImage: null,
              validate_moto: true,
              cont: 0,
              detalharAnuncios: [],
              uploading: false,
              varIndex: null,
              totalFotos: '',
              multiArray: ''
            
            }
          },
    
          methods: {

            handleFileChange(event, varFoto) {
              const file = event.target.files[0]

              this.uploadingFoto(file, varFoto)
            },

            async uploadingFoto(imagemFile, varFoto) {

              const file = imagemFile
              
              if (!file) {
                this.allowed = false;
                return;
              }

              this.allowed = true

              this.uploading = true

              try {

                //Reduzir a qualidade da imagem
                // const image = await this.comprimirFoto(file);

                //Diminuir ou aumentar tamanho da imagem
                // const image = await this.redimensionarImagem(file, 800, 600);

                const formData = new FormData();
                formData.append(varFoto, file, file.name);

                try {
                  // Tente realizar a solicitação
                  const response = await api.carregarFotos(formData, this.$store.state.anuncioID);

                  if (response) {
                    this.uploading = false

                    const dados = await api.detalharAnuncio(this.$store.state.anuncioID);

                    this.$store.state.detalharAnuncios = dados[0]

                    this.$store.state.foto1 = this.$store.state.detalharAnuncios.foto1
                    this.$store.state.foto2 = this.$store.state.detalharAnuncios.foto2
                    this.$store.state.foto3 = this.$store.state.detalharAnuncios.foto3
                    this.$store.state.foto4 = this.$store.state.detalharAnuncios.foto4
                    this.$store.state.foto5 = this.$store.state.detalharAnuncios.foto5

                    this.$store.state.foto6 = this.$store.state.detalharAnuncios.foto6
                    this.$store.state.foto7 = this.$store.state.detalharAnuncios.foto7
                    this.$store.state.foto8 = this.$store.state.detalharAnuncios.foto8
                    this.$store.state.foto9 = this.$store.state.detalharAnuncios.foto9
                    this.$store.state.foto10 = this.$store.state.detalharAnuncios.foto10                    
                  }
                  // Se a solicitação for bem-sucedida, exiba um console log de sucesso
                } catch (error) {
                  // Se ocorrer um erro, exiba um console log de erro
                  console.error('Erro na solicitação:', error);
                }

              } catch (error) {
                console.error(error);
              }
            },

                  // Método para redimensionar qualquer imagem para 600x400
                  async redimensionarImagem(file, newWidth, newHeight) {
                    return new Promise((resolve, reject) => {
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        const img = new Image();
                        img.onload = () => {
                          const canvas = document.createElement('canvas');
                          const ctx = canvas.getContext('2d');
                          canvas.width = newWidth;
                          canvas.height = newHeight;
                          ctx.drawImage(img, 0, 0, newWidth, newHeight);
                          canvas.toBlob((blob) => {
                            const newFile = new File([blob], file.name, { type: file.type });
                            resolve(newFile);
                          }, file.type);
                        };
                        img.src = e.target.result;
                      };
                      reader.readAsDataURL(file);
                    });
                  },

                  // Função separada para converter dados da URL em um arquivo, se necessário
                  dataURLtoFile(dataURL, filename) {
                    const arr = dataURL.split(',');
                    const mime = arr[0].match(/:(.*?);/)[1];
                    const bstr = atob(arr[1]);
                    let n = bstr.length;
                    const u8arr = new Uint8Array(n);

                    while (n--) {
                      u8arr[n] = bstr.charCodeAt(n);
                    }

                    return new File([u8arr], filename, { type: mime });
                  },
            
            // Carregar multiplas fotos

            async multFileUpload(event) {
              const files = event.target.files;
              // Armazenar os arquivos selecionados em uma variável de dados
              this.multImagens = files;
              this.totalFotos = 1
              this.multiArray = this.multImagens.length

              if(this.multImagens.length > 9) {
                alert("Atenção: Selecione apenas 9 fotos")
              
              } else {
                for (let i = 1; i <= this.multImagens.length; i++) {

                    const fileImg = this.multImagens[i]

                    const index = i+1
                    this.varIndex = "foto"+index

                    await this.uploadingFoto(fileImg, this.varIndex)

                    this.totalFotos++
                }

                this.$refs.fileInput.value = '';
                this.selectedFile = null;
                this.totalFotos = null
                this.multiArray = null
              }
              
            },
    
            showCarregarFotos() {
                this.previewImage = null
                var modalBootstrap = new bootstrap.Modal(modal);
                modalBootstrap.show();

            },

            exibeCarregarFoto(){
               this.previewImage = null
               var modalBootstrap = new bootstrap.Modal(modal);
               modalBootstrap.show();

            },
    
            selMoto() {
              this.validate_moto = false
            },

            eliminarFoto() {
              alert('Esta foto ainda nao pode ser eliminada.');
            }
          },

          mounted() {

          }
      }
    </script>
    
    <style>
      .imagem-proporcional {
        max-width: 100%; max-height: 200px; margin-top: 10px; border-radius: 8px;
      }

      .img-preview {
          max-width: 100% !important;
          height: auto !important;
          width: 50vw !important;
          max-height: 50vh !important;
          opacity: 0;
      }
      
      .retirarFoto {
        position: absolute;
        top: 15px;
        left: 5px;
        padding: 2px 8px;
        background-color: #292929;
        color: #fff;
        border-radius: 8px;
        opacity: 0.8;
        cursor: pointer;
      }
      
      .progresso {
        position: fixed; 
        top: 280px; 
        left: 45%; 
        transform: translateX(-40%);
        width: 80px;
        z-index: 999;
      }

      .progresso .progresso-field {
        background-color: #fff;
        width: 140px;
        height: 140px;
        border-radius: 10px;
        font-size: 12px;
        text-align: center;
      }

      .progresso .progresso-field div img {
        width: 108px;
        border-radius: 8px;

      }
  </style>