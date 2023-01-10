import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import '../style/ListaDeTareas.css';
import Tarea from "./Tarea";

function ListaDeTareas(){
  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    console.log(tarea);
   if(tarea.texto.trim()){
     tarea.texto= tarea.texto.trim();
     const tareasActualizadas = [tarea, ...tareas];
     setTareas(tareasActualizadas);
   }
  }
    return (
      <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div  class='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea 
              key={tarea.id}
              id={tarea.id}
              texto ={tarea.texto}
              completada={tarea.completada}
            />
          )
        }       
      </div>

      </>
    );
}

export default ListaDeTareas;