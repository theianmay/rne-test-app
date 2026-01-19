import { Card, Switch, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SwitchScreen() {
  const [switch1, setSwitch1] = React.useState(false);
  const [switch2, setSwitch2] = React.useState(true);
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const [autoUpdate, setAutoUpdate] = React.useState(true);

  return (
    <>
      <Stack.Screen options={{ title: "Switch Component" }} />
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
            Switch
          </Text>
          <Text style={styles.description}>
            Switches toggle the state of a single setting on or off.
          </Text>

          {/* Basic Switch */}
          <Card>
            <Card.Title>Basic Switch</Card.Title>
            <Card.Divider />
            <View style={styles.switchRow}>
              <Text>Off by default</Text>
              <Switch value={switch1} onValueChange={setSwitch1} />
            </View>
            <View style={styles.switchRow}>
              <Text>On by default</Text>
              <Switch value={switch2} onValueChange={setSwitch2} />
            </View>
          </Card>

          {/* Colored Switches */}
          <Card>
            <Card.Title>Custom Colors</Card.Title>
            <Card.Divider />
            <View style={styles.switchRow}>
              <Text>Primary (default)</Text>
              <Switch value={true} />
            </View>
            <View style={styles.switchRow}>
              <Text>Success</Text>
              <Switch value={true} color="#4caf50" />
            </View>
            <View style={styles.switchRow}>
              <Text>Warning</Text>
              <Switch value={true} color="#ff9800" />
            </View>
            <View style={styles.switchRow}>
              <Text>Error</Text>
              <Switch value={true} color="#f44336" />
            </View>
            <View style={styles.switchRow}>
              <Text>Purple</Text>
              <Switch value={true} color="#9c27b0" />
            </View>
          </Card>

          {/* Disabled Switch */}
          <Card>
            <Card.Title>Disabled State</Card.Title>
            <Card.Divider />
            <View style={styles.switchRow}>
              <Text style={styles.disabledText}>Disabled Off</Text>
              <Switch value={false} disabled />
            </View>
            <View style={styles.switchRow}>
              <Text style={styles.disabledText}>Disabled On</Text>
              <Switch value={true} disabled />
            </View>
          </Card>

          {/* Settings Example */}
          <Card>
            <Card.Title>Settings Example</Card.Title>
            <Card.Divider />
            <View style={styles.settingRow}>
              <View style={styles.settingInfo}>
                <Text style={styles.settingTitle}>Push Notifications</Text>
                <Text style={styles.settingSubtitle}>
                  Receive alerts and updates
                </Text>
              </View>
              <Switch value={notifications} onValueChange={setNotifications} />
            </View>
            <View style={styles.divider} />
            <View style={styles.settingRow}>
              <View style={styles.settingInfo}>
                <Text style={styles.settingTitle}>Dark Mode</Text>
                <Text style={styles.settingSubtitle}>Use dark color theme</Text>
              </View>
              <Switch value={darkMode} onValueChange={setDarkMode} />
            </View>
            <View style={styles.divider} />
            <View style={styles.settingRow}>
              <View style={styles.settingInfo}>
                <Text style={styles.settingTitle}>Auto Update</Text>
                <Text style={styles.settingSubtitle}>
                  Update apps automatically
                </Text>
              </View>
              <Switch value={autoUpdate} onValueChange={setAutoUpdate} />
            </View>
          </Card>

          {/* Status Display */}
          <Card>
            <Card.Title>Current States</Card.Title>
            <Card.Divider />
            <Text style={styles.statusText}>
              Notifications: {notifications ? "✅ Enabled" : "❌ Disabled"}
            </Text>
            <Text style={styles.statusText}>
              Dark Mode: {darkMode ? "🌙 On" : "☀️ Off"}
            </Text>
            <Text style={styles.statusText}>
              Auto Update: {autoUpdate ? "✅ Enabled" : "❌ Disabled"}
            </Text>
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
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  disabledText: {
    color: "#999",
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  settingSubtitle: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
  },
  statusText: {
    fontSize: 15,
    paddingVertical: 6,
    color: "#333",
  },
});
