import { Tile } from "@rneui/themed";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

describe("Tile Component", () => {
  it("renders with title", () => {
    const { getByText } = render(
      <Tile
        imageSrc={{ uri: "https://example.com/image.jpg" }}
        title="Tile Title"
      />,
    );
    expect(getByText("Tile Title")).toBeTruthy();
  });

  it("renders with caption", () => {
    const { getByText } = render(
      <Tile
        imageSrc={{ uri: "https://example.com/image.jpg" }}
        title="Title With Caption"
      />,
    );
    expect(getByText("Title With Caption")).toBeTruthy();
  });

  it("renders featured tile", () => {
    const { getByText } = render(
      <Tile
        imageSrc={{ uri: "https://example.com/image.jpg" }}
        title="Featured"
        featured
      />,
    );
    expect(getByText("Featured")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Tile
        imageSrc={{ uri: "https://example.com/image.jpg" }}
        title="Pressable Tile"
        onPress={onPressMock}
      />,
    );
    fireEvent.press(getByText("Pressable Tile"));
    expect(onPressMock).toHaveBeenCalled();
  });

  it("renders with custom dimensions", () => {
    const { getByText } = render(
      <Tile
        imageSrc={{ uri: "https://example.com/image.jpg" }}
        title="Custom Size"
        width={200}
        height={150}
      />,
    );
    expect(getByText("Custom Size")).toBeTruthy();
  });
});
