import planta from "../assets/planta.webp"

function About() {
    return (
        <section id="nosotros" className="about">
            <div className="about-text">
                <h2>Sobre Nosotros</h2>
                <h4>Comprometidos con la calidad y el servicio</h4>
                <p>
                    Nos dedicamos a la limpieza y llenado de bidones,
                    garantizando la pureza y frescura del agua que llega a la puerta.
                </p>
            </div>

            <div className="about-image">

                <img
                 src= {planta} 
                 alt="Planta de llenado" 
                 />

            </div>
        </section>
    )
}

export default About;