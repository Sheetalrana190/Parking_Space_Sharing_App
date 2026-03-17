import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ParkingCard = ({ space, onBook }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{space.name}</Text>
      <Text>{space.location}</Text>
      <Button
        title={space.booked ? "Booked" : "Book Now"}
        onPress={onBook}
        disabled={space.booked}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 12,
    margin: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default ParkingCard;