import { Card } from "@rneui/themed";
import { render } from "@testing-library/react-native";
import React from "react";
import { Text } from "react-native";

describe("Card Component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <Card>
        <Text>Card Content</Text>
      </Card>,
    );
    expect(getByText("Card Content")).toBeTruthy();
  });

  it("renders with Card.Title", () => {
    const { getByText } = render(
      <Card>
        <Card.Title>Card Title</Card.Title>
      </Card>,
    );
    expect(getByText("Card Title")).toBeTruthy();
  });

  it("renders with Card.Divider", () => {
    const { getByText } = render(
      <Card>
        <Card.Title>Title</Card.Title>
        <Card.Divider />
        <Text>Content below divider</Text>
      </Card>,
    );
    expect(getByText("Content below divider")).toBeTruthy();
  });

  it("renders with Card.Image", () => {
    render(
      <Card>
        <Card.Image source={{ uri: "https://example.com/image.jpg" }} />
      </Card>,
    );
  });

  it("renders with Card.FeaturedTitle", () => {
    const { getByText } = render(
      <Card>
        <Card.FeaturedTitle>Featured</Card.FeaturedTitle>
      </Card>,
    );
    expect(getByText("Featured")).toBeTruthy();
  });
});
