import React, { useState, useEffect } from 'react';

import { Disciplina } from '../../Types/Disciplina';
import { Curso } from '../../Types/Curso';
import { Professor } from '../../Types/Professor';


import { createDisciplina } from '../../services/DisciplinaService';  
import { getCursos } from '../../services/cursoServices';  
import { getProfessores } from '../../services/ProfessorService';

const CadastroDisciplina1781432412016: React.FC = () => {
  const [sigla, setSigla] = useState('');
  const [nome, setNome] = useState('');
  const [semestre, setSemestre] = useState('');
  const [curso, setCurso] = useState('');
  const [professor, setProfessor] = useState('');
  const [cursos, setCursos] = useState<Curso[]>([]);  
  const [professores, setProfessores] = useState<Professor[]>([]);
  const [semestres] = useState(['1º', '2º', '3º', '4º', '5º', '6º', '7º', '8º']);

  useEffect(() => {
    const fetchCursos = async () => {
      const cursosData = await getCursos();
      setCursos(cursosData);
    };

    const fetchProfessores = async () => {
      const professoresData = await getProfessores();
      setProfessores(professoresData);
    };

    fetchCursos();
    fetchProfessores();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const disciplinaData: Disciplina = {
      id: '',  
      sigla,
      nome,
      semestre,
      cursoId: curso,
      professorId: professor,
    };

    try {
      const novaDisciplina = await createDisciplina(disciplinaData);  
      console.log('Disciplina cadastrada com sucesso:', novaDisciplina);
      
      setSigla('');
      setNome('');
      setSemestre('');
      setCurso('');
      setProfessor('');
    } catch (error) {
      console.error('Erro ao cadastrar disciplina:', error);
    }
  };

  const handleCancel = () => {
    setSigla('');
    setNome('');
    setSemestre('');
    setCurso('');
    setProfessor('');
  };

  return (
    <div className="p-6 m-auto rounded-lg w-full max-w-sm md:max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-2xl text-stone-800 font-extrabold mb-1">Sigla</label>
          <input
            type="text"
            value={sigla}
            onChange={(e) => setSigla(e.target.value)}
            className="w-full p-2 bg-stone-100 text-stone-800 font-bold border-2 border-stone-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-800"
            required
            autoFocus
          />
        </div>

        <div>
          <label className="block text-2xl text-stone-800 font-extrabold mb-1">Nome da Disciplina</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-2 bg-stone-100 text-stone-800 font-bold border-2 border-stone-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-800"
            required
          />
        </div>

        <div>
          <label className="block text-2xl text-stone-800 font-extrabold mb-1">Semestre</label>
          <select
            value={semestre}
            onChange={(e) => setSemestre(e.target.value)}
            className="w-full p-2 bg-stone-100 text-stone-800 font-bold border-2 border-stone-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-800"
            required
          >
            <option value="">Selecione o Semestre</option>
            {semestres.map((semestre, index) => (
              <option key={index} value={semestre}>
                {semestre}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-2xl text-stone-800 font-extrabold mb-1">Curso</label>
          <select
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
            className="w-full p-2 bg-stone-100 text-stone-800 font-bold border-2 border-stone-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-800"
            required
          >
            <option value="">Selecione o Curso</option>
            {cursos.map((curso, index) => (
              <option key={index} value={curso.id}>
                {curso.sigla} - {curso.nomeCompleto}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-2xl text-stone-800 font-extrabold mb-1">Professor</label>
          <select
            value={professor}
            onChange={(e) => setProfessor(e.target.value)}
            className="w-full p-2 bg-stone-100 text-stone-800 font-bold border-2 border-stone-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-800"
            required
          >
            <option value="">Selecione o Professor</option>
            {professores.map((professor, index) => (
              <option key={index} value={professor.id}>
                {professor.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-5 justify-center">
          <button
            type="submit"
            className="bg-stone-700 text-white px-4 py-2 rounded-lg hover:bg-stone-800 transition cursor-pointer"
          >
            Inserir
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition cursor-pointer"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};


export default CadastroDisciplina1781432412016;
