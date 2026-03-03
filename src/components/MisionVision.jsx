import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faEye } from '@fortawesome/free-solid-svg-icons';

function MisionVision() {
  return (
    <section className="mision-vision container">
      <h2>Misión y Visión</h2>

      <div className="mv-grid">
        <div className="mv-card">
          <div className="mv-header">
            <div className="mv-icon-circle">
              <FontAwesomeIcon icon={faBullseye} />
            </div>
            <h3>Misión</h3>
          </div>
          <p>
            Brindar agua de calidad con un servicio eficiente,
            responsable y accesible.
          </p>
        </div>

        <div className="mv-card">
          <div className="mv-header">
            <div className="mv-icon-circle">
              <FontAwesomeIcon icon={faEye} />
            </div>
            <h3>Visión</h3>
          </div>
          <p>
            Ser líderes en distribución y tratamiento de agua,
            generando confianza.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MisionVision;