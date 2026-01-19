import { ButtonGroup } from "@rneui/themed";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

describe("ButtonGroup Component", () => {
  const buttons = ["One", "Two", "Three"];

  it("renders all buttons", () => {
    const { getByText } = render(
      <ButtonGroup buttons={buttons} selectedIndex={0} />,
    );
    expect(getByText("One")).toBeTruthy();
    expect(getByText("Two")).toBeTruthy();
    expect(getByText("Three")).toBeTruthy();
  });

  it("calls onPress with correct index", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ButtonGroup buttons={buttons} selectedIndex={0} onPress={onPressMock} />,
    );
    fireEvent.press(getByText("Two"));
    expect(onPressMock).toHaveBeenCalledWith(1);
  });

  it("renders with vertical layout", () => {
    const { getByText } = render(
      <ButtonGroup buttons={buttons} selectedIndex={0} vertical />,
    );
    expect(getByText("One")).toBeTruthy();
  });

  it("renders disabled state", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ButtonGroup
        buttons={buttons}
        selectedIndex={0}
        onPress={onPressMock}
        disabled
      />,
    );
    fireEvent.press(getByText("Two"));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it("supports multi-select", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ButtonGroup
        buttons={buttons}
        selectMultiple
        selectedIndexes={[0, 2]}
        onPress={onPressMock}
      />,
    );
    expect(getByText("One")).toBeTruthy();
  });
});
