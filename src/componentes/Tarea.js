import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import '../style/Tarea.css';

function Tarea({id,texto, completada ,completarTarea,eliminarTarea }){
    return(
        <div className={ completada ?'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div 
            onClick={()=>completarTarea(id)}
            className="tarea-texto">
                {texto}
            </div>
            <div 
            onClick={()=> eliminarTarea(id)}
            className="tatrea-contenedor-iconos">
            <AiOutlineCloseCircle className="tarea-icono" />
            </div>
        </div>
    );
}
export default Tarea;