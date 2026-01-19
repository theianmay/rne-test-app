import { ListItem } from "@rneui/themed";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

describe("ListItem Component", () => {
  it("renders with title", () => {
    const { getByText } = render(
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>List Item Title</ListItem.Title>
        </ListItem.Content>
      </ListItem>,
    );
    expect(getByText("List Item Title")).toBeTruthy();
  });

  it("renders with subtitle", () => {
    const { getByText } = render(
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>Title</ListItem.Title>
          <ListItem.Subtitle>Subtitle</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>,
    );
    expect(getByText("Subtitle")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ListItem onPress={onPressMock}>
        <ListItem.Content>
          <ListItem.Title>Pressable Item</ListItem.Title>
        </ListItem.Content>
      </ListItem>,
    );
    fireEvent.press(getByText("Pressable Item"));
    expect(onPressMock).toHaveBeenCalled();
  });

  it("renders with chevron", () => {
    const { getByText } = render(
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>With Chevron</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>,
    );
    expect(getByText("With Chevron")).toBeTruthy();
  });

  it("renders with checkbox", () => {
    const { getByText } = render(
      <ListItem>
        <ListItem.CheckBox checked />
        <ListItem.Content>
          <ListItem.Title>With Checkbox</ListItem.Title>
        </ListItem.Content>
      </ListItem>,
    );
    expect(getByText("With Checkbox")).toBeTruthy();
  });

  it("renders bottom divider", () => {
    const { getByText } = render(
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>With Divider</ListItem.Title>
        </ListItem.Content>
      </ListItem>,
    );
    expect(getByText("With Divider")).toBeTruthy();
  });
});
