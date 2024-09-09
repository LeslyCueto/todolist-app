import React from "react";

const Cards = ({ item, eliminarTarea, actualizarTarea }) => {
  const { id, title, description, state, priority } = item;

  return (
    <>
      <li
        className="list-group-item d-flex justify-content-between border align-items-sm-start mt-2 p-2"
        key={id}>
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            {title}
            {state ? (
              <span className="bg-success text-ligth badge ms-5">
                Completado
              </span>
            ) : (
              <span className="bg-info text-ligth badge ms-5">Pendiente</span>
            )}
          </div>
          <p>{description}</p>
          <div>
            <button
              className="btn btn-sm btn-danger me-1"
              onClick={() => eliminarTarea(id)}>
              eliminar
            </button>
            <button
              className="btn btn-sm btn-warning me-1"
              onClick={() => actualizarTarea(id)}>
              editar
            </button>
          </div>
        </div>
        {priority ? (
          <span className="badge bg-primary rounded-pill">prioridad</span>
        ) : (
          <span className="badge bg-warning rounded-pill">no prioridad</span>
        )}
      </li>
    </>
  );
};

export default Cards;
