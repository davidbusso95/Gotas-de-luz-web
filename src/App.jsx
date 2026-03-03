import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios"
import Nosotros from "./pages/Nosotros";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Servicios" element={<Servicios />} />
      </Routes>
    </Router>
  );
}

export default App;
