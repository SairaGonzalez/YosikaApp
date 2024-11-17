import React from "react";
import iconoMenu from "../assets/menu.png";
import iconoConfiguracion from "../assets/setting.png";

interface PropsPaginaInicio {
  alternarMenu: () => void;
}

const PaginaInicio: React.FC<PropsPaginaInicio> = ({ alternarMenu }) => {
  return (
    <div style={estilos.contenedor}>
      <img
        src={iconoMenu}
        alt="Icono del Menú"
        style={estilos.iconoMenu}
        onClick={alternarMenu}
      />
      <img
        src={iconoConfiguracion}
        alt="Icono de Configuración"
        style={estilos.iconoConfiguracion}
      />
    </div>
  );
};

const estilos = {
  contenedor: {
    backgroundColor: "#FFFDFC",
    height: "100vh",
    padding: "10px",
    position: "relative" as "relative",
  },
  iconoMenu: {
    width: "43px",
    position: "absolute" as "absolute",
    top: "10px",
    left: "10px",
    cursor: "pointer",
  },
  iconoConfiguracion: {
    width: "43px",
    position: "absolute" as "absolute",
    top: "10px",
    right: "10px",
  },
  título: {
    textAlign: "center" as "center",
    fontFamily: "Lato",
    letterSpacing: "15%",
    marginTop: "60px",
  },
};

export default PaginaInicio;
