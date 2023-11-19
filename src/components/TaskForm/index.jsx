import React, { useState } from 'react';
 
  // Componente de Formulario (TaskForm)
  const TaskForm = ({ onAddTask }) => {
    const [newTask, setNewTask] = useState('');
  
    const handleChange = (event) => {
      setNewTask(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onAddTask(newTask);
      setNewTask('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={handleChange}
        />
        <button type="submit">Agregar tarea</button>
      </form>
    );
  };
  export default TaskForm;