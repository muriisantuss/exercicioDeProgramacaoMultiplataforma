import React, { useEffect, useState } from 'react';
import { Disciplina } from '../../Types/Disciplina';
import { Curso } from '../../Types/Curso';
import { Professor } from '../../Types/Professor';
import { getDisciplinas } from '../../services/DisciplinaService';  
import { getCursos } from '../../services/cursoServices';  
import { getProfessores } from '../../services/ProfessorService';  

const VisualizarDisciplina1781432412016: React.FC = () => {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);
  const [cursos, setCursos] = useState<Curso[]>([]);  
  const [professores, setProfessores] = useState<Professor[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const disciplinasData = await getDisciplinas();
        const cursosData = await getCursos();
        const professoresData = await getProfessores();
        
        setDisciplinas(disciplinasData);
        setCursos(cursosData);
        setProfessores(professoresData);
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    fetchData();
  }, []);

  const getCursoNome = (cursoId: string) => {
    const curso = cursos.find((curso) => curso.id === cursoId);
    return curso ? curso.nomeCompleto : 'Curso não encontrado';
  };

  const getProfessorNome = (professorId: string) => {
    const professor = professores.find((professor) => professor.id === professorId);
    return professor ? professor.nome : 'Professor não encontrado';
  };

  return (
    <div className="p-6 rounded-lg w-full max-w-lg m-auto bg-white shadow-md">
      <h1 className="text-3xl text-stone-800 font-extrabold mb-4">Disciplinas Cadastradas</h1>
      {disciplinas.length === 0 ? (
        <p className="text-center text-lg text-stone-600">Nenhuma disciplina cadastrada</p>
      ) : (
        <ul className="space-y-3">
          {disciplinas.map((disciplina) => (
            <li key={disciplina.id} className="bg-stone-100 p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-stone-700">{disciplina.sigla}</h2>
              <p className="text-stone-600">{disciplina.nome}</p>
              <p className="text-stone-500">Semestre: {disciplina.semestre}</p>
              <p className="text-stone-500">Curso: {getCursoNome(disciplina.cursoId)}</p> 
              <p className="text-stone-500">Professor: {getProfessorNome(disciplina.professorId)}</p>  
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VisualizarDisciplina1781432412016;
