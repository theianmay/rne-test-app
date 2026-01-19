import { Icon } from "@rneui/themed";
import { render } from "@testing-library/react-native";
import React from "react";

describe("Icon Component", () => {
  it("renders correctly", () => {
    render(<Icon name="home" />);
  });

  it("renders with different types", () => {
    render(<Icon name="home" type="material" />);
    render(<Icon name="home" type="font-awesome" />);
  });

  it("renders with custom size", () => {
    render(<Icon name="home" size={40} />);
  });

  it("renders with custom color", () => {
    render(<Icon name="home" color="red" />);
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    render(<Icon name="home" onPress={onPressMock} />);
  });

  it("renders raised icon", () => {
    render(<Icon name="home" raised />);
  });

  it("renders reverse icon", () => {
    render(<Icon name="home" reverse />);
  });

  it("renders disabled icon", () => {
    render(<Icon name="home" disabled />);
  });
});
