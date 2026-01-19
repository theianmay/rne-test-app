import { Card, Slider, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SliderScreen() {
  const [value1, setValue1] = React.useState(50);
  const [value2, setValue2] = React.useState(25);
  const [value3, setValue3] = React.useState(0.5);

  return (
    <>
      <Stack.Screen options={{ title: "Slider Component" }} />
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
            Slider
          </Text>
          <Text style={styles.description}>
            Sliders allow users to select a value from a continuous range.
          </Text>

          {/* Basic Slider */}
          <Card>
            <Card.Title>Basic Slider</Card.Title>
            <Card.Divider />
            <Slider
              value={value1}
              onValueChange={setValue1}
              maximumValue={100}
              minimumValue={0}
              step={1}
            />
            <Text style={styles.valueText}>Value: {Math.round(value1)}</Text>
          </Card>

          {/* Slider with Range */}
          <Card>
            <Card.Title>Custom Range (0-50)</Card.Title>
            <Card.Divider />
            <Slider
              value={value2}
              onValueChange={setValue2}
              maximumValue={50}
              minimumValue={0}
              step={5}
            />
            <Text style={styles.valueText}>
              Value: {Math.round(value2)} (step: 5)
            </Text>
          </Card>

          {/* Decimal Slider */}
          <Card>
            <Card.Title>Decimal Values</Card.Title>
            <Card.Divider />
            <Slider
              value={value3}
              onValueChange={setValue3}
              maximumValue={1}
              minimumValue={0}
              step={0.1}
            />
            <Text style={styles.valueText}>Value: {value3.toFixed(1)}</Text>
          </Card>

          {/* Colored Sliders */}
          <Card>
            <Card.Title>Custom Colors</Card.Title>
            <Card.Divider />
            <Text style={styles.colorLabel}>Primary</Text>
            <Slider
              value={70}
              maximumValue={100}
              minimumValue={0}
              minimumTrackTintColor="#2089dc"
              maximumTrackTintColor="#b3d4fc"
              thumbTintColor="#2089dc"
            />

            <Text style={[styles.colorLabel, { marginTop: 20 }]}>Success</Text>
            <Slider
              value={60}
              maximumValue={100}
              minimumValue={0}
              minimumTrackTintColor="#4caf50"
              maximumTrackTintColor="#c8e6c9"
              thumbTintColor="#4caf50"
            />

            <Text style={[styles.colorLabel, { marginTop: 20 }]}>Warning</Text>
            <Slider
              value={50}
              maximumValue={100}
              minimumValue={0}
              minimumTrackTintColor="#ff9800"
              maximumTrackTintColor="#ffe0b2"
              thumbTintColor="#ff9800"
            />

            <Text style={[styles.colorLabel, { marginTop: 20 }]}>Error</Text>
            <Slider
              value={40}
              maximumValue={100}
              minimumValue={0}
              minimumTrackTintColor="#f44336"
              maximumTrackTintColor="#ffcdd2"
              thumbTintColor="#f44336"
            />
          </Card>

          {/* Slider with Thumb Style */}
          <Card>
            <Card.Title>Custom Thumb</Card.Title>
            <Card.Divider />
            <Slider
              value={50}
              maximumValue={100}
              minimumValue={0}
              thumbStyle={styles.customThumb}
              trackStyle={styles.customTrack}
            />
          </Card>

          {/* Disabled Slider */}
          <Card>
            <Card.Title>Disabled Slider</Card.Title>
            <Card.Divider />
            <Slider value={30} maximumValue={100} minimumValue={0} disabled />
            <Text style={styles.note}>This slider is disabled</Text>
          </Card>

          {/* Volume Control Example */}
          <Card>
            <Card.Title>Volume Control Example</Card.Title>
            <Card.Divider />
            <View style={styles.volumeContainer}>
              <Text style={styles.volumeIcon}>🔈</Text>
              <Slider
                value={75}
                maximumValue={100}
                minimumValue={0}
                style={styles.volumeSlider}
                minimumTrackTintColor="#2089dc"
                thumbTintColor="#2089dc"
              />
              <Text style={styles.volumeIcon}>🔊</Text>
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
  valueText: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  colorLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  customThumb: {
    width: 30,
    height: 30,
    backgroundColor: "#9c27b0",
    borderRadius: 15,
  },
  customTrack: {
    height: 8,
    borderRadius: 4,
  },
  note: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
  volumeContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  volumeSlider: {
    flex: 1,
    marginHorizontal: 12,
  },
  volumeIcon: {
    fontSize: 20,
  },
});
