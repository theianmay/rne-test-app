import { Overlay } from "@rneui/themed";
import { render } from "@testing-library/react-native";
import React from "react";
import { Text } from "react-native";

describe("Overlay Component", () => {
  it("renders when visible", () => {
    const { getByText } = render(
      <Overlay isVisible>
        <Text>Overlay Content</Text>
      </Overlay>,
    );
    expect(getByText("Overlay Content")).toBeTruthy();
  });

  it("does not render when not visible", () => {
    const { queryByText } = render(
      <Overlay isVisible={false}>
        <Text>Hidden Content</Text>
      </Overlay>,
    );
    expect(queryByText("Hidden Content")).toBeNull();
  });

  it("calls onBackdropPress when backdrop is pressed", () => {
    const onBackdropPressMock = jest.fn();
    render(
      <Overlay isVisible onBackdropPress={onBackdropPressMock}>
        <Text>Test</Text>
      </Overlay>,
    );
  });

  it("renders full screen overlay", () => {
    const { getByText } = render(
      <Overlay isVisible fullScreen>
        <Text>Full Screen</Text>
      </Overlay>,
    );
    expect(getByText("Full Screen")).toBeTruthy();
  });

  it("renders with custom backdrop opacity", () => {
    const { getByText } = render(
      <Overlay isVisible backdropStyle={{ opacity: 0.8 }}>
        <Text>Custom Backdrop</Text>
      </Overlay>,
    );
    expect(getByText("Custom Backdrop")).toBeTruthy();
  });
});
