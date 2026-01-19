import { Button, Card, Dialog, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DialogScreen() {
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const [visible4, setVisible4] = React.useState(false);
  const [visible5, setVisible5] = React.useState(false);

  return (
    <>
      <Stack.Screen options={{ title: "Dialog Component" }} />
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
            Dialog
          </Text>
          <Text style={styles.description}>
            Dialogs inform users about a task and can contain critical
            information.
          </Text>

          {/* Basic Dialog */}
          <Card>
            <Card.Title>Basic Dialog</Card.Title>
            <Card.Divider />
            <Button
              title="Open Basic Dialog"
              onPress={() => setVisible1(true)}
            />
          </Card>

          {/* Dialog with Title */}
          <Card>
            <Card.Title>Dialog with Title</Card.Title>
            <Card.Divider />
            <Button
              title="Open Titled Dialog"
              onPress={() => setVisible2(true)}
            />
          </Card>

          {/* Confirmation Dialog */}
          <Card>
            <Card.Title>Confirmation Dialog</Card.Title>
            <Card.Divider />
            <Button
              title="Open Confirmation"
              onPress={() => setVisible3(true)}
            />
          </Card>

          {/* Loading Dialog */}
          <Card>
            <Card.Title>Loading Dialog</Card.Title>
            <Card.Divider />
            <Button
              title="Show Loading"
              onPress={() => {
                setVisible4(true);
                setTimeout(() => setVisible4(false), 3000);
              }}
            />
            <Text style={styles.note}>Auto-closes after 3 seconds</Text>
          </Card>

          {/* Multi-Button Dialog */}
          <Card>
            <Card.Title>Multi-Button Dialog</Card.Title>
            <Card.Divider />
            <Button
              title="Open Multi-Button"
              onPress={() => setVisible5(true)}
            />
          </Card>

          <View style={{ height: 40 }} />
        </ScrollView>

        {/* Basic Dialog */}
        <Dialog isVisible={visible1} onBackdropPress={() => setVisible1(false)}>
          <Text>This is a basic dialog with just text content.</Text>
        </Dialog>

        {/* Dialog with Title */}
        <Dialog isVisible={visible2} onBackdropPress={() => setVisible2(false)}>
          <Dialog.Title title="Dialog Title" />
          <Text>
            This dialog has a title and some descriptive text content below it.
          </Text>
        </Dialog>

        {/* Confirmation Dialog */}
        <Dialog isVisible={visible3} onBackdropPress={() => setVisible3(false)}>
          <Dialog.Title title="Confirm Action" />
          <Text>
            Are you sure you want to proceed with this action? This cannot be
            undone.
          </Text>
          <Dialog.Actions>
            <Dialog.Button title="Cancel" onPress={() => setVisible3(false)} />
            <Dialog.Button title="Confirm" onPress={() => setVisible3(false)} />
          </Dialog.Actions>
        </Dialog>

        {/* Loading Dialog */}
        <Dialog isVisible={visible4}>
          <Dialog.Loading />
        </Dialog>

        {/* Multi-Button Dialog */}
        <Dialog isVisible={visible5} onBackdropPress={() => setVisible5(false)}>
          <Dialog.Title title="Choose an Option" />
          <Text>Select one of the following actions to continue.</Text>
          <Dialog.Actions>
            <Dialog.Button
              title="Later"
              onPress={() => setVisible5(false)}
              titleStyle={{ color: "#999" }}
            />
            <Dialog.Button
              title="Skip"
              onPress={() => setVisible5(false)}
              titleStyle={{ color: "#ff9800" }}
            />
            <Dialog.Button
              title="Accept"
              onPress={() => setVisible5(false)}
              titleStyle={{ color: "#4caf50" }}
            />
          </Dialog.Actions>
        </Dialog>
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
});
