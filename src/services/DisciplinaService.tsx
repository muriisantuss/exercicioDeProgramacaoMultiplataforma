import axios from 'axios';
import { Disciplina } from '../Types/Disciplina';

const API_URL = 'http://localhost:3000/disciplina';  

export const createDisciplina = async (disciplina: Disciplina): Promise<Disciplina> => {
  try {
    const response = await axios.post(API_URL, disciplina);
    return response.data;  
  } catch (error) {
    console.error('Erro ao criar disciplina:', error);
    throw error;
  }
};

export const getDisciplinas = async (): Promise<Disciplina[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data; 
  } catch (error) {
    console.error('Erro ao obter disciplinas:', error);
    throw error;
  }
};


