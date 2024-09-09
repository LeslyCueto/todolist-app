import React, { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({agregarTarea}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState("pendiente");
  const [priority, setPriority] = useState("false");

  const enviarFormulario = (e) => {
    e.preventDefault();
    //validar form
    if (!title.trim() || !description.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Los campos estan vacios",
      });
    } else {
      Swal.fire({
        title: "Listo!",
        text: "Tarea agregada correctamente",
        icon: "success",
      });
    }
    //crear tarea
    const nuevaTarea = {
      id: Date.now(),
      title: title,
      description: description,
      state: state === 'completado' ? true :false,
      priority: priority,
    };
    //agregar tarea al arreglo []
    agregarTarea(nuevaTarea);
  };

  return (
    <>
      <form onSubmit={enviarFormulario}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Ingrese tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Ingrese descripcion"
          value={description}
          onChange={(e) => setDescription(e.target.value)}></textarea>
        <select
          className="form-control mb-2"
          value={state}
          onChange={(e) => setState(e.target.value)}>
          <option value="pendiente">pendiente</option>
          <option value="completado">completado</option>
        </select>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            checked={priority}
            onChange={(e) => setPriority(e.target.checked)}
          />
          <label className="form-check-label">Prioridad</label>
        </div>
        <button className="btn btn-success">Enviar</button>
      </form>
    </>
  );
};

export default Formulario;
