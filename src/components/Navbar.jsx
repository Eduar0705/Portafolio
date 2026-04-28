import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/habilidades', label: 'Habilidades' },
  { to: '/proyectos', label: 'Proyectos' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    [
      'relative font-medium tracking-wide transition-colors',
      'after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-primary',
      'after:transition-all after:duration-300',
      isActive
        ? 'text-primary after:w-full'
        : 'text-white/85 hover:text-white after:w-0 hover:after:w-full',
    ].join(' ');

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0e0e10]/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-3 group" aria-label="Inicio">
          <span
            aria-hidden="true"
            className="grid place-items-center w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 text-primary font-extrabold text-sm transition-transform group-hover:scale-105"
          >
            ES
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[0.95rem] font-semibold">Eduar Suárez</span>
            <span className="text-[0.7rem] uppercase tracking-[0.18em] text-primary/80">
              Full Stack Dev
            </span>
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              [
                'px-4 py-2 rounded-lg font-semibold text-sm transition-all',
                'border border-primary/40',
                isActive
                  ? 'bg-primary text-[#0e0e10]'
                  : 'text-primary hover:bg-primary hover:text-[#0e0e10]',
              ].join(' ')
            }
          >
            Contacto
          </NavLink>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-white/90 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={[
          'md:hidden overflow-hidden transition-[max-height,opacity] duration-300',
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <nav className="px-5 pb-5 pt-2 flex flex-col gap-1 border-t border-white/5" aria-label="Móvil">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={close}
              className={({ isActive }) =>
                [
                  'px-3 py-3 rounded-lg text-base font-medium transition-colors',
                  isActive ? 'bg-white/5 text-primary' : 'text-white/85 hover:bg-white/5',
                ].join(' ')
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/contacto"
            onClick={close}
            className="mt-2 px-3 py-3 rounded-lg text-center font-semibold bg-primary text-[#0e0e10]"
          >
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
