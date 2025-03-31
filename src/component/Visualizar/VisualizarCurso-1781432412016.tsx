import React, { useState, useEffect } from 'react';
import { getCursos } from '../../services/cursoServices';
import { Curso } from '../../Types/Curso';

const VisualizarCurso1781432412016: React.FC = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const cursosData = await getCursos();
        setCursos(cursosData);
      } catch (error) {
        console.error('Erro ao buscar cursos:', error);
      }
    };

    fetchCursos();
  }, []);

  return (
    <div className="p-6 rounded-lg w-full max-w-lg m-auto bg-white shadow-md">
      <h1 className="text-3xl text-stone-800 font-extrabold mb-4">
        Cursos Cadastrados
      </h1>
      <ul className="space-y-3">
        {cursos.map((curso, index) => (
          <li key={index} className="bg-stone-100 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-stone-700">{curso.sigla}</h2>
            <p className="text-stone-600">{curso.nomeCompleto}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisualizarCurso1781432412016;
