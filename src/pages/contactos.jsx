import { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import {
  FaWhatsapp,
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const WHATSAPP_NUMBER = '584220140680';
const EMAIL = 'eduarjosesuarezgraterol@gmail.com';

const LIMITS = {
  nombre: { min: 2, max: 60 },
  asunto: { min: 3, max: 100 },
  mensaje: { min: 10, max: 1000 },
};

function sanitize(value) {
  return value.replace(/[\r\n]+/g, '\n').trim();
}

function validate(data) {
  const errors = {};
  for (const key of Object.keys(LIMITS)) {
    const value = sanitize(data[key] ?? '');
    const { min, max } = LIMITS[key];
    if (value.length < min) errors[key] = `Mínimo ${min} caracteres.`;
    else if (value.length > max) errors[key] = `Máximo ${max} caracteres.`;
  }
  return errors;
}

export default function Contactos() {
  const [formData, setFormData] = useState({
    nombre: '',
    asunto: '',
    mensaje: '',
    website: '',
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const openedAt = useRef(0);

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (sending) return;

    if (formData.website.trim() !== '') return;
    if (Date.now() - openedAt.current < 1500) return;

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSending(true);

    const nombre = sanitize(formData.nombre);
    const asunto = sanitize(formData.asunto);
    const mensaje = sanitize(formData.mensaje);

    const texto = `Hola, mi nombre es ${nombre}.\nAsunto: ${asunto}\n\n${mensaje}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank', 'noopener,noreferrer');

    await Swal.fire({
      title: 'Redirigiendo a WhatsApp',
      text: 'Termina de enviar el mensaje desde la app. ¡Gracias!',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      background: '#1a1a1a',
      color: '#fff',
      confirmButtonColor: '#00d1ff',
    });

    setFormData({ nombre: '', asunto: '', mensaje: '', website: '' });
    setSending(false);
  };

  const inputClass = (name) =>
    [
      'bg-white/[0.04] border rounded-lg py-3 px-4 text-white text-base transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-primary/40',
      errors[name] ? 'border-red-400/60 focus:border-red-400' : 'border-white/15 focus:border-primary',
    ].join(' ');

  return (
    <>
      <Navbar />
      <main className="bg-[#0e0e10] text-white">
        <section className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-20 pb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-primary/80">Contacto</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
            ¿Hablamos?
          </h1>
          <p className="mt-5 max-w-2xl text-white/70 leading-relaxed text-[1.02rem]">
            Cuéntame brevemente qué necesitas y por dónde te queda más fácil. Si es para una
            oferta laboral, incluye el rol y la modalidad. Suelo responder dentro de las 24 horas.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-5 md:px-8 pb-24 grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 h-fit">
            <h2 className="text-lg font-bold">Información directa</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid place-items-center w-9 h-9 rounded-lg bg-primary/15 text-primary shrink-0">
                  <HiOutlineMail size={16} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-white/50 text-xs uppercase tracking-wider">Email</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-white hover:text-primary transition-colors break-all"
                  >
                    {EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid place-items-center w-9 h-9 rounded-lg bg-primary/15 text-primary shrink-0">
                  <FaWhatsapp size={16} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider">WhatsApp</p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors"
                  >
                    +58 422 014 0680
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 grid place-items-center w-9 h-9 rounded-lg bg-primary/15 text-primary shrink-0">
                  <FaMapMarkerAlt size={14} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider">Ubicación</p>
                  <p className="text-white">Venezuela · Trabajo remoto</p>
                </div>
              </li>
            </ul>

            <div className="mt-7 pt-6 border-t border-white/5">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Sígueme</p>
              <div className="flex gap-2">
                <a
                  href="https://github.com/Eduar0705"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="grid place-items-center w-10 h-10 rounded-lg border border-white/10 hover:border-primary/40 hover:text-primary transition-colors"
                >
                  <FaGithub size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/nexgen_logic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="grid place-items-center w-10 h-10 rounded-lg border border-white/10 hover:border-primary/40 hover:text-primary transition-colors"
                >
                  <FaInstagram size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
          >
            <div
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}
            >
              <label>
                No rellenar este campo
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="nombre" className="text-sm font-medium text-white/85">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  maxLength={LIMITS.nombre.max}
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className={inputClass('nombre')}
                />
                {errors.nombre && (
                  <span className="text-xs text-red-400">{errors.nombre}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="asunto" className="text-sm font-medium text-white/85">
                  Asunto
                </label>
                <input
                  id="asunto"
                  name="asunto"
                  type="text"
                  maxLength={LIMITS.asunto.max}
                  required
                  value={formData.asunto}
                  onChange={handleChange}
                  className={inputClass('asunto')}
                />
                {errors.asunto && (
                  <span className="text-xs text-red-400">{errors.asunto}</span>
                )}
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label htmlFor="mensaje" className="text-sm font-medium text-white/85">
                  Mensaje
                </label>
                <span className="text-xs text-white/40">
                  {formData.mensaje.length}/{LIMITS.mensaje.max}
                </span>
              </div>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={6}
                maxLength={LIMITS.mensaje.max}
                required
                value={formData.mensaje}
                onChange={handleChange}
                className={`${inputClass('mensaje')} resize-y min-h-32`}
              />
              {errors.mensaje && (
                <span className="text-xs text-red-400">{errors.mensaje}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-6 w-full inline-flex justify-center items-center gap-2 bg-primary text-[#0e0e10] py-3.5 rounded-lg text-base font-semibold transition hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <FaPaperPlane aria-hidden="true" />
              {sending ? 'Enviando…' : 'Enviar por WhatsApp'}
            </button>

            <p className="mt-3 text-xs text-white/40 text-center">
              Tu mensaje se abre en WhatsApp para que tú lo envíes. No se guarda en ningún
              servidor.
            </p>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
