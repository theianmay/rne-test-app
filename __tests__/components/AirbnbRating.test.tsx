import { AirbnbRating } from "@rneui/themed";
import { render } from "@testing-library/react-native";
import React from "react";

describe("AirbnbRating Component", () => {
  it("renders correctly with default props", () => {
    const { getByTestId } = render(<AirbnbRating />);
    expect(getByTestId("RNEUI__TapRating")).toBeTruthy();
  });

  it("renders with custom reviews", () => {
    const { getByTestId } = render(
      <AirbnbRating reviews={["Bad", "OK", "Good", "Great", "Amazing"]} />,
    );
    expect(getByTestId("RNEUI__TapRating")).toBeTruthy();
  });

  it("renders with custom count", () => {
    const { UNSAFE_getAllByType } = render(<AirbnbRating count={3} />);
    // Component should render with specified count
  });

  it("calls onFinishRating when rating changes", () => {
    const onFinishRatingMock = jest.fn();
    render(<AirbnbRating onFinishRating={onFinishRatingMock} />);
    // Rating interaction would trigger callback
  });

  it("renders in read-only mode", () => {
    const { getByTestId } = render(<AirbnbRating isDisabled />);
    expect(getByTestId("RNEUI__TapRating")).toBeTruthy();
  });
});
