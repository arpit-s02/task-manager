import React from "react";
import TaskItem from "../../components/TaskItem";
import { fireEvent, render, screen } from "@testing-library/react";
import { deleteTask, updateTask } from "../../types";

describe("Testing TaskItem UI", () => {
  let updateTask: updateTask;
  let deleteTask: deleteTask;

  beforeEach(() => {
    updateTask = jest.fn();
    deleteTask = jest.fn();
  });

  it("should render a checkbox, text and button", () => {
    const task = {
      id: 1,
      description: "task",
      isCompleted: false,
    };

    render(
      <TaskItem task={task} updateTask={updateTask} deleteTask={deleteTask} />
    );

    const checkbox = screen.getByRole("checkbox");
    const text = screen.getByText(task.description);
    const button = screen.getByRole("button");

    expect(checkbox).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("checkbox must be unchecked when isCompleted is false", () => {
    const task = {
      id: 1,
      description: "task",
      isCompleted: false,
    };

    render(
      <TaskItem task={task} updateTask={updateTask} deleteTask={deleteTask} />
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("checkbox must be checked when isCompleted is true", () => {
    const task = {
      id: 1,
      description: "task",
      isCompleted: true,
    };

    render(
      <TaskItem task={task} updateTask={updateTask} deleteTask={deleteTask} />
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("text must have line-through style when isCompleted is true", () => {
    const task = {
      id: 1,
      description: "task",
      isCompleted: true,
    };

    render(
      <TaskItem task={task} updateTask={updateTask} deleteTask={deleteTask} />
    );

    const text = screen.getByText(task.description);
    expect(text).toHaveClass("line-through");
  });

  it("text must not have line-through style when isCompleted is false", () => {
    const task = {
      id: 1,
      description: "task",
      isCompleted: false,
    };

    render(
      <TaskItem task={task} updateTask={updateTask} deleteTask={deleteTask} />
    );

    const text = screen.getByText(task.description);
    expect(text).not.toHaveClass("line-through");
  });
});

describe("Testing TaskItem functionality", () => {
  let updateTask: updateTask;
  let deleteTask: deleteTask;

  beforeEach(() => {
    updateTask = jest.fn();
    deleteTask = jest.fn();
  });

  it("should call updateTask with isCompleted as true when checkbox is clicked to check", () => {
    const task = {
      id: 1,
      description: "task",
      isCompleted: false,
    };

    render(
      <TaskItem task={task} updateTask={updateTask} deleteTask={deleteTask} />
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(updateTask).toHaveBeenCalledWith({ ...task, isCompleted: true });
  });

  it("should call updateTask with isCompleted as false when checkbox is clicked to uncheck", () => {
    const task = {
      id: 1,
      description: "task",
      isCompleted: true,
    };

    render(
      <TaskItem task={task} updateTask={updateTask} deleteTask={deleteTask} />
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(updateTask).toHaveBeenCalledWith({ ...task, isCompleted: false });
  });

  it("should call deleteTask with task id when delete button is clicked", () => {
    const task = {
      id: 1,
      description: "task",
      isCompleted: false,
    };

    render(
      <TaskItem task={task} updateTask={updateTask} deleteTask={deleteTask} />
    );

    const deleteButton = screen.getByRole("button");
    fireEvent.click(deleteButton);

    expect(deleteTask).toHaveBeenCalledWith(task.id);
  });
});
