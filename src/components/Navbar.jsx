import { useState } from "react";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
  setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Gotas de Luz" className="logo" />

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/nosotros" onClick={closeMenu}>Nosotros</Link></li>
          <li><Link to="/servicios" onClick={closeMenu}>Servicios</Link></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;