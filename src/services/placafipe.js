import axios from 'axios';

const API_URL = 'https://api.placafipe.com.br/getplacafipe/';

const token = import.meta.env.VITE_APP_PLACAFIPE_TOKEN;

export const getPlacaFipeData = async (placa) => {
  try {
    const response = await axios.get(`${API_URL}${placa}/${token}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da placa Fipe:', error);
    throw error;
  }
};
