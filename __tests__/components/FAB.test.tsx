import { FAB } from "@rneui/themed";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

describe("FAB Component", () => {
  it("renders correctly", () => {
    render(<FAB icon={{ name: "add" }} />);
  });

  it("renders with title", () => {
    const { getByText } = render(<FAB title="Add" />);
    expect(getByText("Add")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <FAB title="Press Me" onPress={onPressMock} />,
    );
    fireEvent.press(getByText("Press Me"));
    expect(onPressMock).toHaveBeenCalled();
  });

  it("renders small size", () => {
    render(<FAB size="small" icon={{ name: "add" }} />);
  });

  it("renders large size", () => {
    render(<FAB size="large" icon={{ name: "add" }} />);
  });

  it("renders with custom color", () => {
    render(<FAB color="secondary" icon={{ name: "add" }} />);
  });

  it("renders visible state", () => {
    render(<FAB visible icon={{ name: "add" }} />);
  });

  it("renders loading state", () => {
    render(<FAB loading icon={{ name: "add" }} />);
  });
});
