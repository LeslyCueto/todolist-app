import React from "react";
import Cards from "./Cards";

const Contenedor = ({ tareas, eliminarTarea, actualizarTarea }) => {
  return (
    <>
      <ul>
        <h2 className="text-primary text-center">Tareas</h2>
        {tareas.length === 0 ? (
          <div className=" text-danger text-center ms-2 me-auto fw-bold">
            No hay tareas que mostrar
          </div>
        ) : (
          tareas.map((item) => (
            <Cards
              key={item.id}
              item={item}
              eliminarTarea={eliminarTarea}
              actualizarTarea={actualizarTarea}
            />
          ))
        )}
      </ul>
    </>
  );
};

export default Contenedor;
