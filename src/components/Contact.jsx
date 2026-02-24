import WhatsappIcon from "../assets/Whatsapp.png";
import FacebookIcon from "../assets/facebook.png";
import IntagramIcon from "../assets/instagram.png";

function Contact () {
    return (
        <section id="contacto" className="contact">
            <h2>Contacto</h2>
            <p className="contact-subtitle">¡Haz tu pedido hoy!</p>

            <div className="contact-box">
                <div className="contact-item">
                    <img src={WhatsappIcon} alt="Whatsapp" />
                    <span>+54 9 1234-567890</span>
                </div>

                <a 
                href="#"
                target="_blank"
                rel="#"
                className="contact-button"
                >
                    Enviar Mensaje
                </a>
            </div>

            <div className="social-icons">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={FacebookIcon} alt="facebook" />
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={IntagramIcon} alt="Instagram" />
                </a>
            </div>
            
        </section>
    )
}

export default Contact