import React from 'react';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';

const Servicos = () => {
  
  const listaServicos = [
    {
      id: 1,
      nome: "Banho e Tosa",
      preco: "80,00",
      categoria: "Higiene",
      imagem: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=400"
    },
    {
      id: 2,
      nome: "Consulta Veterinária",
      preco: "150,00",
      categoria: "Saúde",
      imagem: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=400"
    },
    {
      id: 3,
      nome: "Hospedagem Pet",
      preco: "120,00",
      categoria: "Lazer",
      imagem: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=400"
    }
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
   
      <Hero 
        titulo="Nossos Serviços" 
        subtitulo="Cuidado especializado e carinho que seu pet merece." 
      />

      
      <section className="container mx-auto py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-800">Tratamento VIP</h2>
          <p className="text-gray-500 mt-2">Escolha o melhor para o seu companheiro</p>
        </div>

        
        <ProductList produtos={listaServicos} />
      </section>

     
      <section className="bg-blue-600 text-white py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <span className="text-4xl">🏆</span>
            <h4 className="text-xl font-bold mt-4">Profissionais Certificados</h4>
            <p className="mt-2 text-blue-100">Equipe treinada para lidar com todas as raças.</p>
          </div>
          <div>
            <span className="text-4xl">🧼</span>
            <h4 className="text-xl font-bold mt-4">Produtos Biodegradáveis</h4>
            <p className="mt-2 text-blue-100">Shampoos e sprays que não agridem a pele do pet.</p>
          </div>
          <div>
            <span className="text-4xl">📸</span>
            <h4 className="text-xl font-bold mt-4">Relatório com Fotos</h4>
            <p className="mt-2 text-blue-100">Mandamos notícias do seu pet durante o serviço.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Servicos;