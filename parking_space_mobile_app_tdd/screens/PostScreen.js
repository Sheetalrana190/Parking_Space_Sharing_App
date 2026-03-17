import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const PostScreen = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name.trim()) {
      setSubmitted(true);
      setName('');
      setTimeout(() => setSubmitted(false), 2000); // Auto-dismiss message
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Parking Space Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button title="Post" onPress={handleSubmit} />
      {submitted && <Text style={styles.message}>✅ Parking space posted!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    padding: 8,
  },
  message: {
    marginTop: 12,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default PostScreen;
