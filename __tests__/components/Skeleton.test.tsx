import { Skeleton } from "@rneui/themed";
import { render } from "@testing-library/react-native";
import React from "react";

describe("Skeleton Component", () => {
  it("renders correctly", () => {
    render(<Skeleton />);
  });

  it("renders with custom width and height", () => {
    render(<Skeleton width={200} height={100} />);
  });

  it("renders circle shape", () => {
    render(<Skeleton circle width={50} height={50} />);
  });

  it("renders with animation", () => {
    render(<Skeleton animation="pulse" />);
    render(<Skeleton animation="wave" />);
    render(<Skeleton animation="none" />);
  });

  it("renders with custom style", () => {
    render(<Skeleton style={{ borderRadius: 10 }} />);
  });

  it("renders linear gradient skeleton", () => {
    render(<Skeleton LinearGradientComponent={() => null} />);
  });
});
