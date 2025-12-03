import { Avatar, Card, Text } from '@rneui/themed';
import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AvatarScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Avatar Component' }} />
      <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" translucent={false} />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text h2 style={styles.title}>Avatar</Text>
          <Text style={styles.description}>
            Avatars are used to represent a person or object.
          </Text>

          {/* Basic Avatars */}
          <Card>
            <Card.Title>Avatar Types</Card.Title>
            <Card.Divider />
            <View style={[styles.section, styles.row]}>
              <Avatar
                size={64}
                rounded
                title="JD"
                containerStyle={{ backgroundColor: '#3d4db7' }}
              />
              <Avatar
                size={64}
                rounded
                source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
              />
              <Avatar
                size={64}
                rounded
                title="AB"
                containerStyle={{ backgroundColor: '#6733b9' }}
              />
            </View>
          </Card>

          {/* Avatar Sizes */}
          <Card>
            <Card.Title>Avatar Sizes</Card.Title>
            <Card.Divider />
            <View style={[styles.section, styles.row]}>
              <Avatar
                size="small"
                rounded
                title="SM"
                containerStyle={{ backgroundColor: '#2089dc' }}
              />
              <Avatar
                size="medium"
                rounded
                title="MD"
                containerStyle={{ backgroundColor: '#2089dc' }}
              />
              <Avatar
                size="large"
                rounded
                title="LG"
                containerStyle={{ backgroundColor: '#2089dc' }}
              />
              <Avatar
                size="xlarge"
                rounded
                title="XL"
                containerStyle={{ backgroundColor: '#2089dc' }}
              />
            </View>
          </Card>

          {/* Avatar Shapes */}
          <Card>
            <Card.Title>Avatar Shapes</Card.Title>
            <Card.Divider />
            <View style={[styles.section, styles.row]}>
              <Avatar
                size={64}
                title="SQ"
                containerStyle={{ backgroundColor: '#ff9800' }}
              />
              <Avatar
                size={64}
                rounded
                title="RD"
                containerStyle={{ backgroundColor: '#4caf50' }}
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
