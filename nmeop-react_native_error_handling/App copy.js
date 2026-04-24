import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Platform, Pressable } from 'react-native';

const App = () => {
  const [user, setUser] = useState(null);  // Initially, user is null
  const [greeting, setGreeting] = useState('');

    const handleGreet = () => {
    try {
      // Trying to access user.name when user is null or undefined will throw a TypeError
      setGreeting(`Hello, ${user.name}!`);
    } catch (error) {
      if (error instanceof TypeError) {
        console.error('TypeError:', error.message);  // Log the error to the console
        if (Platform.OS === 'web') {
            // Use alert for web
            alert('User is not defined or user.name is not accessible');
          } else {
            // Use React Native Alert for mobile
            Alert.alert(
              'Error', 'User is not defined or user.name is not accessible',
            );
          }
      }
      setGreeting('Hello!'); // Set Greeting to Hello if error occurs
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Your Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        onChangeText={text => setUser({ name: text })}  // Setting the user object
      />
      <Pressable style={styles.pressable} onPress={handleGreet}>
        <Text style={styles.pressableText}>Greet Me</Text>
      </Pressable>
      {greeting !== '' && <Text style={styles.greeting}>{greeting}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%',
  },
  pressable: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  pressableText: {
    color: 'white',
    fontSize: 16,
  },
  greeting: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
  },
});

export default App;