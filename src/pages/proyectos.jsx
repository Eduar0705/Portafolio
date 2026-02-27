import Navbar from '../components/Navar';
import Footer from '../components/Footer';
import '../../public/css/style.css'; 
import Auditx from '../../public/img/Auditx.png';
import JuegoIE from '../../public/img/Juego_Ingles.png';
import SGR from '../../public/img/rubricas.png';
import Invilara from '../../public/img/invilara.png';
import Invilara2 from '../../public/img/invilara2.png';
import Convivir from '../../public/img/convivir.png';
import Convivir2 from '../../public/img/convivir2.png';
import Convivir3 from '../../public/img/convivir3.png';
import Convivir4 from '../../public/img/convivir4.png';

export default function Proyectos() {
    return (
        <main className="main-container">
            <Navbar />
            <section className='project-detail'>
                <div className='project-detail__card'>
                    <h2 className="project-detail__title">Proyecto Sistema de Gestion de Rubricas</h2>

                    <div className="project-detail__image-wrapper">
                        <img src={SGR} alt="Vista previa del Sistema de Gestion de Rubricas" className="project-detail__image" />
                    </div>

                    <div className="project-detail__info">
                        <p className="project-detail__description">
                            El Sistema de Gestión de Rúbricas es una aplicación web diseñada para facilitar la creación, gestión y evaluación de rúbricas en entornos educativos.
                            Permite a los docentes crear rúbricas personalizadas para evaluar el desempeño de los estudiantes en diversas actividades académicas, como proyectos, presentaciones o trabajos escritos. 
                            Con una interfaz intuitiva y funcionalidades robustas, el sistema ayuda a mejorar la transparencia y la consistencia en la evaluación, proporcionando a los estudiantes una comprensión clara de los criterios de evaluación y fomentando un proceso de retroalimentación efectivo.
                        </p>
                        <p>
                            <a href="https://sistems-rubricas.onrender.com/" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                        </p>
                        <span className="project-detail__badge"> 
                            Desarrollado en el cuarto semestre usando las tencnologias de HTML, CSS, EJS, JavaScript, Node.js, Express.js y MySQL.
                        </span>
                    </div>
                </div>
            </section>

            <section className='project-detail'>
                <div className='project-detail__card'>
                    <h2 className="project-detail__title">Proyecto Sistema Convivir</h2>

                    <div className="project-detail__image-wrapper">
                        <img src={Convivir} alt="Vista previa del Sistema Convivir" className="project-detail__image" />
                        <br />
                        <img src={Convivir2} alt="Vista previa del Sistema Convivir" className="project-detail__image" />
                        <br />
                        <img src={Convivir3} alt="Vista previa del Sistema Convivir" className="project-detail__image" />
                        <br />
                        <img src={Convivir4} alt="Vista previa del Sistema Convivir" className="project-detail__image" />
                    </div>

                    <div className="project-detail__info">
                        <p className="project-detail__description">
                            El Sistema Convivir es una aplicación web diseñada para gestionar el ambiente de conviviencia 
                            en los apartamentos gestionando los pagos de los servicios, el control de los visitantes, 
                            el registro de los residentes y la gestión de las incidencias.
                            Con una interfaz intuitiva y funcionalidades robustas, el sistema ayuda a mejorar 
                            la organización y la comunicación entre los residentes, facilitando la administración de 
                            los recursos compartidos y promoviendo un ambiente de convivencia armonioso.
                        </p>
                        <p>
                            <a href="https://convivir-oq6w.onrender.com/" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                        </p>
                        <span className="project-detail__badge"> 
                            Desarrollado en el cuarto semestre usando las tencnologias de HTML, CSS, EJS, JavaScript, Node.js, Express.js y MySQL.
                        </span>
                    </div>
                </div>
            </section>

            <section className='project-detail'>
                <div className='project-detail__card'>
                    <h2 className="project-detail__title">Proyecto de Invilara</h2>

                    <div className="project-detail__image-wrapper">
                        <img src={Invilara2} alt="Vista previa de Invilara" className="project-detail__image" />
                        <br />
                        <img src={Invilara} alt="Vista previa de Invilara" className="project-detail__image" />
                    </div>

                    <div className="project-detail__info">
                        <p className="project-detail__description">
                            Invilara es una aplicación web diseñada para la gestión de inventarios en una empresa. Permite a los 
                            usuarios registrar, organizar y realizar un seguimiento eficiente de los productos en stock, 
                            facilitando la administración de inventarios y mejorando la eficiencia operativa.
                            Con una interfaz intuitiva y funcionalidades robustas, Invilara ayuda a las organizaciones a 
                            mantener un control efectivo sobre sus inventarios, optimizando la gestión de productos y 
                            mejorando la toma de decisiones en el proceso de abastecimiento.
                        </p>
                        <span className="project-detail__badge"> 
                            Desarrollado en el tercer semestre con PHP, Boostap, HTML, CSS y MySQL.
                        </span>
                    </div>
                </div>
            </section>

            <section className='project-detail'>
                <div className='project-detail__card'>
                    <h2 className="project-detail__title">Proyecto Auditx</h2>

                    <div className="project-detail__image-wrapper">
                        <img src={Auditx} alt="Vista previa de Auditx" className="project-detail__image" />
                    </div>

                    <div className="project-detail__info">
                        <p className="project-detail__description">
                            Auditx es una aplicación web diseñada para facilitar la gestión de auditorías en empresas. 
                            Permite a los usuarios crear, asignar y realizar un seguimiento de las auditorías de manera eficiente.
                        </p>
                        <p className="project-detail__description">
                            Con una interfaz intuitiva y funcionalidades robustas, Auditx ayuda a las organizaciones a 
                            mantener un control efectivo sobre sus procesos de auditoría, mejorando la transparencia 
                            y la eficiencia en la gestión de riesgos.
                        </p>
                        <span className="project-detail__badge"> 
                            Desarrollado en el segundo semestre de Informática usando C# (POO) y persistencia en archivos de texto.
                        </span>
                    </div>
                </div>
            </section>

            <section className='project-detail'>
                <div className='project-detail__card'>
                    <h2 className="project-detail__title">Proyecto Juego de Ingles/Español</h2>

                    <div className="project-detail__image-wrapper">
                        <img src={JuegoIE} alt="Vista previa del Juego de Ingles/Español" className="project-detail__image" />
                    </div>

                    <div className="project-detail__info">
                        <p className="project-detail__description">
                            Esta interfaz de juego de inglés/español es una aplicación web diseñada como actividad final de la materia de 
                            Ingles II. El juego tiene un QUIZ dinamico que presenta preguntas en inglés y español, desafiando a los usuarios
                            a responder correctamente para mejorar sus habilidades lingüísticas. Con una interfaz atractiva y fácil de usar, 
                            ademas posee un juego de memoria. El objetivo es proporcionar una experiencia educativa y entretenida para aquellos 
                            que buscan mejorar su dominio del inglés y español de manera interactiva.
                        </p>
                        <p>
                            <a href="https://iujojuegoingles.netlify.app/" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                        </p>
                        <span className="project-detail__badge"> 
                            Desarrollado en el segundo semestre como proyecto final de la materia de Ingles II 
                            desarrolado en base a HTML, CSS y JavaScript.
                        </span>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}