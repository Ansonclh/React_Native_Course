import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import FlowerlandingPage from './FlowerLandingPage';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <FlowerlandingPage/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
