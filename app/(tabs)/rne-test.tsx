import Feather from '@react-native-vector-icons/feather';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import Ionicons from '@react-native-vector-icons/ionicons';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { AirbnbRating, Avatar, Badge, Button, Card, Chip, Divider, Input, Rating, Text } from '@rneui/themed';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RNETestScreen() {
  const [inputValue, setInputValue] = React.useState('');
  const [rating, setRating] = React.useState(3);
  const [airbnbRating, setAirbnbRating] = React.useState(4);

  return (
    <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom', 'top']}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text h1 style={styles.title}>React Native Elements Test</Text>
        <Text style={styles.subtitle}>Testing bleeding edge components</Text>

      {/* Buttons Section */}
      <Card>
        <Card.Title>Buttons</Card.Title>
        <Card.Divider />
        <View style={styles.section}>
          <Button title="Solid Button" />
          <Button title="Outline Button" type="outline" />
          <Button title="Clear Button" type="clear" />
          <Button title="Loading" loading />
        </View>
      </Card>

      {/* Input Section */}
      <Card>
        <Card.Title>Input</Card.Title>
        <Card.Divider />
        <View style={styles.section}>
          <Input
            placeholder="Enter text here"
            value={inputValue}
            onChangeText={setInputValue}
          />
          <Input
            placeholder="With label"
            label="Username"
          />
          <Input
            placeholder="Disabled input"
            disabled
          />
        </View>
      </Card>

      {/* Avatars Section */}
      <Card>
        <Card.Title>Avatars</Card.Title>
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

      {/* Badges Section */}
      <Card>
        <Card.Title>Badges</Card.Title>
        <Card.Divider />
        <View style={[styles.section, styles.row]}>
          <Badge value="99+" status="error" />
          <Badge value="New" status="success" />
          <Badge value="!" status="warning" />
          <Badge value="5" status="primary" />
        </View>
      </Card>

      {/* Chips Section */}
      <Card>
        <Card.Title>Chips</Card.Title>
        <Card.Divider />
        <View style={[styles.section, styles.row]}>
          <Chip title="Solid Chip" />
          <Chip title="Outline" type="outline" />
          <Chip title="Disabled" disabled />
        </View>
      </Card>

      {/* Rating Section */}
      <Card>
        <Card.Title>Ratings</Card.Title>
        <Card.Divider />
        <View style={styles.section}>
          <Text h4 style={{ marginBottom: 8 }}>Standard Rating (Hearts)</Text>
          <Rating
            type="heart"
            ratingCount={5}
            imageSize={30}
            startingValue={rating}
            onFinishRating={setRating}
            style={{ paddingVertical: 10 }}
          />
          <Text style={{ textAlign: 'center', marginTop: 8 }}>
            Rating: {rating}/5
          </Text>

          <Text h4 style={{ marginTop: 20, marginBottom: 8 }}>Airbnb Style Rating</Text>
          <AirbnbRating
            count={5}
            defaultRating={airbnbRating}
            size={30}
            onFinishRating={setAirbnbRating}
            showRating
          />
        </View>
      </Card>

      {/* Dividers Section */}
      <Card>
        <Card.Title>Dividers</Card.Title>
        <Card.Divider />
        <View style={styles.section}>
          <Text>Content above</Text>
          <Divider style={{ marginVertical: 10 }} />
          <Text>Content below</Text>
          <Divider style={{ marginVertical: 10 }} inset />
          <Text>Inset divider</Text>
        </View>
      </Card>

      {/* Icons Section - New Modular API */}
      <Card>
        <Card.Title>Icons (New Modular API)</Card.Title>
        <Card.Divider />
        <View style={styles.section}>
          <Text h4 style={{ marginBottom: 8 }}>FontAwesome</Text>
          <View style={[styles.row, { marginBottom: 16 }]}>
            <FontAwesome name="home" size={30} color="#517fa4" />
            <FontAwesome name="star" size={30} color="#f50" />
            <FontAwesome name="heart" size={30} color="#e91e63" />
            <FontAwesome name="rocket" size={30} color="#9c27b0" />
          </View>

          <Text h4 style={{ marginBottom: 8 }}>Material Icons</Text>
          <View style={[styles.row, { marginBottom: 16 }]}>
            <MaterialIcons name="favorite" size={30} color="#e91e63" />
            <MaterialIcons name="settings" size={30} color="#607d8b" />
            <MaterialIcons name="search" size={30} color="#2196f3" />
            <MaterialIcons name="account-circle" size={30} color="#4caf50" />
          </View>

          <Text h4 style={{ marginBottom: 8 }}>Ionicons</Text>
          <View style={[styles.row, { marginBottom: 16 }]}>
            <Ionicons name="home" size={30} color="#ff9800" />
            <Ionicons name="star" size={30} color="#ffc107" />
            <Ionicons name="heart" size={30} color="#f44336" />
            <Ionicons name="rocket" size={30} color="#673ab7" />
          </View>

          <Text h4 style={{ marginBottom: 8 }}>Feather</Text>
          <View style={[styles.row, { marginBottom: 16 }]}>
            <Feather name="home" size={30} color="#00bcd4" />
            <Feather name="star" size={30} color="#ffeb3b" />
            <Feather name="heart" size={30} color="#ff5722" />
            <Feather name="send" size={30} color="#3f51b5" />
          </View>

          <Text h4 style={{ marginBottom: 8 }}>FontAwesome 6</Text>
          <View style={styles.row}>
            <FontAwesome6 name="house" size={30} color="#795548" iconStyle="solid" />
            <FontAwesome6 name="star" size={30} color="#ff9800" iconStyle="solid" />
            <FontAwesome6 name="heart" size={30} color="#e91e63" iconStyle="solid" />
            <FontAwesome6 name="fire" size={30} color="#ff5722" iconStyle="solid" />
          </View>
        </View>
      </Card>

      {/* Buttons with Icons */}
      <Card>
        <Card.Title>Buttons with Icons (New API)</Card.Title>
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
            title="Send"
            type="clear"
            icon={<Feather name="send" size={20} color="#2089dc" style={{ marginRight: 8 }} />}
          />
        </View>
      </Card>

      {/* Text Section */}
      <Card>
        <Card.Title>Text Styles</Card.Title>
        <Card.Divider />
        <View style={styles.section}>
          <Text h1>Heading 1</Text>
          <Text h2>Heading 2</Text>
          <Text h3>Heading 3</Text>
          <Text h4>Heading 4</Text>
          <Text>Regular text with default styling</Text>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
