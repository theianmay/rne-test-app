import { Badge, Card, Text } from '@rneui/themed';
import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BadgeScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Badge Component' }} />
      <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" translucent={false} />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text h2 style={styles.title}>Badge</Text>
          <Text style={styles.description}>
            Badges are used to highlight an item's status for quick recognition.
          </Text>

          <Card>
            <Card.Title>Badge Status</Card.Title>
            <Card.Divider />
            <View style={[styles.section, styles.row]}>
              <Badge value="99+" status="error" />
              <Badge value="New" status="success" />
              <Badge value="!" status="warning" />
              <Badge value="5" status="primary" />
            </View>
          </Card>

          <View style={{ height: 40 }} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  section: {
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
