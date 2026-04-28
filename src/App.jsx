import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Index from './pages/index.jsx';
import Habilidades from './pages/habilidades.jsx';
import Proyectos from './pages/proyectos.jsx';
import Contactos from './pages/contactos.jsx';
import NotFound from './pages/notfound.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contactos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
