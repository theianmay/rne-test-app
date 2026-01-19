import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Card, Tab, TabView, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabScreen() {
  const [index1, setIndex1] = React.useState(0);
  const [index2, setIndex2] = React.useState(0);
  const [index3, setIndex3] = React.useState(0);

  return (
    <>
      <Stack.Screen options={{ title: "Tab Component" }} />
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
            Tab & TabView
          </Text>
          <Text style={styles.description}>
            Tabs organize content across different screens and views.
          </Text>

          {/* Basic Tabs */}
          <Card>
            <Card.Title>Basic Tabs</Card.Title>
            <Card.Divider />
            <Tab value={index1} onChange={setIndex1}>
              <Tab.Item title="Tab 1" />
              <Tab.Item title="Tab 2" />
              <Tab.Item title="Tab 3" />
            </Tab>
            <TabView value={index1} onChange={setIndex1} animationType="spring">
              <TabView.Item style={styles.tabContent}>
                <Text style={styles.tabText}>Content for Tab 1</Text>
              </TabView.Item>
              <TabView.Item style={styles.tabContent}>
                <Text style={styles.tabText}>Content for Tab 2</Text>
              </TabView.Item>
              <TabView.Item style={styles.tabContent}>
                <Text style={styles.tabText}>Content for Tab 3</Text>
              </TabView.Item>
            </TabView>
          </Card>

          {/* Tabs with Icons */}
          <Card>
            <Card.Title>Tabs with Icons</Card.Title>
            <Card.Divider />
            <Tab
              value={index2}
              onChange={setIndex2}
              indicatorStyle={styles.indicator}
            >
              <Tab.Item
                title="Home"
                icon={
                  <MaterialIcons
                    name="home"
                    size={20}
                    color={index2 === 0 ? "#2089dc" : "#999"}
                  />
                }
                titleStyle={
                  index2 === 0 ? styles.activeTitle : styles.inactiveTitle
                }
              />
              <Tab.Item
                title="Search"
                icon={
                  <MaterialIcons
                    name="search"
                    size={20}
                    color={index2 === 1 ? "#2089dc" : "#999"}
                  />
                }
                titleStyle={
                  index2 === 1 ? styles.activeTitle : styles.inactiveTitle
                }
              />
              <Tab.Item
                title="Profile"
                icon={
                  <MaterialIcons
                    name="person"
                    size={20}
                    color={index2 === 2 ? "#2089dc" : "#999"}
                  />
                }
                titleStyle={
                  index2 === 2 ? styles.activeTitle : styles.inactiveTitle
                }
              />
            </Tab>
            <TabView value={index2} onChange={setIndex2}>
              <TabView.Item style={styles.tabContent}>
                <MaterialIcons name="home" size={48} color="#2089dc" />
                <Text style={styles.tabText}>Home Screen</Text>
              </TabView.Item>
              <TabView.Item style={styles.tabContent}>
                <MaterialIcons name="search" size={48} color="#2089dc" />
                <Text style={styles.tabText}>Search Screen</Text>
              </TabView.Item>
              <TabView.Item style={styles.tabContent}>
                <MaterialIcons name="person" size={48} color="#2089dc" />
                <Text style={styles.tabText}>Profile Screen</Text>
              </TabView.Item>
            </TabView>
          </Card>

          {/* Styled Tabs */}
          <Card>
            <Card.Title>Custom Styled</Card.Title>
            <Card.Divider />
            <Tab
              value={index3}
              onChange={setIndex3}
              indicatorStyle={styles.customIndicator}
              containerStyle={styles.customTabContainer}
            >
              <Tab.Item
                title="Recent"
                titleStyle={
                  index3 === 0
                    ? styles.customActiveTitle
                    : styles.customInactiveTitle
                }
                containerStyle={styles.customTabItem}
              />
              <Tab.Item
                title="Popular"
                titleStyle={
                  index3 === 1
                    ? styles.customActiveTitle
                    : styles.customInactiveTitle
                }
                containerStyle={styles.customTabItem}
              />
              <Tab.Item
                title="Trending"
                titleStyle={
                  index3 === 2
                    ? styles.customActiveTitle
                    : styles.customInactiveTitle
                }
                containerStyle={styles.customTabItem}
              />
            </Tab>
            <TabView value={index3} onChange={setIndex3}>
              <TabView.Item style={styles.customTabContent}>
                <Text style={styles.tabText}>Recent items go here</Text>
              </TabView.Item>
              <TabView.Item style={styles.customTabContent}>
                <Text style={styles.tabText}>Popular items go here</Text>
              </TabView.Item>
              <TabView.Item style={styles.customTabContent}>
                <Text style={styles.tabText}>Trending items go here</Text>
              </TabView.Item>
            </TabView>
          </Card>

          {/* Dense Tabs */}
          <Card>
            <Card.Title>Dense Tabs</Card.Title>
            <Card.Divider />
            <Tab value={0} dense>
              <Tab.Item title="One" />
              <Tab.Item title="Two" />
              <Tab.Item title="Three" />
              <Tab.Item title="Four" />
            </Tab>
            <Text style={styles.note}>Compact tabs for more items</Text>
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
  tabContent: {
    width: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 100,
  },
  tabText: {
    fontSize: 16,
    color: "#333",
    marginTop: 8,
  },
  indicator: {
    backgroundColor: "#2089dc",
    height: 3,
  },
  activeTitle: {
    color: "#2089dc",
    fontSize: 12,
  },
  inactiveTitle: {
    color: "#999",
    fontSize: 12,
  },
  customIndicator: {
    backgroundColor: "#9c27b0",
    height: 4,
    borderRadius: 2,
  },
  customTabContainer: {
    backgroundColor: "#f3e5f5",
  },
  customTabItem: {
    backgroundColor: "transparent",
  },
  customActiveTitle: {
    color: "#9c27b0",
    fontWeight: "bold",
  },
  customInactiveTitle: {
    color: "#666",
  },
  customTabContent: {
    width: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 80,
    backgroundColor: "#faf5fc",
  },
  note: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
});
