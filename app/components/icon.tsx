import { Card, Icon, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { Alert, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IconScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Icon Component" }} />
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
            Icon
          </Text>
          <Text style={styles.description}>
            Icons are visual symbols used to represent actions, objects, or
            concepts.
          </Text>

          {/* Material Icons */}
          <Card>
            <Card.Title>Material Icons</Card.Title>
            <Card.Divider />
            <View style={styles.iconRow}>
              <View style={styles.iconItem}>
                <Icon name="home" type="material" size={32} />
                <Text style={styles.iconLabel}>home</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="settings" type="material" size={32} />
                <Text style={styles.iconLabel}>settings</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="person" type="material" size={32} />
                <Text style={styles.iconLabel}>person</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="favorite" type="material" size={32} />
                <Text style={styles.iconLabel}>favorite</Text>
              </View>
            </View>
          </Card>

          {/* Font Awesome Icons */}
          <Card>
            <Card.Title>Font Awesome Icons</Card.Title>
            <Card.Divider />
            <View style={styles.iconRow}>
              <View style={styles.iconItem}>
                <Icon name="home" type="font-awesome" size={32} />
                <Text style={styles.iconLabel}>home</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="cog" type="font-awesome" size={32} />
                <Text style={styles.iconLabel}>cog</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="user" type="font-awesome" size={32} />
                <Text style={styles.iconLabel}>user</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="heart" type="font-awesome" size={32} />
                <Text style={styles.iconLabel}>heart</Text>
              </View>
            </View>
          </Card>

          {/* Ionicons */}
          <Card>
            <Card.Title>Ionicons</Card.Title>
            <Card.Divider />
            <View style={styles.iconRow}>
              <View style={styles.iconItem}>
                <Icon name="home" type="ionicon" size={32} />
                <Text style={styles.iconLabel}>home</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="settings" type="ionicon" size={32} />
                <Text style={styles.iconLabel}>settings</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="person" type="ionicon" size={32} />
                <Text style={styles.iconLabel}>person</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="heart" type="ionicon" size={32} />
                <Text style={styles.iconLabel}>heart</Text>
              </View>
            </View>
          </Card>

          {/* Feather Icons */}
          <Card>
            <Card.Title>Feather Icons</Card.Title>
            <Card.Divider />
            <View style={styles.iconRow}>
              <View style={styles.iconItem}>
                <Icon name="home" type="feather" size={32} />
                <Text style={styles.iconLabel}>home</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="settings" type="feather" size={32} />
                <Text style={styles.iconLabel}>settings</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="user" type="feather" size={32} />
                <Text style={styles.iconLabel}>user</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="heart" type="feather" size={32} />
                <Text style={styles.iconLabel}>heart</Text>
              </View>
            </View>
          </Card>

          {/* Icon Sizes */}
          <Card>
            <Card.Title>Icon Sizes</Card.Title>
            <Card.Divider />
            <View style={styles.iconRow}>
              <View style={styles.iconItem}>
                <Icon name="star" type="material" size={16} />
                <Text style={styles.iconLabel}>16px</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="star" type="material" size={24} />
                <Text style={styles.iconLabel}>24px</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="star" type="material" size={32} />
                <Text style={styles.iconLabel}>32px</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="star" type="material" size={48} />
                <Text style={styles.iconLabel}>48px</Text>
              </View>
            </View>
          </Card>

          {/* Icon Colors */}
          <Card>
            <Card.Title>Icon Colors</Card.Title>
            <Card.Divider />
            <View style={styles.iconRow}>
              <View style={styles.iconItem}>
                <Icon name="circle" type="material" size={32} color="#2089dc" />
                <Text style={styles.iconLabel}>Primary</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="circle" type="material" size={32} color="#4caf50" />
                <Text style={styles.iconLabel}>Success</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="circle" type="material" size={32} color="#ff9800" />
                <Text style={styles.iconLabel}>Warning</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="circle" type="material" size={32} color="#f44336" />
                <Text style={styles.iconLabel}>Error</Text>
              </View>
            </View>
          </Card>

          {/* Pressable Icons */}
          <Card>
            <Card.Title>Pressable Icons</Card.Title>
            <Card.Divider />
            <View style={styles.iconRow}>
              <Icon
                name="add-circle"
                type="material"
                size={40}
                color="#2089dc"
                onPress={() => Alert.alert("Icon Pressed", "Add icon tapped!")}
              />
              <Icon
                name="remove-circle"
                type="material"
                size={40}
                color="#f44336"
                onPress={() =>
                  Alert.alert("Icon Pressed", "Remove icon tapped!")
                }
              />
              <Icon
                name="info"
                type="material"
                size={40}
                color="#ff9800"
                onPress={() => Alert.alert("Icon Pressed", "Info icon tapped!")}
              />
            </View>
            <Text style={styles.note}>Tap icons to see interaction</Text>
          </Card>

          {/* Icons with Background */}
          <Card>
            <Card.Title>Icons with Background</Card.Title>
            <Card.Divider />
            <View style={styles.iconRow}>
              <Icon
                name="check"
                type="material"
                size={24}
                color="white"
                containerStyle={styles.iconBackground}
              />
              <Icon
                name="close"
                type="material"
                size={24}
                color="white"
                containerStyle={[
                  styles.iconBackground,
                  { backgroundColor: "#f44336" },
                ]}
              />
              <Icon
                name="star"
                type="material"
                size={24}
                color="white"
                containerStyle={[
                  styles.iconBackground,
                  { backgroundColor: "#ff9800" },
                ]}
              />
            </View>
          </Card>

          {/* Raised Icons */}
          <Card>
            <Card.Title>Raised Icons</Card.Title>
            <Card.Divider />
            <View style={styles.iconRow}>
              <Icon
                name="mail"
                type="material"
                size={28}
                raised
                color="#2089dc"
              />
              <Icon
                name="phone"
                type="material"
                size={28}
                raised
                color="#4caf50"
              />
              <Icon
                name="message"
                type="material"
                size={28}
                raised
                color="#9c27b0"
              />
            </View>
          </Card>

          {/* Reverse Icons */}
          <Card>
            <Card.Title>Reverse Icons</Card.Title>
            <Card.Divider />
            <View style={styles.iconRow}>
              <Icon
                name="camera"
                type="material"
                size={28}
                reverse
                color="#2089dc"
              />
              <Icon
                name="photo"
                type="material"
                size={28}
                reverse
                color="#4caf50"
              />
              <Icon
                name="video-call"
                type="material"
                size={28}
                reverse
                color="#ff5722"
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
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 16,
  },
  iconItem: {
    alignItems: "center",
    gap: 4,
  },
  iconLabel: {
    fontSize: 12,
    color: "#666",
  },
  note: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
  iconBackground: {
    backgroundColor: "#4caf50",
    padding: 10,
    borderRadius: 25,
  },
});
