import MaterialIcons from "@react-native-vector-icons/material-icons";
import { BottomSheet, Button, Card, ListItem, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BottomSheetScreen() {
  const [isVisible1, setIsVisible1] = React.useState(false);
  const [isVisible2, setIsVisible2] = React.useState(false);
  const [isVisible3, setIsVisible3] = React.useState(false);

  const list = [
    { title: "List Item 1", icon: "inbox" },
    { title: "List Item 2", icon: "archive" },
    { title: "List Item 3", icon: "delete" },
    {
      title: "Cancel",
      icon: "close",
      containerStyle: { backgroundColor: "#f5f5f5" },
    },
  ];

  return (
    <>
      <Stack.Screen options={{ title: "BottomSheet Component" }} />
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
            BottomSheet
          </Text>
          <Text style={styles.description}>
            A panel that slides up from the bottom of the screen.
          </Text>

          {/* Basic BottomSheet */}
          <Card>
            <Card.Title>Basic BottomSheet</Card.Title>
            <Card.Divider />
            <Button
              title="Open Basic BottomSheet"
              onPress={() => setIsVisible1(true)}
            />
            <Text style={styles.note}>Shows a simple content panel</Text>
          </Card>

          {/* BottomSheet with List */}
          <Card>
            <Card.Title>BottomSheet with List</Card.Title>
            <Card.Divider />
            <Button
              title="Open List BottomSheet"
              onPress={() => setIsVisible2(true)}
            />
            <Text style={styles.note}>Shows a list of actions</Text>
          </Card>

          {/* BottomSheet with Custom Content */}
          <Card>
            <Card.Title>Custom Content BottomSheet</Card.Title>
            <Card.Divider />
            <Button
              title="Open Custom BottomSheet"
              onPress={() => setIsVisible3(true)}
            />
            <Text style={styles.note}>Shows custom styled content</Text>
          </Card>

          <View style={{ height: 40 }} />
        </ScrollView>

        {/* Basic BottomSheet */}
        <BottomSheet
          isVisible={isVisible1}
          onBackdropPress={() => setIsVisible1(false)}
        >
          <View style={styles.bottomSheetContent}>
            <Text h4 style={styles.sheetTitle}>
              Basic BottomSheet
            </Text>
            <Text style={styles.sheetText}>
              This is a basic bottom sheet with simple content. Tap outside or
              press the button to close.
            </Text>
            <Button
              title="Close"
              onPress={() => setIsVisible1(false)}
              buttonStyle={styles.closeButton}
            />
          </View>
        </BottomSheet>

        {/* BottomSheet with List */}
        <BottomSheet
          isVisible={isVisible2}
          onBackdropPress={() => setIsVisible2(false)}
        >
          {list.map((item, index) => (
            <ListItem
              key={index}
              containerStyle={item.containerStyle}
              onPress={() => setIsVisible2(false)}
            >
              <MaterialIcons name={item.icon as any} size={24} color="#666" />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </BottomSheet>

        {/* Custom Content BottomSheet */}
        <BottomSheet
          isVisible={isVisible3}
          onBackdropPress={() => setIsVisible3(false)}
        >
          <View style={styles.customSheet}>
            <View style={styles.handle} />
            <Text h4 style={styles.customTitle}>
              Share Options
            </Text>
            <View style={styles.iconRow}>
              <View style={styles.shareOption}>
                <View
                  style={[styles.iconCircle, { backgroundColor: "#25D366" }]}
                >
                  <MaterialIcons name="chat" size={28} color="white" />
                </View>
                <Text style={styles.shareLabel}>WhatsApp</Text>
              </View>
              <View style={styles.shareOption}>
                <View
                  style={[styles.iconCircle, { backgroundColor: "#1DA1F2" }]}
                >
                  <MaterialIcons name="public" size={28} color="white" />
                </View>
                <Text style={styles.shareLabel}>Twitter</Text>
              </View>
              <View style={styles.shareOption}>
                <View
                  style={[styles.iconCircle, { backgroundColor: "#4267B2" }]}
                >
                  <MaterialIcons name="thumb-up" size={28} color="white" />
                </View>
                <Text style={styles.shareLabel}>Facebook</Text>
              </View>
              <View style={styles.shareOption}>
                <View
                  style={[styles.iconCircle, { backgroundColor: "#0077B5" }]}
                >
                  <MaterialIcons name="work" size={28} color="white" />
                </View>
                <Text style={styles.shareLabel}>LinkedIn</Text>
              </View>
            </View>
            <Button
              title="Cancel"
              type="outline"
              onPress={() => setIsVisible3(false)}
              containerStyle={styles.cancelContainer}
            />
          </View>
        </BottomSheet>
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
  note: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
  bottomSheetContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sheetTitle: {
    textAlign: "center",
    marginBottom: 12,
  },
  sheetText: {
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
    lineHeight: 22,
  },
  closeButton: {
    borderRadius: 8,
  },
  customSheet: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: "#ddd",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 16,
  },
  customTitle: {
    textAlign: "center",
    marginBottom: 20,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  shareOption: {
    alignItems: "center",
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  shareLabel: {
    fontSize: 12,
    color: "#666",
  },
  cancelContainer: {
    marginTop: 10,
  },
});
