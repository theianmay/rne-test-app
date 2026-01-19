import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Card, Input, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InputScreen() {
  const [text, setText] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [multiline, setMultiline] = React.useState("");

  return (
    <>
      <Stack.Screen options={{ title: "Input Component" }} />
      <SafeAreaView style={styles.safeArea} edges={["left", "right", "bottom"]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#f5f5f5"
          translucent={false}
        />
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled"
        >
          <Text h2 style={styles.title}>
            Input
          </Text>
          <Text style={styles.description}>
            Input fields allow users to enter and edit text.
          </Text>

          {/* Basic Input */}
          <Card>
            <Card.Title>Basic Input</Card.Title>
            <Card.Divider />
            <Input
              placeholder="Enter text here"
              value={text}
              onChangeText={setText}
            />
            <Text style={styles.valueText}>Value: {text || "(empty)"}</Text>
          </Card>

          {/* Input with Label */}
          <Card>
            <Card.Title>Input with Label</Card.Title>
            <Card.Divider />
            <Input
              label="Email Address"
              placeholder="email@example.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </Card>

          {/* Input with Icons */}
          <Card>
            <Card.Title>Input with Icons</Card.Title>
            <Card.Divider />
            <Input
              placeholder="Search..."
              leftIcon={<MaterialIcons name="search" size={24} color="#999" />}
            />
            <Input
              placeholder="Username"
              leftIcon={<MaterialIcons name="person" size={24} color="#999" />}
              rightIcon={
                <MaterialIcons name="check-circle" size={24} color="#4caf50" />
              }
            />
          </Card>

          {/* Password Input */}
          <Card>
            <Card.Title>Password Input</Card.Title>
            <Card.Divider />
            <Input
              label="Password"
              placeholder="Enter password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              leftIcon={<MaterialIcons name="lock" size={24} color="#999" />}
              rightIcon={
                <MaterialIcons
                  name={showPassword ? "visibility" : "visibility-off"}
                  size={24}
                  color="#999"
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
            />
            <Text style={styles.note}>Tap eye icon to toggle visibility</Text>
          </Card>

          {/* Input with Error */}
          <Card>
            <Card.Title>Input with Error</Card.Title>
            <Card.Divider />
            <Input
              label="Required Field"
              placeholder="This field has an error"
              errorMessage="This field is required"
              renderErrorMessage={true}
            />
            <Input
              label="Email Validation"
              placeholder="Invalid email format"
              value="invalid-email"
              errorMessage="Please enter a valid email address"
              errorStyle={styles.errorStyle}
            />
          </Card>

          {/* Disabled Input */}
          <Card>
            <Card.Title>Disabled Input</Card.Title>
            <Card.Divider />
            <Input
              placeholder="This input is disabled"
              disabled
              value="Cannot edit this"
              disabledInputStyle={styles.disabledInput}
            />
          </Card>

          {/* Multiline Input */}
          <Card>
            <Card.Title>Multiline Input</Card.Title>
            <Card.Divider />
            <Input
              label="Comments"
              placeholder="Enter your comments here..."
              value={multiline}
              onChangeText={setMultiline}
              multiline
              numberOfLines={4}
              inputStyle={styles.multilineInput}
            />
          </Card>

          {/* Styled Input */}
          <Card>
            <Card.Title>Custom Styled Input</Card.Title>
            <Card.Divider />
            <Input
              placeholder="Custom styled input"
              inputContainerStyle={styles.customInputContainer}
              inputStyle={styles.customInput}
              leftIcon={<MaterialIcons name="edit" size={20} color="#2089dc" />}
            />
            <Input
              placeholder="Rounded input"
              inputContainerStyle={styles.roundedInputContainer}
              inputStyle={styles.roundedInput}
              containerStyle={styles.roundedContainer}
            />
          </Card>

          {/* Input with Character Count */}
          <Card>
            <Card.Title>With Character Limit</Card.Title>
            <Card.Divider />
            <Input
              label="Bio (max 100 chars)"
              placeholder="Tell us about yourself"
              maxLength={100}
              multiline
              numberOfLines={3}
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
  valueText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 10,
    marginBottom: 10,
  },
  note: {
    textAlign: "center",
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
  errorStyle: {
    color: "#f44336",
    fontSize: 14,
  },
  disabledInput: {
    backgroundColor: "#f0f0f0",
    opacity: 0.6,
  },
  multilineInput: {
    minHeight: 80,
    textAlignVertical: "top",
  },
  customInputContainer: {
    borderWidth: 2,
    borderColor: "#2089dc",
    borderRadius: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
  },
  customInput: {
    color: "#333",
  },
  roundedInputContainer: {
    backgroundColor: "#e3f2fd",
    borderRadius: 25,
    borderBottomWidth: 0,
    paddingHorizontal: 15,
  },
  roundedInput: {
    color: "#333",
  },
  roundedContainer: {
    paddingHorizontal: 0,
  },
});
