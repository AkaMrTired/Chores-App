import { render, screen } from "@testing-library/react";
import React from "react";
import ChildDashboard from "../components/ChildDashboard";

const validChores = [];

describe("the parents dashboard", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<ChildDashboard chores={validChores} />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("should render basic fields", () => {
    render(<ChildDashboard chores={validChores} />);
    expect(screen.getByText(/balance/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /find new task/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/my chores/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /request amount/i })
    ).toBeInTheDocument();
  });
});
