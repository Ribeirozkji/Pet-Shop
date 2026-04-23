import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato'
import Agendamento from './pages/Agendamento';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/agendamento" element={<Agendamento />} />
     
      </Routes>
    </Router>
  );
}

export default App