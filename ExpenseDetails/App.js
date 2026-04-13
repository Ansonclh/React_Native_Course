// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Expenses from './Expenses';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <Expenses/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});