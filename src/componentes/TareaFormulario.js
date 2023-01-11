import React, { useState } from 'react';
import '../style/tarea-formulario.css';
import {v4 as uuidv4} from 'uuid';

function TareaFormulario(props){
  const [input,setInput] = useState('');
const manejarCambio = e => {
  setInput(e.target.value);
};

  const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };

    props.onSubmit(tareaNueva);
  };
  return(
    <form
    onSubmit={manejarEnvio} 
    className='tarea-formulario'>
      <input 
      className='tarea-input'
      type="text" 
      name="texto" 
      placeholder='Escribe una Tarea'
      onChange={manejarCambio}
      />

      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
    );  
}


export default TareaFormulario;