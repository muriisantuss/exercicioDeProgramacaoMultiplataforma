import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode; // Aqui estamos dizendo que o Container vai receber filhos
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default Container;
