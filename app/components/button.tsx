import FontAwesome from '@react-native-vector-icons/fontawesome';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { Button, Card, Text } from '@rneui/themed';
import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ButtonScreen() {
  const [loading, setLoading] = React.useState(false);

  const handlePress = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Button Component' }} />
      <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" translucent={false} />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text h2 style={styles.title}>Button</Text>
          <Text style={styles.description}>
            A component for user interaction. Buttons communicate actions that users can take.
          </Text>

          {/* Basic Buttons */}
          <Card>
            <Card.Title>Button Types</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <Button title="Solid Button" />
              <Button title="Outline Button" type="outline" />
              <Button title="Clear Button" type="clear" />
            </View>
          </Card>

          {/* Button Sizes */}
          <Card>
            <Card.Title>Button Sizes</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <Button title="Small Button" size="sm" />
              <Button title="Medium Button" size="md" />
              <Button title="Large Button" size="lg" />
            </View>
          </Card>

          {/* Buttons with Icons */}
          <Card>
            <Card.Title>Buttons with Icons</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <Button
                title="Home"
                icon={<FontAwesome name="home" size={20} color="white" style={{ marginRight: 8 }} />}
              />
              <Button
                title="Favorite"
                type="outline"
                icon={<MaterialIcons name="favorite" size={20} color="#2089dc" style={{ marginRight: 8 }} />}
              />
              <Button
                title="Icon Right"
                iconRight
                icon={<FontAwesome name="arrow-right" size={20} color="white" style={{ marginLeft: 8 }} />}
              />
            </View>
          </Card>

          {/* Loading & Disabled States */}
          <Card>
            <Card.Title>Button States</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <Button title="Loading Button" loading={loading} onPress={handlePress} />
              <Button title="Disabled Button" disabled />
            </View>
          </Card>

          {/* Button Colors */}
          <Card>
            <Card.Title>Button Colors</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <Button title="Primary" color="primary" />
              <Button title="Secondary" color="secondary" />
              <Button title="Success" color="success" />
              <Button title="Warning" color="warning" />
              <Button title="Error" color="error" />
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
});
