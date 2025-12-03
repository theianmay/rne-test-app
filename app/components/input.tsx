import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Text } from '@rneui/themed';

export default function inputScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Input Component' }} />
      <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" translucent={false} />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text h2 style={styles.title}>Input</Text>
          <Text style={styles.description}>
            Component examples coming soon...
          </Text>
          <Card>
            <Card.Title>Examples</Card.Title>
            <Card.Divider />
            <Text>Add your component examples here</Text>
          </Card>
          <View style={{ height: 40 }} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f5f5f5' },
  container: { flex: 1 },
  contentContainer: { padding: 16 },
  title: { textAlign: 'center', marginBottom: 8 },
  description: { textAlign: 'center', color: '#666', marginBottom: 20, paddingHorizontal: 16 },
});
