import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode; // Aqui estamos dizendo que o Container vai receber filhos
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <main>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        React + Vite +
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          Tailwind CSS
        </span>
      </h1>
      {children}
    </main>
  );
};

export default Container;
