import React, { useContext, useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default LoginScreen;
