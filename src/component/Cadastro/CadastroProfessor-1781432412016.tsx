import React, { useState } from 'react';

const CadastroProfessor1781432412016: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Professor cadastrado:', { nome, email, telefone });

    // Aqui você pode adicionar a lógica para salvar os dados, como enviar para um backend.

    setNome('');
    setEmail('');
    setTelefone('');
  };

  const handleCancel = () => {
    setNome('');
    setEmail('');
    setTelefone('');
  };

  return (
    <div className="p-6 rounded-lg w-full max-w-sm md:max-w-md m-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-2xl text-stone-800 font-extrabold mb-1">Nome do Professor</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-2 bg-stone-100 text-stone-800 font-bold border-2 border-stone-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-800"
            required
            autoFocus
          />
        </div>
        <div>
          <label className="block text-2xl text-stone-800 font-extrabold mb-1">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-stone-100 text-stone-800 font-bold border-2 border-stone-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-800"
            required
          />
        </div>
        <div>
          <label className="block text-2xl text-stone-800 font-extrabold mb-1">Telefone</label>
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
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

export default CadastroProfessor1781432412016;
