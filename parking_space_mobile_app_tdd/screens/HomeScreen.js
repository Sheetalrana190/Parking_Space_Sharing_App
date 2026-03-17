import React, { useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import ParkingCard from '../components/ParkingCard';
import { parkingData } from '../data/mockData';

const HomeScreen = () => {
  const [spaces, setSpaces] = useState(parkingData);

  const handleBook = (id) => {
    const updated = spaces.map(space =>
      space.id === id ? { ...space, booked: true } : space
    );
    setSpaces(updated);
  };

  return (
    <SafeAreaView style={{ padding: 16 }}>
      <FlatList
        data={spaces}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ParkingCard space={item} onBook={() => handleBook(item.id)} />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;