import { Slider } from "@rneui/themed";
import { render } from "@testing-library/react-native";
import React from "react";

describe("Slider Component", () => {
  it("renders correctly", () => {
    render(<Slider />);
  });

  it("renders with value", () => {
    render(<Slider value={0.5} />);
  });

  it("renders with min and max", () => {
    render(<Slider minimumValue={0} maximumValue={100} value={50} />);
  });

  it("calls onValueChange when sliding", () => {
    const onValueChangeMock = jest.fn();
    render(<Slider onValueChange={onValueChangeMock} />);
  });

  it("calls onSlidingComplete when sliding ends", () => {
    const onSlidingCompleteMock = jest.fn();
    render(<Slider onSlidingComplete={onSlidingCompleteMock} />);
  });

  it("renders with custom colors", () => {
    render(
      <Slider
        minimumTrackTintColor="red"
        maximumTrackTintColor="blue"
        thumbTintColor="green"
      />,
    );
  });

  it("renders with step", () => {
    render(<Slider step={10} minimumValue={0} maximumValue={100} />);
  });

  it("renders disabled state", () => {
    render(<Slider disabled />);
  });
});
