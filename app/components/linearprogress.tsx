import { Button, Card, LinearProgress, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LinearProgressScreen() {
  const [progress, setProgress] = React.useState(0.3);
  const [loading, setLoading] = React.useState(false);

  const simulateProgress = () => {
    setLoading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 1) {
          clearInterval(interval);
          setLoading(false);
          return 1;
        }
        return prev + 0.1;
      });
    }, 300);
  };

  return (
    <>
      <Stack.Screen options={{ title: "LinearProgress Component" }} />
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
            LinearProgress
          </Text>
          <Text style={styles.description}>
            Linear progress indicators display the length of a process.
          </Text>

          {/* Indeterminate Progress */}
          <Card>
            <Card.Title>Indeterminate</Card.Title>
            <Card.Divider />
            <LinearProgress variant="indeterminate" />
            <Text style={styles.note}>
              Continuous animation for unknown duration
            </Text>
          </Card>

          {/* Determinate Progress */}
          <Card>
            <Card.Title>Determinate</Card.Title>
            <Card.Divider />
            <LinearProgress variant="determinate" value={0.25} />
            <Text style={styles.valueText}>25%</Text>
            <LinearProgress
              variant="determinate"
              value={0.5}
              style={styles.progressSpacing}
            />
            <Text style={styles.valueText}>50%</Text>
            <LinearProgress
              variant="determinate"
              value={0.75}
              style={styles.progressSpacing}
            />
            <Text style={styles.valueText}>75%</Text>
            <LinearProgress
              variant="determinate"
              value={1}
              style={styles.progressSpacing}
            />
            <Text style={styles.valueText}>100%</Text>
          </Card>

          {/* Interactive Progress */}
          <Card>
            <Card.Title>Interactive Demo</Card.Title>
            <Card.Divider />
            <LinearProgress
              variant="determinate"
              value={progress}
              animation={{ duration: 300 }}
            />
            <Text style={styles.valueText}>{Math.round(progress * 100)}%</Text>
            <View style={styles.buttonRow}>
              <Button
                title="-10%"
                size="sm"
                onPress={() => setProgress(Math.max(0, progress - 0.1))}
                disabled={loading}
              />
              <Button
                title="Simulate"
                size="sm"
                onPress={simulateProgress}
                disabled={loading}
              />
              <Button
                title="+10%"
                size="sm"
                onPress={() => setProgress(Math.min(1, progress + 0.1))}
                disabled={loading}
              />
            </View>
          </Card>

          {/* Progress Colors */}
          <Card>
            <Card.Title>Colors</Card.Title>
            <Card.Divider />
            <Text style={styles.colorLabel}>Primary (default)</Text>
            <LinearProgress variant="determinate" value={0.6} />

            <Text style={[styles.colorLabel, { marginTop: 16 }]}>Success</Text>
            <LinearProgress variant="determinate" value={0.6} color="success" />

            <Text style={[styles.colorLabel, { marginTop: 16 }]}>Warning</Text>
            <LinearProgress variant="determinate" value={0.6} color="warning" />

            <Text style={[styles.colorLabel, { marginTop: 16 }]}>Error</Text>
            <LinearProgress variant="determinate" value={0.6} color="error" />
          </Card>

          {/* Custom Colors */}
          <Card>
            <Card.Title>Custom Colors</Card.Title>
            <Card.Divider />
            <LinearProgress
              variant="determinate"
              value={0.7}
              color="#9c27b0"
              trackColor="#e1bee7"
            />
            <Text style={styles.note}>
              Purple progress with light purple track
            </Text>

            <LinearProgress
              variant="determinate"
              value={0.5}
              color="#ff5722"
              trackColor="#ffccbc"
              style={styles.progressSpacing}
            />
            <Text style={styles.note}>
              Orange progress with light orange track
            </Text>
          </Card>

          {/* Progress with Animation */}
          <Card>
            <Card.Title>Animation Options</Card.Title>
            <Card.Divider />
            <Text style={styles.colorLabel}>Fast animation (100ms)</Text>
            <LinearProgress
              variant="indeterminate"
              animation={{ duration: 1000 }}
            />

            <Text style={[styles.colorLabel, { marginTop: 16 }]}>
              Slow animation (3000ms)
            </Text>
            <LinearProgress
              variant="indeterminate"
              animation={{ duration: 3000 }}
            />
          </Card>

          {/* Styled Progress */}
          <Card>
            <Card.Title>Custom Styling</Card.Title>
            <Card.Divider />
            <Text style={styles.colorLabel}>Thick bar</Text>
            <LinearProgress
              variant="determinate"
              value={0.6}
              style={styles.thickProgress}
            />

            <Text style={[styles.colorLabel, { marginTop: 16 }]}>
              Rounded ends
            </Text>
            <LinearProgress
              variant="determinate"
              value={0.6}
              style={styles.roundedProgress}
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
  note: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
  valueText: {
    textAlign: "center",
    marginTop: 8,
    fontSize: 14,
    color: "#666",
  },
  progressSpacing: {
    marginTop: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginTop: 16,
  },
  colorLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  thickProgress: {
    height: 12,
    borderRadius: 6,
  },
  roundedProgress: {
    height: 8,
    borderRadius: 4,
  },
});
