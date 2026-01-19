import { Card, SearchBar, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchBarScreen() {
  const [search1, setSearch1] = React.useState("");
  const [search2, setSearch2] = React.useState("");
  const [search3, setSearch3] = React.useState("");
  const [search4, setSearch4] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSearch = (text: string) => {
    setSearch4(text);
    if (text.length > 0) {
      setLoading(true);
      setTimeout(() => setLoading(false), 1000);
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: "SearchBar Component" }} />
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
            SearchBar
          </Text>
          <Text style={styles.description}>
            Search bars allow users to search through content.
          </Text>

          {/* Default SearchBar */}
          <Card>
            <Card.Title>Default Style</Card.Title>
            <Card.Divider />
            <SearchBar
              placeholder="Type here..."
              value={search1}
              onChangeText={setSearch1}
            />
            <Text style={styles.valueText}>Value: {search1 || "(empty)"}</Text>
          </Card>

          {/* iOS Style SearchBar */}
          <Card>
            <Card.Title>iOS Style</Card.Title>
            <Card.Divider />
            <SearchBar
              placeholder="Search"
              platform="ios"
              value={search2}
              onChangeText={setSearch2}
            />
          </Card>

          {/* Android Style SearchBar */}
          <Card>
            <Card.Title>Android Style</Card.Title>
            <Card.Divider />
            <SearchBar
              placeholder="Search"
              platform="android"
              value={search3}
              onChangeText={setSearch3}
            />
          </Card>

          {/* SearchBar with Loading */}
          <Card>
            <Card.Title>With Loading Indicator</Card.Title>
            <Card.Divider />
            <SearchBar
              placeholder="Search (simulates loading)"
              value={search4}
              onChangeText={handleSearch}
              showLoading={loading}
            />
            <Text style={styles.note}>Type to trigger loading state</Text>
          </Card>

          {/* Styled SearchBar */}
          <Card>
            <Card.Title>Custom Styled</Card.Title>
            <Card.Divider />
            <SearchBar
              placeholder="Custom colors..."
              value=""
              onChangeText={() => {}}
              containerStyle={styles.customContainer}
              inputContainerStyle={styles.customInputContainer}
              inputStyle={styles.customInput}
            />
          </Card>

          {/* Round SearchBar */}
          <Card>
            <Card.Title>Round Style</Card.Title>
            <Card.Divider />
            <SearchBar
              placeholder="Round search..."
              value=""
              onChangeText={() => {}}
              round
            />
          </Card>

          {/* Light Theme SearchBar */}
          <Card>
            <Card.Title>Light Theme</Card.Title>
            <Card.Divider />
            <SearchBar
              placeholder="Light theme..."
              value=""
              onChangeText={() => {}}
              lightTheme
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
    textAlign: "center",
    marginTop: 8,
    fontSize: 14,
    color: "#666",
  },
  note: {
    textAlign: "center",
    marginTop: 8,
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
  customContainer: {
    backgroundColor: "#e8f5e9",
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  customInputContainer: {
    backgroundColor: "#c8e6c9",
  },
  customInput: {
    color: "#2e7d32",
  },
});
