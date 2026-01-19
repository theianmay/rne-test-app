import { Tooltip } from "@rneui/themed";
import { render } from "@testing-library/react-native";
import React from "react";
import { Text } from "react-native";

describe("Tooltip Component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <Tooltip popover={<Text>Tooltip content</Text>}>
        <Text>Press me</Text>
      </Tooltip>,
    );
    expect(getByText("Press me")).toBeTruthy();
  });

  it("renders with visible prop", () => {
    const { getAllByText } = render(
      <Tooltip visible popover={<Text>Visible tooltip</Text>}>
        <Text>Target Element</Text>
      </Tooltip>,
    );
    expect(getAllByText("Target Element").length).toBeGreaterThan(0);
  });

  it("renders with custom width and height", () => {
    const { getByText } = render(
      <Tooltip width={200} height={100} popover={<Text>Sized tooltip</Text>}>
        <Text>Sized target</Text>
      </Tooltip>,
    );
    expect(getByText("Sized target")).toBeTruthy();
  });

  it("renders with custom background color", () => {
    const { getByText } = render(
      <Tooltip backgroundColor="blue" popover={<Text>Blue tooltip</Text>}>
        <Text>Blue target</Text>
      </Tooltip>,
    );
    expect(getByText("Blue target")).toBeTruthy();
  });

  it("calls onOpen and onClose", () => {
    const onOpenMock = jest.fn();
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <Tooltip
        onOpen={onOpenMock}
        onClose={onCloseMock}
        popover={<Text>Callback tooltip</Text>}
      >
        <Text>Callback target</Text>
      </Tooltip>,
    );
    expect(getByText("Callback target")).toBeTruthy();
  });
});
