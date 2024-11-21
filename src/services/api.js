import store from '../store/index.js';
import axios from "axios"
import Swal from 'sweetalert2'
var data, token

if(localStorage.getItem('token')) {
  token = localStorage.getItem('token')

 //token = data.token
}
// let token = ""


//Msg
function sweetSucesso(msg) {
  Swal.fire({
    title: msg,
    text: "...",
    icon: 'success',
    timer: 2000, // tempo em milissegundos (3 segundos no exemplo)
    showConfirmButton: false, // remover o botão "OK"
  })
}

//Erro Personalizado
export function erro(msg) {
  Swal.fire({
    title: "Atenção",
    text: msg,
    icon: 'error',
    //timer: 2000, // tempo em milissegundos (3 segundos no exemplo)
    showConfirmButton: true, // remover o botão "OK"
  })
}


/* var data, token
if(localStorage.getItem('Auth')) {
 data = JSON.parse(localStorage.getItem('Auth'))

 token = data.token
}
*/

// Api Config
export const api_login = axios.create({
  baseURL: "https://api.regionalmotors.com.br/",
  // target: "https://api-regional-motors.casadosomangola.com/",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Max-Age': '3600',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  
  }

})

// Api Config
export const api = axios.create({
  baseURL: "https://api.regionalmotors.com.br/",
  // target: "https://api-regional-motors.casadosomangola.com/",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Max-Age': '3600',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'Access-Control-Allow-Credentials': 'true',
    // Defina o Content-Type como 'multipart/form-data' para upload de arquivos
    'Content-Type': 'application/json',
    // 'Content-Type': 'multipart/form-data',
    'Accept': 'application/json',
    // 'changeOrigin': 'true',
    // Se você estiver usando autenticação, adicione o cabeçalho de autorização aqui
    'Authorization': 'Bearer ' + token
  }

})

// Api Config
export const api_image = axios.create({
  baseURL: "https://api.regionalmotors.com.br/",
  // target: "https://api-regional-motors.casadosomangola.com/",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Max-Age': '3600',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'application/json',
    'Content-Type': 'multipart/form-data',
    'Authorization': 'Bearer ' + token

    // Se você estiver usando autenticação, adicione o cabeçalho de autorização aqui
    // 'Authorization': 'Bearer ' + token
  }

})

//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------

//Login 
// Fazer Login
export async function Login(data) {

  try {
    const response = await api_login.post('api/login', data);
    //sweetSucesso('Login com Sucesso!')

    return response.data

  } catch (error) {
    erro(error.response.data.message)

  }

}

//Logout 
// Fazer Logout
export async function Logout(data) {

  try {
    const response = await api_login.post('api/logout', data);
    //sweetSucesso('Login com Sucesso!')

    return response.data

  } catch (error) {
    erro(error.response.data.message)

  }

}

//Cadastro
// Cadastrar
export async function adicionarUser(data) {
  //console.log('token add: '+token)

  try {
    const response = await api.post('api/register', data);
    sweetSucesso('Feito')

    // criarAnunciante(dataAnunciante)

    return response.data;

  } catch (error) {
    erro(error.response.data.message)

  }

}

//Listar User
export async function listarUser() {
  try {
    const response = await api.get('api/user/listar_user');
    return response.data;
  } catch (error) {
    erro(error.response.data.message)
    throw error; // Opcional: propague o erro para que ele possa ser tratado em outro lugar, se necessário.
  }
}


//Carregar fotos Categorias
export async function carregarFotoAnunciante(url, data, id) {
    try {
        const response = await api_image.post(`${url}${id}`, data, {
            onUploadProgress: (progressEvent) => {
                const totalBytes = progressEvent.total;
                const bytesEnviados = progressEvent.loaded;
                const progress = (bytesEnviados / totalBytes) * 100;

                store.state.progressImg = progress.toFixed(2);
            },
        });

        sweetSucesso();
        store.state.progressImg = 0;

        return response.data;
    } catch (error) {
      erro(error.response.data.message)
        throw error; // Rejeitar o erro para tratar na função handleFileChange
    }
}

