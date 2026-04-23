import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductList from "../components/ProductList";

const Home = () => {
  const destaques = [
    { id: 1, nome: "Ração Gato Sênior", preco: "120,00", categoria: "Gatos", imagem: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400" },
    { id: 2, nome: "Coleira Ajustável", preco: "45,00", categoria: "Cães", imagem: "https://images.unsplash.com/photo-1541591047357-124c25590a5b?q=80&w=400" },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero 
        titulo="O paraíso dos seus Pets" 
        subtitulo="Encontre tudo o que seu melhor amigo precisa em um só lugar." 
      />

      <section className="container mx-auto mt-[-40px] px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <CategoryCard titulo="Canto dos Cães" icone="🐶" cor="bg-orange-100" link="/caes" />
        <CategoryCard titulo="Mundo dos Gatos" icone="🐱" cor="bg-purple-100" link="/gatos" />
      </section>

      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold px-6 mb-8 text-gray-800">Produtos em Destaque</h2>
        <ProductList produtos={destaques} />
      </section>
    </main>
  );
};

export default Home;