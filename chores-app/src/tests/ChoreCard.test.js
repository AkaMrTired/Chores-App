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
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("£1")).toBeInTheDocument();
    expect(screen.getByText("T")).toBeInTheDocument();
    expect(screen.getByText("edit")).toBeInTheDocument();
    expect(screen.getByText("delete")).toBeInTheDocument();
    expect(screen.getByText("accept")).toBeInTheDocument();
    expect(screen.getByText("reject")).toBeInTheDocument();
    expect(screen.getByText("done")).toBeInTheDocument();
    expect(screen.getByText("take")).toBeInTheDocument();
  });
  it("doesn't render components when it isn't given the relevant prop", () => {
    render(<ChoreCard name={validProps.name} price={validProps.price} />);
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("£1")).toBeInTheDocument();
    expect(screen.queryByText("T")).not.toBeInTheDocument();
    expect(screen.queryByText("edit")).not.toBeInTheDocument();
    expect(screen.queryByText("delete")).not.toBeInTheDocument();
    expect(screen.queryByText("accept")).not.toBeInTheDocument();
    expect(screen.queryByText("reject")).not.toBeInTheDocument();
    expect(screen.queryByText("done")).not.toBeInTheDocument();
    expect(screen.queryByText("take")).not.toBeInTheDocument();
  });
});
