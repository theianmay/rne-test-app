import { Badge } from "@rneui/themed";
import { render } from "@testing-library/react-native";
import React from "react";

describe("Badge Component", () => {
  it("renders with value", () => {
    const { getByText } = render(<Badge value="5" />);
    expect(getByText("5")).toBeTruthy();
  });

  it("renders with numeric value", () => {
    const { getByText } = render(<Badge value={10} />);
    expect(getByText("10")).toBeTruthy();
  });

  it("renders with status colors", () => {
    const { getByText: getPrimary } = render(
      <Badge value="1" status="primary" />,
    );
    expect(getPrimary("1")).toBeTruthy();

    const { getByText: getSuccess } = render(
      <Badge value="2" status="success" />,
    );
    expect(getSuccess("2")).toBeTruthy();

    const { getByText: getWarning } = render(
      <Badge value="3" status="warning" />,
    );
    expect(getWarning("3")).toBeTruthy();

    const { getByText: getError } = render(<Badge value="4" status="error" />);
    expect(getError("4")).toBeTruthy();
  });

  it("renders without value (mini badge)", () => {
    render(<Badge status="success" />);
  });
});
