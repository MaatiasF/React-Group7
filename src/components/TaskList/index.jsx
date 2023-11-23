// import { useState } from 'react';
import TaskItem from "../TaskItem";

const TaskList = (props) => {
  const { tasks } = props;
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
