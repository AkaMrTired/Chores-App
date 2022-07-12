import { render, screen } from "@testing-library/react";
import React from "react";
import NewMemberSignUp from "../components/NewMemberSignUp";

describe("the sign up form", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<NewMemberSignUp />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("should render basic fields", () => {
    render(<NewMemberSignUp />);
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /please finish creating your account by setting your preferred name and password/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Complete Account/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/your name/i)).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(screen.getByText(/confirm password/i)).toBeInTheDocument();
  });
});
