import React from "react";
import { render, screen } from "@testing-library/react";
import EditChore from "../components/EditChore";

const validProps = {
  setEditing: () => {},
  name: "test",
  price: 1,
  status: "T",
  choreID: 123,
};

describe("the edit chore component", () => {
  it("matches the screenshot", () => {
    const { asFragment } = render(
      <EditChore
        setEditing={validProps.setEditing}
        name={validProps.name}
        price={validProps.price}
        status={validProps.status}
        choreID={validProps.choreID}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders all the components when provided with valid validProps", () => {
    render(
      <EditChore
        setEditing={validProps.setEditing}
        name={validProps.name}
        price={validProps.price}
        status={validProps.status}
        choreID={validProps.choreID}
      />
    );
    expect(screen.getByText(/chore name/i)).toBeInTheDocument();
    expect(screen.getByText(/chore price/i)).toBeInTheDocument();
    expect(screen.getByText(/status of the chore/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /available/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /unavailable/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /taken/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /pending approval/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /save chore/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
  });
});
