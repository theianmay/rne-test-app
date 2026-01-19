import { Text } from "@rneui/themed";
import { render } from "@testing-library/react-native";
import React from "react";

describe("Text Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Text>Hello World</Text>);
    expect(getByText("Hello World")).toBeTruthy();
  });

  it("renders heading styles", () => {
    const { getByText: getH1 } = render(<Text h1>Heading 1</Text>);
    expect(getH1("Heading 1")).toBeTruthy();

    const { getByText: getH2 } = render(<Text h2>Heading 2</Text>);
    expect(getH2("Heading 2")).toBeTruthy();

    const { getByText: getH3 } = render(<Text h3>Heading 3</Text>);
    expect(getH3("Heading 3")).toBeTruthy();

    const { getByText: getH4 } = render(<Text h4>Heading 4</Text>);
    expect(getH4("Heading 4")).toBeTruthy();
  });

  it("renders with custom style", () => {
    const { getByText } = render(
      <Text style={{ color: "red", fontSize: 20 }}>Styled Text</Text>,
    );
    expect(getByText("Styled Text")).toBeTruthy();
  });

  it("renders nested text", () => {
    const { getByText } = render(
      <Text>
        Parent <Text>Nested</Text>
      </Text>,
    );
    expect(getByText(/Parent/)).toBeTruthy();
    expect(getByText("Nested")).toBeTruthy();
  });

  it("renders with numberOfLines", () => {
    const { getByText } = render(
      <Text numberOfLines={2}>
        This is a very long text that should be truncated after two lines
      </Text>,
    );
    expect(getByText(/This is a very long/)).toBeTruthy();
  });
});
