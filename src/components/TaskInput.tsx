import React from "react";
import { useState } from "react";
import AddIcon from "./AddIcon.tsx";

interface Props {
  createTask: (taskDescription: string) => void;
}

const TaskInput = ({ createTask }: Props) => {
  const [taskDescription, setTaskDescription] = useState("");

  return (
    <form
      aria-label="task-input-form"
      className="min-w-72 max-w-lg w-3/5 flex items-center bg-slate-200 rounded-[40px] relative"
      onSubmit={(e) => {
        e.preventDefault();
        createTask(taskDescription);
        setTaskDescription("");
      }}
    >
      <input
        className="w-3/4 ml-5 py-2 bg-inherit focus:outline-none"
        type="text"
        value={taskDescription}
        placeholder="Add a task..."
        onChange={(e) => setTaskDescription(e.target.value)}
      />

      <button className="w-10 h-10 flex justify-center items-center bg-green-500 rounded-[50%] absolute right-0">
        <AddIcon />
      </button>
    </form>
  );
};

export default TaskInput;
