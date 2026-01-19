import { Image } from "@rneui/themed";
import { render } from "@testing-library/react-native";
import React from "react";

describe("Image Component", () => {
  it("renders with source", () => {
    render(<Image source={{ uri: "https://example.com/image.jpg" }} />);
  });

  it("renders with dimensions", () => {
    render(
      <Image
        source={{ uri: "https://example.com/image.jpg" }}
        style={{ width: 200, height: 200 }}
      />,
    );
  });

  it("renders with placeholder", () => {
    render(
      <Image
        source={{ uri: "https://example.com/image.jpg" }}
        PlaceholderContent={<></>}
      />,
    );
  });

  it("renders with transition", () => {
    render(
      <Image source={{ uri: "https://example.com/image.jpg" }} transition />,
    );
  });

  it("renders with custom transition duration", () => {
    render(
      <Image
        source={{ uri: "https://example.com/image.jpg" }}
        transitionDuration={500}
      />,
    );
  });
});
