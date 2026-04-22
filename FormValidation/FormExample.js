import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Define validation schema using Yup


const FormExample = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title} testID='formTitle'>Registration Form</Text>
   
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  container: {
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  error: {
    color: '#d9534f',
    fontSize: 14,
    marginBottom: 10,
  },
});

export default FormExample;
