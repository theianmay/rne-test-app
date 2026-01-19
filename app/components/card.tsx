import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Button, Card, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CardScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Card Component" }} />
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
            Card
          </Text>
          <Text style={styles.description}>
            Cards contain content and actions about a single subject.
          </Text>

          {/* Basic Card */}
          <Card>
            <Card.Title>Basic Card</Card.Title>
            <Card.Divider />
            <Text>
              This is a basic card with a title and divider. Cards are surfaces
              that display content and actions on a single topic.
            </Text>
          </Card>

          {/* Card with Image */}
          <Card>
            <Card.Title>Card with Image</Card.Title>
            <Card.Divider />
            <Card.Image
              source={{ uri: "https://picsum.photos/400/200" }}
              style={styles.cardImage}
            />
            <Text style={styles.imageCaption}>
              Beautiful landscape image loaded from the web.
            </Text>
            <Button
              title="View More"
              buttonStyle={styles.cardButton}
              icon={
                <MaterialIcons
                  name="arrow-forward"
                  size={20}
                  color="white"
                  style={{ marginLeft: 8 }}
                />
              }
              iconRight
            />
          </Card>

          {/* Card with Featured Title */}
          <Card>
            <Card.FeaturedTitle style={styles.featuredTitle}>
              Featured Card
            </Card.FeaturedTitle>
            <Card.FeaturedSubtitle style={styles.featuredSubtitle}>
              With subtitle text
            </Card.FeaturedSubtitle>
            <Card.Divider />
            <Text>
              This card uses the FeaturedTitle and FeaturedSubtitle components
              for a more prominent header style.
            </Text>
          </Card>

          {/* Styled Card */}
          <Card containerStyle={styles.styledCard}>
            <Card.Title style={styles.styledCardTitle}>
              Custom Styled Card
            </Card.Title>
            <Card.Divider color="#fff" />
            <Text style={styles.styledCardText}>
              This card has custom container styles including background color,
              border radius, and shadow effects.
            </Text>
          </Card>

          {/* Card with Multiple Sections */}
          <Card>
            <Card.Title>Multi-Section Card</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <MaterialIcons name="info" size={24} color="#2089dc" />
              <Text style={styles.sectionText}>
                Information section with icon
              </Text>
            </View>
            <Card.Divider />
            <View style={styles.section}>
              <MaterialIcons name="settings" size={24} color="#2089dc" />
              <Text style={styles.sectionText}>Settings section with icon</Text>
            </View>
            <Card.Divider />
            <View style={styles.section}>
              <MaterialIcons name="help" size={24} color="#2089dc" />
              <Text style={styles.sectionText}>Help section with icon</Text>
            </View>
          </Card>

          {/* Card with Actions */}
          <Card>
            <Card.Title>Card with Actions</Card.Title>
            <Card.Divider />
            <Text style={{ marginBottom: 16 }}>
              Cards can contain action buttons for user interaction.
            </Text>
            <View style={styles.actionRow}>
              <Button title="Cancel" type="outline" size="sm" />
              <Button title="Confirm" size="sm" />
            </View>
          </Card>

          {/* Wrapper Style Card */}
          <Card wrapperStyle={styles.wrapperStyle}>
            <Card.Title>Wrapper Style</Card.Title>
            <Card.Divider />
            <Text>
              The wrapperStyle prop allows you to style the inner content
              wrapper. This card has a light blue background on its content
              area.
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
  cardImage: {
    marginBottom: 12,
  },
  imageCaption: {
    marginBottom: 12,
    color: "#666",
  },
  cardButton: {
    borderRadius: 4,
  },
  featuredTitle: {
    color: "#333",
  },
  featuredSubtitle: {
    color: "#666",
  },
  styledCard: {
    backgroundColor: "#2089dc",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  styledCardTitle: {
    color: "#fff",
  },
  styledCardText: {
    color: "#fff",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    gap: 12,
  },
  sectionText: {
    flex: 1,
    fontSize: 16,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
  },
  wrapperStyle: {
    backgroundColor: "#e3f2fd",
    padding: 16,
    borderRadius: 8,
  },
});
