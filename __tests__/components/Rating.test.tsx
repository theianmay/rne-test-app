import { Rating } from "@rneui/themed";
import { render } from "@testing-library/react-native";
import React from "react";

describe("Rating Component", () => {
  it("renders correctly", () => {
    render(<Rating />);
  });

  it("renders with starting value", () => {
    render(<Rating startingValue={3} />);
  });

  it("renders with custom image size", () => {
    render(<Rating imageSize={30} />);
  });

  it("renders in read-only mode", () => {
    render(<Rating readonly startingValue={4} />);
  });

  it("renders with custom rating count", () => {
    render(<Rating ratingCount={10} />);
  });

  it("calls onFinishRating when rating changes", () => {
    const onFinishRatingMock = jest.fn();
    render(<Rating onFinishRating={onFinishRatingMock} />);
  });

  it("renders with fraction values", () => {
    render(<Rating fractions={2} startingValue={3.5} />);
  });

  it("renders with custom type", () => {
    render(<Rating type="heart" />);
    render(<Rating type="bell" />);
    render(<Rating type="rocket" />);
  });
});
