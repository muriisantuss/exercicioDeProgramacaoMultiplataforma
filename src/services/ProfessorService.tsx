import axios from 'axios';
import { Professor } from '../Types/Professor';

const API_URL = 'http://localhost:3000/professor';

export const cadastrarProfessor = async (professor: Professor): Promise<Professor> => {
  try {
    const response = await axios.post(API_URL, professor);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar professor', error);
    throw error;
  }
};

export const getProfessores = async (): Promise<Professor[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar professores', error);
    throw error;
  }
};

