import React, { useState } from 'react';

const VisualizarProfessor1781432412016: React.FC = () => {
  const [professores] = useState([
    { nome: 'Prof. João Silva', email: 'joao.silva@exemplo.com', telefone: '123-456-789' },
    { nome: 'Prof. Maria Oliveira', email: 'maria.oliveira@exemplo.com', telefone: '987-654-321' },
  ]);

  return (
    <div className="p-6 rounded-lg w-full max-w-lg m-auto bg-white shadow-md">
      <h1 className="text-3xl text-stone-800 font-extrabold mb-4">Professores Cadastrados</h1>
      <ul className="space-y-3">
        {professores.map((professor, index) => (
          <li key={index} className="bg-stone-100 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-stone-700">{professor.nome}</h2>
            <p className="text-stone-600">{professor.email}</p>
            <p className="text-stone-600">{professor.telefone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisualizarProfessor1781432412016;
