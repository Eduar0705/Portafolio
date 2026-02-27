import { Link } from 'react-router-dom';
import '../../public/css/Navar.css';
import Foto from '../../public/img/yo.webp';

export default function Navbar() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={Foto} alt="Foto de perfil" className="header__foto" />
                <h3>Eduar Suarez</h3>
                <span>Full Stack Developer</span>
            </div>
            
            <nav className="nav">
                <ul className="nav__list">
                    <li><Link to="/" className="nav__link"><i className="fas fa-home"></i> Inicio</Link></li>
                    <li><Link to="/habilidades" className="nav__link"><i className="fas fa-code"></i> Habilidades</Link></li>
                    <li><Link to="/proyectos" className="nav__link"><i className="fas fa-briefcase"></i> Proyectos</Link></li>
                    <li><Link to="/contacto" className="nav__link nav__link--btn">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
}