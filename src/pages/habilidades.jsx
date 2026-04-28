import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMysql,
  SiGit,
  SiGithub,
  SiVite,
} from 'react-icons/si';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import { TbBrandCSharp, TbBrandCpp } from 'react-icons/tb';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const groups = [
  {
    title: 'Frontend',
    Icon: FaCode,
    description:
      'Construyo interfaces accesibles, responsivas y rápidas. Cuido la experiencia de usuario tanto como el código.',
    items: [
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: SiCss3, color: '#1572B6' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind', Icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'Vite', Icon: SiVite, color: '#A855F7' },
    ],
  },
  {
    title: 'Backend',
    Icon: FaServer,
    description:
      'APIs REST, autenticación, validación y arquitectura sencilla de mantener.',
    items: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express', Icon: SiExpress, color: '#FFFFFF' },
      { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
      { name: 'C#', Icon: TbBrandCSharp, color: '#9B4F96' },
      { name: 'C++', Icon: TbBrandCpp, color: '#00599C' },
    ],
  },
  {
    title: 'Bases de datos',
    Icon: FaDatabase,
    description: 'Modelado relacional, consultas eficientes y diseño normalizado.',
    items: [{ name: 'MySQL', Icon: SiMysql, color: '#4479A1' }],
  },
  {
    title: 'Herramientas',
    Icon: FaTools,
    description: 'Lo que uso día a día para colaborar, versionar y desplegar.',
    items: [
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF' },
    ],
  },
];

const focuses = [
  'Código limpio, leíble y comentado solo cuando hace falta.',
  'Validación tanto en frontend como backend.',
  'Diseño responsive como punto de partida, no extra.',
  'Despliegue real (Render, Netlify) y manejo básico de servidores.',
];

export default function Habilidades() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0e0e10] text-white">
        <section className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-20 pb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-primary/80">Habilidades</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
            Lo que sé hacer y cómo lo abordo
          </h1>
          <p className="mt-5 max-w-3xl text-white/70 leading-relaxed text-[1.02rem]">
            No me considero experto en todo lo que ves abajo, pero sí defiendo cada cosa que pongo
            aquí: las he usado en proyectos reales, sé sus limitaciones y puedo aprender lo que
            falte si el proyecto lo pide.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-5 md:px-8 pb-12 grid gap-6 md:grid-cols-2">
          {groups.map(({ title, Icon, description, items }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 hover:border-primary/30 transition"
            >
              <header className="flex items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-primary/15 text-primary">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <h2 className="text-xl font-bold">{title}</h2>
              </header>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">{description}</p>
              <ul className="mt-6 grid grid-cols-3 gap-3">
                {items.map(({ name, Icon: TechIcon, color }) => (
                  <li
                    key={name}
                    className="flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-black/20 py-4 px-2 text-center"
                  >
                    <TechIcon size={28} style={{ color }} aria-hidden="true" />
                    <span className="text-[0.8rem] text-white/80">{name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold">Cómo me gusta trabajar</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {focuses.map((f) => (
                <li key={f} className="flex gap-3 text-white/75">
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
