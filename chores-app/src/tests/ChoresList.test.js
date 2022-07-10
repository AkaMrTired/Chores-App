import {
  render, // screen
} from "@testing-library/react";
import React from "react";
import ChoresList from "../components/ChoresList";

describe("the homepage", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<ChoresList />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("should render basic fields", () => {
    render(<ChoresList />);
    //     expect(screen.getByText(/home page/i)).toBeInTheDocument();
    //     expect(screen.getByText(/email/i)).toBeInTheDocument();
    //     expect(screen.getByRole("button", { name: /Log In/i })).toBeInTheDocument();
    //     expect(screen.getByText(/password/i)).toBeInTheDocument();
    //     expect(screen.getByText(/not yet a member/i)).toBeInTheDocument();
    //     expect(
    //       screen.getByRole("button", { name: /Sign Up/i })
    //     ).toBeInTheDocument();
  });
});
