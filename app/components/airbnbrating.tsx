import { AirbnbRating, Card, Text } from '@rneui/themed';
import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AirbnbRatingScreen() {
  const [rating1, setRating1] = React.useState(3);
  const [rating2, setRating2] = React.useState(4);
  const [rating3, setRating3] = React.useState(5);

  return (
    <>
      <Stack.Screen options={{ title: 'AirbnbRating Component' }} />
      <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" translucent={false} />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text h2 style={styles.title}>AirbnbRating</Text>
          <Text style={styles.description}>
            A rating component with Airbnb-style design and built-in review text.
          </Text>

          {/* Basic AirbnbRating */}
          <Card>
            <Card.Title>Basic AirbnbRating</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <AirbnbRating
                count={5}
                defaultRating={rating1}
                size={30}
                onFinishRating={setRating1}
              />
              <Text style={styles.ratingText}>Current Rating: {rating1}</Text>
            </View>
          </Card>

          {/* With Review Text */}
          <Card>
            <Card.Title>With Review Text</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <AirbnbRating
                count={5}
                defaultRating={rating2}
                size={30}
                showRating
                onFinishRating={setRating2}
              />
              <Text style={styles.ratingText}>Current Rating: {rating2}</Text>
            </View>
          </Card>

          {/* Custom Reviews */}
          <Card>
            <Card.Title>Custom Review Text</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <AirbnbRating
                count={5}
                defaultRating={rating3}
                size={30}
                showRating
                reviews={['Terrible', 'Bad', 'OK', 'Good', 'Amazing']}
                onFinishRating={setRating3}
              />
              <Text style={styles.ratingText}>Current Rating: {rating3}</Text>
            </View>
          </Card>

          {/* Different Star Counts */}
          <Card>
            <Card.Title>Different Star Counts</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <Text h4 style={{ marginBottom: 10 }}>3 Stars</Text>
              <AirbnbRating
                count={3}
                defaultRating={2}
                size={40}
                showRating
              />
              
              <Text h4 style={{ marginTop: 20, marginBottom: 10 }}>7 Stars</Text>
              <AirbnbRating
                count={7}
                defaultRating={4}
                size={25}
                showRating
              />
            </View>
          </Card>

          {/* Different Sizes */}
          <Card>
            <Card.Title>Different Sizes</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <Text h4 style={{ marginBottom: 10 }}>Small (20px)</Text>
              <AirbnbRating
                count={5}
                defaultRating={3}
                size={20}
              />
              
              <Text h4 style={{ marginTop: 20, marginBottom: 10 }}>Large (50px)</Text>
              <AirbnbRating
                count={5}
                defaultRating={4}
                size={50}
              />
            </View>
          </Card>

          {/* Read Only */}
          <Card>
            <Card.Title>Read Only (isDisabled)</Card.Title>
            <Card.Divider />
            <View style={styles.section}>
              <AirbnbRating
                count={5}
                defaultRating={4}
                size={30}
                showRating
                isDisabled
              />
              <Text style={styles.note}>This rating cannot be changed</Text>
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
  ratingText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  note: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
  },
});
