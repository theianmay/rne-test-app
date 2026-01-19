import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Card, SpeedDial, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { Alert, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SpeedDialScreen() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  return (
    <>
      <Stack.Screen options={{ title: "SpeedDial Component" }} />
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
            SpeedDial
          </Text>
          <Text style={styles.description}>
            SpeedDial is a floating action button that reveals related actions.
          </Text>

          {/* Basic SpeedDial */}
          <Card>
            <Card.Title>Basic SpeedDial</Card.Title>
            <Card.Divider />
            <Text style={styles.instructions}>
              Tap the FAB in the bottom-right corner to see the speed dial
              actions.
            </Text>
            <View style={styles.previewArea}>
              <Text style={styles.previewText}>SpeedDial Preview Area</Text>
              <Text style={styles.subText}>
                Actions appear here when opened
              </Text>
            </View>
          </Card>

          {/* Customization Info */}
          <Card>
            <Card.Title>Features</Card.Title>
            <Card.Divider />
            <View style={styles.featureList}>
              <Text style={styles.featureItem}>• Multiple action buttons</Text>
              <Text style={styles.featureItem}>• Custom icons and colors</Text>
              <Text style={styles.featureItem}>• Labels for each action</Text>
              <Text style={styles.featureItem}>• Animated open/close</Text>
              <Text style={styles.featureItem}>• Backdrop overlay</Text>
            </View>
          </Card>

          {/* Usage Info */}
          <Card>
            <Card.Title>Common Use Cases</Card.Title>
            <Card.Divider />
            <View style={styles.featureList}>
              <Text style={styles.featureItem}>📝 Create new items</Text>
              <Text style={styles.featureItem}>📤 Share options</Text>
              <Text style={styles.featureItem}>📞 Contact actions</Text>
              <Text style={styles.featureItem}>⚙️ Quick settings</Text>
            </View>
          </Card>

          <View style={{ height: 100 }} />
        </ScrollView>

        {/* SpeedDial Component */}
        <SpeedDial
          isOpen={open1}
          icon={<MaterialIcons name="add" size={24} color="white" />}
          openIcon={<MaterialIcons name="close" size={24} color="white" />}
          onOpen={() => setOpen1(true)}
          onClose={() => setOpen1(false)}
        >
          <SpeedDial.Action
            icon={<MaterialIcons name="edit" size={20} color="white" />}
            title="Edit"
            onPress={() => {
              Alert.alert("Edit", "Edit action pressed");
              setOpen1(false);
            }}
          />
          <SpeedDial.Action
            icon={<MaterialIcons name="delete" size={20} color="white" />}
            title="Delete"
            onPress={() => {
              Alert.alert("Delete", "Delete action pressed");
              setOpen1(false);
            }}
          />
          <SpeedDial.Action
            icon={<MaterialIcons name="share" size={20} color="white" />}
            title="Share"
            onPress={() => {
              Alert.alert("Share", "Share action pressed");
              setOpen1(false);
            }}
          />
        </SpeedDial>
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
  instructions: {
    textAlign: "center",
    color: "#666",
    marginBottom: 16,
    lineHeight: 22,
  },
  previewArea: {
    backgroundColor: "#e3f2fd",
    borderRadius: 12,
    padding: 40,
    alignItems: "center",
  },
  previewText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1565c0",
  },
  subText: {
    fontSize: 14,
    color: "#1976d2",
    marginTop: 8,
  },
  featureList: {
    gap: 8,
  },
  featureItem: {
    fontSize: 15,
    color: "#333",
    paddingVertical: 4,
  },
});
