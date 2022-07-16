import React from "react";
import { render, screen } from "@testing-library/react";
import ChoreCard from "../components/ChoreCard";

const validProps = {
  name: "test",
  price: "1",
  status: "T",
  emptyFunction: () => {},
};

describe("the chore card component", () => {
  it("matches the screenshot", () => {
    const { asFragment } = render(
      <ChoreCard
        name={validProps.name}
        price={validProps.price}
        status={validProps.status}
        editButton={validProps.emptyFunction}
        deleteButton={validProps.emptyFunction}
        acceptButton={validProps.emptyFunction}
        rejectButton={validProps.emptyFunction}
        doneButton={validProps.emptyFunction}
        takeButton={validProps.emptyFunction}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders all the components when provided with valid validProps", () => {
    render(
      <ChoreCard
        name={validProps.name}
        price={validProps.price}
        status={validProps.status}
        editButton={validProps.emptyFunction}
        deleteButton={validProps.emptyFunction}
        acceptButton={validProps.emptyFunction}
        rejectButton={validProps.emptyFunction}
        doneButton={validProps.emptyFunction}
        takeButton={validProps.emptyFunction}
      />
    );
    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByText("£1")).toBeInTheDocument();
    expect(screen.getByText("T")).toBeInTheDocument();
    expect(screen.getByText(/Edit/i)).toBeInTheDocument();
    expect(screen.getByText(/Delete/i)).toBeInTheDocument();
    expect(screen.getByText(/Accept/i)).toBeInTheDocument();
    expect(screen.getByText(/Reject/i)).toBeInTheDocument();
    expect(screen.getByText(/done/i)).toBeInTheDocument();
    expect(screen.getByText(/take/i)).toBeInTheDocument();
  });
  it("doesn't render components when it isn't given the relevant prop", () => {
    render(<ChoreCard name={validProps.name} price={validProps.price} />);
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("£1")).toBeInTheDocument();
    expect(screen.queryByText("T")).not.toBeInTheDocument();
    expect(screen.queryByText(/Edit/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Delete/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Accept/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Reject/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/done/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/take/i)).not.toBeInTheDocument();
  });
});
