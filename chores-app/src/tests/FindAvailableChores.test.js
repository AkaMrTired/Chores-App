import { render, screen } from "@testing-library/react";
import React from "react";
import FindAvailableChores from "../components/FindAvailableChores";

const validChores = [
  { _id: 123, name: "takenChore", price: "1", status: "T" },
  { _id: 1234, name: "availableChore", price: "1", status: "A" },
  { _id: 12345, name: "unavailableChore", price: "1", status: "U" },
];

describe("the parents dashboard", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<FindAvailableChores chores={validChores} />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("should render basic fields", () => {
    render(<FindAvailableChores chores={validChores} />);
    expect(screen.getByText(/these chores are available/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /take/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /back to dashboard/i })
    ).toBeInTheDocument();
  });
  it("should render only the chores with the available status", () => {
    render(<FindAvailableChores chores={validChores} />);
    expect(screen.getByText(/availableChore/i)).toBeInTheDocument();
    expect(screen.queryByText(/unavailableChore/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/takenChore/i)).not.toBeInTheDocument();
  });
});
