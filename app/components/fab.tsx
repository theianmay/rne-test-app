import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Card, FAB, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { Alert, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FABScreen() {
  const [visible, setVisible] = React.useState(true);

  return (
    <>
      <Stack.Screen options={{ title: "FAB Component" }} />
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
            FAB
          </Text>
          <Text style={styles.description}>
            Floating Action Buttons represent the primary action in an
            application.
          </Text>

          {/* Basic FAB Examples */}
          <Card>
            <Card.Title>Basic FAB</Card.Title>
            <Card.Divider />
            <View style={styles.fabRow}>
              <FAB
                icon={<MaterialIcons name="add" size={24} color="white" />}
                onPress={() => Alert.alert("FAB", "Add button pressed!")}
              />
            </View>
            <Text style={styles.note}>Tap the FAB to see interaction</Text>
          </Card>

          {/* FAB with Title */}
          <Card>
            <Card.Title>FAB with Title</Card.Title>
            <Card.Divider />
            <View style={styles.fabRow}>
              <FAB
                title="Create"
                icon={<MaterialIcons name="add" size={24} color="white" />}
                onPress={() => Alert.alert("FAB", "Create pressed!")}
              />
            </View>
          </Card>

          {/* FAB Sizes */}
          <Card>
            <Card.Title>FAB Sizes</Card.Title>
            <Card.Divider />
            <View style={styles.fabRow}>
              <View style={styles.fabItem}>
                <FAB
                  size="small"
                  icon={<MaterialIcons name="edit" size={20} color="white" />}
                  onPress={() => {}}
                />
                <Text style={styles.fabLabel}>Small</Text>
              </View>
              <View style={styles.fabItem}>
                <FAB
                  icon={<MaterialIcons name="edit" size={24} color="white" />}
                  onPress={() => {}}
                />
                <Text style={styles.fabLabel}>Default</Text>
              </View>
              <View style={styles.fabItem}>
                <FAB
                  size="large"
                  icon={<MaterialIcons name="edit" size={28} color="white" />}
                  onPress={() => {}}
                />
                <Text style={styles.fabLabel}>Large</Text>
              </View>
            </View>
          </Card>

          {/* FAB Colors */}
          <Card>
            <Card.Title>FAB Colors</Card.Title>
            <Card.Divider />
            <View style={styles.fabRow}>
              <FAB
                icon={<MaterialIcons name="favorite" size={24} color="white" />}
                color="#e91e63"
                onPress={() => {}}
              />
              <FAB
                icon={<MaterialIcons name="star" size={24} color="white" />}
                color="#ff9800"
                onPress={() => {}}
              />
              <FAB
                icon={<MaterialIcons name="check" size={24} color="white" />}
                color="#4caf50"
                onPress={() => {}}
              />
              <FAB
                icon={<MaterialIcons name="close" size={24} color="white" />}
                color="#f44336"
                onPress={() => {}}
              />
            </View>
          </Card>

          {/* Extended FAB */}
          <Card>
            <Card.Title>Extended FAB</Card.Title>
            <Card.Divider />
            <View style={styles.fabColumn}>
              <FAB
                title="Add Item"
                icon={<MaterialIcons name="add" size={24} color="white" />}
                onPress={() => {}}
                style={styles.extendedFab}
              />
              <FAB
                title="Edit Document"
                icon={<MaterialIcons name="edit" size={24} color="white" />}
                color="#9c27b0"
                onPress={() => {}}
                style={styles.extendedFab}
              />
            </View>
          </Card>

          {/* FAB Loading */}
          <Card>
            <Card.Title>Loading FAB</Card.Title>
            <Card.Divider />
            <View style={styles.fabRow}>
              <FAB
                loading
                icon={<MaterialIcons name="sync" size={24} color="white" />}
                onPress={() => {}}
              />
            </View>
            <Text style={styles.note}>Shows loading spinner</Text>
          </Card>

          {/* Disabled FAB */}
          <Card>
            <Card.Title>Disabled FAB</Card.Title>
            <Card.Divider />
            <View style={styles.fabRow}>
              <FAB
                disabled
                icon={<MaterialIcons name="block" size={24} color="white" />}
                onPress={() => {}}
              />
            </View>
          </Card>

          {/* Toggle Visibility */}
          <Card>
            <Card.Title>Visibility Toggle</Card.Title>
            <Card.Divider />
            <View style={styles.fabRow}>
              <FAB
                visible={visible}
                icon={
                  <MaterialIcons name="visibility" size={24} color="white" />
                }
                onPress={() => setVisible(!visible)}
                title={visible ? "Hide Me" : ""}
              />
            </View>
            <Text style={styles.note}>
              {visible ? "Tap to hide (will reappear)" : "FAB is hidden"}
            </Text>
            {!visible && (
              <FAB
                title="Show FAB"
                size="small"
                onPress={() => setVisible(true)}
                style={{ marginTop: 10 }}
              />
            )}
          </Card>

          <View style={{ height: 100 }} />
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
  fabRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    paddingVertical: 16,
  },
  fabColumn: {
    alignItems: "center",
    gap: 16,
    paddingVertical: 8,
  },
  fabItem: {
    alignItems: "center",
    gap: 8,
  },
  fabLabel: {
    fontSize: 12,
    color: "#666",
  },
  extendedFab: {
    width: 180,
  },
  note: {
    textAlign: "center",
    marginTop: 8,
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
});