// *Anunciante
export async function criarAnunciante(dataAnunciante) {
  //console.log('token add: '+token)

  try {
    const response = await api.post('api/anunciantes/registar_anuciantes', dataAnunciante);
    sweetSucesso('Feito')

    return response.data;

  } catch (error) {
    erro(error.response.data.message)

  }

}

//Listar Anunciantes
export async function listarAnunciante() {
  try {
    const response = await api.get('api/anunciantes/listar_anuciantes');
    return response.data;
  } catch (error) {
    erro(error.response.data.message)
    throw error; // Opcional: propague o erro para que ele possa ser tratado em outro lugar, se necessário.
  }
}

//Encontrar anunciante
export async function encontrarAnunciante(id) {
  try {
    const response = await api.get(`api/anunciantes/encontrar_anunciante/${id}`);
    return response.data;
  } catch (error) {
    erro(error.response.data.message)
    throw error; // Opcional: propague o erro para que ele possa ser tratado em outro lugar, se necessário.
  }
}

//Detalhar Anuncio
export async function detalharAnunciante(id) {
  try {
    const response = await api.get('api/anunciantes/visualizar_anuciantes/'+id)
    return response.data;

  } catch (error) {

    throw error;
  }
}


//Editar Anunciante
export async function editarAnunciante(data, id) {
  try {
    const response = await api.put('api/editar_anuciantes/update/'+id, data);

    sweetSucesso("Atualizado");

    return response;

  } catch (error) {
    erro(error.response.data.message)
  }
}

//Eliminar Anuciante
export async function eliminarAnunciante(id) {
  try {
    const response = await api.delete('api/eliminar_anuciante/' + id);

    sweetSucesso("Removido")

    return response.data;
  } catch (error) {

    erro(error.response.data.message)

    throw error;
  }
}


//Anuncios
// Adicionar anuncio
export async function adicionarAnuncio(data) {
  //console.log('token add: '+token)

  try {
    const response = await api.post('api/anuncios/registar_anuncios', data);
    sweetSucesso('Feito')

    return response.data;

  } catch (error) {
    erro(error.response.data.message)

  }

}

//Carregar fotos Anuncios
export async function fotoAnunciante(data, id) {
    console.log("Carregando foto...");
    try {
        const response = await api_image.post(`api/anunciantes/visualizar_anuciantes/${id}`, data, {
            onUploadProgress: (progressEvent) => {
                const totalBytes = progressEvent.total;
                const bytesEnviados = progressEvent.loaded;
                const progress = (bytesEnviados / totalBytes) * 100;

                store.state.progressImg = progress.toFixed(2);
                console.log("carregando " + store.state.progressImg);
            },
        });

        sweetSucesso();
        store.state.progressImg = 0;

        return response.data;
    } catch (error) {
        erro(error.response.data.message);
        throw error; // Rejeitar o erro para tratar na função handleFileChange
    }
}


//Carregar fotos Anuncios
export async function carregarFotos(data, id) {
    console.log("Carregando foto...");
    console.log(data);

    try {
        const response = await api_image.post(`api/anuncios/uploadFoto1_anuncios/${id}`, data, {
            onUploadProgress: (progressEvent) => {
                const totalBytes = progressEvent.total;
                const bytesEnviados = progressEvent.loaded;
                const progress = (bytesEnviados / totalBytes) * 100;

                store.state.progressImg = progress.toFixed(2);
                console.log("carregando " + store.state.progressImg);
            },
        });

        sweetSucesso();
        store.state.progressImg = 0;

        console.log('Response');
        console.log(response.data);
        console.log("Terminado");

        return response.data;
    } catch (error) {
        erro(error.response.data.message);
        throw error; // Rejeitar o erro para tratar na função handleFileChange
    }
}


// Editar Anuncio
export async function editarAnuncio(data, id) {
  try {
    const response = await api.put(`api/editar_anuncios/update/${id}`, data);

    sweetSucesso("Atualizado");

    return response.data;
  } catch (error) {
    erro(error.response.data.message)
  }
}


//Listar Anuncio
export async function listarAnuncio() {
  try {
    const response = await api.get('api/anuncios/listar_anuncios')
    return response.data;

  } catch (error) {

    throw error;
  }
}



