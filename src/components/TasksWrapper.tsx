import React from "react";
import { Task } from "../types";
import TaskItem from "./TaskItem.tsx";

interface Props {
  tasks: Task[];
  updateTask: (updatedTask: Task) => void;
  deleteTask: (taskId: number) => void;
}

const TasksWrapper = ({ tasks, updateTask, deleteTask }: Props) => {
  return (
    <ul className="flex flex-col gap-2 min-w-72 max-w-lg w-3/5">
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        );
      })}
    </ul>
  );
};

export default TasksWrapper;
