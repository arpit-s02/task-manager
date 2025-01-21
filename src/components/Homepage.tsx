import React from "react";
import TaskInput from "./TaskInput.tsx";
import TasksWrapper from "./TasksWrapper.tsx";
import { useState } from "react";
import { Task } from "../types";

const Homepage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = (taskDescription: string) => {
    if (!taskDescription.trim()) return;

    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      description: taskDescription.trim(),
      isCompleted: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks((prevTasks) => {
      const updatedTasksList = prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );

      return updatedTasksList;
    });
  };

  const deleteTask = (taskId: number) => {
    setTasks((prevTasks) => {
      const updatedTasksList = prevTasks.filter((task) => task.id !== taskId);
      return updatedTasksList;
    });
  };

  return (
    <div className="flex flex-col gap-4 items-center p-8">
      <h1 className="text-4xl">Task Manager</h1>

      <TaskInput createTask={createTask} />

      <TasksWrapper
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default Homepage;
