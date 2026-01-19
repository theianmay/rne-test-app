import { Button, Card, Text, Tooltip } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TooltipScreen() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  return (
    <>
      <Stack.Screen options={{ title: "Tooltip Component" }} />
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
            Tooltip
          </Text>
          <Text style={styles.description}>
            Tooltips display informative text when users hover or tap an
            element.
          </Text>

          {/* Basic Tooltip */}
          <Card>
            <Card.Title>Basic Tooltip</Card.Title>
            <Card.Divider />
            <View style={styles.centered}>
              <Tooltip
                visible={open1}
                onOpen={() => setOpen1(true)}
                onClose={() => setOpen1(false)}
                popover={
                  <Text style={styles.tooltipText}>This is a tooltip!</Text>
                }
              >
                <Button title="Tap for Tooltip" size="sm" />
              </Tooltip>
            </View>
          </Card>

          {/* Tooltip Placements */}
          <Card>
            <Card.Title>Tooltip on Text</Card.Title>
            <Card.Divider />
            <View style={styles.centered}>
              <Tooltip
                visible={open2}
                onOpen={() => setOpen2(true)}
                onClose={() => setOpen2(false)}
                popover={
                  <Text style={styles.tooltipText}>Info about this term</Text>
                }
              >
                <Text style={styles.highlightedText}>Hover over me</Text>
              </Tooltip>
            </View>
            <Text style={styles.note}>Tap the highlighted text</Text>
          </Card>

          {/* Styled Tooltip */}
          <Card>
            <Card.Title>Custom Styled</Card.Title>
            <Card.Divider />
            <View style={styles.centered}>
              <Tooltip
                visible={open3}
                onOpen={() => setOpen3(true)}
                onClose={() => setOpen3(false)}
                popover={
                  <View>
                    <Text style={styles.customTooltipTitle}>
                      Custom Tooltip
                    </Text>
                    <Text style={styles.customTooltipText}>
                      This tooltip has custom styling with multiple lines of
                      content.
                    </Text>
                  </View>
                }
                containerStyle={styles.customTooltipContainer}
                backgroundColor="#9c27b0"
                width={250}
                height={80}
              >
                <Button
                  title="Styled Tooltip"
                  buttonStyle={styles.purpleButton}
                  size="sm"
                />
              </Tooltip>
            </View>
          </Card>

          {/* Tooltip with Icon */}
          <Card>
            <Card.Title>Info Icon Pattern</Card.Title>
            <Card.Divider />
            <View style={styles.infoRow}>
              <Text style={styles.labelText}>Account Balance</Text>
              <Tooltip
                popover={
                  <Text style={styles.tooltipText}>
                    Your current available balance
                  </Text>
                }
                width={200}
              >
                <Text style={styles.infoIcon}>ℹ️</Text>
              </Tooltip>
            </View>
            <Text style={styles.balanceText}>$1,234.56</Text>
          </Card>

          {/* Multiple Tooltips */}
          <Card>
            <Card.Title>Multiple Tooltips</Card.Title>
            <Card.Divider />
            <View style={styles.buttonRow}>
              <Tooltip
                popover={<Text style={styles.tooltipText}>Edit item</Text>}
              >
                <Button title="Edit" size="sm" type="outline" />
              </Tooltip>
              <Tooltip
                popover={<Text style={styles.tooltipText}>Delete item</Text>}
              >
                <Button
                  title="Delete"
                  size="sm"
                  buttonStyle={styles.deleteButton}
                />
              </Tooltip>
              <Tooltip
                popover={<Text style={styles.tooltipText}>Share item</Text>}
              >
                <Button title="Share" size="sm" type="outline" />
              </Tooltip>
            </View>
          </Card>

          <View style={{ height: 100 }} />
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
  centered: {
    alignItems: "center",
    paddingVertical: 20,
  },
  tooltipText: {
    color: "white",
    fontSize: 14,
  },
  highlightedText: {
    color: "#2089dc",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  note: {
    textAlign: "center",
    marginTop: 8,
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
  customTooltipContainer: {
    borderRadius: 8,
  },
  customTooltipTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  customTooltipText: {
    color: "white",
    fontSize: 13,
  },
  purpleButton: {
    backgroundColor: "#9c27b0",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  labelText: {
    fontSize: 16,
    color: "#666",
  },
  infoIcon: {
    fontSize: 18,
  },
  balanceText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginTop: 8,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    paddingVertical: 16,
  },
  deleteButton: {
    backgroundColor: "#f44336",
  },
});
