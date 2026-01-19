import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Card, Chip, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { Alert, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChipScreen() {
  const [selectedChips, setSelectedChips] = React.useState<string[]>([
    "React Native",
  ]);

  const toggleChip = (chip: string) => {
    setSelectedChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip],
    );
  };

  return (
    <>
      <Stack.Screen options={{ title: "Chip Component" }} />
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
            Chip
          </Text>
          <Text style={styles.description}>
            Chips are compact elements that represent an input, attribute, or
            action.
          </Text>

          {/* Basic Chips */}
          <Card>
            <Card.Title>Basic Chips</Card.Title>
            <Card.Divider />
            <View style={styles.chipRow}>
              <Chip title="Default" />
              <Chip title="Solid" type="solid" />
              <Chip title="Outline" type="outline" />
            </View>
          </Card>

          {/* Chips with Icons */}
          <Card>
            <Card.Title>Chips with Icons</Card.Title>
            <Card.Divider />
            <View style={styles.chipRow}>
              <Chip
                title="Home"
                icon={<MaterialIcons name="home" size={20} color="white" />}
              />
              <Chip
                title="Settings"
                type="outline"
                icon={
                  <MaterialIcons name="settings" size={20} color="#2089dc" />
                }
              />
              <Chip
                title="User"
                icon={<MaterialIcons name="person" size={20} color="white" />}
                iconRight
              />
            </View>
          </Card>

          {/* Pressable Chips */}
          <Card>
            <Card.Title>Pressable Chips</Card.Title>
            <Card.Divider />
            <View style={styles.chipRow}>
              <Chip
                title="Tap Me"
                onPress={() =>
                  Alert.alert("Chip Pressed", "You tapped the chip!")
                }
              />
              <Chip
                title="Action"
                type="outline"
                onPress={() => Alert.alert("Action", "Action chip pressed")}
                icon={
                  <MaterialIcons name="touch-app" size={20} color="#2089dc" />
                }
              />
            </View>
            <Text style={styles.note}>Tap chips to see interaction</Text>
          </Card>

          {/* Selectable Chips */}
          <Card>
            <Card.Title>Selectable Chips (Multi-select)</Card.Title>
            <Card.Divider />
            <View style={styles.chipRow}>
              {["React Native", "TypeScript", "Expo", "Node.js"].map((tech) => (
                <Chip
                  key={tech}
                  title={tech}
                  type={selectedChips.includes(tech) ? "solid" : "outline"}
                  onPress={() => toggleChip(tech)}
                  icon={
                    selectedChips.includes(tech) ? (
                      <MaterialIcons name="check" size={20} color="white" />
                    ) : undefined
                  }
                />
              ))}
            </View>
            <Text style={styles.note}>
              Selected: {selectedChips.join(", ") || "None"}
            </Text>
          </Card>

          {/* Chip Colors */}
          <Card>
            <Card.Title>Chip Colors</Card.Title>
            <Card.Divider />
            <View style={styles.chipRow}>
              <Chip title="Primary" color="primary" />
              <Chip title="Secondary" color="secondary" />
              <Chip title="Success" color="success" />
              <Chip title="Warning" color="warning" />
              <Chip title="Error" color="error" />
            </View>
          </Card>

          {/* Chip Sizes */}
          <Card>
            <Card.Title>Chip Sizes</Card.Title>
            <Card.Divider />
            <View style={styles.chipRow}>
              <Chip title="Small" size="sm" />
              <Chip title="Medium" size="md" />
              <Chip title="Large" size="lg" />
            </View>
          </Card>

          {/* Disabled Chips */}
          <Card>
            <Card.Title>Disabled Chips</Card.Title>
            <Card.Divider />
            <View style={styles.chipRow}>
              <Chip title="Disabled Solid" disabled />
              <Chip title="Disabled Outline" type="outline" disabled />
            </View>
          </Card>

          {/* Custom Styled Chips */}
          <Card>
            <Card.Title>Custom Styled Chips</Card.Title>
            <Card.Divider />
            <View style={styles.chipRow}>
              <Chip
                title="Custom"
                buttonStyle={{ backgroundColor: "#9c27b0" }}
                titleStyle={{ color: "white" }}
              />
              <Chip
                title="Rounded"
                buttonStyle={{ backgroundColor: "#ff5722", borderRadius: 20 }}
              />
              <Chip
                title="Bordered"
                type="outline"
                buttonStyle={{ borderColor: "#4caf50", borderWidth: 2 }}
                titleStyle={{ color: "#4caf50" }}
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
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  note: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
});
