import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Card, CheckBox, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CheckBoxScreen() {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(true);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checkedItems, setCheckedItems] = React.useState({
    apple: true,
    banana: false,
    orange: true,
  });
  const [radioValue, setRadioValue] = React.useState("option1");

  return (
    <>
      <Stack.Screen options={{ title: "CheckBox Component" }} />
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
            CheckBox
          </Text>
          <Text style={styles.description}>
            Checkboxes allow users to select one or more options from a set.
          </Text>

          {/* Basic CheckBox */}
          <Card>
            <Card.Title>Basic CheckBox</Card.Title>
            <Card.Divider />
            <CheckBox
              title="Check me"
              checked={checked1}
              onPress={() => setChecked1(!checked1)}
            />
            <CheckBox
              title="I'm checked by default"
              checked={checked2}
              onPress={() => setChecked2(!checked2)}
            />
          </Card>

          {/* CheckBox with Icons */}
          <Card>
            <Card.Title>Custom Icons</Card.Title>
            <Card.Divider />
            <CheckBox
              title="Custom checked icon"
              checked={checked3}
              onPress={() => setChecked3(!checked3)}
              checkedIcon={
                <MaterialIcons name="check-circle" size={24} color="#4caf50" />
              }
              uncheckedIcon={
                <MaterialIcons
                  name="radio-button-unchecked"
                  size={24}
                  color="#999"
                />
              }
            />
            <CheckBox
              title="Heart icons"
              checked={checked4}
              onPress={() => setChecked4(!checked4)}
              checkedIcon={
                <MaterialIcons name="favorite" size={24} color="#e91e63" />
              }
              uncheckedIcon={
                <MaterialIcons name="favorite-border" size={24} color="#999" />
              }
            />
          </Card>

          {/* Checkbox Group */}
          <Card>
            <Card.Title>Checkbox Group</Card.Title>
            <Card.Divider />
            <Text style={styles.groupLabel}>Select your favorite fruits:</Text>
            <CheckBox
              title="Apple"
              checked={checkedItems.apple}
              onPress={() =>
                setCheckedItems({ ...checkedItems, apple: !checkedItems.apple })
              }
            />
            <CheckBox
              title="Banana"
              checked={checkedItems.banana}
              onPress={() =>
                setCheckedItems({
                  ...checkedItems,
                  banana: !checkedItems.banana,
                })
              }
            />
            <CheckBox
              title="Orange"
              checked={checkedItems.orange}
              onPress={() =>
                setCheckedItems({
                  ...checkedItems,
                  orange: !checkedItems.orange,
                })
              }
            />
            <Text style={styles.valueText}>
              Selected:{" "}
              {Object.entries(checkedItems)
                .filter(([_, v]) => v)
                .map(([k]) => k)
                .join(", ") || "None"}
            </Text>
          </Card>

          {/* Radio Button Style */}
          <Card>
            <Card.Title>Radio Button Style</Card.Title>
            <Card.Divider />
            <Text style={styles.groupLabel}>Choose one option:</Text>
            <CheckBox
              title="Option 1"
              checked={radioValue === "option1"}
              onPress={() => setRadioValue("option1")}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor="#2089dc"
            />
            <CheckBox
              title="Option 2"
              checked={radioValue === "option2"}
              onPress={() => setRadioValue("option2")}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor="#2089dc"
            />
            <CheckBox
              title="Option 3"
              checked={radioValue === "option3"}
              onPress={() => setRadioValue("option3")}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor="#2089dc"
            />
            <Text style={styles.valueText}>Selected: {radioValue}</Text>
          </Card>

          {/* CheckBox Positions */}
          <Card>
            <Card.Title>Icon Positions</Card.Title>
            <Card.Divider />
            <CheckBox
              title="Icon on left (default)"
              checked={true}
              onPress={() => {}}
            />
            <CheckBox
              title="Icon on right"
              checked={true}
              onPress={() => {}}
              iconRight
            />
            <CheckBox
              title="Centered"
              checked={true}
              onPress={() => {}}
              center
            />
          </Card>

          {/* Styled CheckBox */}
          <Card>
            <Card.Title>Custom Styled</Card.Title>
            <Card.Divider />
            <CheckBox
              title="Custom colors"
              checked={true}
              onPress={() => {}}
              checkedColor="#9c27b0"
              containerStyle={styles.customContainer}
              textStyle={styles.customText}
            />
            <CheckBox
              title="With background"
              checked={true}
              onPress={() => {}}
              checkedColor="#4caf50"
              containerStyle={styles.backgroundContainer}
              textStyle={styles.whiteText}
              wrapperStyle={styles.wrapperStyle}
            />
          </Card>

          {/* Disabled CheckBox */}
          <Card>
            <Card.Title>Disabled State</Card.Title>
            <Card.Divider />
            <CheckBox title="Disabled unchecked" checked={false} disabled />
            <CheckBox title="Disabled checked" checked={true} disabled />
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
  groupLabel: {
    fontSize: 14,
    color: "#666",
    marginLeft: 10,
    marginBottom: 8,
  },
  valueText: {
    textAlign: "center",
    marginTop: 8,
    fontSize: 14,
    color: "#2089dc",
    fontWeight: "bold",
  },
  customContainer: {
    backgroundColor: "#f0e6ff",
    borderRadius: 8,
    borderWidth: 0,
  },
  customText: {
    color: "#9c27b0",
    fontWeight: "bold",
  },
  backgroundContainer: {
    backgroundColor: "#4caf50",
    borderRadius: 8,
    borderWidth: 0,
  },
  whiteText: {
    color: "white",
  },
  wrapperStyle: {
    backgroundColor: "#4caf50",
  },
});
