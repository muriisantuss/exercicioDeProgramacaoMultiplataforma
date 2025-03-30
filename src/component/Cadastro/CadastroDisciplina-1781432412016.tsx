import React, { useState } from 'react';

const CadastroDisciplina1781432412016: React.FC = () => {
  const [codigo, setCodigo] = useState('');
  const [nome, setNome] = useState('');
  const [cargaHoraria, setCargaHoraria] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Disciplina cadastrada:', { codigo, nome, cargaHoraria });

    // Aqui você pode adicionar a lógica para salvar os dados, como enviar para um backend.

    setCodigo('');
    setNome('');
    setCargaHoraria('');
  };

  const handleCancel = () => {
    setCodigo('');
    setNome('');
    setCargaHoraria('');
  };

  return (
    <div className="p-6 m-auto rounded-lg m-auto w-full max-w-sm md:max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-2xl text-stone-800 font-extrabold mb-1">Código da Disciplina</label>
          <input
            type="text"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
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
          <label className="block text-2xl text-stone-800 font-extrabold mb-1">Carga Horária (em horas)</label>
          <input
            type="number"
            value={cargaHoraria}
            onChange={(e) => setCargaHoraria(e.target.value)}
            className="w-full p-2 bg-stone-100 text-stone-800 font-bold border-2 border-stone-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-800"
            required
            min="1"
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

export default CadastroDisciplina1781432412016;
