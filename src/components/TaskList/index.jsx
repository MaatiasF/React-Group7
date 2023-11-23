// import { useState } from 'react';
import TaskItem from '../TaskItem';


// Componente de Lista de Tareas (TaskList)
const TaskList = (props) => {
    const {tasks} = props
    return (
        <div>
            {tasks.map((task) => ( // recorre la lista de tareas
                <TaskItem
                    key={task.id}
                    task={task}
                />
            ))}
        </div>
    );
};

export default TaskList;  