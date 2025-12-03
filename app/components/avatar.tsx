import FontAwesome from '@react-native-vector-icons/fontawesome';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { Avatar, Card, Text } from '@rneui/themed';
import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
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

          {/* Basic Avatars with Images */}
          <Card>
            <Card.Title>Image Avatars</Card.Title>
            <Card.Divider />
            <View style={[styles.section, styles.row]}>
              <Avatar
                size={64}
                rounded
                source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
              />
              <Avatar
                size={64}
                rounded
                source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
              />
              <Avatar
                size={64}
                rounded
                source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
              />
            </View>
          </Card>

          {/* Title/Initial Avatars */}
          <Card>
            <Card.Title>Title/Initial Avatars</Card.Title>
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
                title="AB"
                containerStyle={{ backgroundColor: '#6733b9' }}
              />
              <Avatar
                size={64}
                rounded
                title="MK"
                containerStyle={{ backgroundColor: '#e91e63' }}
              />
            </View>
          </Card>

          {/* Icon Avatars */}
          <Card>
            <Card.Title>Icon Avatars</Card.Title>
            <Card.Divider />
            <View style={[styles.section, styles.row]}>
              <Avatar
                size={64}
                rounded
                icon={{ name: 'user', type: 'font-awesome' }}
                containerStyle={{ backgroundColor: '#9c27b0' }}
              >
                <FontAwesome name="user" size={32} color="white" />
              </Avatar>
              <Avatar
                size={64}
                rounded
                containerStyle={{ backgroundColor: '#ff9800' }}
              >
                <MaterialIcons name="person" size={40} color="white" />
              </Avatar>
              <Avatar
                size={64}
                rounded
                containerStyle={{ backgroundColor: '#4caf50' }}
              >
                <FontAwesome name="heart" size={32} color="white" />
              </Avatar>
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

          {/* Avatar with Accessory */}
          <Card>
            <Card.Title>Avatar with Accessory</Card.Title>
            <Card.Divider />
            <View style={[styles.section, styles.row]}>
              <Avatar
                size={80}
                rounded
                source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
              >
                <Avatar.Accessory />
              </Avatar>
              <Avatar
                size={80}
                rounded
                title="JD"
                containerStyle={{ backgroundColor: '#3d4db7' }}
              >
                <Avatar.Accessory
                  style={{ backgroundColor: '#4caf50' }}
                />
              </Avatar>
              <Avatar
                size={80}
                rounded
                containerStyle={{ backgroundColor: '#9c27b0' }}
              >
                <FontAwesome name="user" size={40} color="white" />
                <Avatar.Accessory
                  onPress={() => alert('Edit Avatar')}
                />
              </Avatar>
            </View>
            <Text style={styles.note}>Tap the edit icon on the third avatar</Text>
          </Card>

          {/* Custom Accessory Icons */}
          <Card>
            <Card.Title>Custom Accessory Icons</Card.Title>
            <Card.Divider />
            <View style={[styles.section, styles.row]}>
              <View style={{ alignItems: 'center' }}>
                <Avatar
                  size={80}
                  rounded
                  source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
                >
                  <Avatar.Accessory name="edit" type="material" {...({} as any)} />
                </Avatar>
                <Text style={{ fontSize: 12, marginTop: 4 }}>Edit Icon</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Avatar
                  size={80}
                  rounded
                  title="MK"
                  containerStyle={{ backgroundColor: '#e91e63' }}
                >
                  <Avatar.Accessory 
                    {...({ name: "check", type: "material" } as any)}
                    style={{ backgroundColor: '#4caf50' }} 
                  />
                </Avatar>
                <Text style={{ fontSize: 12, marginTop: 4 }}>Check Icon</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Avatar
                  size={80}
                  rounded
                  source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
                >
                  <Avatar.Accessory 
                    {...({ name: "add", type: "material" } as any)}
                    style={{ backgroundColor: '#ff5722' }} 
                  />
                </Avatar>
                <Text style={{ fontSize: 12, marginTop: 4 }}>Add Icon</Text>
              </View>
            </View>
            <Text style={styles.note}>Custom icons using name and type props (edit, check, add)</Text>
          </Card>

          {/* Pressable Avatars */}
          <Card>
            <Card.Title>Pressable Avatars</Card.Title>
            <Card.Divider />
            <View style={[styles.section, styles.row]}>
              <TouchableOpacity onPress={() => alert('Avatar 1 pressed!')}>
                <Avatar
                  size={64}
                  rounded
                  source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('Avatar 2 pressed!')}>
                <Avatar
                  size={64}
                  rounded
                  title="AB"
                  containerStyle={{ backgroundColor: '#e91e63' }}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.note}>Tap avatars to see interaction</Text>
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
  note: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
  },
});
