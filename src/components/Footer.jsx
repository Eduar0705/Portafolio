import { NavLink } from 'react-router-dom';
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const WHATSAPP_NUMBER = '584220140680';
const EMAIL = 'eduarjosesuarezgraterol@gmail.com';

const socialLinks = [
  {
    href: 'https://github.com/Eduar0705',
    label: 'GitHub',
    Icon: FaGithub,
  },
  {
    href: 'https://www.instagram.com/eduar07sg/',
    label: 'Instagram',
    Icon: FaInstagram,
  },
  {
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      'Hola Eduar, vengo de tu portafolio y me gustaría conversar.'
    )}`,
    label: 'WhatsApp',
    Icon: FaWhatsapp,
  },
  {
    href: `mailto:${EMAIL}`,
    label: 'Email',
    Icon: HiOutlineMail,
  },
];

const navLinks = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/habilidades', label: 'Habilidades' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0e0e10] mt-24">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">Eduar Suárez</p>
          <p className="text-sm text-white/60 mt-2 leading-relaxed">
            Desarrollador Full Stack. Disponible para trabajo remoto y proyectos freelance.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-block mt-4 text-sm text-primary hover:underline break-all"
          >
            {EMAIL}
          </a>
        </div>

        <nav className="md:justify-self-center" aria-label="Pie de página">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Navegación</p>
          <ul className="flex flex-col gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className="text-white/75 hover:text-primary transition-colors"
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:justify-self-end">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Redes</p>
          <ul className="flex gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  className="grid place-items-center w-10 h-10 rounded-lg border border-white/10 text-white/80 hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-center text-xs text-white/40">
          © {year} Eduar Suárez. Construido con React, Vite y Tailwind.
        </p>
      </div>
    </footer>
  );
}
