import { useState } from "react";
import logo from "../assets/logo.webp";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;