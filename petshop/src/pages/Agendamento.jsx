import React from 'react';
import Hero from '../components/Hero';

const Agendamento = () => {
  const inputStyle = "w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all";

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero 
        titulo="Agende uma Visita" 
        subtitulo="Escolha o dia e horário que ficam melhor para você."
      />

      <section className="container mx-auto py-12 px-6">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <form className="space-y-6">
            
            <div>
              <label className="block text-gray-700 font-bold mb-2">Seu Nome</label>
              <input type="text" placeholder="Ex: João Silva" className={inputStyle} />
            </div>

           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Nome do Pet</label>
                <input type="text" placeholder="Ex: Rex" className={inputStyle} />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Tipo de Pet</label>
                <select className={inputStyle}>
                  <option>Cachorro</option>
                  <option>Gato</option>
                  <option>Outro</option>
                </select>
              </div>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Serviço</label>
                <select className={inputStyle}>
                  <option>Banho e Tosa</option>
                  <option>Consulta</option>
                  <option>Vacinação</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Data</label>
                <input type="date" className={inputStyle} />
              </div>
            </div>

           
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-colors shadow-lg"
            >
              Confirmar Agendamento 🐾
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Agendamento;