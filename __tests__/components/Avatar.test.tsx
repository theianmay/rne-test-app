import { Avatar } from "@rneui/themed";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

describe("Avatar Component", () => {
  it("renders with title", () => {
    const { getByText } = render(<Avatar title="JD" />);
    expect(getByText("JD")).toBeTruthy();
  });

  it("renders with image source", () => {
    const { UNSAFE_getByType } = render(
      <Avatar source={{ uri: "https://example.com/avatar.jpg" }} />,
    );
  });

  it("renders rounded avatar", () => {
    const { getByText } = render(<Avatar title="AB" rounded />);
    expect(getByText("AB")).toBeTruthy();
  });

  it("renders with different sizes", () => {
    const { getByText: getSmall } = render(<Avatar title="S" size="small" />);
    expect(getSmall("S")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Avatar title="CL" onPress={onPressMock} />);
    fireEvent.press(getByText("CL"));
    expect(onPressMock).toHaveBeenCalled();
  });

  it("renders with icon", () => {
    render(<Avatar icon={{ name: "user", type: "font-awesome" }} />);
  });
});
