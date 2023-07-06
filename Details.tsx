import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';

const HomePage = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    // Perform search logic here based on departure, destination, and date
    console.log('Search:', {
      departure,
      destination,
      date,
    });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    inputContainer: {
      marginBottom: 8,
    },
    label: {
      marginBottom: 4,
      fontSize: 16,
      fontWeight: 'bold',
    },
    input: {
      padding: 8,
      fontSize: 16,
      color: 'blue',
      backgroundColor: 'white', // Change the background color to white
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>From</Text>
        <TextInput
          style={styles.input}
          value={departure}
          onChangeText={text => setDeparture(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>To</Text>
        <TextInput
          style={styles.input}
          value={destination}
          onChangeText={text => setDestination(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Dates</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={text => setDate(text)}
        />
      </View>
      <Button mode="contained" onPress={handleSearch}>
        Search
      </Button>
    </View>
  );
};

export default HomePage;