import Navbar from "../components/Navbar";
import HeroNosotros from "../components/HeroNosotros";
import Historia from "../components/Historia";
import Valores from "../components/Valores"
import MisionVision from "../components/MisionVision";
import Stats from "../components/Stats";
import "../styles/nosotros.css";

function Nosotros() {
  return (
    <>
      <Navbar />
      <HeroNosotros />
      <Historia />
      <Valores />
      <MisionVision />
      <Stats />
    </>
  );
}

export default Nosotros;
