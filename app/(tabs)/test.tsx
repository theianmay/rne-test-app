import FontAwesome from '@react-native-vector-icons/fontawesome';
import { Button, Card, Text } from '@rneui/themed';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TestScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom', 'top']}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text h1 style={styles.title}>Experimental Test Area</Text>
        <Text style={styles.subtitle}>Add and test new components here</Text>

        {/* Example Test Section */}
        <Card>
          <Card.Title>Getting Started</Card.Title>
          <Card.Divider />
          <View style={styles.section}>
            <Text style={{ marginBottom: 12 }}>
              This is your experimental playground for testing new RNE components.
            </Text>
            <Text style={{ marginBottom: 12 }}>
              Add components you want to test or develop here without affecting the stable demo tab.
            </Text>
            <Button
              title="Example Button"
              icon={<FontAwesome name="rocket" size={20} color="white" style={{ marginRight: 8 }} />}
            />
          </View>
        </Card>

        {/* Add your test components below */}
        <Card>
          <Card.Title>Your Test Components</Card.Title>
          <Card.Divider />
          <View style={styles.section}>
            <Text style={{ textAlign: 'center', color: '#999' }}>
              Start adding components here...
            </Text>
          </View>
        </Card>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
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
    marginVertical: 10,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  section: {
    gap: 12,
  },
});