//Listar Anuncio
export async function listarAnuncioAdmin() {
  try {
    const response = await api.get('api/anuncios/listar_anunciosAdminSuper')
    return response.data;

  } catch (error) {

    throw error;
  }
}

//Anuncios de anunciantes 
export async function listarAnuncioAnunciante() {
  try {
    const response = await api.get('api/anuncios/listar_anunciosAdmin')
    return response.data;

  } catch (error) {

    throw error;
  }
}


//Detalhar Anuncio
export async function detalharAnuncio(id) {
  try {
    const response = await api.get('api/anuncios/visualizar_anuncios/'+id)
    return response.data;

  } catch (error) {

    throw error;
  }
}


//FILTROS
//Filtrar Anuncios
export async function filtrarAnuncio(url) {
  try {
    const response = await api.get(url)
    
    return response.data;

  } catch (error) {

    throw error;
  }
}

//Filtrar Anuncios
export async function getIdToUrl(url, data) {
  try {
    const response = await api.post(url, data);
    
    //sweetSucesso('Buscar')

    return response.data;

  } catch (error) {
    erro(error.response.data.message)

  }
}


//Eliminar Funcionario 20 20 20 20 20 - extras
export async function eliminarAnuncio(id) {
  try {
    const response = await api.get('api/eliminar_anuncios/' + id);

    sweetSucesso("Removido")

    return response.data;
  } catch (error) {

    erro(error.response.data.message)

    throw error;
  }
}

//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------


//Categoria
//Carregar fotos Categorias
export async function carregarCategorias(data, id) {
    console.log("Carregando foto...");
    console.log(data);

    try {
        const response = await api_image.post(`api/categorias/fotosCategoria/${id}`, data, {
            onUploadProgress: (progressEvent) => {
                const totalBytes = progressEvent.total;
                const bytesEnviados = progressEvent.loaded;
                const progress = (bytesEnviados / totalBytes) * 100;

                store.state.progressImg = progress.toFixed(2);
                console.log("carregando " + store.state.progressImg);
            },
        });

        sweetSucesso();
        store.state.progressImg = 0;

        return response.data;
    } catch (error) {
        erro(error.response.data.message);
        throw error; // Rejeitar o erro para tratar na função handleFileChange
    }
}


//Adicionar Categoria
export async function adicionarCategoria(data) {
  try {
    const response = await api.post('api/categorias/registar_categorias', data);
    //// sweetSucesso()

    return response.data;

  } catch (error) {
    erro(error.response.data.message)

  }

}

// Listar Categoria
export async function listarCategoria() {
  try {
    const response = await api.get('api/categorias/listar_categorias');
    // const response = await api.get('api/anuncios/listar_anuncios?estado_id=36');
    return response.data;
  } catch (error) {
    erro(error.response.data.message)
    throw error; // Opcional: propague o erro para que ele possa ser tratado em outro lugar, se necessário.
  }
}

// Editar Categoria
export async function editarCategoria(data, id) {
  try {
    const response = await api.put('api/editar_categorias/update/'+id, data);

    // sweetSucesso("Atualizado");

    return response;

  } catch (error) {
    erro(error.response.data.message)
  }
}

//Eliminar Categoria
export async function eliminarCategoria(id) {
  try {
    const response = await api.get('api/eliminar_categorias/' + id);

    sweetSucesso("Removido")

    return response.data;
  } catch (error) {

    erro(error.response.data.message)

    throw error;
  }
}

//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------

//Marcas
//Adicionar marcas
export async function adicionarMarca(data) {
  //console.log('token add: '+token)

  try {
    const response = await api.post('api/marcas/registar_marcas', data);
    sweetSucesso()

    return response.data;

  } catch (error) {
    erro(error.response.data.message)

  }

}

// Listar marcas
export async function listarMarca() {
  try {
    const response = await api.get('/api/marcas/listar_marcas');
    return response.data;
  } catch (error) {
    erro(error.response.data.message)
    throw error; // Opcional: propague o erro para que ele possa ser tratado em outro lugar, se necessário.
  }
}

// Editar Marca
export async function editarMarca(data, id) {
  try {
    const response = await api.put('api/editar_marca/update/'+id, data);

    sweetSucesso("Atualizado");

    return response;

  } catch (error) {
    erro(error.response.data.message)
  }
}

