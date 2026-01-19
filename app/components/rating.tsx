import { Card, Rating, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RatingScreen() {
  const [rating1, setRating1] = React.useState(3);
  const [rating2, setRating2] = React.useState(3.5);
  const [rating3, setRating3] = React.useState(4);

  return (
    <>
      <Stack.Screen options={{ title: "Rating Component" }} />
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
            Rating
          </Text>
          <Text style={styles.description}>
            Ratings are used to collect measurable feedback from users.
          </Text>

          {/* Basic Rating */}
          <Card>
            <Card.Title>Basic Rating</Card.Title>
            <Card.Divider />
            <View style={styles.centered}>
              <Rating
                startingValue={rating1}
                imageSize={40}
                onFinishRating={setRating1}
              />
              <Text style={styles.ratingText}>Rating: {rating1}</Text>
            </View>
          </Card>

          {/* Fractional Rating */}
          <Card>
            <Card.Title>Fractional Rating</Card.Title>
            <Card.Divider />
            <View style={styles.centered}>
              <Rating
                startingValue={rating2}
                imageSize={40}
                fractions={2}
                onFinishRating={setRating2}
              />
              <Text style={styles.ratingText}>
                Rating: {rating2.toFixed(1)}
              </Text>
            </View>
            <Text style={styles.note}>Supports half-star ratings</Text>
          </Card>

          {/* Read-Only Rating */}
          <Card>
            <Card.Title>Read-Only Rating</Card.Title>
            <Card.Divider />
            <View style={styles.centered}>
              <Rating startingValue={4.5} imageSize={40} readonly />
              <Text style={styles.ratingText}>4.5 / 5</Text>
            </View>
            <Text style={styles.note}>Cannot be changed by user</Text>
          </Card>

          {/* Different Sizes */}
          <Card>
            <Card.Title>Different Sizes</Card.Title>
            <Card.Divider />
            <View style={styles.centered}>
              <Text style={styles.sizeLabel}>Small (20px)</Text>
              <Rating startingValue={3} imageSize={20} readonly />

              <Text style={[styles.sizeLabel, { marginTop: 16 }]}>
                Medium (35px)
              </Text>
              <Rating startingValue={4} imageSize={35} readonly />

              <Text style={[styles.sizeLabel, { marginTop: 16 }]}>
                Large (50px)
              </Text>
              <Rating startingValue={5} imageSize={50} readonly />
            </View>
          </Card>

          {/* Rating Types */}
          <Card>
            <Card.Title>Rating Types</Card.Title>
            <Card.Divider />
            <View style={styles.centered}>
              <Text style={styles.sizeLabel}>Star (default)</Text>
              <Rating type="star" startingValue={4} imageSize={35} readonly />

              <Text style={[styles.sizeLabel, { marginTop: 16 }]}>Heart</Text>
              <Rating type="heart" startingValue={4} imageSize={35} readonly />

              <Text style={[styles.sizeLabel, { marginTop: 16 }]}>Bell</Text>
              <Rating type="bell" startingValue={4} imageSize={35} readonly />

              <Text style={[styles.sizeLabel, { marginTop: 16 }]}>Rocket</Text>
              <Rating type="rocket" startingValue={4} imageSize={35} readonly />
            </View>
          </Card>

          {/* Rating Count */}
          <Card>
            <Card.Title>Custom Rating Count</Card.Title>
            <Card.Divider />
            <View style={styles.centered}>
              <Text style={styles.sizeLabel}>3 Stars</Text>
              <Rating
                ratingCount={3}
                startingValue={2}
                imageSize={40}
                readonly
              />

              <Text style={[styles.sizeLabel, { marginTop: 16 }]}>
                10 Stars
              </Text>
              <Rating
                ratingCount={10}
                startingValue={7}
                imageSize={25}
                readonly
              />
            </View>
          </Card>

          {/* Interactive Rating with Callback */}
          <Card>
            <Card.Title>Interactive Rating</Card.Title>
            <Card.Divider />
            <View style={styles.centered}>
              <Rating
                showRating
                startingValue={rating3}
                imageSize={40}
                onFinishRating={setRating3}
              />
            </View>
            <Text style={styles.note}>Swipe or tap to change rating</Text>
          </Card>

          {/* Styled Rating */}
          <Card>
            <Card.Title>Custom Tint Color</Card.Title>
            <Card.Divider />
            <View style={styles.centered}>
              <Rating
                startingValue={4}
                imageSize={40}
                tintColor="#f5f5f5"
                readonly
              />
            </View>
            <Text style={styles.note}>Background matches card color</Text>
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
  centered: {
    alignItems: "center",
    paddingVertical: 8,
  },
  ratingText: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  note: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 14,
    color: "#999",
    fontStyle: "italic",
  },
  sizeLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
});
