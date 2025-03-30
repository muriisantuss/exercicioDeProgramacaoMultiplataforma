import React, { useState } from 'react';

const CadastroCurso1781432412016: React.FC = () => {
  const [sigla, setSigla] = useState('');
  const [nome, setNome] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Curso cadastrado:', { sigla, nome });

    // Aqui você pode adicionar a lógica para salvar os dados, como enviar para um backend.

    setSigla('');
    setNome('');
  };

  const handleCancel = () => {
    setSigla('');
    setNome('');
  };

  return (
    <div className="p-6 m-auto rounded-lg w-full max-w-sm md:max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-2xl text-stone-800 font-extrabold mb-1">Sigla do Curso</label>
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
          <label className="block text-2xl text-stone-800 font-extrabold mb-1">Nome Completo</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-2 bg-stone-100 text-stone-800 font-bold border-2 border-stone-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-800"
            required
          />
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

export default CadastroCurso1781432412016;
