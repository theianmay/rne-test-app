import { Tab } from "@rneui/themed";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

describe("Tab Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Tab value={0} onChange={() => {}}>
        <Tab.Item title="Tab 1" />
        <Tab.Item title="Tab 2" />
        <Tab.Item title="Tab 3" />
      </Tab>,
    );
    expect(getByText("Tab 1")).toBeTruthy();
    expect(getByText("Tab 2")).toBeTruthy();
    expect(getByText("Tab 3")).toBeTruthy();
  });

  it("calls onChange when tab is pressed", () => {
    const onChangeMock = jest.fn();
    const { getByText } = render(
      <Tab value={0} onChange={onChangeMock}>
        <Tab.Item title="First" />
        <Tab.Item title="Second" />
      </Tab>,
    );
    fireEvent.press(getByText("Second"));
    expect(onChangeMock).toHaveBeenCalled();
  });

  it("renders with indicator style", () => {
    const { getByText } = render(
      <Tab
        value={0}
        onChange={() => {}}
        indicatorStyle={{ backgroundColor: "red" }}
      >
        <Tab.Item title="Tab A" />
        <Tab.Item title="Tab B" />
      </Tab>,
    );
    expect(getByText("Tab A")).toBeTruthy();
  });

  it("renders dense tabs", () => {
    const { getByText } = render(
      <Tab value={0} onChange={() => {}} dense>
        <Tab.Item title="Dense 1" />
        <Tab.Item title="Dense 2" />
      </Tab>,
    );
    expect(getByText("Dense 1")).toBeTruthy();
  });

  it("renders scrollable tabs", () => {
    const { getByText } = render(
      <Tab value={0} onChange={() => {}} scrollable>
        <Tab.Item title="Scroll 1" />
        <Tab.Item title="Scroll 2" />
        <Tab.Item title="Scroll 3" />
        <Tab.Item title="Scroll 4" />
      </Tab>,
    );
    expect(getByText("Scroll 1")).toBeTruthy();
  });
});
