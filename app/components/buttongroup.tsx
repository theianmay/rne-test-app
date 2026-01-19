import { ButtonGroup, Card, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ButtonGroupScreen() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedIndex2, setSelectedIndex2] = React.useState(1);
  const [selectedIndexes, setSelectedIndexes] = React.useState<number[]>([
    0, 2,
  ]);
  const [selectedIndex3, setSelectedIndex3] = React.useState(0);

  return (
    <>
      <Stack.Screen options={{ title: "ButtonGroup Component" }} />
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
            ButtonGroup
          </Text>
          <Text style={styles.description}>
            A group of buttons that allows single or multiple selection.
          </Text>

          {/* Basic ButtonGroup */}
          <Card>
            <Card.Title>Basic ButtonGroup</Card.Title>
            <Card.Divider />
            <ButtonGroup
              buttons={["Option 1", "Option 2", "Option 3"]}
              selectedIndex={selectedIndex}
              onPress={setSelectedIndex}
            />
            <Text style={styles.valueText}>
              Selected: Option {selectedIndex + 1}
            </Text>
          </Card>

          {/* ButtonGroup with Different Selection */}
          <Card>
            <Card.Title>Different Options</Card.Title>
            <Card.Divider />
            <ButtonGroup
              buttons={["Day", "Week", "Month", "Year"]}
              selectedIndex={selectedIndex2}
              onPress={setSelectedIndex2}
            />
            <Text style={styles.valueText}>
              Selected: {["Day", "Week", "Month", "Year"][selectedIndex2]}
            </Text>
          </Card>

          {/* Multi-Select ButtonGroup */}
          <Card>
            <Card.Title>Multi-Select</Card.Title>
            <Card.Divider />
            <ButtonGroup
              buttons={["S", "M", "T", "W", "T", "F", "S"]}
              selectedIndexes={selectedIndexes}
              onPress={(index) => {
                if (selectedIndexes.includes(index)) {
                  setSelectedIndexes(
                    selectedIndexes.filter((i) => i !== index),
                  );
                } else {
                  setSelectedIndexes([...selectedIndexes, index]);
                }
              }}
              selectMultiple
            />
            <Text style={styles.valueText}>
              Selected days:{" "}
              {selectedIndexes
                .map(
                  (i) => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][i],
                )
                .join(", ") || "None"}
            </Text>
          </Card>

          {/* Vertical ButtonGroup */}
          <Card>
            <Card.Title>Vertical ButtonGroup</Card.Title>
            <Card.Divider />
            <ButtonGroup
              buttons={["First", "Second", "Third"]}
              selectedIndex={selectedIndex3}
              onPress={setSelectedIndex3}
              vertical
            />
          </Card>

          {/* Disabled ButtonGroup */}
          <Card>
            <Card.Title>Disabled ButtonGroup</Card.Title>
            <Card.Divider />
            <ButtonGroup
              buttons={["One", "Two", "Three"]}
              selectedIndex={1}
              disabled
            />
            <Text style={styles.note}>This button group is disabled</Text>
          </Card>

          {/* Styled ButtonGroup */}
          <Card>
            <Card.Title>Custom Styled</Card.Title>
            <Card.Divider />
            <ButtonGroup
              buttons={["Red", "Green", "Blue"]}
              selectedIndex={0}
              onPress={() => {}}
              containerStyle={styles.customContainer}
              buttonStyle={styles.customButton}
              selectedButtonStyle={styles.customSelectedButton}
              textStyle={styles.customText}
              selectedTextStyle={styles.customSelectedText}
            />
          </Card>

          {/* Outline ButtonGroup */}
          <Card>
            <Card.Title>Outline Style</Card.Title>
            <Card.Divider />
            <ButtonGroup
              buttons={["Small", "Medium", "Large"]}
              selectedIndex={1}
              onPress={() => {}}
              containerStyle={styles.outlineContainer}
              buttonContainerStyle={styles.outlineButtonContainer}
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
  valueText: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 14,
    color: "#666",
  },
  note: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
  customContainer: {
    borderRadius: 20,
    borderWidth: 0,
  },
  customButton: {
    backgroundColor: "#e0e0e0",
  },
  customSelectedButton: {
    backgroundColor: "#9c27b0",
  },
  customText: {
    color: "#666",
  },
  customSelectedText: {
    color: "white",
    fontWeight: "bold",
  },
  outlineContainer: {
    borderColor: "#2089dc",
    borderWidth: 2,
    borderRadius: 8,
  },
  outlineButtonContainer: {
    borderColor: "#2089dc",
  },
});
