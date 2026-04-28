import { useState } from 'react';
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const projects = [
  {
    title: 'MasterFood — Sistema de pedidos para restaurantes',
    images: [
      '/img/masterfood (1).png',
      '/img/masterfood (2).png',
      '/img/masterfood (3).png',
      '/img/masterfood (4).png',
      '/img/masterfood (5).png',
      '/img/masterfood (6).png',
      '/img/masterfood (7).png',
      '/img/masterfood (8).png',
      '/img/masterfood (9).png',
      '/img/masterfood (10).png',
      '/img/masterfood (11).png',
      '/img/masterfood (13).png',
      '/img/masterfood (14).png',
      '/img/masterfood (15).png',
      '/img/masterfood (16).png',
    ],
    summary:
      'Plataforma full stack para gestión completa de un restaurante (Burger Twins, en producción real). Los clientes ordenan desde la web, eligen entrega o retiro, ubican su dirección en mapa, suben comprobante de pago y reciben confirmación por WhatsApp. La administración tiene dashboard en tiempo real, gestión de pedidos, productos, usuarios, pagos y rutas de delivery.',
    bullets: [
      'Pedidos en tiempo real con actualización automática del estado',
      'Mapa segmentado por zonas: el costo de delivery se calcula según polígono dibujado por el admin',
      'Tasa BCV automática actualizada a las 5:00 p.m. (USD ⇄ Bs)',
      'Roles diferenciados: admin, vendedor y delivery, con permisos por vista',
      'Productos personalizables, top de más vendidos y promos con precio tachado',
      'Control de delivery: rutas, kilómetros, ganancias por chofer y reporte exportable a PDF',
      'Subida segura de comprobantes y validación de pagos antes de confirmar',
      'Dashboard con métricas: ventas totales, ticket promedio, ingresos por delivery',
    ],
    stack: ['React', 'Vite', 'Tailwind', 'Node.js', 'Express', 'REST API', 'MySQL', 'Leaflet'],
    period: 'Proyecto personal · En producción',
    featured: true,
    demo: 'https://menuburgertwins.com/'
  },
  {
    title: 'DTF.mcy — Impresión DTF Textil',
    images: ['/img/dtfmy (1).png', '/img/dtfmy (2).png', '/img/dtfmy (3).png'],
    summary:
      'Plataforma web para una imprenta DTF textil real: los clientes suben su diseño, reciben cotización instantánea por metro lineal y gestionan su pedido. Producto en producción, con clientes activos.',
    bullets: [
      'Cotizador inteligente por metro lineal con cálculo en tiempo real',
      'Subida de archivos (PNG, PDF, PSD, AI) con validación',
      'Flujo diferenciado para clientes nuevos y frecuentes',
      'Integración directa con WhatsApp para soporte',
    ],
    stack: ['React', 'Tailwind', 'JavaScript', 'Vite'],
    period: 'Proyecto personal · En producción',
    featured: true,
    demo: 'https://dtfmcy.com/',
  },
  {
    title: 'Sistema de Gestión de Rúbricas',
    images: ['/img/rubricas.png'],
    summary:
      'Aplicación web para que docentes creen rúbricas personalizadas y evalúen actividades académicas con consistencia y trazabilidad.',
    bullets: [
      'CRUD completo de rúbricas, criterios y niveles',
      'Cálculo automático de puntajes y reportes',
      'Autenticación y manejo de roles',
    ],
    stack: ['HTML', 'CSS', 'EJS', 'JavaScript', 'Node.js', 'Express', 'MySQL'],
    period: '4° semestre',
    demo: 'https://sistems-rubricas.onrender.com/',
  },
  {
    title: 'Sistema Convivir',
    images: [
      '/img/convivir.png',
      '/img/convivir2.png',
      '/img/convivir3.png',
      '/img/convivir4.png',
    ],
    summary:
      'Plataforma de gestión para edificios residenciales: control de pagos, visitantes, residentes e incidencias en un solo lugar.',
    bullets: [
      'Registro de residentes y visitantes con histórico',
      'Gestión de pagos y servicios compartidos',
      'Tablero de incidencias con seguimiento',
    ],
    stack: ['HTML', 'CSS', 'EJS', 'JavaScript', 'Node.js', 'Express', 'MySQL'],
    period: '4° semestre',
    demo: 'https://convivir-oq6w.onrender.com/',
  },
  {
    title: 'Invilara',
    images: ['/img/invilara2.png', '/img/invilara.png'],
    summary:
      'Sistema de inventario para empresa: registrar productos, controlar stock y dar visibilidad sobre el abastecimiento.',
    bullets: [
      'Altas, bajas y movimientos de inventario',
      'Filtros y búsqueda por producto/categoría',
      'Persistencia en MySQL con consultas optimizadas',
    ],
    stack: ['PHP', 'Bootstrap', 'HTML', 'CSS', 'MySQL'],
    period: '3° semestre',
  },
  {
    title: 'Auditx',
    images: ['/img/Auditx.png'],
    summary:
      'Aplicación de escritorio para gestionar auditorías: crear, asignar y dar seguimiento sin perder el hilo del proceso.',
    bullets: [
      'Programación orientada a objetos en C#',
      'Persistencia en archivos de texto (sin SGBD)',
      'Interfaz de escritorio sencilla y rápida',
    ],
    stack: ['C#', 'POO', 'WinForms'],
    period: '2° semestre',
  },
  {
    title: 'Juego de Inglés / Español',
    images: ['/img/Juego_Ingles.png'],
    summary:
      'Mini juego web con quiz dinámico y modo memoria para practicar vocabulario inglés-español de forma entretenida.',
    bullets: [
      'Quiz con preguntas aleatorias',
      'Juego de memoria con cartas',
      'Sin frameworks: HTML, CSS y JS puros',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    period: '2° semestre',
    demo: 'https://iujojuegoingles.netlify.app/',
  },
];

function Carousel({ images, title }) {
  const [idx, setIdx] = useState(0);
  const total = images.length;

  if (total === 0) return null;

  const go = (delta) => setIdx((i) => (i + delta + total) % total);

  return (
    <div className="relative rounded-xl overflow-hidden bg-black border border-white/10">
      <img
        src={images[idx]}
        alt={`${title} — vista ${idx + 1}`}
        loading="lazy"
        decoding="async"
        className="w-full h-auto max-h-[420px] object-cover object-top"
      />
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Imagen anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 rounded-full bg-black/60 text-white hover:bg-primary hover:text-[#0e0e10] transition"
          >
            <FaChevronLeft size={14} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Imagen siguiente"
            className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 rounded-full bg-black/60 text-white hover:bg-primary hover:text-[#0e0e10] transition"
          >
            <FaChevronRight size={14} aria-hidden="true" />
          </button>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir a la imagen ${i + 1}`}
                aria-current={i === idx}
                onClick={() => setIdx(i)}
                className={[
                  'h-1.5 rounded-full transition-all',
                  i === idx ? 'w-6 bg-primary' : 'w-2 bg-white/40 hover:bg-white/70',
                ].join(' ')}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article
      className={[
        'rounded-2xl border bg-white/[0.02] p-6 md:p-8 transition',
        project.featured
          ? 'border-primary/40 shadow-[0_0_60px_-30px_rgba(0,209,255,0.4)] hover:border-primary/60'
          : 'border-white/10 hover:border-primary/30',
      ].join(' ')}
    >
      <header className="flex flex-wrap items-start justify-between gap-3 mb-5">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">{project.title}</h2>
            {project.featured && (
              <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-wider bg-primary text-[#0e0e10] px-2 py-1 rounded-md">
                <FaStar size={10} aria-hidden="true" />
                Destacado
              </span>
            )}
          </div>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary/80">
            {project.period}
          </p>
        </div>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm border border-primary/40 text-primary px-3 py-1.5 rounded-lg hover:bg-primary hover:text-[#0e0e10] transition"
          >
            Ver demo
            <FaExternalLinkAlt size={11} aria-hidden="true" />
          </a>
        )}
      </header>

      <Carousel images={project.images} title={project.title} />

      <p className="mt-6 text-white/75 leading-relaxed text-[1.02rem]">{project.summary}</p>

      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {project.bullets.map((b) => (
          <li key={b} className="flex gap-2 text-sm text-white/70">
            <span
              aria-hidden="true"
              className="mt-2 inline-block w-1 h-1 rounded-full bg-primary shrink-0"
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <li
            key={t}
            className="px-2.5 py-1 text-[0.72rem] uppercase tracking-wide rounded-md bg-primary/10 text-primary border border-primary/25"
          >
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Proyectos() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0e0e10] text-white">
        <section className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-20 pb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-primary/80">Proyectos</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
            Trabajo seleccionado
          </h1>
          <p className="mt-5 max-w-3xl text-white/70 leading-relaxed text-[1.02rem]">
            Una mezcla de proyectos académicos y personales. Para cada uno me involucré desde la
            base de datos hasta el despliegue. No son productos comerciales, pero sí son
            funcionales y representan honestamente mi nivel actual.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-5 md:px-8 pb-20 grid gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
