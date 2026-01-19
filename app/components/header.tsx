import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Card, Header, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { Alert, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HeaderScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Header Component" }} />
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
            Header
          </Text>
          <Text style={styles.description}>
            Headers are navigation components that display information and
            actions.
          </Text>

          {/* Basic Header */}
          <Card>
            <Card.Title>Basic Header</Card.Title>
            <Card.Divider />
            <View style={styles.headerContainer}>
              <Header
                centerComponent={{
                  text: "MY TITLE",
                  style: styles.headerTitle,
                }}
              />
            </View>
          </Card>

          {/* Header with Left/Right Components */}
          <Card>
            <Card.Title>With Navigation</Card.Title>
            <Card.Divider />
            <View style={styles.headerContainer}>
              <Header
                leftComponent={
                  <MaterialIcons
                    name="menu"
                    size={24}
                    color="white"
                    onPress={() => Alert.alert("Menu pressed")}
                  />
                }
                centerComponent={{ text: "HOME", style: styles.headerTitle }}
                rightComponent={
                  <MaterialIcons
                    name="search"
                    size={24}
                    color="white"
                    onPress={() => Alert.alert("Search pressed")}
                  />
                }
              />
            </View>
            <Text style={styles.note}>Tap icons to see interaction</Text>
          </Card>

          {/* Header with Multiple Right Icons */}
          <Card>
            <Card.Title>Multiple Actions</Card.Title>
            <Card.Divider />
            <View style={styles.headerContainer}>
              <Header
                leftComponent={
                  <MaterialIcons name="arrow-back" size={24} color="white" />
                }
                centerComponent={{ text: "DETAILS", style: styles.headerTitle }}
                rightComponent={
                  <View style={styles.rightIcons}>
                    <MaterialIcons
                      name="favorite-border"
                      size={24}
                      color="white"
                      style={styles.iconSpacing}
                    />
                    <MaterialIcons
                      name="share"
                      size={24}
                      color="white"
                      style={styles.iconSpacing}
                    />
                    <MaterialIcons name="more-vert" size={24} color="white" />
                  </View>
                }
              />
            </View>
          </Card>

          {/* Custom Colored Header */}
          <Card>
            <Card.Title>Custom Colors</Card.Title>
            <Card.Divider />
            <View style={styles.headerContainer}>
              <Header
                backgroundColor="#4caf50"
                leftComponent={
                  <MaterialIcons name="menu" size={24} color="white" />
                }
                centerComponent={{ text: "GREEN", style: styles.headerTitle }}
                rightComponent={
                  <MaterialIcons name="settings" size={24} color="white" />
                }
              />
            </View>
            <View style={[styles.headerContainer, { marginTop: 8 }]}>
              <Header
                backgroundColor="#9c27b0"
                leftComponent={
                  <MaterialIcons name="menu" size={24} color="white" />
                }
                centerComponent={{ text: "PURPLE", style: styles.headerTitle }}
                rightComponent={
                  <MaterialIcons name="settings" size={24} color="white" />
                }
              />
            </View>
            <View style={[styles.headerContainer, { marginTop: 8 }]}>
              <Header
                backgroundColor="#ff5722"
                leftComponent={
                  <MaterialIcons name="menu" size={24} color="white" />
                }
                centerComponent={{ text: "ORANGE", style: styles.headerTitle }}
                rightComponent={
                  <MaterialIcons name="settings" size={24} color="white" />
                }
              />
            </View>
          </Card>

          {/* Header with Subtitle */}
          <Card>
            <Card.Title>With Subtitle</Card.Title>
            <Card.Divider />
            <View style={styles.headerContainer}>
              <Header
                leftComponent={
                  <MaterialIcons name="arrow-back" size={24} color="white" />
                }
                centerComponent={
                  <View style={styles.centerContent}>
                    <Text style={styles.headerTitle}>PROFILE</Text>
                    <Text style={styles.headerSubtitle}>John Doe</Text>
                  </View>
                }
                rightComponent={
                  <MaterialIcons name="edit" size={24} color="white" />
                }
              />
            </View>
          </Card>

          {/* Flat Header */}
          <Card>
            <Card.Title>Flat Header (No Elevation)</Card.Title>
            <Card.Divider />
            <View style={styles.headerContainer}>
              <Header
                containerStyle={styles.flatHeader}
                leftComponent={
                  <MaterialIcons name="menu" size={24} color="white" />
                }
                centerComponent={{ text: "FLAT", style: styles.headerTitle }}
                rightComponent={
                  <MaterialIcons name="notifications" size={24} color="white" />
                }
              />
            </View>
          </Card>

          {/* Header with Custom Height */}
          <Card>
            <Card.Title>Custom Height</Card.Title>
            <Card.Divider />
            <View style={styles.headerContainer}>
              <Header
                containerStyle={styles.tallHeader}
                leftComponent={
                  <MaterialIcons name="arrow-back" size={24} color="white" />
                }
                centerComponent={
                  <View style={styles.tallCenterContent}>
                    <Text style={styles.largeTitle}>EXPANDED</Text>
                    <Text style={styles.headerSubtitle}>
                      With more room for content
                    </Text>
                  </View>
                }
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
  headerContainer: {
    marginHorizontal: -15,
    marginBottom: -10,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerSubtitle: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 12,
  },
  rightIcons: {
    flexDirection: "row",
  },
  iconSpacing: {
    marginRight: 12,
  },
  note: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
  centerContent: {
    alignItems: "center",
  },
  flatHeader: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  tallHeader: {
    height: 120,
    paddingTop: 20,
  },
  tallCenterContent: {
    alignItems: "center",
  },
  largeTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