//Eliminar Marca
export async function eliminarMarca(id) {
  try {
    const response = await api.get('api/eliminar_marca/' + id);

    sweetSucesso("Removido")

    return response.data;
  } catch (error) {

    erro(error.response.data.message)

    throw error;
  }
}


//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------

//Modelos
//Adicionar Modelos
export async function adicionarModelo(data) {
  //console.log('token add: '+token)

  try {
    const response = await api.post('api/modelos/registar_modelos', data);
    sweetSucesso("Feito")

    return response.data;

  } catch (error) {
    erro(error.response.data.message)

  }

}

// Listar Modelos
export async function listarModelo() {
  try {
    const response = await api.get('api/modelos/listar_modelos');
    return response.data;
  } catch (error) {
    erro(error.response.data.message)
    throw error; // Opcional: propague o erro para que ele possa ser tratado em outro lugar, se necessário.
  }
}

// Editar Modelo
export async function editarModelo(data, id) {
  try {
    const response = await api.put('api/editar_modelo/update/'+id, data);

    sweetSucesso("Atualizado");

    return response;

  } catch (error) {
    erro(error.response.data.message)
  }
}

//Eliminar Modelo
export async function eliminarModelo(id) {
  try {
    const response = await api.get('api/eliminar_modelo/' + id);

    sweetSucesso("Removido")

    return response.data;
  } catch (error) {

    erro(error.response.data.message)

    throw error;
  }
}

//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------
//----------------------------------------------------------------------

//Planos
//Adicionar Planos
export async function adicionarPlano(data) {
  //console.log('token add: '+token)

  try {
    const response = await api.post('api/planos/registar_planos', data);
    sweetSucesso("Feito")

    return response.data;

  } catch (error) {
    erro(error.response.data.message)

  }

}

//Listar Planos
export async function listarPlano() {
  try {
    const response = await api.get('api/planos/listar_planos');
    return response.data;
  } catch (error) {
    erro(error.response.data.message)
    throw error; // Opcional: propague o erro para que ele possa ser tratado em outro lugar, se necessário.
  }
}

//Editar Plano
export async function editarPlano(data, id) {
    try {
    const response = await api.put('api/editar_planos/update/'+id, data);

    sweetSucesso("Atualizado");

    return response;

  } catch (error) {
    erro(error.response.data.message)
  }
}

//Eliminar plano
export async function eliminarPlano(id) {
  try {
    const response = await api.delete('api/eliminar_planos/' + id);

    sweetSucesso("Removido")

    return response.status;
  } catch (error) {

    erro(error.response.data.message)

    throw error;
  }
}

//Listar Plano Anunciante
export async function listarPlanoAnunciante() {
  try {
    const response = await api.get('api/planos_anuciantes/listar_planos_anuciantes');
    return response.data;
  } catch (error) {
    erro(error.response.data.message)
    throw error; // Opcional: propague o erro para que ele possa ser tratado em outro lugar, se necessário.
  }
}

//Adicionar Plano Anunciante
export async function adicionarPlanoAnunciante(data) {
  //console.log('token add: '+token)

  try {
    const response = await api.post('api/planos_anuciantes/registar_planos_anuciantes', data);
    sweetSucesso("Feito")

    return response.data;

  } catch (error) {
    erro(error.response.data.message)

  }

}


// Editar PlanoAnunciante
export async function editarPlanoAnunciante(data, id) {
 try {
    const response = await api.put('api/editar_planos_anuciantes/update/'+id, data);

    sweetSucesso("Atualizado");

    return response;

  } catch (error) {
    erro(error.response.data.message)
  }
}



// Combustivel
//Adicionar Combustivel
export async function adicionarCombustivel(data) {
  //console.log('token add: '+token)

  try {
    const response = await api.post('api/combustivel/registar_combustivel', data);
    sweetSucesso("Feito")

    return response.data;

  } catch (error) {
    erro(error.response.data.message)

  }

}

// Listar Combustivel
export async function listarCombustivel() {
  try {
    const response = await api.get('api/combustivel/listar_combustivel');
    return response.data;
  } catch (error) {
    erro(error.response.data.message)
    throw error; // Opcional: propague o erro para que ele possa ser tratado em outro lugar, se necessário.
  }
}

