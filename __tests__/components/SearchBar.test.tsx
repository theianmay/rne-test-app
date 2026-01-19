import { SearchBar } from "@rneui/themed";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

describe("SearchBar Component", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText } = render(
      <SearchBar placeholder="Search..." />,
    );
    expect(getByPlaceholderText("Search...")).toBeTruthy();
  });

  it("renders with value", () => {
    const { getByDisplayValue } = render(<SearchBar value="test query" />);
    expect(getByDisplayValue("test query")).toBeTruthy();
  });

  it("calls onChangeText when text changes", () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar placeholder="Search" onChangeText={onChangeTextMock} />,
    );
    fireEvent.changeText(getByPlaceholderText("Search"), "new text");
    expect(onChangeTextMock).toHaveBeenCalledWith("new text");
  });

  it("renders with loading indicator", () => {
    render(<SearchBar showLoading />);
  });

  it("renders different platforms", () => {
    render(<SearchBar platform="default" />);
    render(<SearchBar platform="ios" />);
    render(<SearchBar platform="android" />);
  });

  it("renders with custom cancel button", () => {
    render(<SearchBar showCancel />);
  });
});
