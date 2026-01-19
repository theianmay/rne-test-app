import { Card, SocialIcon, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { Alert, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SocialIconScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "SocialIcon Component" }} />
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
            SocialIcon
          </Text>
          <Text style={styles.description}>
            Social icons for popular platforms with built-in brand colors.
          </Text>

          {/* Basic Social Icons */}
          <Card>
            <Card.Title>Social Media Icons</Card.Title>
            <Card.Divider />
            <View style={styles.iconRow}>
              <SocialIcon type="facebook" />
              <SocialIcon type="twitter" />
              <SocialIcon type="instagram" />
              <SocialIcon type="linkedin" />
            </View>
            <View style={styles.iconRow}>
              <SocialIcon type="youtube" />
              <SocialIcon type="pinterest" />
              <SocialIcon type="github" />
              <SocialIcon type="twitch" />
            </View>
          </Card>

          {/* Social Icons with Labels */}
          <Card>
            <Card.Title>With Titles (Buttons)</Card.Title>
            <Card.Divider />
            <SocialIcon
              title="Sign In With Facebook"
              button
              type="facebook"
              onPress={() => Alert.alert("Facebook", "Sign in pressed")}
            />
            <SocialIcon
              title="Sign In With Twitter"
              button
              type="twitter"
              onPress={() => Alert.alert("Twitter", "Sign in pressed")}
            />
            <SocialIcon
              title="Sign In With Google"
              button
              type="google"
              onPress={() => Alert.alert("Google", "Sign in pressed")}
            />
          </Card>

          {/* Light Style */}
          <Card>
            <Card.Title>Light Style</Card.Title>
            <Card.Divider />
            <View style={styles.iconRow}>
              <SocialIcon type="facebook" light />
              <SocialIcon type="twitter" light />
              <SocialIcon type="instagram" light />
              <SocialIcon type="linkedin" light />
            </View>
          </Card>

          {/* Raised Icons */}
          <Card>
            <Card.Title>Raised Icons</Card.Title>
            <Card.Divider />
            <View style={styles.iconRow}>
              <SocialIcon type="facebook" raised={false} />
              <SocialIcon type="twitter" raised={false} />
              <SocialIcon type="instagram" raised={false} />
              <SocialIcon type="linkedin" raised={false} />
            </View>
            <Text style={styles.note}>Without raised effect</Text>
          </Card>

          {/* Small Icons */}
          <Card>
            <Card.Title>Icon Sizes</Card.Title>
            <Card.Divider />
            <View style={styles.iconRow}>
              <View style={styles.sizeItem}>
                <SocialIcon
                  type="facebook"
                  iconSize={16}
                  style={styles.smallIcon}
                />
                <Text style={styles.sizeLabel}>Small</Text>
              </View>
              <View style={styles.sizeItem}>
                <SocialIcon type="facebook" iconSize={24} />
                <Text style={styles.sizeLabel}>Default</Text>
              </View>
              <View style={styles.sizeItem}>
                <SocialIcon
                  type="facebook"
                  iconSize={36}
                  style={styles.largeIcon}
                />
                <Text style={styles.sizeLabel}>Large</Text>
              </View>
            </View>
          </Card>

          {/* More Platforms */}
          <Card>
            <Card.Title>More Platforms</Card.Title>
            <Card.Divider />
            <View style={styles.iconRow}>
              <SocialIcon type="reddit" />
              <SocialIcon type="stack-overflow" />
              <SocialIcon type="medium" />
              <SocialIcon type="gitlab" />
            </View>
            <View style={styles.iconRow}>
              <SocialIcon type="vimeo" />
              <SocialIcon type="tumblr" />
              <SocialIcon type="soundcloud" />
              <SocialIcon type="quora" />
            </View>
          </Card>

          {/* Loading State */}
          <Card>
            <Card.Title>Loading State</Card.Title>
            <Card.Divider />
            <SocialIcon title="Signing In..." button type="facebook" loading />
          </Card>

          {/* Disabled State */}
          <Card>
            <Card.Title>Disabled State</Card.Title>
            <Card.Divider />
            <SocialIcon
              title="Sign In Disabled"
              button
              type="twitter"
              disabled
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
  iconRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
    marginVertical: 8,
  },
  note: {
    textAlign: "center",
    marginTop: 8,
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
  sizeItem: {
    alignItems: "center",
  },
  sizeLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  smallIcon: {
    width: 40,
    height: 40,
  },
  largeIcon: {
    width: 70,
    height: 70,
  },
});