// Editar Combustivel
export async function editarCombustivel(data, id) {
  try {
    const response = await api.put('api/editar_combustivel/update/'+id, data);

    sweetSucesso("Atualizado");

    return response;

  } catch (error) {
    erro(error.response.data.message)
  }
}

//Eliminar Combustivel
export async function eliminarCombustivel(id) {
  try {
    const response = await api.get('api/eliminar_combustivel/' + id);

    sweetSucesso("Removido")

    return response.data;
  } catch (error) {

    erro(error.response.data.message)

    throw error;
  }
}

// Transmissao
//Adicionar Transmissao
export async function adicionarTransmissao(data) {
  //console.log('token add: '+token)

  try {
    const response = await api.post('api/transmissao/registar_transmissao', data);
    sweetSucesso("Feito")

    return response.data;

  } catch (error) {
    erro(error.response.data.message)

  }

}


// Listar Transmissao
export async function listarTransmissao() {
  try {
    const response = await api.get('api/transmissao/listar_transmissao');
    return response.data;
  } catch (error) {
    erro(error.response.data.message)
    throw error; // Opcional: propague o erro para que ele possa ser tratado em outro lugar, se necessário.
  }
}

// Editar Transmissao
export async function editarTransmissao(data, id) {
  try {
    const response = await api.put('api/editar_transmissao/update/'+id, data);

    sweetSucesso("Atualizado");

    return response;

  } catch (error) {
    erro(error.response.data.message)
  }
}

//Eliminar Transmissao
export async function eliminarTransmissao(id) {
  try {
    const response = await api.get('api/eliminar_transmissao/' + id);

    sweetSucesso("Removido")

    return response.data;
  } catch (error) {

    erro(error.response.data.message)

    throw error;
  }
}

// Tecnologia
//Adicionar Tecnologia
export async function adicionarTecnologia(data) {
  //console.log('token add: '+token)

  try {
    const response = await api.post('api/tecnologia/registar_tecnologia', data);
    sweetSucesso("Feito")

    return response.data;

  } catch (error) {
    erro(error.response.data.message)

  }

}

// Listar Tecnologia
export async function listarTecnologia() {
  try {
    const response = await api.get('api/tecnologia/listar_tecnologia');
    return response.data;
  } catch (error) {
    erro(error.response.data.message)
    throw error; // Opcional: propague o erro para que ele possa ser tratado em outro lugar, se necessário.
  }
}

// Editar Tecnologia
export async function editarTecnologia(data, id) {
  try {
    const response = await api.put('api/editar_tecnologia/update/'+id, data);

    sweetSucesso("Atualizado");

    return response;

  } catch (error) {
    erro(error.response.data.message)
  }
}

//Eliminar Tecnologia
export async function eliminarTecnologia(id) {
  try {
    const response = await api.get('api/eliminar_tecnologia/' + id);

    sweetSucesso("Removido")

    return response.data;
  } catch (error) {

    erro(error.response.data.message)

    throw error;
  }
}

// CORES
//Adicionar Cores
export async function adicionarCores(data) {
  //console.log('token add: '+token)

  try {
    const response = await api.post('api/cor/registar_cor', data);
    sweetSucesso("Feito")

    return response.data;

  } catch (error) {
    erro(error.response.data.message)

  }

}

// Listar Cores 
export async function listarCores() {
  try {
    const response = await api.get('api/cor/listar_cor');
    return response.data;
  } catch (error) {
    erro(error.response.data.message)
    throw error; // Opcional: propague o erro para que ele possa ser tratado em outro lugar, se necessário.
  }
}

// Editar Cores
export async function editarCores(data, id) {
  try {
    const response = await api.put('api/editar_cor/update/'+id, data);

    sweetSucesso("Atualizado");

    return response;

  } catch (error) {
    erro(error.response.data.message)
  }
}

//Eliminar Cores
export async function eliminarCores(id) {
  try {
    const response = await api.get('api/eliminar_cor/' + id);

    sweetSucesso("Removido")

    return response.data;
  } catch (error) {

    erro(error.response.data.message)

    throw error;
  }
}

