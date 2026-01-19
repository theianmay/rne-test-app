import { Input } from "@rneui/themed";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

describe("Input Component", () => {
  it("renders correctly with placeholder", () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" />);
    expect(getByPlaceholderText("Enter text")).toBeTruthy();
  });

  it("handles text input correctly", () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder="Type here" onChangeText={onChangeTextMock} />,
    );

    const input = getByPlaceholderText("Type here");
    fireEvent.changeText(input, "Hello World");

    expect(onChangeTextMock).toHaveBeenCalledWith("Hello World");
  });

  it("displays label when provided", () => {
    const { getByText } = render(
      <Input label="Email Address" placeholder="email@example.com" />,
    );
    expect(getByText("Email Address")).toBeTruthy();
  });

  it("displays error message when provided", () => {
    const { getByText } = render(
      <Input placeholder="Password" errorMessage="Password is required" />,
    );
    expect(getByText("Password is required")).toBeTruthy();
  });

  it("respects disabled state", () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Disabled input" disabled />,
    );

    const input = getByPlaceholderText("Disabled input");
    expect(input.props.editable).toBe(false);
  });

  it("handles secure text entry", () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Password" secureTextEntry />,
    );

    const input = getByPlaceholderText("Password");
    expect(input.props.secureTextEntry).toBe(true);
  });
});
