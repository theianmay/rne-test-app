import { Card, PricingCard, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { Alert, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PricingCardScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "PricingCard Component" }} />
      <SafeAreaView style={styles.safeArea} edges={["left", "right", "bottom"]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#f5f5f5"
          translucent={false}
        />
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text h2 style={styles.title}>
            PricingCard
          </Text>
          <Text style={styles.description}>
            Pricing cards display subscription or purchase options.
          </Text>

          {/* Basic Pricing Card */}
          <Card containerStyle={styles.cardContainer}>
            <Card.Title>Basic Plan</Card.Title>
            <Card.Divider />
            <PricingCard
              color="#4caf50"
              title="Free"
              price="$0"
              info={[
                "1 User",
                "5 Projects",
                "Basic Support",
                "Community Access",
              ]}
              button={{
                title: "GET STARTED",
                onPress: () => Alert.alert("Selected", "Free plan selected"),
              }}
            />
          </Card>

          {/* Pro Pricing Card */}
          <Card containerStyle={styles.cardContainer}>
            <Card.Title>Pro Plan</Card.Title>
            <Card.Divider />
            <PricingCard
              color="#2089dc"
              title="Pro"
              price="$19"
              pricingStyle={styles.pricingStyle}
              info={[
                "5 Users",
                "Unlimited Projects",
                "Priority Support",
                "API Access",
                "Analytics",
              ]}
              button={{
                title: "SUBSCRIBE",
                onPress: () => Alert.alert("Selected", "Pro plan selected"),
              }}
            />
          </Card>

          {/* Enterprise Pricing Card */}
          <Card containerStyle={styles.cardContainer}>
            <Card.Title>Enterprise Plan</Card.Title>
            <Card.Divider />
            <PricingCard
              color="#9c27b0"
              title="Enterprise"
              price="$99"
              info={[
                "Unlimited Users",
                "Unlimited Projects",
                "24/7 Support",
                "Custom Integrations",
                "Dedicated Manager",
                "SLA Guarantee",
              ]}
              button={{
                title: "CONTACT SALES",
                onPress: () =>
                  Alert.alert("Selected", "Enterprise plan selected"),
              }}
            />
          </Card>

          {/* Custom Styled Card */}
          <Card containerStyle={styles.cardContainer}>
            <Card.Title>Custom Styled</Card.Title>
            <Card.Divider />
            <PricingCard
              color="#ff5722"
              title="Premium"
              price="$49/mo"
              titleStyle={styles.customTitle}
              pricingStyle={styles.customPricing}
              infoStyle={styles.customInfo}
              info={[
                "Everything in Pro",
                "White-label Option",
                "Custom Branding",
                "Advanced Security",
              ]}
              button={{
                title: "TRY FREE",
                buttonStyle: styles.customButton,
                onPress: () => Alert.alert("Selected", "Premium plan selected"),
              }}
              containerStyle={styles.customCardContainer}
            />
          </Card>

          <View style={{ height: 40 }} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f5f5f5" },
  container: { flex: 1 },
  contentContainer: { padding: 16 },
  title: { textAlign: "center", marginBottom: 8 },
  description: {
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  cardContainer: {
    padding: 0,
    marginBottom: 0,
  },
  pricingStyle: {
    fontSize: 48,
  },
  customTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  customPricing: {
    fontSize: 42,
    fontWeight: "bold",
  },
  customInfo: {
    fontSize: 15,
  },
  customButton: {
    borderRadius: 25,
  },
  customCardContainer: {
    borderRadius: 16,
    overflow: "hidden",
  },
});
