import { Divider } from "@rneui/themed";
import { render } from "@testing-library/react-native";
import React from "react";

describe("Divider Component", () => {
  it("renders correctly", () => {
    render(<Divider />);
  });

  it("renders with custom width", () => {
    render(<Divider width={2} />);
  });

  it("renders with custom color", () => {
    render(<Divider color="red" />);
  });

  it("renders with inset", () => {
    render(<Divider inset />);
  });

  it("renders with insetType", () => {
    render(<Divider inset insetType="left" />);
    render(<Divider inset insetType="right" />);
    render(<Divider inset insetType="middle" />);
  });

  it("renders vertical orientation", () => {
    render(<Divider orientation="vertical" />);
  });

  it("renders with subHeader", () => {
    const { getByText } = render(<Divider subHeader="Section" />);
    expect(getByText("Section")).toBeTruthy();
  });
});
