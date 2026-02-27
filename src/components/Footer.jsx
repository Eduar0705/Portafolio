import { Link } from 'react-router-dom';
import '../../public/css/Footer.css';

export default function Footer() {
    const mensaje = `¡Hola! Estoy interesado en contactarte vengo de tu portafolio 
    y me gustaría saber más sobre tus servicios. ¿Podríamos conversar?`;
    const whatsappUrl = `https://wa.me/584220140680?text=${encodeURIComponent(mensaje)}`;

    return (
        <footer>
            <div className="footer__socials">
                <a href="https://github.com/Eduar0705" target="_blank" rel="noopener noreferrer"
                    className="footer__social" aria-label="GitHub">
                    <i className="fab fa-github" aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com/eduar07sg/" target="_blank" rel="noopener noreferrer"
                    className="footer__social" aria-label="Instagram">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                    className="footer__social" aria-label="WhatsApp">
                    <i className="fab fa-whatsapp" aria-hidden="true"></i>
                </a>
            </div>
            
            <div className="linknav">
                <Link to="/" className="nav__link"><i className="fas fa-home"></i> Inicio</Link>
                <Link to="/habilidades" className="nav__link"><i className="fas fa-code"></i> Habilidades</Link>
                <Link to="/proyectos" className="nav__link"><i className="fas fa-briefcase"></i> Proyectos</Link>
                <Link to="/contacto" className="nav__link nav__link--btn">Contacto</Link>
            </div>
            
            <p>Todos los derechos reservados, Desarrollado por Eduar Suarez &copy;</p>
        </footer>
    );
}