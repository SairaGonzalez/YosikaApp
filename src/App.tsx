import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaInicio from "./components/PaginaInicio";
import BarraTareas from "./components/BarraTareas";
import Menu from "./components/Menu";
import PaginaExtensiones from "./components/PaginaExtensiones";
import PaginaFaciales from "./components/PaginaFaciales";
import PaginaUnas from "./components/PaginaUnas";

const App: React.FC = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <Router>
      <div>
        {menuAbierto && <Menu cerrarMenu={() => setMenuAbierto(false)} />}
        <Routes>
          <Route
            path="/"
            element={
              <PaginaInicio alternarMenu={() => setMenuAbierto(!menuAbierto)} />
            }
          />
          <Route
            path="/extensiones"
            element={
              <PaginaExtensiones
                alternarMenu={() => setMenuAbierto(!menuAbierto)}
              />
            }
          />
          <Route
            path="/faciales"
            element={
              <PaginaFaciales
                alternarMenu={() => setMenuAbierto(!menuAbierto)}
              />
            }
          />
          <Route
            path="/uñas"
            element={
              <PaginaUnas alternarMenu={() => setMenuAbierto(!menuAbierto)} />
            }
          />
        </Routes>
        <BarraTareas />
      </div>
    </Router>
  );
};

export default App;
