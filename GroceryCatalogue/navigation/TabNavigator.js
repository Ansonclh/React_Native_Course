import React from 'react'
import { Text,StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function TabNavigator() {
  return (
    <SafeAreaProvider>
      <Text>Tab Navigator</Text>
    </SafeAreaProvider>
    
  )
}

export default TabNavigator

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  title: { fontSize: 27, marginBottom: 10, textAlign:'center',color: 'black', fontStyle:'italic'},
  itemContainer: { flexDirection: 'row', marginBottom: 10, alignItems: 'center' },
  image: { width: 120, height: 120, marginRight: 10 },
  details: { marginLeft:40,alignItems:'center',justifyContent:'center',width:200 },
  name: { fontSize: 19 },
  price: { color: 'green', fontWeight: 'bold'},
  addToCart: { color: 'blue', fontWeight: 'bold' },
  button: {
    backgroundColor: '#F48021',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    // fontWeight: 'bold',
    fontSize:13
  },
  safeArea: {
    flex: 1,
    paddingTop: 40,  // Sets 40px space from the top
  },
  brandName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#F48021',
    marginBottom: 10,
  }
});

export {styles}