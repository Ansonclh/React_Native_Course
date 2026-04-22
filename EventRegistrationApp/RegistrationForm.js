// RegistrationForm.js
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground,TouchableOpacity  } from 'react-native';

const RegistrationForm = ({ onConfirm }) => {


  

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} // Use URI instead of require()
      style={styles.background}
      blurRadius={5} 
    >
      <Text style={styles.title}>Event Registration Form</Text>

      <View style={styles.container} testID='registrationFormDetails'>

        
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center', 
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 8,
    padding: 16,
    margin: 16,
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1,
    shadowRadius: 4, 
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color:'#CA804D',
    textAlign:'center',
     fontWeight:'bold'
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#CA804D',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegistrationForm;
export {styles}
