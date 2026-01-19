import { Card, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TextScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Text Component" }} />
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
            Text
          </Text>
          <Text style={styles.description}>
            Text component with built-in heading styles and theming support.
          </Text>

          {/* Heading Styles */}
          <Card>
            <Card.Title>Heading Styles</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <Text h1>Heading 1</Text>
              <Text h2>Heading 2</Text>
              <Text h3>Heading 3</Text>
              <Text h4>Heading 4</Text>
            </View>
          </Card>

          {/* Custom Heading Styles */}
          <Card>
            <Card.Title>Custom Heading Styles</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <Text h1 h1Style={{ color: "#2089dc" }}>
                Custom H1
              </Text>
              <Text h2 h2Style={{ color: "#4caf50" }}>
                Custom H2
              </Text>
              <Text h3 h3Style={{ color: "#ff9800" }}>
                Custom H3
              </Text>
              <Text h4 h4Style={{ color: "#f44336" }}>
                Custom H4
              </Text>
            </View>
          </Card>

          {/* Body Text */}
          <Card>
            <Card.Title>Body Text</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <Text>
                This is regular body text. The Text component from React Native
                Elements provides enhanced styling capabilities over the
                standard React Native Text.
              </Text>
              <Text style={{ marginTop: 12 }}>
                It supports all standard Text props plus additional features
                like heading styles (h1-h4) and theme integration.
              </Text>
            </View>
          </Card>

          {/* Text Colors */}
          <Card>
            <Card.Title>Text Colors</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <Text style={{ color: "#2089dc" }}>Primary color text</Text>
              <Text style={{ color: "#4caf50" }}>Success color text</Text>
              <Text style={{ color: "#ff9800" }}>Warning color text</Text>
              <Text style={{ color: "#f44336" }}>Error color text</Text>
              <Text style={{ color: "#9c27b0" }}>Purple color text</Text>
            </View>
          </Card>

          {/* Font Weights */}
          <Card>
            <Card.Title>Font Weights</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <Text style={{ fontWeight: "100" }}>Thin (100)</Text>
              <Text style={{ fontWeight: "300" }}>Light (300)</Text>
              <Text style={{ fontWeight: "400" }}>Regular (400)</Text>
              <Text style={{ fontWeight: "500" }}>Medium (500)</Text>
              <Text style={{ fontWeight: "700" }}>Bold (700)</Text>
              <Text style={{ fontWeight: "900" }}>Black (900)</Text>
            </View>
          </Card>

          {/* Font Sizes */}
          <Card>
            <Card.Title>Font Sizes</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <Text style={{ fontSize: 12 }}>12px - Small text</Text>
              <Text style={{ fontSize: 14 }}>14px - Caption text</Text>
              <Text style={{ fontSize: 16 }}>16px - Body text (default)</Text>
              <Text style={{ fontSize: 18 }}>18px - Large body text</Text>
              <Text style={{ fontSize: 24 }}>24px - Subtitle text</Text>
              <Text style={{ fontSize: 32 }}>32px - Title text</Text>
            </View>
          </Card>

          {/* Text Styling */}
          <Card>
            <Card.Title>Text Styling</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <Text style={{ fontStyle: "italic" }}>Italic text</Text>
              <Text style={{ textDecorationLine: "underline" }}>
                Underlined text
              </Text>
              <Text style={{ textDecorationLine: "line-through" }}>
                Strikethrough text
              </Text>
              <Text style={{ letterSpacing: 4 }}>Spaced letters</Text>
              <Text style={{ textTransform: "uppercase" }}>uppercase text</Text>
              <Text style={{ textTransform: "capitalize" }}>
                capitalized text
              </Text>
            </View>
          </Card>

          {/* Text Alignment */}
          <Card>
            <Card.Title>Text Alignment</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <Text style={{ textAlign: "left" }}>Left aligned text</Text>
              <Text style={{ textAlign: "center" }}>Center aligned text</Text>
              <Text style={{ textAlign: "right" }}>Right aligned text</Text>
              <Text style={{ textAlign: "justify", marginTop: 8 }}>
                Justified text spans the full width of its container. This
                paragraph demonstrates how justified text distributes space
                evenly between words.
              </Text>
            </View>
          </Card>

          {/* Nested Text */}
          <Card>
            <Card.Title>Nested Text</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <Text>
                This is regular text with{" "}
                <Text style={{ fontWeight: "bold" }}>bold text</Text>,{" "}
                <Text style={{ fontStyle: "italic" }}>italic text</Text>, and{" "}
                <Text style={{ color: "#2089dc" }}>colored text</Text> nested
                inside.
              </Text>
              <Text style={{ marginTop: 12 }}>
                You can also combine styles:{" "}
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#4caf50",
                    textDecorationLine: "underline",
                  }}
                >
                  bold, green, and underlined
                </Text>
                .
              </Text>
            </View>
          </Card>

          {/* Number of Lines */}
          <Card>
            <Card.Title>Truncation (numberOfLines)</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <Text numberOfLines={1} style={{ marginBottom: 8 }}>
                This is a very long text that will be truncated to a single line
                using the numberOfLines prop. Any overflow will show an
                ellipsis.
              </Text>
              <Text numberOfLines={2}>
                This text is truncated to two lines. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam.
              </Text>
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
  section: {
    gap: 8,
  },
});