// Estado
//Adicionar Estado
export async function adicionarEstado(data) {
  //console.log('token add: '+token)

  try {
    const response = await api.post('api/estados/registar_estados', data);
    sweetSucesso("Feito")

    return response.data;

  } catch (error) {
    erro(error.response.data.message)

  }

}

// Listar Estado
export async function listarEstado() {
  try {
    const response = await api.get('api/estados/listar_estados');
    return response.data;
  } catch (error) {
    erro(error.response.data.message)
    throw error; // Opcional: propague o erro para que ele possa ser tratado em outro lugar, se necessário.
  }
}

// Editar Estado
export async function editarEstado(data, id) {
  try {
    const response = await api.put(`api/editar_estado/update/${id}`, data);

    sweetSucesso("Atualizado");

    return response;

  } catch (error) {
    erro(error.response.data.message)
  }
}

//Eliminar estado
export async function eliminarEstado(id) {
  try {
    const response = await api.get('api/eliminar_estado/' + id);

    sweetSucesso("Removido")

    return response.data;
  } catch (error) {

    erro(error.response.data.message)

    throw error;
  }
}

// Regiao
//Adicionar Regiao
export async function adicionarRegiao(data) {
  //console.log('token add: '+token)

  try {
    const response = await api.post('api/regiao/registar_regiao', data);
    sweetSucesso("Feito")

    return response.data;

  } catch (error) {
    erro(error.response.data.message)

  }

}

// Listar Regiao
export async function listarRegiao() {
  try {
    const response = await api.get('api/regiao/listar_regiao');
    return response.data;
  } catch (error) {
    erro(error.response.data.message)
    throw error; // Opcional: propague o erro para que ele possa ser tratado em outro lugar, se necessário.
  }
}

// Editar Regiao
export async function editarRegiao(data, id) {
  try {
    const response = await api.put(`api/editar_regiao/update/${id}`, data);

    sweetSucesso("Atualizado");

    return response;

  } catch (error) {
    erro(error.response.data.message)
  }
}


//Eliminar regiao
export async function eliminarRegiao(id) {
  try {
    const response = await api.get('api/eliminar_regiao/' + id);

    sweetSucesso("Removido")

    return response.data;
  } catch (error) {

    erro(error.response.data.message)

    throw error;
  }
}


// Cidade
//Adicionar Cidade
export async function adicionarCidade(data) {
  //console.log('token add: '+token)

  try {
    const response = await api.post('api/cidade/registar_cidade', data);
    sweetSucesso("Feito")

    return response.data;

  } catch (error) {
    erro(error.response.data.message)

  }

}

// Listar Cidade
export async function listarCidade() {
  try {
    const response = await api.get('api/cidade/listar_cidades');
    return response.data;
  } catch (error) {
    erro(error.response.data.message)
    throw error; // Opcional: propague o erro para que ele possa ser tratado em outro lugar, se necessário.
  }
}


// Editar cidade
export async function editarCidade(data, id) {
  try {
    const response = await api.put(`api/editar_cidade/update/${id}`, data);

    sweetSucesso("Atualizado");

    return response;

  } catch (error) {
   erro(error.response.data.message)
  }
}


//Eliminar cidade
export async function eliminarCidade(id) {
  try {
    const response = await api.get('api/eliminar_cidade/' + id);

    //sweetSucesso("api " + response)
    sweetSucesso("Removido")


    return response.data;
  } catch (error) {

    erro(error.response.data.message)

    throw error;
  }
}


// Tipo de Veiculo
//Adicionar Tipo de Veiculo
export async function adicionarTipo_Veiculo(data) {
  //console.log('token add: '+token)

  try {
    const response = await api.post('api/tipo_veiculo/registar_tipos_veiculos', data);
    sweetSucesso("Feito")

    return response.data;

  } catch (error) {
    erro(error.response.data.message)

  }

}

// Listar Cidade
export async function listarTipo_Veiculo() {
  try {
    const response = await api.get('api/tipo_veiculo/listar_tipos_veiculos');
    return response.data;
  } catch (error) {
    erro(error.response.data.message)
    throw error; // Opcional: propague o erro para que ele possa ser tratado em outro lugar, se necessário.
  }
}

