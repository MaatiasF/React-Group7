import React, { useState } from 'react';
import TaskItem from '../TaskItem';

// Componente de Lista de Tareas (TaskList)
const TaskList = ({ tasks, onCompleteTask, onDeleteTask }) => {
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onCompleteTask={onCompleteTask}
                />
            ))}
        </div>
    );
};
export default TaskList;  