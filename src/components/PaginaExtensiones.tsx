import React from "react";
import iconoMenu from "../assets/menu.png";
import iconoConfiguracion from "../assets/setting.png";

interface PropsPaginaExtensiones {
  alternarMenu: () => void;
}

const PaginaExtensiones: React.FC<PropsPaginaExtensiones> = ({
  alternarMenu,
}) => {
  return (
    <div style={estilos.contenedor}>
      <div style={estilos.header}>
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
        <h1 style={estilos.titulo}>YOSIKA</h1>
      </div>
      <div>
        <h1>Extensiones</h1>
        <p>Contenido de la página de Extensiones...</p>
      </div>
    </div>
  );
};

const estilos = {
  contenedor: {
    backgroundColor: "#FFFDFC",
    height: "100vh",
    padding: "10px",
    position: "relative" as "relative",
    overflowY: "auto" as "auto",
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
  titulo: {
    fontSize: "25px",
    fontWeight: "300",
    color: "black",
    fontFamily: "Lato",
    textAlign: "center" as "center",
    flex: 1,
  },
  header: {
    display: "flex" as "flex",
    alignItems: "center" as "center",
    justifyContent: "center",
    width: "100%",
  },
};

export default PaginaExtensiones;
