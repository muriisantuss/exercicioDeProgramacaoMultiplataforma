import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;  // Aqui estamos dizendo que o Container vai receber filhos
}

const Container1781432412016: React.FC<ContainerProps> = ({ children }) => {
  return <main>{children}</main>; // Renderiza os filhos dentro de uma div
};

export default Container1781432412016;
