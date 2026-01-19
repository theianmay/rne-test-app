import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Avatar, Badge, Card, Text, withBadge } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BadgedIcon = withBadge(15)(MaterialIcons) as any;

export default function BadgeScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Badge Component" }} />
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
            Badge
          </Text>
          <Text style={styles.description}>
            Badges are used to highlight an item's status for quick recognition.
          </Text>

          {/* Badge Status Colors */}
          <Card>
            <Card.Title>Badge Status</Card.Title>
            <Card.Divider />
            <View style={[styles.section, styles.row]}>
              <View style={styles.badgeItem}>
                <Badge value="99+" status="error" />
                <Text style={styles.label}>Error</Text>
              </View>
              <View style={styles.badgeItem}>
                <Badge value="New" status="success" />
                <Text style={styles.label}>Success</Text>
              </View>
              <View style={styles.badgeItem}>
                <Badge value="!" status="warning" />
                <Text style={styles.label}>Warning</Text>
              </View>
              <View style={styles.badgeItem}>
                <Badge value="5" status="primary" />
                <Text style={styles.label}>Primary</Text>
              </View>
            </View>
          </Card>

          {/* Mini Badges (No Value) */}
          <Card>
            <Card.Title>Mini Badges (Dot Style)</Card.Title>
            <Card.Divider />
            <View style={[styles.section, styles.row]}>
              <View style={styles.badgeItem}>
                <Badge status="error" />
                <Text style={styles.label}>Error</Text>
              </View>
              <View style={styles.badgeItem}>
                <Badge status="success" />
                <Text style={styles.label}>Success</Text>
              </View>
              <View style={styles.badgeItem}>
                <Badge status="warning" />
                <Text style={styles.label}>Warning</Text>
              </View>
              <View style={styles.badgeItem}>
                <Badge status="primary" />
                <Text style={styles.label}>Primary</Text>
              </View>
            </View>
          </Card>

          {/* Badge on Avatar */}
          <Card>
            <Card.Title>Badge on Avatar</Card.Title>
            <Card.Divider />
            <View style={[styles.section, styles.row]}>
              <View style={styles.avatarContainer}>
                <Avatar
                  size={64}
                  rounded
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/36.jpg",
                  }}
                />
                <Badge status="success" containerStyle={styles.badgePosition} />
              </View>
              <View style={styles.avatarContainer}>
                <Avatar
                  size={64}
                  rounded
                  title="JD"
                  containerStyle={{ backgroundColor: "#3d4db7" }}
                />
                <Badge
                  value="3"
                  status="error"
                  containerStyle={styles.badgePosition}
                />
              </View>
              <View style={styles.avatarContainer}>
                <Avatar
                  size={64}
                  rounded
                  source={{
                    uri: "https://randomuser.me/api/portraits/women/44.jpg",
                  }}
                />
                <Badge
                  value="99+"
                  status="primary"
                  containerStyle={styles.badgePosition}
                />
              </View>
            </View>
            <Text style={styles.note}>Badges positioned on avatars</Text>
          </Card>

          {/* Badge on Icon */}
          <Card>
            <Card.Title>Badge on Icon</Card.Title>
            <Card.Divider />
            <View style={[styles.section, styles.row]}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="mail" size={40} color="#666" />
                <Badge
                  value="5"
                  status="error"
                  containerStyle={styles.iconBadgePosition}
                />
              </View>
              <View style={styles.iconContainer}>
                <MaterialIcons name="notifications" size={40} color="#666" />
                <Badge
                  value="12"
                  status="primary"
                  containerStyle={styles.iconBadgePosition}
                />
              </View>
              <View style={styles.iconContainer}>
                <MaterialIcons name="shopping-cart" size={40} color="#666" />
                <Badge
                  value="3"
                  status="success"
                  containerStyle={styles.iconBadgePosition}
                />
              </View>
            </View>
          </Card>

          {/* withBadge HOC */}
          <Card>
            <Card.Title>withBadge HOC</Card.Title>
            <Card.Divider />
            <View style={[styles.section, styles.row]}>
              <BadgedIcon name="notifications" size={40} color="#666" />
            </View>
            <Text style={styles.note}>Using withBadge(15)(Icon) HOC</Text>
          </Card>

          {/* Custom Styled Badges */}
          <Card>
            <Card.Title>Custom Styled Badges</Card.Title>
            <Card.Divider />
            <View style={[styles.section, styles.row]}>
              <Badge
                value="Custom"
                badgeStyle={{
                  backgroundColor: "#9c27b0",
                  paddingHorizontal: 8,
                }}
                textStyle={{ fontSize: 14 }}
              />
              <Badge
                value="Styled"
                badgeStyle={{
                  backgroundColor: "#ff5722",
                  borderRadius: 4,
                  paddingHorizontal: 8,
                }}
              />
              <Badge
                value="Badge"
                badgeStyle={{
                  backgroundColor: "#00bcd4",
                  paddingHorizontal: 8,
                }}
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
  title: {
    textAlign: "center",
    marginBottom: 8,
  },
  description: {
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  section: {
    gap: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  badgeItem: {
    alignItems: "center",
    gap: 8,
  },
  label: {
    fontSize: 12,
    color: "#666",
  },
  avatarContainer: {
    position: "relative",
  },
  badgePosition: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  iconContainer: {
    position: "relative",
    padding: 8,
  },
  iconBadgePosition: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  note: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
});
