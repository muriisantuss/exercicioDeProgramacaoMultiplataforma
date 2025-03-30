import React, { useState } from 'react';
import './Menu.css';

type MenuProps = {
  onSelect: (option: string, componentName: string) => void;
};

const Menu1781432412016: React.FC<MenuProps> = ({ onSelect }) => {
  const [active, setActive] = useState('');

  const handleSelect = (option: string, componentName: string) => {
    onSelect(option, componentName);
    setActive(option);
  };

  return (
    <nav className="bg-stone-700 p-4 rounded-lg text-white shadow-lg">
      <div className=" mb-4 md:mb-0 ">
        <ul className="space-y-2">
          <li className="text-3xl font-bold text-center dark:text-white ">
            {' '}
            Cadastro
          </li>
          <li>
            <button
              className={`w-full text-dark p-2 text-left rounded-lg inset-shadow-sm ${
                active === 'cadastro-curso'
                  ? 'bg-stone-500 text-white hover:none'
                  : 'bg-white text-stone-800 hover:bg-slate-100 hover:border-2 hover:border-stone-800 hover:text-stone-800'
              } `}
              onClick={() =>
                handleSelect('cadastro-curso', 'CadastroCurso1781432412016')
              }
            >
              Curso
            </button>
          </li>

          <li>
            <button
              className={`w-full text-dark p-2 text-left rounded-lg inset-shadow-sm ${
                active === 'cadastro-disciplina'
                  ? 'bg-stone-500 text-white hover:none'
                  : 'bg-white text-stone-800 hover:bg-slate-100 hover:border-2 hover:border-stone-800 hover:text-stone-800'
              }`}
              onClick={() =>
                handleSelect(
                  'cadastro-disciplina',
                  'CadastroDisciplina1781432412016'
                )
              }
            >
              Disciplina
            </button>
          </li>
          <li>
            <button
              className={`w-full text-dark p-2 text-left rounded-lg inset-shadow-sm ${
                active === 'cadastro-professor'
                  ? 'bg-stone-500 text-white hover:none'
                  : 'bg-white text-stone-800 hover:bg-slate-100 hover:border-2 hover:border-stone-800 hover:text-stone-800'
              }`}
              onClick={() =>
                handleSelect(
                  'cadastro-professor',
                  'CadastroProfessor1781432412016'
                )
              }
            >
              Professor
            </button>
          </li>
          <li className="text-3xl font-bold text-center dark:text-white">
            {' '}
            Visualizar
          </li>
          <li>
            <button
              className={`w-full text-dark p-2 text-left rounded-lg inset-shadow-sm ${
                active === 'visualizar-curso'
                  ? 'bg-stone-500 text-white hover:none'
                  : 'bg-white text-stone-800 hover:bg-slate-100 hover:border-2 hover:border-stone-800 hover:text-stone-800'
              }`}
              onClick={() =>
                handleSelect('visualizar-curso', 'VisualizarCurso1781432412016')
              }
            >
              Curso
            </button>
          </li>
          <li>
            <button
              className={`w-full text-dark p-2 text-left rounded-lg inset-shadow-sm ${
                active === 'visualizar-disciplina'
                  ? 'bg-stone-500 text-white hover:none'
                  : 'bg-white text-stone-800 hover:bg-slate-100 hover:border-2 hover:border-stone-800 hover:text-stone-800'
              }`}
              onClick={() =>
                handleSelect(
                  'visualizar-disciplina',
                  'VisualizarDisciplina1781432412016'
                )
              }
            >
              Disciplina
            </button>
          </li>
          <li>
            <button
              className={`w-full text-dark p-2 text-left rounded-lg inset-shadow-sm ${
                active === 'visualizar-professor'
                  ? 'bg-stone-500 text-white hover:none'
                  : 'bg-white text-stone-800 hover:bg-slate-100 hover:border-2 hover:border-stone-800 hover:text-stone-800'
              }`}
              onClick={() =>
                handleSelect(
                  'visualizar-professor',
                  'VisualizarProfessor1781432412016'
                )
              }
            >
              Professor
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu1781432412016;
