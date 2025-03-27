import React from "react";

interface Curso {
  sigla: string;
  designacao: string;
}

const VisualizarCurso_1781432412016: React.FC<{ cursos: Curso[] }> = ({ cursos }) => {
  return (
    <div>
      <h2>Lista de Cursos</h2>
      <ul>
        {cursos.map((curso, index) => (
          <li key={index}>
            {curso.sigla} - {curso.designacao}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisualizarCurso_1781432412016;
