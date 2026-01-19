import { Card, Image, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import {
    ActivityIndicator,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ImageScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Image Component" }} />
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
            Image
          </Text>
          <Text style={styles.description}>
            Enhanced Image component with loading indicators and transitions.
          </Text>

          {/* Basic Image */}
          <Card>
            <Card.Title>Basic Image</Card.Title>
            <Card.Divider />
            <Image
              source={{ uri: "https://picsum.photos/400/300" }}
              style={styles.basicImage}
            />
          </Card>

          {/* Image with Placeholder */}
          <Card>
            <Card.Title>With Loading Indicator</Card.Title>
            <Card.Divider />
            <Image
              source={{ uri: "https://picsum.photos/400/250?random=1" }}
              style={styles.basicImage}
              PlaceholderContent={<ActivityIndicator />}
            />
            <Text style={styles.note}>Shows spinner while loading</Text>
          </Card>

          {/* Image with Custom Placeholder */}
          <Card>
            <Card.Title>Custom Placeholder</Card.Title>
            <Card.Divider />
            <Image
              source={{ uri: "https://picsum.photos/400/200?random=2" }}
              style={styles.basicImage}
              PlaceholderContent={
                <View style={styles.customPlaceholder}>
                  <Text style={styles.placeholderText}>Loading...</Text>
                </View>
              }
              placeholderStyle={styles.placeholderStyle}
            />
          </Card>

          {/* Different Image Sizes */}
          <Card>
            <Card.Title>Different Sizes</Card.Title>
            <Card.Divider />
            <View style={styles.sizeRow}>
              <View style={styles.sizeItem}>
                <Image
                  source={{ uri: "https://picsum.photos/100/100?random=3" }}
                  style={styles.smallImage}
                />
                <Text style={styles.sizeLabel}>100x100</Text>
              </View>
              <View style={styles.sizeItem}>
                <Image
                  source={{ uri: "https://picsum.photos/150/150?random=4" }}
                  style={styles.mediumImage}
                />
                <Text style={styles.sizeLabel}>150x150</Text>
              </View>
            </View>
          </Card>

          {/* Rounded Images */}
          <Card>
            <Card.Title>Border Radius</Card.Title>
            <Card.Divider />
            <View style={styles.sizeRow}>
              <View style={styles.sizeItem}>
                <Image
                  source={{ uri: "https://picsum.photos/120/120?random=5" }}
                  style={styles.squareImage}
                />
                <Text style={styles.sizeLabel}>Square</Text>
              </View>
              <View style={styles.sizeItem}>
                <Image
                  source={{ uri: "https://picsum.photos/120/120?random=6" }}
                  style={styles.roundedImage}
                />
                <Text style={styles.sizeLabel}>Rounded</Text>
              </View>
              <View style={styles.sizeItem}>
                <Image
                  source={{ uri: "https://picsum.photos/120/120?random=7" }}
                  style={styles.circleImage}
                />
                <Text style={styles.sizeLabel}>Circle</Text>
              </View>
            </View>
          </Card>

          {/* Image with Transition */}
          <Card>
            <Card.Title>Transition Effect</Card.Title>
            <Card.Divider />
            <Image
              source={{ uri: "https://picsum.photos/400/200?random=8" }}
              style={styles.basicImage}
              transition={true}
              transitionDuration={500}
              PlaceholderContent={<ActivityIndicator />}
            />
            <Text style={styles.note}>Fades in when loaded (500ms)</Text>
          </Card>

          {/* Resizing Modes */}
          <Card>
            <Card.Title>Resize Modes</Card.Title>
            <Card.Divider />
            <Text style={styles.resizeLabel}>Cover (default)</Text>
            <Image
              source={{ uri: "https://picsum.photos/600/200?random=9" }}
              style={styles.resizeImage}
              resizeMode="cover"
            />
            <Text style={[styles.resizeLabel, { marginTop: 16 }]}>Contain</Text>
            <Image
              source={{ uri: "https://picsum.photos/600/200?random=10" }}
              style={styles.resizeImage}
              resizeMode="contain"
            />
            <Text style={[styles.resizeLabel, { marginTop: 16 }]}>Stretch</Text>
            <Image
              source={{ uri: "https://picsum.photos/600/200?random=11" }}
              style={styles.resizeImage}
              resizeMode="stretch"
            />
          </Card>

          {/* Image with Container Style */}
          <Card>
            <Card.Title>Container Styling</Card.Title>
            <Card.Divider />
            <Image
              source={{ uri: "https://picsum.photos/400/200?random=12" }}
              style={styles.basicImage}
              containerStyle={styles.imageContainer}
            />
            <Text style={styles.note}>With shadow and border</Text>
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
  basicImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  note: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
  customPlaceholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: "#999",
  },
  placeholderStyle: {
    backgroundColor: "#e0e0e0",
  },
  sizeRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  sizeItem: {
    alignItems: "center",
  },
  sizeLabel: {
    marginTop: 8,
    fontSize: 12,
    color: "#666",
  },
  smallImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  mediumImage: {
    width: 120,
    height: 120,
    borderRadius: 4,
  },
  squareImage: {
    width: 80,
    height: 80,
  },
  roundedImage: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },
  circleImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  resizeLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  resizeImage: {
    width: "100%",
    height: 100,
    backgroundColor: "#e0e0e0",
  },
  imageContainer: {
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 2,
    borderColor: "#2089dc",
  },
});
