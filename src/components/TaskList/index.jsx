// import { useState } from 'react';
import TaskItem from '../TaskItem';


// Componente de Lista de Tareas (TaskList)
const TaskList = (props) => {
    return (
        <div>
            {props.tasks.map((task) => ( // recorre la lista de tareas
                <TaskItem
                    key={task.id}
                    task={task}
                    onCompleteTask={props.onCompleteTask}
                />
            ))}
        </div>
    );
};

export default TaskList;  