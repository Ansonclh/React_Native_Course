import React, { useContext } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { AuthContext } from './AuthProvider';

function ProfileScreen() {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <Text>Please log in.</Text>
  }

  return (
    <View style={styles.container}>
     <View style={styles.text}>
      <Text>Welcome, {user.username}!</Text>
      <Text>Email: {user.email}</Text>
      <Button title="Logout" onPress={logout} />

     </View>
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
