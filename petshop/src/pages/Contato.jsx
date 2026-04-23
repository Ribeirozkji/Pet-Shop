import React from 'react';
import Hero from '../components/Hero';

const Contato = () => {
  const iconBoxStyle = "bg-blue-100 text-blue-600 p-4 rounded-2xl text-2xl";
  const inputStyle = "w-full p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-gray-50";

  return (
    <div className="min-h-screen bg-white">
      <Hero 
        titulo="Fale Conosco" 
        subtitulo="Dúvidas, elogios ou sugestões? Nossa equipe está pronta para te ouvir."
      />

      <section className="container mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Informações de Contato</h2>
              <p className="text-gray-500">Escolha o canal de sua preferência para falar com a gente.</p>
            </div>

            <div className="space-y-6">
             
              <div className="flex items-center gap-4">
                <div className={iconBoxStyle}>📍</div>
                <div>
                  <h4 className="font-bold text-gray-800">Endereço</h4>
                  <p className="text-gray-600">Rua dos Pets, 123 - Bairro Feliz</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={iconBoxStyle}>📞</div>
                <div>
                  <h4 className="font-bold text-gray-800">Telefone</h4>
                  <p className="text-gray-600">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={iconBoxStyle}>📧</div>
                <div>
                  <h4 className="font-bold text-gray-800">E-mail</h4>
                  <p className="text-gray-600">contato@petzpamor.com.br</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-bold text-gray-800 mb-4">Siga-nos</h4>
              <div className="flex gap-4">
                <span className="cursor-pointer hover:scale-110 transition-transform">📸 Instagram</span>
                <span className="cursor-pointer hover:scale-110 transition-transform">🔵 Facebook</span>
              </div>
            </div>
          </div>

          
          <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <form className="space-y-4">
              <input type="text" placeholder="Seu Nome completo" className={inputStyle} />
              <input type="email" placeholder="Seu melhor e-mail" className={inputStyle} />
              <input type="text" placeholder="Assunto" className={inputStyle} />
              <textarea 
                placeholder="Como podemos ajudar seu pet?" 
                rows="5" 
                className={inputStyle}
              ></textarea>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-blue-200">
                Enviar Mensagem 🚀
              </button>
            </form>
          </div>

        </div>
      </section>

     
      <section className="h-64 bg-gray-200 w-full mt-10 flex items-center justify-center text-gray-400 italic">
        [Área reservada para o Google Maps]
      </section>
    </div>
  );
};

export default Contato;