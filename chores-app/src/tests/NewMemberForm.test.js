import { render, screen } from "@testing-library/react";
import React from "react";
import NewMemberForm from "../components/NewMemberForm";

describe("the new member form", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<NewMemberForm />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("should render basic fields", () => {
    render(<NewMemberForm />);
    expect(screen.getByText(/new member/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /send invite/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/choose a role/i)).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /back to dashboard/i })
    ).toBeInTheDocument();
  });
});
