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
      <div style={estilos.card}>
        <h2 style={estilos.tituloCard}>NOVEDADES</h2>
        <img src={imagenNovedades} alt="Novedades" style={estilos.imagenCard} />

        <p style={estilos.descripcionCard}>Descubre nuestras novedades</p>
      </div>
      <div style={estilos.card}>
        <h2 style={estilos.tituloCard}>PROMOCIONES</h2>
        <img
          src={imagenPromociones}
          alt="Promociones"
          style={estilos.imagenCard}
        />

        <p style={estilos.descripcionCard}>
          Aprovecha nuestras ofertas y promociones especiales
        </p>
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
  imagenCard: {
    width: "100%",
    maxHeight: "200px",
    objectFit: "contain" as "contain",
  },
  card: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center" as "center",
    backgroundColor: "#f3f3f3",
    borderRadius: "4px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "20px auto",
    padding: "20px",
    width: "90%",
    textAlign: "center" as "center",
  },
  tituloCard: {
    fontFamily: "Lato",
    fontSize: "25px",
    margin: "10px 0",
    fontWeight: "400",
    letterSpacing: "2px",
  },
  descripcionCard: {
    fontFamily: "Lato",
    fontSize: "1rem",
  },
  header: {
    display: "flex" as "flex",
    alignItems: "center" as "center",
    justifyContent: "center",
    width: "100%",
  },
};

export default PaginaInicio;
