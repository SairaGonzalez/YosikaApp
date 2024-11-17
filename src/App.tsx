import React, { useState } from "react";
import PaginaInicio from "./components/PaginaInicio";
import BarraTareas from "./components/BarraTareas";
import Menu from "./components/Menu";

const App: React.FC = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const alternarMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div>
      <PaginaInicio alternarMenu={alternarMenu} />
      <BarraTareas />
      {menuAbierto && <Menu />}
    </div>
  );
};

export default App;
