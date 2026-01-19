import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Avatar, Card, ListItem, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { Alert, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ListItemScreen() {
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [checked, setChecked] = React.useState([false, true, false]);

  const toggleCheck = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  return (
    <>
      <Stack.Screen options={{ title: "ListItem Component" }} />
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
            ListItem
          </Text>
          <Text style={styles.description}>
            List items are used to display rows of information.
          </Text>

          {/* Basic ListItem */}
          <Card>
            <Card.Title>Basic ListItem</Card.Title>
            <Card.Divider />
            <View style={styles.listContainer}>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>List Item 1</ListItem.Title>
                </ListItem.Content>
              </ListItem>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>List Item 2</ListItem.Title>
                </ListItem.Content>
              </ListItem>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>List Item 3</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </View>
          </Card>

          {/* ListItem with Subtitle */}
          <Card>
            <Card.Title>With Subtitle</Card.Title>
            <Card.Divider />
            <View style={styles.listContainer}>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>John Doe</ListItem.Title>
                  <ListItem.Subtitle>Software Engineer</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>Jane Smith</ListItem.Title>
                  <ListItem.Subtitle>Product Manager</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View>
          </Card>

          {/* ListItem with Avatar */}
          <Card>
            <Card.Title>With Avatar</Card.Title>
            <Card.Divider />
            <View style={styles.listContainer}>
              <ListItem>
                <Avatar
                  rounded
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/36.jpg",
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title>John Doe</ListItem.Title>
                  <ListItem.Subtitle>Online</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
              <ListItem>
                <Avatar
                  rounded
                  source={{
                    uri: "https://randomuser.me/api/portraits/women/44.jpg",
                  }}
                />
                <ListItem.Content>
                  <ListItem.Title>Jane Smith</ListItem.Title>
                  <ListItem.Subtitle>Away</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            </View>
          </Card>

          {/* ListItem with Icon */}
          <Card>
            <Card.Title>With Icons</Card.Title>
            <Card.Divider />
            <View style={styles.listContainer}>
              <ListItem>
                <MaterialIcons name="inbox" size={24} color="#666" />
                <ListItem.Content>
                  <ListItem.Title>Inbox</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
              <ListItem>
                <MaterialIcons name="send" size={24} color="#666" />
                <ListItem.Content>
                  <ListItem.Title>Sent</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
              <ListItem>
                <MaterialIcons name="drafts" size={24} color="#666" />
                <ListItem.Content>
                  <ListItem.Title>Drafts</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </View>
          </Card>

          {/* Pressable ListItem */}
          <Card>
            <Card.Title>Pressable Items</Card.Title>
            <Card.Divider />
            <View style={styles.listContainer}>
              <ListItem onPress={() => Alert.alert("Settings pressed")}>
                <MaterialIcons name="settings" size={24} color="#666" />
                <ListItem.Content>
                  <ListItem.Title>Settings</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
              <ListItem onPress={() => Alert.alert("Help pressed")}>
                <MaterialIcons name="help" size={24} color="#666" />
                <ListItem.Content>
                  <ListItem.Title>Help & Feedback</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </View>
            <Text style={styles.note}>Tap items to see interaction</Text>
          </Card>

          {/* ListItem with CheckBox */}
          <Card>
            <Card.Title>With CheckBox</Card.Title>
            <Card.Divider />
            <View style={styles.listContainer}>
              {["Task 1", "Task 2", "Task 3"].map((task, index) => (
                <ListItem key={index} onPress={() => toggleCheck(index)}>
                  <ListItem.CheckBox
                    checked={checked[index]}
                    onPress={() => toggleCheck(index)}
                  />
                  <ListItem.Content>
                    <ListItem.Title>{task}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))}
            </View>
          </Card>

          {/* Accordion ListItem */}
          <Card>
            <Card.Title>Accordion</Card.Title>
            <Card.Divider />
            <View style={styles.listContainer}>
              <ListItem.Accordion
                content={
                  <>
                    <MaterialIcons name="folder" size={24} color="#666" />
                    <ListItem.Content>
                      <ListItem.Title>Documents</ListItem.Title>
                    </ListItem.Content>
                  </>
                }
                isExpanded={expanded1}
                onPress={() => setExpanded1(!expanded1)}
              >
                <ListItem>
                  <ListItem.Content>
                    <ListItem.Title>File 1.pdf</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
                <ListItem>
                  <ListItem.Content>
                    <ListItem.Title>File 2.docx</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              </ListItem.Accordion>

              <ListItem.Accordion
                content={
                  <>
                    <MaterialIcons name="photo" size={24} color="#666" />
                    <ListItem.Content>
                      <ListItem.Title>Photos</ListItem.Title>
                    </ListItem.Content>
                  </>
                }
                isExpanded={expanded2}
                onPress={() => setExpanded2(!expanded2)}
              >
                <ListItem>
                  <ListItem.Content>
                    <ListItem.Title>Photo 1.jpg</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
                <ListItem>
                  <ListItem.Content>
                    <ListItem.Title>Photo 2.png</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              </ListItem.Accordion>
            </View>
          </Card>

          {/* Styled ListItem */}
          <Card>
            <Card.Title>Custom Styled</Card.Title>
            <Card.Divider />
            <View style={styles.listContainer}>
              <ListItem containerStyle={styles.customListItem}>
                <MaterialIcons name="star" size={24} color="#ff9800" />
                <ListItem.Content>
                  <ListItem.Title style={styles.customTitle}>
                    Premium Item
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.customSubtitle}>
                    Special styling
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
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
  listContainer: {
    marginHorizontal: -15,
  },
  note: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
  customListItem: {
    backgroundColor: "#fff3e0",
    borderRadius: 8,
    marginHorizontal: 15,
  },
  customTitle: {
    color: "#e65100",
    fontWeight: "bold",
  },
  customSubtitle: {
    color: "#ff9800",
  },
});
