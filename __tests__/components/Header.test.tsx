import { Header } from "@rneui/themed";
import { render } from "@testing-library/react-native";
import React from "react";

describe("Header Component", () => {
  it("renders with centerComponent text", () => {
    const { getByText } = render(
      <Header centerComponent={{ text: "Title" }} />,
    );
    expect(getByText("Title")).toBeTruthy();
  });

  it("renders with left and right components", () => {
    const { getByText } = render(
      <Header
        leftComponent={{ text: "Back" }}
        centerComponent={{ text: "Title" }}
        rightComponent={{ text: "Save" }}
      />,
    );
    expect(getByText("Back")).toBeTruthy();
    expect(getByText("Title")).toBeTruthy();
    expect(getByText("Save")).toBeTruthy();
  });

  it("renders with custom background color", () => {
    const { getByText } = render(
      <Header
        backgroundColor="blue"
        centerComponent={{ text: "Blue Header" }}
      />,
    );
    expect(getByText("Blue Header")).toBeTruthy();
  });

  it("renders with icon components", () => {
    render(
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        rightComponent={{ icon: "search", color: "#fff" }}
      />,
    );
  });

  it("renders elevated header", () => {
    const { getByText } = render(
      <Header elevated centerComponent={{ text: "Elevated" }} />,
    );
    expect(getByText("Elevated")).toBeTruthy();
  });
});
