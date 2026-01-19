import { CheckBox } from "@rneui/themed";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

describe("CheckBox Component", () => {
  it("renders correctly with title", () => {
    const { getByText } = render(
      <CheckBox title="Accept Terms" checked={false} onPress={() => {}} />,
    );
    expect(getByText("Accept Terms")).toBeTruthy();
  });

  it("calls onPress when tapped", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <CheckBox title="Toggle Me" checked={false} onPress={onPressMock} />,
    );

    fireEvent.press(getByText("Toggle Me"));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it("renders checked state correctly", () => {
    const { rerender, getByTestId } = render(
      <CheckBox
        title="Unchecked"
        checked={false}
        onPress={() => {}}
        testID="checkbox"
      />,
    );

    // Rerender with checked state
    rerender(
      <CheckBox
        title="Checked"
        checked={true}
        onPress={() => {}}
        testID="checkbox"
      />,
    );

    expect(getByTestId("checkbox")).toBeTruthy();
  });

  it("does not call onPress when disabled", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <CheckBox
        title="Disabled"
        checked={false}
        onPress={onPressMock}
        disabled
      />,
    );

    fireEvent.press(getByText("Disabled"));
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
