import { Button } from "@rneui/themed";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

describe("Button Component", () => {
  it("renders correctly with title", () => {
    const { getByText } = render(<Button title="Press Me" />);
    expect(getByText("Press Me")).toBeTruthy();
  });

  it("calls onPress handler when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Click Me" onPress={onPressMock} />,
    );

    fireEvent.press(getByText("Click Me"));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it("does not call onPress when disabled", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Disabled" onPress={onPressMock} disabled />,
    );

    fireEvent.press(getByText("Disabled"));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it("renders loading state", () => {
    const { queryByText, getByTestId } = render(
      <Button title="Loading" loading testID="loading-button" />,
    );

    // Title may or may not be visible during loading depending on implementation
    expect(getByTestId("loading-button")).toBeTruthy();
  });

  it("renders different button types", () => {
    const { rerender, getByText } = render(
      <Button title="Solid" type="solid" />,
    );
    expect(getByText("Solid")).toBeTruthy();

    rerender(<Button title="Outline" type="outline" />);
    expect(getByText("Outline")).toBeTruthy();

    rerender(<Button title="Clear" type="clear" />);
    expect(getByText("Clear")).toBeTruthy();
  });
});
