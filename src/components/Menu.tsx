import React from "react";
import { Link } from "react-router-dom";
import menuCerrar from "../assets/menu.png";

interface MenuProps {
  cerrarMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ cerrarMenu }) => {
  const Paginas = [
    { nombre: "Extensiones", path: "/extensiones" },
    { nombre: "Faciales", path: "/faciales" },
    { nombre: "Uñas", path: "/uñas" },
  ];
  return (
    <div style={estilos.menu}>
      <div style={estilos.header}>
        <img
          src={menuCerrar}
          alt="Cerrar Menú"
          style={estilos.menuCerrar}
          onClick={cerrarMenu}
        />
        <h1 style={estilos.titulo}>MENÚ</h1>
      </div>
      {Paginas.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          style={estilos.link}
          onClick={cerrarMenu}
        >
          <div key={index} style={estilos.item}>
            <div style={estilos.triangulo}></div>
            <span>{item.nombre}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

const estilos: { [key: string]: React.CSSProperties } = {
  menu: {
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#DED4D8",
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    zIndex: 1,
    marginLeft: "0",
  },
  menuCerrar: {
    width: "43px",
    height: "43px",
    top: "10px",
    left: "10px",
    marginBottom: "20px",
    position: "absolute" as "absolute",
    zIndex: 2,
  },
  header: {
    display: "flex" as "flex",
    alignItems: "center" as "center",
    gap: "10px",
    justifyContent: "space-between",
    width: "100%",
  },
  item: {
    display: "flex",
    alignItems: "center",
    fontSize: "24px",
    color: "white",
    fontFamily: "Lato",
    backgroundColor: "#988383",
    width: "100%",
    height: "50px",
  },
  triangulo: {
    width: 0,
    height: 0,
    borderTop: "10px solid transparent",
    borderBottom: "10px solid transparent",
    borderLeft: "20px solid #D2D2D2",
    marginLeft: "20px",
    marginRight: "20px",
  },
  link: {
    textDecoration: "none",
    width: "100%",
  },
  titulo: {
    fontSize: "25px",
    fontWeight: "bold",
    color: "#B08C8C",
    fontFamily: "Lato",
    textAlign: "center",
    flex: 1,
  },
};

export default Menu;
