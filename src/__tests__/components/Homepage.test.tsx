import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Homepage from "../../components/Homepage";

describe("Testing Homepage UI", () => {
  it("should render the heading", () => {
    render(<Homepage />);

    const heading = screen.getByText("Task Manager");

    expect(heading).toBeInTheDocument();
  });
});

describe("Testing createTask function", () => {
  it("should add a task when valid taskDescription is provided", () => {
    render(<Homepage />);

    const taskInputForm = screen.getByRole("form", { name: "task-input-form" });
    const textInput = screen.getByRole("textbox");
    const taskDescription = "new task";

    fireEvent.change(textInput, { target: { value: taskDescription } });
    fireEvent.submit(taskInputForm);

    const task = screen.getByText(taskDescription);

    expect(task).toBeInTheDocument();
  });

  it("should not add a task when valid taskDescription is not provided", () => {
    render(<Homepage />);

    const taskInputForm = screen.getByRole("form", { name: "task-input-form" });
    const textInput = screen.getByRole("textbox");
    const taskDescription = "  ";

    fireEvent.change(textInput, { target: { value: taskDescription } });
    fireEvent.submit(taskInputForm);

    const task = screen.queryByText(taskDescription);

    expect(task).not.toBeInTheDocument();
  });
});

describe("Testing updateTask function", () => {
  it("should mark isCompleted as true when checkbox is checked", () => {
    render(<Homepage />);

    const taskInputForm = screen.getByRole("form", { name: "task-input-form" });
    const textInput = screen.getByRole("textbox");
    const taskDescription = "new task";

    fireEvent.change(textInput, { target: { value: taskDescription } });
    fireEvent.submit(taskInputForm);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it("should mark isCompleted as false when checkbox is unchecked", () => {
    render(<Homepage />);

    const taskInputForm = screen.getByRole("form", { name: "task-input-form" });
    const textInput = screen.getByRole("textbox");
    const taskDescription = "new task";

    fireEvent.change(textInput, { target: { value: taskDescription } });
    fireEvent.submit(taskInputForm);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    fireEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });
});

describe("Testing deleteTask function", () => {
  it("should delete a task", () => {
    render(<Homepage />);

    const taskInputForm = screen.getByRole("form", { name: "task-input-form" });
    const textInput = screen.getByRole("textbox");
    const taskDescription = "new task";

    fireEvent.change(textInput, { target: { value: taskDescription } });
    fireEvent.submit(taskInputForm);

    const task = screen.getByText(taskDescription);

    const deleteTaskButton = screen.getByRole("button", {
      name: "delete-task-btn",
    });

    fireEvent.click(deleteTaskButton);

    expect(task).not.toBeInTheDocument();
  });
});
