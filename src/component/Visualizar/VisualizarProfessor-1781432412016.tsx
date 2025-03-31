import React, { useEffect, useState } from 'react';
import { Professor } from '../../Types/Professor';
import { getProfessores } from '../../services/ProfessorService';

const VisualizarProfessor1781432412016: React.FC = () => {
  const [professores, setProfessores] = useState<Professor[]>([]);

  useEffect(() => {
    const fetchProfessores = async () => {
      try {
        const dados = await getProfessores();
        setProfessores(dados);
      } catch (error) {
        console.error('Erro ao buscar professores:', error);
      }
    };

    fetchProfessores();
  }, []);

  return (
    <div className="p-6 rounded-lg w-full max-w-lg m-auto bg-white shadow-md">
      <h1 className="text-3xl text-stone-800 font-extrabold mb-4">Professores Cadastrados</h1>
      {professores.length === 0 ? (
        <p className="text-center text-lg text-stone-600">Nenhum professor cadastrado</p>
      ) : (
        <ul className="space-y-3">
          {professores.map((professor) => (
            <li key={professor.id} className="bg-stone-100 p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-stone-700">{professor.nome}</h2>
              <p className="text-stone-600">{professor.email}</p>
              <p className="text-stone-600">{professor.identificacao}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VisualizarProfessor1781432412016;
