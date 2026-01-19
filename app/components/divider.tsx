import { Card, Divider, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DividerScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Divider Component" }} />
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
            Divider
          </Text>
          <Text style={styles.description}>
            Dividers are visual separators of content.
          </Text>

          {/* Basic Divider */}
          <Card>
            <Card.Title>Basic Divider</Card.Title>
            <Card.Divider />
            <Text>Content above the divider</Text>
            <Divider style={styles.dividerSpacing} />
            <Text>Content below the divider</Text>
          </Card>

          {/* Divider with Inset */}
          <Card>
            <Card.Title>Divider with Inset</Card.Title>
            <Card.Divider />
            <Text>Full width divider:</Text>
            <Divider style={styles.dividerSpacing} />
            <Text>Left inset divider:</Text>
            <Divider inset={true} style={styles.dividerSpacing} />
            <Text>Right inset divider:</Text>
            <Divider
              inset={true}
              insetType="right"
              style={styles.dividerSpacing}
            />
            <Text>Middle inset divider:</Text>
            <Divider
              inset={true}
              insetType="middle"
              style={styles.dividerSpacing}
            />
          </Card>

          {/* Divider Colors */}
          <Card>
            <Card.Title>Divider Colors</Card.Title>
            <Card.Divider />
            <Text>Default color:</Text>
            <Divider style={styles.dividerSpacing} />
            <Text>Primary color:</Text>
            <Divider color="#2089dc" style={styles.dividerSpacing} />
            <Text>Success color:</Text>
            <Divider color="#4caf50" style={styles.dividerSpacing} />
            <Text>Error color:</Text>
            <Divider color="#f44336" style={styles.dividerSpacing} />
            <Text>Warning color:</Text>
            <Divider color="#ff9800" style={styles.dividerSpacing} />
          </Card>

          {/* Divider Width */}
          <Card>
            <Card.Title>Divider Width</Card.Title>
            <Card.Divider />
            <Text>Thin (1px):</Text>
            <Divider width={1} style={styles.dividerSpacing} />
            <Text>Medium (2px):</Text>
            <Divider width={2} style={styles.dividerSpacing} />
            <Text>Thick (4px):</Text>
            <Divider width={4} style={styles.dividerSpacing} />
            <Text>Extra thick (8px):</Text>
            <Divider width={8} style={styles.dividerSpacing} />
          </Card>

          {/* Vertical Divider */}
          <Card>
            <Card.Title>Vertical Divider</Card.Title>
            <Card.Divider />
            <View style={styles.horizontalRow}>
              <Text>Left</Text>
              <Divider
                orientation="vertical"
                width={2}
                style={styles.verticalDivider}
              />
              <Text>Center</Text>
              <Divider
                orientation="vertical"
                width={2}
                style={styles.verticalDivider}
              />
              <Text>Right</Text>
            </View>
          </Card>

          {/* Divider with Subheader */}
          <Card>
            <Card.Title>Divider with Subheader</Card.Title>
            <Card.Divider />
            <Text>Section 1 content goes here.</Text>
            <Divider
              subHeader="Section 2"
              subHeaderStyle={styles.subHeader}
              style={styles.dividerSpacing}
            />
            <Text>Section 2 content goes here.</Text>
            <Divider
              subHeader="Section 3"
              subHeaderStyle={styles.subHeader}
              style={styles.dividerSpacing}
            />
            <Text>Section 3 content goes here.</Text>
          </Card>

          {/* Custom Styled Divider */}
          <Card>
            <Card.Title>Custom Styled Divider</Card.Title>
            <Card.Divider />
            <Text>Dashed style (using border):</Text>
            <View style={styles.dashedDivider} />
            <Text style={{ marginTop: 16 }}>Gradient-like effect:</Text>
            <View style={styles.gradientDivider}>
              <View
                style={[styles.gradientPart, { backgroundColor: "#2089dc" }]}
              />
              <View
                style={[styles.gradientPart, { backgroundColor: "#4caf50" }]}
              />
              <View
                style={[styles.gradientPart, { backgroundColor: "#ff9800" }]}
              />
              <View
                style={[styles.gradientPart, { backgroundColor: "#f44336" }]}
              />
            </View>
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
  dividerSpacing: {
    marginVertical: 12,
  },
  horizontalRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 50,
  },
  verticalDivider: {
    height: 30,
  },
  subHeader: {
    color: "#2089dc",
    fontWeight: "bold",
  },
  dashedDivider: {
    borderBottomWidth: 2,
    borderBottomColor: "#999",
    borderStyle: "dashed",
    marginVertical: 12,
  },
  gradientDivider: {
    flexDirection: "row",
    height: 4,
    marginVertical: 12,
  },
  gradientPart: {
    flex: 1,
    height: 4,
  },
});
