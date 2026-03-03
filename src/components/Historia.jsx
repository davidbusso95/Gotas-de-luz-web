import edificio from "../assets/edificio.jpg"

function Historia() {
  return (
    <section className="historia container">
      <div className="historia-texto">
        <h2>Nuestra Historia</h2>
        <p>
          En Gotas de Luz nos dedicamos a la limpieza y llenado profesional
          de bidones de agua, garantizando la máxima pureza y calidad.
        </p>
        <p>
          <strong>
            Con años de experiencia y tecnología moderna
          </strong>, brindamos un servicio confiable para hogares y empresas.
        </p>
      </div>

      <div className="historia-img">
        <img src={edificio} alt="planta de produccion" />
      </div>
    </section>
  );
}

export default Historia;
