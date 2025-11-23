import { Avatar, Badge, Button, Card, Chip, Divider, Input, Text } from '@rneui/themed';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function RNETestScreen() {
  const [inputValue, setInputValue] = React.useState('');

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
