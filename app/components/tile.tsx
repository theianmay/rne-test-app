import { Card, Text, Tile } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { Alert, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TileScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Tile Component" }} />
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
            Tile
          </Text>
          <Text style={styles.description}>
            Tiles are image-based components with optional titles and captions.
          </Text>

          {/* Basic Tile */}
          <Card>
            <Card.Title>Basic Tile</Card.Title>
            <Card.Divider />
            <View style={styles.tileContainer}>
              <Tile
                imageSrc={{ uri: "https://picsum.photos/400/200?random=1" }}
                title="Mountain View"
                containerStyle={styles.tile}
              />
            </View>
          </Card>

          {/* Tile with Caption */}
          <Card>
            <Card.Title>With Caption</Card.Title>
            <Card.Divider />
            <View style={styles.tileContainer}>
              <Tile
                imageSrc={{ uri: "https://picsum.photos/400/200?random=2" }}
                title="Beautiful Sunset"
                caption="Captured at the beach"
                containerStyle={styles.tile}
              />
            </View>
          </Card>

          {/* Featured Tile */}
          <Card>
            <Card.Title>Featured Tile</Card.Title>
            <Card.Divider />
            <View style={styles.tileContainer}>
              <Tile
                imageSrc={{ uri: "https://picsum.photos/400/250?random=3" }}
                title="Featured Article"
                caption="Learn about the latest trends in design"
                featured
                containerStyle={styles.tile}
              />
            </View>
          </Card>

          {/* Pressable Tile */}
          <Card>
            <Card.Title>Pressable Tile</Card.Title>
            <Card.Divider />
            <View style={styles.tileContainer}>
              <Tile
                imageSrc={{ uri: "https://picsum.photos/400/180?random=4" }}
                title="Tap Me!"
                caption="This tile is interactive"
                onPress={() =>
                  Alert.alert("Tile Pressed", "You tapped the tile!")
                }
                containerStyle={styles.tile}
              />
            </View>
            <Text style={styles.note}>Tap the tile to see interaction</Text>
          </Card>

          {/* Tile with Custom Styling */}
          <Card>
            <Card.Title>Custom Styled</Card.Title>
            <Card.Divider />
            <View style={styles.tileContainer}>
              <Tile
                imageSrc={{ uri: "https://picsum.photos/400/200?random=5" }}
                title="Styled Title"
                caption="With custom colors"
                titleStyle={styles.customTitle}
                captionStyle={styles.customCaption}
                containerStyle={styles.tile}
                imageContainerStyle={styles.customImageContainer}
              />
            </View>
          </Card>

          {/* Icon Tile */}
          <Card>
            <Card.Title>With Icon</Card.Title>
            <Card.Divider />
            <View style={styles.tileContainer}>
              <Tile
                imageSrc={{ uri: "https://picsum.photos/400/180?random=6" }}
                title="Play Video"
                icon={{
                  name: "play-circle",
                  type: "font-awesome",
                  size: 50,
                  color: "white",
                }}
                featured
                containerStyle={styles.tile}
              />
            </View>
          </Card>

          {/* Small Tiles Grid */}
          <Card>
            <Card.Title>Tile Grid</Card.Title>
            <Card.Divider />
            <View style={styles.gridContainer}>
              <Tile
                imageSrc={{ uri: "https://picsum.photos/200/150?random=7" }}
                title="Item 1"
                containerStyle={styles.gridTile}
                titleStyle={styles.gridTitle}
              />
              <Tile
                imageSrc={{ uri: "https://picsum.photos/200/150?random=8" }}
                title="Item 2"
                containerStyle={styles.gridTile}
                titleStyle={styles.gridTitle}
              />
            </View>
            <View style={styles.gridContainer}>
              <Tile
                imageSrc={{ uri: "https://picsum.photos/200/150?random=9" }}
                title="Item 3"
                containerStyle={styles.gridTile}
                titleStyle={styles.gridTitle}
              />
              <Tile
                imageSrc={{ uri: "https://picsum.photos/200/150?random=10" }}
                title="Item 4"
                containerStyle={styles.gridTile}
                titleStyle={styles.gridTitle}
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
  tileContainer: {
    marginHorizontal: -15,
    marginBottom: -10,
  },
  tile: {
    marginBottom: 0,
  },
  note: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
  customTitle: {
    color: "#ff9800",
    fontSize: 22,
  },
  customCaption: {
    color: "#ffe0b2",
  },
  customImageContainer: {
    borderRadius: 12,
    overflow: "hidden",
  },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: -15,
  },
  gridTile: {
    width: "48%",
    marginBottom: 8,
  },
  gridTitle: {
    fontSize: 14,
  },
});
