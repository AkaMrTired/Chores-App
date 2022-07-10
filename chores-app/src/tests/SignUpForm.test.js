import { render, screen } from "@testing-library/react";
import React from "react";
import SignUpForm from "../components/SignUpForm";

describe("the sign up form", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<SignUpForm />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("should render basic fields", () => {
    render(<SignUpForm />);
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Create Account/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/family name/i)).toBeInTheDocument();
    expect(screen.getByText(/your name/i)).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(screen.getByText(/confirm password/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /You will be able to invite more family members once you make your account./i
      )
    ).toBeInTheDocument();
  });
});
