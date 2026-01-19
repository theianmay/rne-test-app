import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Card, Divider, Text } from "@rneui/themed";
import { Link } from "expo-router";
import React from "react";
import {
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Component list with routes
const components = [
  {
    name: "AirbnbRating",
    route: "/components/airbnbrating",
    icon: "star-rate",
  },
  { name: "Avatar", route: "/components/avatar", icon: "account-circle" },
  { name: "Badge", route: "/components/badge", icon: "notifications" },
  { name: "Button", route: "/components/button", icon: "touch-app" },
  { name: "Card", route: "/components/card", icon: "credit-card" },
  { name: "Chip", route: "/components/chip", icon: "label" },
  { name: "Divider", route: "/components/divider", icon: "remove" },
  { name: "Input", route: "/components/input", icon: "edit" },
  { name: "Rating", route: "/components/rating", icon: "star" },
  { name: "Text", route: "/components/text", icon: "text-fields" },
  { name: "Icon", route: "/components/icon", icon: "emoji-emotions" },
];

export default function HomeScreen() {
  return (
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
        {/* Header */}
        <View style={styles.header}>
          <Text h1 style={styles.title}>
            React Native Elements
          </Text>
          <Text style={styles.subtitle}>Component Testing App</Text>
        </View>

        {/* Version Info Card */}
        <Card containerStyle={styles.versionCard}>
          <Card.Title>Package Versions</Card.Title>
          <Card.Divider />
          <View style={styles.versionRow}>
            <MaterialIcons name="info" size={20} color="#2089dc" />
            <Text style={styles.versionText}>@rneui/base: </Text>
            <Text style={styles.versionNumber}>5.0.0</Text>
          </View>
          <View style={styles.versionRow}>
            <MaterialIcons name="info" size={20} color="#2089dc" />
            <Text style={styles.versionText}>@rneui/themed: </Text>
            <Text style={styles.versionNumber}>5.0.0</Text>
          </View>
        </Card>

        {/* Components List */}
        <Card containerStyle={styles.componentsCard}>
          <Card.Title>Available Components</Card.Title>
          <Card.Divider />
          <View style={styles.componentsList}>
            {components.map((component, index) => (
              <React.Fragment key={component.name}>
                <Link href={component.route as any} asChild>
                  <Pressable style={styles.componentItem}>
                    <View style={styles.componentLeft}>
                      <MaterialIcons
                        name={component.icon as any}
                        size={24}
                        color="#2089dc"
                      />
                      <Text style={styles.componentName}>{component.name}</Text>
                    </View>
                    <MaterialIcons
                      name="chevron-right"
                      size={24}
                      color="#999"
                    />
                  </Pressable>
                </Link>
                {index < components.length - 1 && (
                  <Divider style={styles.divider} />
                )}
              </React.Fragment>
            ))}
          </View>
        </Card>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    fontSize: 16,
  },
  versionCard: {
    borderRadius: 8,
    marginBottom: 16,
  },
  versionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  versionText: {
    fontSize: 16,
    marginLeft: 8,
    color: "#333",
  },
  versionNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2089dc",
  },
  componentsCard: {
    borderRadius: 8,
    marginBottom: 16,
  },
  componentsList: {
    paddingVertical: 4,
  },
  componentItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  componentLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  componentName: {
    fontSize: 16,
    marginLeft: 12,
    color: "#333",
  },
  divider: {
    marginVertical: 0,
  },
});
