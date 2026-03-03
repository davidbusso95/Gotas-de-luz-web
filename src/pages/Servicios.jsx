import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Cambiamos faShieldCheck por faShieldAlt que es más compatible
import { 
  faHouseUser, 
  faBuilding, 
  faFilter, 
  faMagnifyingGlass, 
  faHandsBubbles, 
  faFillDrip, 
  faTruckFast,
  faShieldAlt 
} from '@fortawesome/free-solid-svg-icons';
import '../styles/servicios.css';

const Servicios = () => {
  return (
    <div className="servicios-page">
      {/* SECCIÓN HERO */}
      <header className="servicios-hero">
        <div className="container">
          <h1>Servicios</h1>
          <p className="hero-subtitle">Comprometidos con la Calidad y el Servicio</p>
        </div>
      </header>

      {/* SECCIÓN TARJETAS (GRID) */}
      <section className="servicios-section container">
        <h2 className="section-title">Servicios Profesionales</h2>
        <div className="servicios-grid">
          
          <div className="servicio-card">
            <div className="card-icon-wrapper">
              <FontAwesomeIcon icon={faHouseUser} />
            </div>
            <h3>Servicio Hogares</h3>
            <p>Servicio de agua de calidad en bidones de 12L y 20L para su familia.</p>
            <button className="btn-saber">Saber Más</button>
          </div>

          <div className="servicio-card">
            <div className="card-icon-wrapper">
              <FontAwesomeIcon icon={faBuilding} />
            </div>
            <h3>Servicio Empresas</h3>
            <p>Soluciones personalizadas para oficinas y plantas industriales.</p>
            <button className="btn-saber">Saber Más</button>
          </div>

          <div className="servicio-card">
            <div className="card-icon-wrapper">
              <FontAwesomeIcon icon={faFilter} />
            </div>
            <h3>Venta Dispensadores</h3>
            <p>Equipos de alta tecnología con mantenimiento programado.</p>
            <button className="btn-saber">Saber Más</button>
          </div>

        </div>
      </section>

      {/* SECCIÓN PROCESO DE CALIDAD */}
      <section className="proceso-calidad container">
        <h2 className="section-title">Proceso de Calidad Garantizado</h2>
        <p className="proceso-desc">Maquinaria de purificación de última generación.</p>
        
        <div className="proceso-steps">
          <div className="step">
            <div className="step-icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            <span>Inspección</span>
          </div>
          <div className="step">
            <div className="step-icon"><FontAwesomeIcon icon={faHandsBubbles} /></div>
            <span>Lavar</span>
          </div>
          <div className="step">
            <div className="step-icon"><FontAwesomeIcon icon={faFillDrip} /></div>
            <span>Filtrar</span>
          </div>
          <div className="step">
            <div className="step-icon"><FontAwesomeIcon icon={faShieldAlt} /></div>
            <span>Garantía</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;