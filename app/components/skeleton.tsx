import { Card, Skeleton, Text } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SkeletonScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Skeleton Component" }} />
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
            Skeleton
          </Text>
          <Text style={styles.description}>
            Skeleton screens are used as loading placeholders for content.
          </Text>

          {/* Basic Skeleton */}
          <Card>
            <Card.Title>Basic Shapes</Card.Title>
            <Card.Divider />
            <View style={styles.skeletonRow}>
              <View style={styles.skeletonItem}>
                <Skeleton width={80} height={80} />
                <Text style={styles.label}>Square</Text>
              </View>
              <View style={styles.skeletonItem}>
                <Skeleton circle width={80} height={80} />
                <Text style={styles.label}>Circle</Text>
              </View>
            </View>
          </Card>

          {/* Text Skeleton */}
          <Card>
            <Card.Title>Text Lines</Card.Title>
            <Card.Divider />
            <View style={styles.textSkeleton}>
              <Skeleton width="100%" height={16} />
              <Skeleton width="100%" height={16} />
              <Skeleton width="80%" height={16} />
            </View>
          </Card>

          {/* Card Skeleton */}
          <Card>
            <Card.Title>Card Loading State</Card.Title>
            <Card.Divider />
            <View style={styles.cardSkeleton}>
              <Skeleton width="100%" height={150} />
              <View style={styles.cardContent}>
                <Skeleton width="60%" height={20} />
                <Skeleton width="100%" height={14} />
                <Skeleton width="100%" height={14} />
                <Skeleton width="40%" height={14} />
              </View>
            </View>
          </Card>

          {/* List Item Skeleton */}
          <Card>
            <Card.Title>List Items</Card.Title>
            <Card.Divider />
            {[1, 2, 3].map((item) => (
              <View key={item} style={styles.listItemSkeleton}>
                <Skeleton circle width={50} height={50} />
                <View style={styles.listItemContent}>
                  <Skeleton width="70%" height={16} />
                  <Skeleton width="50%" height={12} />
                </View>
              </View>
            ))}
          </Card>

          {/* Profile Skeleton */}
          <Card>
            <Card.Title>Profile Loading</Card.Title>
            <Card.Divider />
            <View style={styles.profileSkeleton}>
              <Skeleton circle width={100} height={100} />
              <View style={styles.profileInfo}>
                <Skeleton width={150} height={24} />
                <Skeleton width={100} height={16} />
              </View>
              <View style={styles.statsRow}>
                <View style={styles.statItem}>
                  <Skeleton width={40} height={20} />
                  <Skeleton width={60} height={14} />
                </View>
                <View style={styles.statItem}>
                  <Skeleton width={40} height={20} />
                  <Skeleton width={60} height={14} />
                </View>
                <View style={styles.statItem}>
                  <Skeleton width={40} height={20} />
                  <Skeleton width={60} height={14} />
                </View>
              </View>
            </View>
          </Card>

          {/* Animation Types */}
          <Card>
            <Card.Title>Animation Types</Card.Title>
            <Card.Divider />
            <View style={styles.animationRow}>
              <View style={styles.animationItem}>
                <Skeleton animation="pulse" width={80} height={80} />
                <Text style={styles.label}>Pulse</Text>
              </View>
              <View style={styles.animationItem}>
                <Skeleton animation="wave" width={80} height={80} />
                <Text style={styles.label}>Wave</Text>
              </View>
              <View style={styles.animationItem}>
                <Skeleton animation="none" width={80} height={80} />
                <Text style={styles.label}>None</Text>
              </View>
            </View>
          </Card>

          {/* Custom Styled Skeleton */}
          <Card>
            <Card.Title>Custom Colors</Card.Title>
            <Card.Divider />
            <View style={styles.colorRow}>
              <Skeleton
                width={80}
                height={80}
                skeletonStyle={{ backgroundColor: "#e3f2fd" }}
              />
              <Skeleton
                width={80}
                height={80}
                skeletonStyle={{ backgroundColor: "#fce4ec" }}
              />
              <Skeleton
                width={80}
                height={80}
                skeletonStyle={{ backgroundColor: "#e8f5e9" }}
              />
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
  skeletonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  skeletonItem: {
    alignItems: "center",
    gap: 8,
  },
  label: {
    fontSize: 12,
    color: "#666",
  },
  textSkeleton: {
    gap: 8,
  },
  cardSkeleton: {
    borderRadius: 8,
    overflow: "hidden",
  },
  cardContent: {
    padding: 12,
    gap: 8,
  },
  listItemSkeleton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 12,
  },
  listItemContent: {
    flex: 1,
    gap: 6,
  },
  profileSkeleton: {
    alignItems: "center",
    padding: 16,
  },
  profileInfo: {
    alignItems: "center",
    marginTop: 16,
    gap: 8,
  },
  statsRow: {
    flexDirection: "row",
    marginTop: 20,
    gap: 30,
  },
  statItem: {
    alignItems: "center",
    gap: 4,
  },
  animationRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  animationItem: {
    alignItems: "center",
    gap: 8,
  },
  colorRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
