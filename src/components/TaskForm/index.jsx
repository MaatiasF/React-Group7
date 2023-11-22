import { useState } from 'react';
 
  // Componente de Formulario (TaskForm)
  const TaskForm = (props) => {
    const {onAddTask} = props;

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
      <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <input
          className='input_tarea'
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={handleChange}
        />
        <button className='button_agregar' type="submit">Agregar tarea</button>
      </form>
      </div>
    );
  };
  export default TaskForm;