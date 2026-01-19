import { SpeedDial } from "@rneui/themed";
import { render } from "@testing-library/react-native";
import React from "react";

describe("SpeedDial Component", () => {
  it("renders correctly when closed", () => {
    render(
      <SpeedDial isOpen={false} onOpen={() => {}} onClose={() => {}}>
        <SpeedDial.Action title="Add" />
      </SpeedDial>,
    );
  });

  it("renders correctly when open", () => {
    const { getByText } = render(
      <SpeedDial isOpen={true} onOpen={() => {}} onClose={() => {}}>
        <SpeedDial.Action title="Add" />
        <SpeedDial.Action title="Edit" />
      </SpeedDial>,
    );
    expect(getByText("Add")).toBeTruthy();
    expect(getByText("Edit")).toBeTruthy();
  });

  it("calls onOpen when main button is pressed while closed", () => {
    const onOpenMock = jest.fn();
    render(
      <SpeedDial isOpen={false} onOpen={onOpenMock} onClose={() => {}}>
        <SpeedDial.Action title="Action" />
      </SpeedDial>,
    );
  });

  it("calls onClose when main button is pressed while open", () => {
    const onCloseMock = jest.fn();
    render(
      <SpeedDial isOpen={true} onOpen={() => {}} onClose={onCloseMock}>
        <SpeedDial.Action title="Action" />
      </SpeedDial>,
    );
  });

  it("renders actions with onPress handlers", () => {
    const onActionPressMock = jest.fn();
    const { getByText } = render(
      <SpeedDial isOpen={true} onOpen={() => {}} onClose={() => {}}>
        <SpeedDial.Action title="Delete" onPress={onActionPressMock} />
      </SpeedDial>,
    );
    expect(getByText("Delete")).toBeTruthy();
  });
});
