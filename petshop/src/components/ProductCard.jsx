const ProductCard = ({ item }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
     
      <div className="h-48 overflow-hidden">
        <img 
          src={item.imagem} 
          alt={item.nome} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
      </div>

      
      <div className="p-6">
        <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{item.categoria}</span>
        <h3 className="text-xl font-bold text-gray-800 mt-1">{item.nome}</h3>
        <p className="text-2xl font-black text-green-600 mt-4">R$ {item.preco}</p>
        
        <button className="w-full mt-6 bg-gray-900 text-white py-3 rounded-2xl font-bold hover:bg-blue-600 transition-colors">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductCard;