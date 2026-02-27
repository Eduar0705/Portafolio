import Navbar from '../components/navar';
import Footer from '../components/Footer';
import '../../public/css/style.css';

export default function Habilidades() {
    return (
        <main>
            <Navbar />
            <section className='habilidades__section'>
                <div className="descripcion">
                    <h2 className="section-title">Habilidades</h2>
                    <p className="descripcion__content">
                        Soy un desarrollador Full Stack con habilidades en una amplia gama de tecnologías.
                        Mi experiencia abarca tanto el desarrollo frontend como backend, lo que me permite crear aplicaciones web completas y funcionales.
                        En el frontend, tengo experiencia en HTML5, CSS3 y JavaScript, lo que me permite diseñar interfaces de usuario atractivas y responsivas. Además, estoy familiarizado con frameworks como React, que me permiten construir aplicaciones web dinámicas y eficientes.
                        En el backend, tengo experiencia en Node.js y Express.js, lo que me permite desarrollar APIs robustas y escalables. También tengo conocimientos en PHP. Además, tengo experiencia en bases de datos como MySQL, lo que me permite diseñar y gestionar eficientemente la capa de datos de las aplicaciones.
                        Además de mis habilidades técnicas, también tengo experiencia en el uso de herramientas de control de versiones como Git y plataformas como GitHub, lo que me permite colaborar eficazmente con otros desarrolladores y gestionar el código de manera eficiente.
                    </p>
                </div>
            </section>
            <section className='habilidades__section'>
                <div className="skills__technologies">
                    <h3 className="skills__tech-title">Tecnologías que manejo</h3>
                    <div className="skills__tech-grid">
                        <div className="skills__tech-item">
                            <i className="devicon-html5-plain colored" aria-hidden="true"></i>
                            <span>HTML5</span>
                        </div>
                        <div className="skills__tech-item">
                            <i className="devicon-css3-plain colored" aria-hidden="true"></i>
                            <span>CSS3</span>
                        </div>
                        <div className="skills__tech-item">
                            <i className="devicon-javascript-plain colored" aria-hidden="true"></i>
                            <span>JavaScript</span>
                        </div>
                        <div className="skills__tech-item">
                            <i className="devicon-nodejs-plain colored" aria-hidden="true"></i>
                            <span>Node.js</span>
                        </div>
                        <div className="skills__tech-item">
                            <i className="devicon-express-original colored" aria-hidden="true"></i>
                            <span>Express.js</span>
                        </div>
                        <div className="skills__tech-item">
                            <i className="devicon-react-original colored" aria-hidden="true"></i>
                            <span>React</span>
                        </div>
                        <div className="skills__tech-item">
                            <i className="devicon-php-plain colored" aria-hidden="true"></i>
                            <span>PHP</span>
                        </div>
                        <div className="skills__tech-item">
                            <i className="devicon-cplusplus-plain colored" aria-hidden="true"></i>
                            <span>C++</span>
                        </div>
                        <div className="skills__tech-item">
                            <i className="devicon-csharp-plain colored" aria-hidden="true"></i>
                            <span>C#</span>
                        </div>
                        <div className="skills__tech-item">
                            <i className="devicon-mysql-plain colored" aria-hidden="true"></i>
                            <span>MySQL</span>
                        </div>
                        <div className="skills__tech-item">
                            <i className="devicon-git-plain colored" aria-hidden="true"></i>
                            <span>Git</span>
                        </div>
                        <div className="skills__tech-item">
                            <i className="devicon-github-original" aria-hidden="true"></i>
                            <span>GitHub</span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}