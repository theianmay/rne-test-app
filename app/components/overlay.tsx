import { Button, Card, Overlay, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OverlayScreen() {
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);

  return (
    <>
      <Stack.Screen options={{ title: "Overlay Component" }} />
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
            Overlay
          </Text>
          <Text style={styles.description}>
            Overlays are fullscreen modal components that appear over the
            content.
          </Text>

          {/* Basic Overlay */}
          <Card>
            <Card.Title>Basic Overlay</Card.Title>
            <Card.Divider />
            <Button
              title="Show Basic Overlay"
              onPress={() => setVisible1(true)}
            />
          </Card>

          {/* Overlay without Backdrop Press */}
          <Card>
            <Card.Title>Modal Overlay</Card.Title>
            <Card.Divider />
            <Button
              title="Show Modal Overlay"
              onPress={() => setVisible2(true)}
            />
            <Text style={styles.note}>Must press button to close</Text>
          </Card>

          {/* Styled Overlay */}
          <Card>
            <Card.Title>Styled Overlay</Card.Title>
            <Card.Divider />
            <Button
              title="Show Styled Overlay"
              onPress={() => setVisible3(true)}
            />
          </Card>

          <View style={{ height: 40 }} />
        </ScrollView>

        {/* Basic Overlay */}
        <Overlay
          isVisible={visible1}
          onBackdropPress={() => setVisible1(false)}
        >
          <View style={styles.overlayContent}>
            <Text h4>Basic Overlay</Text>
            <Text style={styles.overlayText}>
              This is a basic overlay. Tap outside to close it.
            </Text>
            <Button title="Close" onPress={() => setVisible1(false)} />
          </View>
        </Overlay>

        {/* Modal Overlay */}
        <Overlay isVisible={visible2}>
          <View style={styles.overlayContent}>
            <Text h4>Modal Overlay</Text>
            <Text style={styles.overlayText}>
              This overlay cannot be dismissed by tapping outside. You must use
              the button below.
            </Text>
            <Button title="Close Overlay" onPress={() => setVisible2(false)} />
          </View>
        </Overlay>

        {/* Styled Overlay */}
        <Overlay
          isVisible={visible3}
          onBackdropPress={() => setVisible3(false)}
          overlayStyle={styles.styledOverlay}
          backdropStyle={styles.backdrop}
        >
          <View style={styles.styledContent}>
            <Text h4 style={styles.styledTitle}>
              Styled Overlay
            </Text>
            <Text style={styles.styledText}>
              This overlay has custom styling including rounded corners, a
              colored background, and a semi-transparent backdrop.
            </Text>
            <Button
              title="Got it!"
              onPress={() => setVisible3(false)}
              buttonStyle={styles.styledButton}
            />
          </View>
        </Overlay>
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
  note: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
  overlayContent: {
    padding: 20,
    alignItems: "center",
    minWidth: 280,
  },
  overlayText: {
    textAlign: "center",
    marginVertical: 16,
    color: "#666",
    lineHeight: 22,
  },
  styledOverlay: {
    borderRadius: 16,
    backgroundColor: "#e3f2fd",
    padding: 0,
    overflow: "hidden",
  },
  backdrop: {
    backgroundColor: "rgba(33, 137, 220, 0.3)",
  },
  styledContent: {
    padding: 24,
    alignItems: "center",
    minWidth: 300,
  },
  styledTitle: {
    color: "#1565c0",
  },
  styledText: {
    textAlign: "center",
    marginVertical: 16,
    color: "#1976d2",
    lineHeight: 22,
  },
  styledButton: {
    backgroundColor: "#1976d2",
    borderRadius: 20,
    paddingHorizontal: 30,
  },
});
