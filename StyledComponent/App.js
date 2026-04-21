import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToggleTheme from './ToggleTheme';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <ToggleTheme/> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
