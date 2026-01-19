import { LinearProgress } from "@rneui/themed";
import { render } from "@testing-library/react-native";
import React from "react";

describe("LinearProgress Component", () => {
  it("renders correctly", () => {
    render(<LinearProgress />);
  });

  it("renders with value", () => {
    render(<LinearProgress value={0.5} />);
  });

  it("renders with variant determinate", () => {
    render(<LinearProgress variant="determinate" value={0.7} />);
  });

  it("renders with variant indeterminate", () => {
    render(<LinearProgress variant="indeterminate" />);
  });

  it("renders with custom color", () => {
    render(<LinearProgress color="secondary" />);
  });

  it("renders with custom track color", () => {
    render(<LinearProgress trackColor="lightgray" />);
  });

  it("renders with animation disabled", () => {
    render(<LinearProgress animation={false} value={0.5} />);
  });
});
