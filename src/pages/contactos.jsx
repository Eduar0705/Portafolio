import React, { useState } from 'react';
import Navbar from '../components/Navar'; 
import Footer from '../components/Footer';
import Swal from 'sweetalert2';
import '../../public/css/style.css';

export default function Contactos() {
    // 1. Usamos useState para controlar el formulario
    const [formData, setFormData] = useState({
        nombre: '',
        asunto: '',
        mensaje: ''
    });

    // 2. Función para actualizar el estado cuando el usuario escribe
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // 3. Función al enviar el formulario
    function handleSubmit(event) {
        event.preventDefault();

        const textoMensaje = `
        Hola, mi nombre es ${formData.nombre}.\n
        Asunto: ${formData.asunto}\n
        ${formData.mensaje}`;
        
        // Número de destino y enlace final
        const numeroWhatsapp = '584220140680';
        const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(textoMensaje)}`;

        // Abrimos WhatsApp
        window.open(linkWhatsapp, '_blank');
        
        // Mostramos la alerta
        Swal.fire({
            title: '¡Redirigiendo a WhatsApp!',
            text: 'Gracias por contactarme. Envía el mensaje desde la aplicación.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

        // Opcional: Limpiar el formulario después de enviar
        setFormData({ nombre: '', asunto: '', mensaje: '' });
    }

    return (
        <main className="main-container">
            <Navbar />
            <div className="form-container">
                <h2>Contáctame</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre:</label>
                        <input 
                            type="text" 
                            id="nombre" 
                            name="nombre" 
                            value={formData.nombre} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="asunto">Asunto:</label>
                        <input 
                            type="text" 
                            id="asunto" 
                            name="asunto" 
                            value={formData.asunto} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensaje">Mensaje:</label>
                        <textarea 
                            id="mensaje" 
                            name="mensaje" 
                            rows="5"
                            value={formData.mensaje} 
                            onChange={handleChange} 
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Enviar por WhatsApp</button>
                </form>
            </div>
            <Footer />
        </main>
    );
}