import entrega from "../assets/entrega.jpg";
import limpieza from "../assets/limpieza.jpg";
import sifones from "../assets/sifones.webp";
import venta from "../assets/venta.png";

function Services () {
    return (
        <section id="servicios" className="services">
            <h2>Nuestros Servicios</h2>

            <div className="services-grid">
                <div className="card">
                    <img src={entrega} alt="Entrega a domicilio" />
                    <h3>Entrega a Domicilio</h3>
                    <p>Reparto a hogares y empresas</p>
                </div>

                <div className="card">
                    <img src={venta} alt="Venta de Bidones" />
                    <h3>Venta de Bidones</h3>
                    <p>Bidones de 20 lts. de agua pura</p>
                </div>

                <div className="card">
                    <img src={sifones} alt="Sifones de soda" />
                    <h3>Sifones de soda</h3>
                    <p>Sifones de soda recargables</p>
                </div>

                <div className="card">
                    <img src={limpieza} alt="Limpieza de bidones" />
                    <h3>Limpieza de bidones</h3>
                    <p>Lavado y sanitizacion profesional</p>
                </div>

            </div>

        </section>
    );
}

export default Services;