// Editar Tipo de veiculo
export async function editarTipo_Veiculo(data, id) {
  try {
    const response = await api.put(`api/editar_tipos_veiculos/update/${id}`, data);

    sweetSucesso("Atualizado");

    return response;

  } catch (error) {
    erro(error.response.data.message)
  }
}

//Eliminar Tipo de veiculo
export async function eliminarTipo_Veiculo(id) {
  try {
    const response = await api.get('api/eliminar_tipos_veiculos/' + id);

    sweetSucesso("Removido")

    return response.data;
  } catch (error) {

    erro(error.response.data.message)

    throw error;
  }
}


//////////////////////////////////////////////////////////////////////////
// Conforto
//Adicionar conforto
export async function adicionarCategoriaOpcionais(data) {
  //console.log('token add: '+token)

  try {
    const response = await api.post('api/categoria_opcionais/registar_categoria_opcionais', data);
    sweetSucesso("Feito")

    return response.data;

  } catch (error) {
    erro(error.response.data.message)

  }

}

// Listar Conforto
export async function listarCategoriaOpcionais() {
  try {
    const response = await api.get('api/categoria_opcionais/listar_categoria_opcionais');
    return response.data;
  } catch (error) {
    erro(error.response.data.message)
    throw error; // Opcional: propague o erro para que ele possa ser tratado em outro lugar, se necessário.
  }
}


// Editar Conforto
export async function editarCategoriaOpcionais(data, id) {
   try {
    const response = await api.put('api/editar_categoria_opcionais/update/'+id, data);

    sweetSucesso("Atualizado");

    return response;

  } catch (error) {
    erro(error.response.data.message)
  }
}

//Eliminar Conforto
export async function eliminarCategoriaOpcionais(id) {
  try {
    const response = await api.get('api/eliminar_categoria_opcionais/' + id);

    sweetSucesso("Removido")

    return response.data;
  } catch (error) {

    erro(error.response.data.message)

    throw error;
  }
}


//////////////////////////////////////////////////////////////////////////
//Segurança
//Adicionar Seguranca
export async function adicionarOpcionais(data) {
  //console.log('token add: '+token)

  try {
    const response = await api.post('api/opcionais/registar_opcionais', data);
    sweetSucesso("Feito")

    return response.data;

  } catch (error) {
    erro(error.response.data.message)

  }

}

// Listar Seguranca
export async function listarOpcionais() {
  try {
    const response = await api.get('api/opcionais/listar_opcionais');
    return response.data;
  } catch (error) {
    erro(error.response.data.message)
    throw error; // Opcional: propague o erro para que ele possa ser tratado em outro lugar, se necessário.
  }
}


// Editar Segurança
export async function editarOpcionais(data, id) {
  console.log("Atualizado");
  console.log(data);

  try {
    const response = await api.put('api/editar_opcionais/update/'+id, data);

    sweetSucesso();

    console.log('Response');
    console.log(response.data);

    console.log("Terminado");
    console.log(data);

    return response;

  } catch (error) {
    erro(error.response.data.message)
  }
}

//Eliminar Segurança
export async function eliminarOpcionais(id) {
  try {
    const response = await api.get('api/eliminar_opcionais/' + id);

    sweetSucesso("Removido")

    return response.data;
  } catch (error) {

    erro(error.response.data.message)
    
    throw error;
  }
}


//Historico Plano Anunciante
export async function listarHistoricoPlanoAnunciante() {
  try {
    const response = await api.get('api/historicos_planos/listar_historicos_planos');
    return response.data;
  } catch (error) {
    erro(error.response.data.message)
    throw error; // Opcional: propague o erro para que ele possa ser tratado em outro lugar, se necessário.
  }
}

//Detalhar Anuncio
export async function detalhar(url, id) {
  try {
    
    const response = await api.get(url+id)

    return response.data;

  } catch (error) {

    throw error;
  }
}

//Historico Plano Anunciante
export async function numClick(url, id) {
  try {
    const response = await api.get(url+id);
    return response.data;
  } catch (error) {
    erro(error.response.data.message)
    throw error; // Opcional: propague o erro para que ele possa ser tratado em outro lugar, se necessário.
  }
}