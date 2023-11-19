import React, { useState } from 'react';

// Componente de Tarea (TaskItem)
const TaskItem = ({ task, onCompleteTask }) => {
    const [completed, setCompleted] = useState(false);
  
    const onClickCompleted = () => {
      setCompleted(!completed);
      onCompleteTask(task.id);
    };
  
    return (
      <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {task.name}
        <button onClick={onClickCompleted}>Completar</button>
        
        
        {console.log(task)}
      </div>
    );
  };
  export default TaskItem;