import React, { useState } from "react";

// Aqui estamos criando um tipo para o nosso curso
interface Curso {
  sigla: string;
  designacao: string;
}

const CadastroCurso_1781432412016: React.FC<{ onAddCurso: (curso: Curso) => void }> = ({ onAddCurso }) => {
  const [siglaCurso, setSiglaCurso] = useState("");
  const [designacaoCurso, setDesignacaoCurso] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Criando um novo curso
    const novoCurso: Curso = {
      sigla: siglaCurso,
      designacao: designacaoCurso,
    };

    // Enviando o novo curso para o componente pai
    onAddCurso(novoCurso);

    // Limpando os campos do formulário
    setSiglaCurso("");
    setDesignacaoCurso("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Sigla do Curso</label>
        <input
          type="text"
          value={siglaCurso}
          onChange={(e) => setSiglaCurso(e.target.value)}
        />
      </div>
      <div>
        <label>Designação Completa</label>
        <input
          type="text"
          value={designacaoCurso}
          onChange={(e) => setDesignacaoCurso(e.target.value)}
        />
      </div>
      <button type="submit">Cadastrar Curso</button>
    </form>
  );
};

export default CadastroCurso_1781432412016;
