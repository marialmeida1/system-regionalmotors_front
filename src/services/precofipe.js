import axios from 'axios';

const API_URL = 'https://fipe.parallelum.com.br/api/v2/';

export const getPriceFipe = async (type, fipe, year) => {
  try {
    const response = await axios.get(`${API_URL}${type}/${fipe}/years/${year}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os id da placa Fipe:', error);
    throw error;
  }
};
