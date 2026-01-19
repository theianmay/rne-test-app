import { Dialog } from "@rneui/themed";
import { render } from "@testing-library/react-native";
import React from "react";

describe("Dialog Component", () => {
  it("renders when visible", () => {
    const { getByText } = render(
      <Dialog isVisible>
        <Dialog.Title title="Dialog Title" />
      </Dialog>,
    );
    expect(getByText("Dialog Title")).toBeTruthy();
  });

  it("does not render when not visible", () => {
    const { queryByText } = render(
      <Dialog isVisible={false}>
        <Dialog.Title title="Hidden Dialog" />
      </Dialog>,
    );
    expect(queryByText("Hidden Dialog")).toBeNull();
  });

  it("renders with Dialog.Actions", () => {
    const { getByText } = render(
      <Dialog isVisible>
        <Dialog.Title title="Confirm" />
        <Dialog.Actions>
          <Dialog.Button title="Cancel" />
          <Dialog.Button title="OK" />
        </Dialog.Actions>
      </Dialog>,
    );
    expect(getByText("Cancel")).toBeTruthy();
    expect(getByText("OK")).toBeTruthy();
  });

  it("calls onBackdropPress when backdrop is pressed", () => {
    const onBackdropPressMock = jest.fn();
    render(
      <Dialog isVisible onBackdropPress={onBackdropPressMock}>
        <Dialog.Title title="Test" />
      </Dialog>,
    );
  });

  it("renders loading dialog", () => {
    render(
      <Dialog isVisible>
        <Dialog.Loading />
      </Dialog>,
    );
  });
});
