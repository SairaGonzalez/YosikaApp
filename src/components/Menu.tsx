import React from "react";

const Menu: React.FC = () => {
  return (
    <div style={estilos.menu}>
      {["Servicio", "Servicio", "Servicio", "Servicio", "Servicio"].map(
        (item, index) => (
          <div key={index} style={estilos.item}>
            <div style={estilos.triangulo}></div>
            <span>{item}</span>
          </div>
        )
      )}
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
    justifyContent: "center",
    zIndex: 1,
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
};

export default Menu;
