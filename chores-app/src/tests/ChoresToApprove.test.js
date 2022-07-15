import { render, screen } from "@testing-library/react";
import React from "react";
import ChoresToApprove from "../components/ChoresToApprove";

const validChores = [
  { _id: 123, name: "takenChore", price: "1", status: "T" },
  { _id: 1234, name: "availableChore", price: "1", status: "A" },
  { _id: 12345, name: "unavailableChore", price: "1", status: "U" },
  { _id: 123456, name: "pendingApprovalChore", price: "1", status: "P" },
];

describe("the parents dashboard", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<ChoresToApprove chores={validChores} />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("should render basic fields", () => {
    render(<ChoresToApprove chores={validChores} />);
    expect(
      screen.getByText(/these are the completed chores/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /accept/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reject/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /back to dashboard/i })
    ).toBeInTheDocument();
  });
  it("should render only the chores with the available status", () => {
    render(<ChoresToApprove chores={validChores} />);
    expect(screen.queryByText(/availableChore/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/unavailableChore/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/takenChore/i)).not.toBeInTheDocument();
    expect(screen.getByText(/pendingApprovalChore/i)).toBeInTheDocument();
  });
});
