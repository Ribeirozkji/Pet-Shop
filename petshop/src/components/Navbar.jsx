import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
 
  const linkStyle = "text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
      
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
          <span>PetShop Amor</span>
          <span className="text-2xl">🐾</span>
        </Link>

       
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={linkStyle}>Início</Link>
          <Link to="/servicos" className={linkStyle}>Serviços</Link>
          <Link to="/contato" className={linkStyle}>Contato</Link>
        
        </div>

       
        <div className="flex items-center">
          <Link 
            to="/agendamento" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold transition-all shadow-md hover:shadow-lg"
          >
            Agendar Banho
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;