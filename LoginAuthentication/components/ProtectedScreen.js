import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AuthContext } from './AuthProvider';

function ProtectedScreen() {
  
  const { user} = useContext(AuthContext);

  if (!user) {
    return <Text> Please log in to access this screen.</Text>
  }

  if (user.role === 'admin') {
    return (
      <View style={styles.container}>
        <Text>Access granted, {user.username}!</Text>
      </View>
    )
  }

  return (
    <Text testID='accessDeniedMessage'>
      Access denied. You do not have the required permissions to view this screen.
    </Text>
  )
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProtectedScreen;
