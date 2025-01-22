import React from "react";
import { Task } from "../types";
import DeleteIcon from "./DeleteIcon.tsx";

interface Props {
  task: Task;
  updateTask: (updatedTask: Task) => void;
  deleteTask: (taskId: number) => void;
}

const TaskItem = ({ task, updateTask, deleteTask }: Props) => {
  return (
    <li className="p-4 flex justify-between items-center gap-4 bg-slate-200 rounded">
      <input
        className="w-4 h-4 cursor-pointer"
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => updateTask({ ...task, isCompleted: !task.isCompleted })}
      />

      <span className={task.isCompleted ? "line-through" : ""}>
        {task.description}
      </span>

      <button aria-label="delete-task-btn" onClick={() => deleteTask(task.id)}>
        <DeleteIcon />
      </button>
    </li>
  );
};

export default TaskItem;
