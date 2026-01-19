import { SocialIcon } from "@rneui/themed";
import { render } from "@testing-library/react-native";
import React from "react";

describe("SocialIcon Component", () => {
  it("renders correctly with type", () => {
    render(<SocialIcon type="facebook" />);
  });

  it("renders different social types", () => {
    render(<SocialIcon type="twitter" />);
    render(<SocialIcon type="instagram" />);
    render(<SocialIcon type="linkedin" />);
    render(<SocialIcon type="github" />);
  });

  it("renders as button with title", () => {
    const { getByText } = render(
      <SocialIcon type="facebook" title="Sign in with Facebook" button />,
    );
    expect(getByText("Sign in with Facebook")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    render(<SocialIcon type="twitter" onPress={onPressMock} />);
  });

  it("renders raised style", () => {
    render(<SocialIcon type="google" raised />);
  });

  it("renders light style", () => {
    render(<SocialIcon type="facebook" light />);
  });

  it("renders loading state", () => {
    render(<SocialIcon type="twitter" loading />);
  });
});
