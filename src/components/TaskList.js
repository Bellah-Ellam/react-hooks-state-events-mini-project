import React, { useState } from "react";
import Task from "./Task";
import { TASKS } from "../data";

function TaskList() {
  const [tasks, setTasks] = useState(TASKS);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          category={task.category}
          text={task.text}
          onDelete={() => handleDelete(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;