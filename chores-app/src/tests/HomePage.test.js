import { render, screen } from "@testing-library/react";
import React from "react";
import HomePage from "../components/HomePage";

describe("the homepage", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<HomePage />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("should render basic fields", () => {
    render(<HomePage />);
    expect(screen.getByText(/homepage/i)).toBeInTheDocument();
    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Log In/i })).toBeInTheDocument();
    expect(screen.getByText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/not yet a member/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Sign Up/i })
    ).toBeInTheDocument();
  });
});
