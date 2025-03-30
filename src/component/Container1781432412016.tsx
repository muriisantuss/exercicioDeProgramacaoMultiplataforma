import React, { useState } from 'react';
import {
  Menu1781432412016,
  CadastroCurso1781432412016,
  CadastroDisciplina1781432412016,
  CadastroProfessor1781432412016,
  VisualizarCurso1781432412016,
  VisualizarDisciplina1781432412016,
  VisualizarProfessor1781432412016,
} from '../component';

const componentMap: Record<string, React.FC> = {
  CadastroCurso1781432412016: CadastroCurso1781432412016,
  CadastroDisciplina1781432412016: CadastroDisciplina1781432412016,
  CadastroProfessor1781432412016: CadastroProfessor1781432412016,
  VisualizarCurso1781432412016: VisualizarCurso1781432412016,
  VisualizarDisciplina1781432412016: VisualizarDisciplina1781432412016,
  VisualizarProfessor1781432412016: VisualizarProfessor1781432412016,
};

const Container1781432412016: React.FC = () => {
  const [selectedNameContainer, setSelectedNameContainer] = useState(
    'CadastroCurso1781432412016'
  );
  const [selectedOption, setSelectedOption] = useState('cadastro-aluno');
  const SelectedComponent = componentMap[selectedNameContainer];

  const handleSelect = (option: string, componentName: string) => {
    setSelectedOption(option);
    setSelectedNameContainer(componentName);
  };

  return (
    <section className="flex">
      <div className="rounded-lg shadow-lg">
        <Menu1781432412016 onSelect={handleSelect} />
      </div>
      <div className="md:w-3/4 bg-white p-6 rounded-lg shadow-lg ">
        <div className="bg-stone-50 flex flex-col justify-content rounded-lg shadow-lg">
          <h1 className="text-5xl text-stone-800 font-extrabold tracking-tight lg:text-6xl leading-12 p-4 font-bold mb-2">
            {selectedOption.replace('-', ' ').toUpperCase()}
          </h1>
          {SelectedComponent ? (
            <SelectedComponent />
          ) : (
            <p>Selecione uma opção</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Container1781432412016;
