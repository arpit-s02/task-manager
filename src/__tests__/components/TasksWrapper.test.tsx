import React from "react";
import TasksWrapper from "../../components/TasksWrapper";
import { render, screen } from "@testing-library/react";
import { deleteTask, Task, updateTask } from "../../types";

describe("Testing TasksWrapper UI", () => {
  let tasks: Task[];
  let updateTask: updateTask;
  let deleteTask: deleteTask;

  beforeEach(() => {
    tasks = [
      {
        id: 1,
        description: "first task",
        isCompleted: false,
      },
      {
        id: 2,
        description: "second task",
        isCompleted: true,
      },
    ];

    updateTask = jest.fn();
    deleteTask = jest.fn();
  });

  it("should render an unordered list for tasks", () => {
    render(
      <TasksWrapper
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    );

    const tasksList = screen.getByRole("list");
    expect(tasksList).toBeInTheDocument();
  });

  it("should render a list item for each task", () => {
    render(
      <TasksWrapper
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    );

    const tasksLength = tasks.length;
    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(tasksLength);
  });

  it("should render an empty list when no tasks are provided", () => {
    render(
      <TasksWrapper
        tasks={[]}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    );

    const tasksLength = 0;
    const listItems = screen.queryAllByRole("listitem");

    expect(listItems).toHaveLength(tasksLength);
  });
});
