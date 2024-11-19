import React from "react";
import iconoMenu from "../assets/menu.png";
import iconoConfiguracion from "../assets/setting.png";
import imagenNovedades from "../assets/novedades.png";
import imagenPromociones from "../assets/promociones.png";

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
      <h1 style={estilos.titulo}>YOSIKA</h1>
      <div estilos.card>
        <img src={imagenNovedades} alt="Novedades" style={estilos.imagenCard} />
        <h2 style={estilos.tituloCard}>NOVEDADES</h2>
        <p style={estilos.descripcionCard}>Descubre nuestras novedades</p>
      </div>
      <div>
        <img src={imagenPromociones} alt="Promociones" style={estilos.imagenCard} />
        <h2>Promociones</h2>
        <p>Aprovecha nuestras ofertas y promociones especiales</p>
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
    textAlign: "center" as "center",
    fontFamily: "Lato",
    letterSpacing: "15%",
    marginTop: "60px",
  },
  imagenCard: {
    width: "100%",
    maxHeight: "200px",
    objectFit: "contain" as "contain",
    borderRadius: "8px",
  },
};

export default PaginaInicio;
