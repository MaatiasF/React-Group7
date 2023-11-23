import { useState } from "react";

// Componente de Formulario (TaskForm)
const TaskForm = (props) => {
  const { onAddTask } = props;

  const [newTask, setNewTask] = useState("");

  const onChangeText = (event) => {
    event.preventDefault();
    setNewTask(event.target.value);
  };

  const onClickSubmit = (event) => {
    event.preventDefault();
    onAddTask(newTask);
    setNewTask("");
  };

  return (
    <div className="form-container">
      <form onSubmit={onClickSubmit}>
        <input
          className="input_tarea"
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={onChangeText}
        />
        <button className="button_agregar" type="submit">
          Agregar tarea
        </button>

      </form>
    </div>
  );
};
export default TaskForm;
