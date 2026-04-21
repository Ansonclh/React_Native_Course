import React, { useContext } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { AuthContext } from './AuthProvider';

function ProfileScreen() {

  return (
    <View style={styles.container}>
     <View style={styles.text}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text:{
    fontWeight:'bold',
    fontSize:20
  }
});



export default ProfileScreen;
