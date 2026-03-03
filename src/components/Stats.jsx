import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAward, 
  faTruck, 
  faUsers, 
  faShieldVirus 
} from '@fortawesome/free-solid-svg-icons';

function Stats() {
  return (
    <section className="stats">
      <div className="stats-grid">
        
        <div className="stat-item">
          <FontAwesomeIcon icon={faAward} className="stat-icon" />
          <div className="stat-text">
            <h4>+10</h4>
            <p>Años de Experiencia</p>
          </div>
        </div>

        <div className="stat-item">
          <FontAwesomeIcon icon={faTruck} className="stat-icon" />
          <div className="stat-text">
            <h4>+50.000</h4>
            <p>Bidones Entregados</p>
          </div>
        </div>

        <div className="stat-item">
          <FontAwesomeIcon icon={faUsers} className="stat-icon" />
          <div className="stat-text">
            <h4>+1.200</h4>
            <p>Clientes Satisfechos</p>
          </div>
        </div>

        <div className="stat-item">
          <FontAwesomeIcon icon={faShieldVirus} className="stat-icon" />
          <div className="stat-text">
            <h4>100%</h4>
            <p>Agua Pura y Segura</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Stats;