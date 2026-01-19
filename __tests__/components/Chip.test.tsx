import { Chip } from "@rneui/themed";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

describe("Chip Component", () => {
  it("renders with title", () => {
    const { getByText } = render(<Chip title="Basic Chip" />);
    expect(getByText("Basic Chip")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Chip title="Pressable" onPress={onPressMock} />,
    );
    fireEvent.press(getByText("Pressable"));
    expect(onPressMock).toHaveBeenCalled();
  });

  it("renders with icon", () => {
    const { getByText } = render(
      <Chip title="With Icon" icon={{ name: "star", type: "material" }} />,
    );
    expect(getByText("With Icon")).toBeTruthy();
  });

  it("renders outline type", () => {
    const { getByText } = render(<Chip title="Outline" type="outline" />);
    expect(getByText("Outline")).toBeTruthy();
  });

  it("renders disabled state", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Chip title="Disabled" onPress={onPressMock} disabled />,
    );
    fireEvent.press(getByText("Disabled"));
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
