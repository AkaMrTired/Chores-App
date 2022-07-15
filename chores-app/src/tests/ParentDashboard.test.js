import { render, screen } from "@testing-library/react";
import React from "react";
import ParentDashboard from "../components/ParentDashboard";

const validChores = [];

describe("the parents dashboard", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<ParentDashboard chores={validChores} />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("should render basic fields", () => {
    render(<ParentDashboard chores={validChores} />);
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /invite new member/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Chores")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /add new chore/i })
    ).toBeInTheDocument();
  });
});
