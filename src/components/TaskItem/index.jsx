import React, { useState } from 'react';

// Componente TaskItem
const TaskItem = (props) => {
  
  //asignando props
  const { task, onCompleteTask } = props;

  //useStates
  const [completed, setCompleted] = useState(false);

  //Eventos
  const onClickCompleted = () => {
    setCompleted(!completed);
    onCompleteTask(task.id);
  };

  //HTML
  return (
    <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {task.name}
      <button onClick={onClickCompleted}>Completar</button>


      {console.log(task)}
    </div>
  );
};

//Exportanto Componente TaskItem
export default TaskItem;