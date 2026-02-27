import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// 1. Importamos las páginas que acabamos de crear
import Index from './pages/index';
import Habilidades from './pages/habilidades';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Rutas*/}
        <Route path="/index" element={<Index />} />
        <Route path="/" element={<Navigate to="/index" replace />} />
        <Route path='/habilidades' element={<Habilidades />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
