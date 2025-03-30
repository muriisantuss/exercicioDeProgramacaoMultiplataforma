import React, { useState } from 'react';

const VisualizarDisciplina1781432412016: React.FC = () => {
  const [disciplinas] = useState([
    { codigo: 'MAT101', nome: 'Matemática Básica' },
    { codigo: 'FIS101', nome: 'Física Geral' },
  ]);

  return (
    <div className="p-6 rounded-lg w-full max-w-lg m-auto bg-white shadow-md">
      <h1 className="text-3xl text-stone-800 font-extrabold mb-4">Disciplinas Cadastradas</h1>
      <ul className="space-y-3">
        {disciplinas.map((disciplina, index) => (
          <li key={index} className="bg-stone-100 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-stone-700">{disciplina.codigo}</h2>
            <p className="text-stone-600">{disciplina.nome}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisualizarDisciplina1781432412016;
