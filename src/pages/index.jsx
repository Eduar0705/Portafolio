import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaMapMarkerAlt,
  FaCircle,
} from 'react-icons/fa';
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMysql,
} from 'react-icons/si';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const stack = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Express', Icon: SiExpress, color: '#FFFFFF' },
  { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
];

const stats = [
  { value: '5+', label: 'Proyectos completos' },
  { value: '3', label: 'Años programando' },
  { value: '12+', label: 'Tecnologías' },
];

export default function Index() {
  return (
    <>
      <Navbar />
      <main id="contenido" className="bg-[#0e0e10] text-white">
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(60rem 30rem at 80% -10%, rgba(0,209,255,0.10), transparent 60%), radial-gradient(40rem 25rem at 0% 30%, rgba(0,209,255,0.07), transparent 60%)',
            }}
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-20 grid gap-12 md:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary/90 bg-primary/10 border border-primary/30 rounded-full px-3 py-1">
                <FaCircle className="text-[8px] animate-pulse" aria-hidden="true" />
                Disponible para trabajar
              </span>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
                Hola, soy <span className="text-primary">Eduar Suárez</span>.
                <br />
                Construyo aplicaciones web Full Stack.
              </h1>

              <p className="mt-6 text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
                Estudiante de Informática con foco en desarrollo web. Trabajo con{' '}
                <span className="text-white">React, Node.js, Express, PHP y MySQL</span> para
                construir productos sencillos, mantenibles y rápidos.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/proyectos"
                  className="inline-flex items-center gap-2 bg-primary text-[#0e0e10] font-semibold px-5 py-3 rounded-lg hover:brightness-110 transition"
                >
                  Ver proyectos
                  <FaArrowRight aria-hidden="true" />
                </Link>
                <a
                  href="/CV-Eduar-Suarez.pdf"
                  download
                  className="inline-flex items-center gap-2 border border-white/15 text-white px-5 py-3 rounded-lg hover:border-primary hover:text-primary transition"
                >
                  <FaDownload aria-hidden="true" />
                  Descargar CV
                </a>
                <a
                  href="https://github.com/Eduar0705"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil de GitHub"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-primary px-3 py-3 transition"
                >
                  <FaGithub size={20} aria-hidden="true" />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>

              <p className="mt-6 inline-flex items-center gap-2 text-sm text-white/50">
                <FaMapMarkerAlt aria-hidden="true" /> Venezuela · Trabajo remoto
              </p>
            </div>

            <div className="relative justify-self-center md:justify-self-end">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl"
              />
              <img
                src="/img/yo.webp"
                alt="Foto de Eduar Suárez"
                width="320"
                height="400"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="relative w-[260px] sm:w-[300px] md:w-[320px] h-auto aspect-[4/5] object-cover rounded-3xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-5 md:px-8">
          <ul className="grid grid-cols-3 gap-3 md:gap-6 -mt-6 md:-mt-10 relative z-10">
            {stats.map((s) => (
              <li
                key={s.label}
                className="rounded-xl bg-white/[0.03] border border-white/10 px-4 py-5 text-center backdrop-blur"
              >
                <p className="text-2xl md:text-3xl font-extrabold text-primary">{s.value}</p>
                <p className="mt-1 text-[0.75rem] md:text-sm text-white/60">{s.label}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-24 grid gap-10 md:grid-cols-[1fr_1.3fr] items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary/80">Sobre mí</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold">
              Curioso, autodidacta y con cabeza de equipo.
            </h2>
          </div>
          <div className="text-white/75 leading-relaxed space-y-4 text-[1.02rem]">
            <p>
              Empecé a programar por curiosidad y terminé enamorándome del oficio. Lo que más
              disfruto es traducir un problema real en una interfaz que cualquiera pueda usar sin
              pensar.
            </p>
            <p>
              He desarrollado proyectos académicos y personales que cubren todo el ciclo: diseño,
              base de datos, API, frontend y despliegue. Me importa el detalle: validar
              entradas, manejar errores con cariño y dejar el código de modo que el siguiente
              que lo lea (incluso yo en seis meses) lo entienda.
            </p>
            <p>
              Busco un equipo donde aprender de gente con más camino y aportar desde el primer
              día con trabajo serio y buena actitud.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-5 md:px-8 pb-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary/80">Stack principal</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold">Con lo que trabajo a diario</h2>
            </div>
            <Link
              to="/habilidades"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              Ver todo
              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {stack.map(({ name, Icon, color }) => (
              <li
                key={name}
                className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] py-6 px-3 hover:border-primary/40 transition"
              >
                <Icon size={36} style={{ color }} aria-hidden="true" />
                <span className="text-sm text-white/80">{name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">¿Tienes un proyecto en mente?</h2>
              <p className="mt-2 text-white/70">
                Cuéntame qué necesitas. Respondo en menos de 24 horas.
              </p>
            </div>
            <Link
              to="/contacto"
              className="self-start md:self-auto inline-flex items-center gap-2 bg-primary text-[#0e0e10] font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition"
            >
              Hablemos
              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
