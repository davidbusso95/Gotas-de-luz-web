import heroBg from "../assets/hero-bg.jpg"

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Agua Pura</h1>
          <h2>en tu Hogar o Empresa</h2>
          <p>Entrega a domicilio rápida y confiable</p>
          <button>¡Solicita tu Pedido!</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;