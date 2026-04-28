import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0e0e10] text-white min-h-[70vh] grid place-items-center px-5">
        <div className="text-center max-w-md">
          <p className="text-7xl md:text-8xl font-extrabold text-primary leading-none">404</p>
          <h1 className="mt-4 text-2xl md:text-3xl font-bold">Página no encontrada</h1>
          <p className="mt-3 text-white/70">
            La ruta que buscas no existe o fue movida. Vuelve al inicio y sigamos.
          </p>
          <Link
            to="/"
            className="mt-7 inline-flex items-center gap-2 bg-primary text-[#0e0e10] font-semibold px-5 py-3 rounded-lg hover:brightness-110 transition"
          >
            <FaArrowLeft aria-hidden="true" />
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
