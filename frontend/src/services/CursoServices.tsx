import axios from 'axios';

const API_URL = 'http://localhost:3000/curso'; 

export const cadastrarCurso = async (sigla: string, nome: string) => {
  try {
    const response = await axios.post(API_URL, { sigla, nomeCompleto: nome });
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar curso:', error);
    throw error;
  }
};

export const getCursos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar cursos:', error);
    throw error;
  }
};