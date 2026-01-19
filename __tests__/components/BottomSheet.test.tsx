import { BottomSheet } from "@rneui/themed";
import { render } from "@testing-library/react-native";
import React from "react";
import { Text } from "react-native";

describe("BottomSheet Component", () => {
  it("renders when visible", () => {
    const { getByText } = render(
      <BottomSheet isVisible>
        <Text>Bottom Sheet Content</Text>
      </BottomSheet>,
    );
    expect(getByText("Bottom Sheet Content")).toBeTruthy();
  });

  it("does not render content when not visible", () => {
    const { queryByText } = render(
      <BottomSheet isVisible={false}>
        <Text>Hidden Content</Text>
      </BottomSheet>,
    );
    expect(queryByText("Hidden Content")).toBeNull();
  });

  it("renders with custom modal props", () => {
    const { getByText } = render(
      <BottomSheet isVisible modalProps={{ animationType: "slide" }}>
        <Text>Sliding Content</Text>
      </BottomSheet>,
    );
    expect(getByText("Sliding Content")).toBeTruthy();
  });
});
