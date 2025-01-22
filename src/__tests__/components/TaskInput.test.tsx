import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TaskInput from "../../components/TaskInput";

describe("Testing TaskInput UI", () => {
  it("should render the text input and submit button", () => {
    // mocking the function
    const createTask = jest.fn();
    render(<TaskInput createTask={createTask} />);

    const textInput = screen.getByPlaceholderText("Add a task...");
    const button = screen.getByRole("button");

    expect(textInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should update task description when user types in the text input", () => {
    const createTask = jest.fn();
    render(<TaskInput createTask={createTask} />);

    const taskDescriptionInput = screen.getByPlaceholderText("Add a task...");
    const value = "new task";
    fireEvent.change(taskDescriptionInput, { target: { value } });

    expect(taskDescriptionInput).toHaveValue(value);
  });
});

describe("Testing TaskInput functionality", () => {
  it("should call createTask function when form is submitted", () => {
    const createTask = jest.fn();
    render(<TaskInput createTask={createTask} />);

    const taskInputForm = screen.getByRole("form", { name: "task-input-form" });
    fireEvent.submit(taskInputForm);

    expect(createTask).toBeCalled();
  });
});
