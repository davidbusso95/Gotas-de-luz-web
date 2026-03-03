import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faTruckFast, faHandshake } from '@fortawesome/free-solid-svg-icons';

function Valores() {
  return (
    <section className="valores container">
      <h2 className="titulo-seccion">Nuestros Valores</h2>

      <div className="valores-grid">
        {/* Calidad */}
        <div className="valores-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faDroplet} className="icon-main" />
          </div>
          <h3>Calidad</h3>
          <p>Agua pura y procesos sanitizados.</p>
        </div>

        {/* Compromiso */}
        <div className="valores-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faTruckFast} className="icon-main" />
          </div>
          <h3>Compromiso</h3>
          <p>Entrega rápida y puntual.</p>
        </div>

        {/* Confianza */}
        <div className="valores-card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faHandshake} className="icon-main" />
          </div>
          <h3>Confianza</h3>
          <p>Años de experiencia nos avalan.</p>
        </div>
      </div>
    </section>
  );
}

export default Valores;
