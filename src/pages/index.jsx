import Navbar from '../components/Navar';
import Footer from '../components/Footer';
import Foto from '../../public/img/yo.webp';
import '../../public/css/style.css';

export default function index(){
    return(
        <main>
            <Navbar />
            <section className='Sobremi'>
                <img src={Foto} alt="mi foto" />
                <p className="about__content">
                <h2 className="section-title">Sobre mi</h2>
                    ¡Hola! Soy Eduar Suarez, un apasionado desarrollador Full Stack con experiencia 
                    en la creación de aplicaciones web dinámicas y funcionales. Me especializo en tecnologías
                    como JavaScript, PHP, React, Node.js, Mysql, Git y GitHub, lo que me permite construir soluciones completas 
                    desde el frontend hasta el backend. Mi enfoque se centra en escribir código limpio y eficiente, 
                    así como en colaborar con equipos para entregar proyectos de alta calidad. Estoy siempre dispuesto
                    a aprender nuevas tecnologías y enfrentar desafíos para seguir creciendo como profesional en el 
                    mundo del desarrollo web.</p>
            </section>
            <Footer />
        </main>
    );
}