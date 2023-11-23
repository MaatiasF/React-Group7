import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  {
    /* entrada tarea */
  }
  const addTask = (newTask) => {
    const updatedTasks = [
      ...tasks,
      { id: tasks.length + 1, name: newTask, completed: false },
    ];
    setTasks(updatedTasks);
  };

  {
    /* salida tarea */
  }
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskList tasks={tasks} />

      <TaskForm onAddTask={addTask} />
    </div>
  );
}

export default App;
