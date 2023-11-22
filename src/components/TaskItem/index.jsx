/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

// Componente TaskItem
const TaskItem = (props) => {
  
  //asignando props
  const { task, onCompleteTask } = props;

  //useStates
  const [completed, setCompleted] = useState(false);

  //useEffect
  useEffect(()=>{
    alert('Estado del taskItem ' + task.name + ' ' + completed)
  }, [completed])

  //Eventos
  const onClickCompleted = () => {
    setCompleted(!completed);
    onCompleteTask(task.id);
  };

  //HTML
  return (
    <div className='tareas' style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      <input className='checkbox' type="checkbox" checked={completed} onChange={onClickCompleted}/>
      <input
        type="text"
        readOnly
        value={task.name}
        className="input tarea"
        checked={completed}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      />
      


      {console.log(task)}
    </div>
    
  );
};

//Exportanto Componente TaskItem
export default TaskItem;