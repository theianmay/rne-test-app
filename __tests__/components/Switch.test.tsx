import { Switch } from "@rneui/themed";
import { render } from "@testing-library/react-native";
import React from "react";

describe("Switch Component", () => {
  it("renders correctly", () => {
    render(<Switch />);
  });

  it("renders with value true", () => {
    render(<Switch value={true} />);
  });

  it("renders with value false", () => {
    render(<Switch value={false} />);
  });

  it("calls onValueChange when toggled", () => {
    const onValueChangeMock = jest.fn();
    render(<Switch value={false} onValueChange={onValueChangeMock} />);
  });

  it("renders disabled state", () => {
    const onValueChangeMock = jest.fn();
    render(<Switch disabled onValueChange={onValueChangeMock} />);
  });

  it("renders with custom colors", () => {
    render(
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor="#f4f3f4"
      />,
    );
  });
});
