import React from "react";
import { render, screen } from "@testing-library/react";
import Homepage from "../../components/Homepage";

describe("Testing Homepage UI", () => {
  it("should render the heading", () => {
    render(<Homepage />);

    const heading = screen.getByText("Task Manager");

    expect(heading).toBeInTheDocument();
  });
});
