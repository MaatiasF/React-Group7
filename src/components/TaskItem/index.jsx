/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

// Componente TaskItem
const TaskItem = (props) => {
  
  //asignando props
  const { task } = props;

  //useStates
  const [completed, setCompleted] = useState(false);

  //useEffect
  useEffect(()=>{
    alert('Estado del taskItem ' + task.name + ' ' + completed)
  }, [completed])

  //Eventos
  const onChangeCompleted = () => {
    setCompleted(!completed);
  };

  //HTML
  return (
    <div className='tareas' style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      <input className='checkbox' type="checkbox" checked={completed} onChange={onChangeCompleted} //Evento del check cambiara variable completed
      />  
      <input 
        id={task.id}
        type="text"
        readOnly
        value={task.name}
        className="input tarea"
        checked={completed}
        style={{ textDecoration: completed ? 'line-through' : 'none' }} //dependiendo de la variable completed se tacha la tarea
      />

      {console.log(task)}
    </div>
    
  );
};

//Exportanto Componente TaskItem
export default TaskItem;