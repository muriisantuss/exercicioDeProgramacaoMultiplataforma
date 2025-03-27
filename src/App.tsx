import React, { useState } from "react";
import Container from "./component/Container1781432412016.tsx";
import Menu from "./component/Menu-1781432412016-.tsx";
import CadastroCurso_1781432412016 from "./component/CadastroCurso-1781432412016-.tsx";
import VisualizarCurso_1781432412016 from "./component/VisualizarCurso-1781432412016-.tsx";

interface Curso {
  sigla: string;
  designacao: string;
}

function App() {
  const [telaAtual, setTelaAtual] = useState<string>("");
  const [cursos, setCursos] = useState<Curso[]>([]);

  // Função para adicionar um novo curso
  const handleAddCurso = (curso: Curso) => {
    setCursos([...cursos, curso]);
  };

  return (
    <Container>
      <Menu onSelect={setTelaAtual} />
      
      {/* Renderização condicional para exibir o componente correto */}
      {telaAtual === "cadastroCurso" && <CadastroCurso_1781432412016 onAddCurso={handleAddCurso} />}
      {telaAtual === "visualizarCurso" && <VisualizarCurso_1781432412016 cursos={cursos} />}
      {/* Adicionar outras opções de navegação conforme necessário */}
    </Container>
  );
}

export default App;
