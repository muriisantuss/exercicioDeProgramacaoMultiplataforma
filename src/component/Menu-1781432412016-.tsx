import React from "react";

interface MenuProps {
  onSelect: (tela: string) => void;
}

const Menu_1781432412016: React.FC<MenuProps> = ({ onSelect }) => {
  return (
    <div>
      <button onClick={() => onSelect("cadastroCurso")}>Cadastrar Curso</button>
      <button onClick={() => onSelect("visualizarCurso")}>Visualizar Curso</button>
      <button onClick={() => onSelect("cadastroDisciplina")}>Cadastrar Disciplina</button>
      <button onClick={() => onSelect("visualizarDisciplina")}>Visualizar Disciplina</button>
      <button onClick={() => onSelect("cadastroProfessor")}>Cadastrar Professor</button>
      <button onClick={() => onSelect("visualizarProfessor")}>Visualizar Professor</button>
    </div>
  );
};

export default Menu_1781432412016;
