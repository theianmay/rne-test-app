import { PricingCard } from "@rneui/themed";
import { render } from "@testing-library/react-native";
import React from "react";

describe("PricingCard Component", () => {
  it("renders with required props", () => {
    const { getByText } = render(
      <PricingCard
        title="Basic"
        price="$9.99"
        info={["Feature 1", "Feature 2"]}
        button={{ title: "Subscribe" }}
      />,
    );
    expect(getByText("Basic")).toBeTruthy();
    expect(getByText("$9.99")).toBeTruthy();
  });

  it("renders all info items", () => {
    const { getByText } = render(
      <PricingCard
        title="Pro"
        price="$19.99"
        info={["10 Users", "Unlimited Storage", "24/7 Support"]}
        button={{ title: "Get Started" }}
      />,
    );
    expect(getByText("10 Users")).toBeTruthy();
    expect(getByText("Unlimited Storage")).toBeTruthy();
    expect(getByText("24/7 Support")).toBeTruthy();
  });

  it("renders button with custom title", () => {
    const { getByText } = render(
      <PricingCard
        title="Enterprise"
        price="$99.99"
        info={["All Features"]}
        button={{ title: "Contact Sales" }}
      />,
    );
    expect(getByText("Contact Sales")).toBeTruthy();
  });

  it("renders with custom color", () => {
    const { getByText } = render(
      <PricingCard
        color="purple"
        title="Premium"
        price="$49.99"
        info={["Premium Feature"]}
        button={{ title: "Upgrade" }}
      />,
    );
    expect(getByText("Premium")).toBeTruthy();
  });
});
