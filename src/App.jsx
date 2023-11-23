/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskItem from './components/TaskItem'

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, { id: tasks.length + 1, name: newTask, completed: false }];
    setTasks(updatedTasks);
  };


  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskList
        tasks={tasks}
      />

      <TaskForm onAddTask={addTask} />
    </div>
  );
}

export default App
