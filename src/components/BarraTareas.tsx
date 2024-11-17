import React from "react";
import calendario from "../assets/calendar.png";
import mensajes from "../assets/messages.png";
import inicio from "../assets/home.png";
import notificaciones from "../assets/notifications.png";
import perfil from "../assets/profile.png";

const BarraTareas: React.FC = () => {
  return (
    <div style={estilos.barraTareas}>
      {[calendario, mensajes, inicio, notificaciones, perfil].map(
        (icono, index) => (
          <img
            key={index}
            src={icono}
            alt={`Icono ${index + 1}`}
            style={estilos.icono}
          />
        )
      )}
    </div>
  );
};

const estilos = {
  barraTareas: {
    display: "flex",
    justifyContent: "space-between",
    position: "fixed" as "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#D6C3CB",
    padding: "10px 20px",
    boxSizing: "border-box" as "border-box",
  },
  icono: {
    width: "43px",
  },
};

export default BarraTareas;
