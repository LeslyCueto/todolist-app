import React, { useState, useEffect } from "react";
import Contenedor from "./components/Contenedor";
import Formulario from "./components/Formulario";

const tareasIniciales = localStorage.getItem("tareasGuardadas")
  ? JSON.parse(localStorage.getItem("tareasGuardadas"))
  : [];

const App = () => {
  const [tareas, setTareas] = useState(tareasIniciales);

  useEffect(() => {
    localStorage.setItem("tareasGuardadas", JSON.stringify(tareas));
  }, [tareas]);
  //agregar tarea
  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
  };
  //editar tarea
  const actualizarTarea = (id) => {
    const arrActualizado = tareas.map((item) => {
      if (item.id === id) {
        item.state = !item.state;
      }
      return item;
    });
    setTareas(arrActualizado);
  };
  //eliminar
  const eliminarTarea = (id) => {
    const arrFiltrado = tareas.filter((item) => item.id !== id);
    setTareas(arrFiltrado);
  };

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-primary mt-4">Formulario</h2>
        {/* Formulario */}
        <Formulario agregarTarea={agregarTarea} />
        {/* Tareas */}
        <Contenedor
          eliminarTarea={eliminarTarea}
          tareas={tareas}
          actualizarTarea={actualizarTarea}
        />
      </div>
    </>
  );
};

export default App;
