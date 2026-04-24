import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch data from API
    const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users'); // API URL  //https://jsonplaceholder.typicode.com/usesr

      if(response.status == 404) {
              throw Error("Data not found");
            } else {
            const json = await response.json(); // Parsing the JSON response
            setData(json); // Set data in state
            }
          } catch (error) {
            console.error('Error fetching data:', error);
            setData([{ name: 'No data found' }]); // Set 'No data found' in case of an exception
          } finally {
            setLoading(false); // Stop loading when data is fetched
          }
        };

  // useEffect to fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Users List</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.name}>{item.name}</Text>
              {item.email && <Text style={styles.email}>{item.email}</Text>}
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
});

export default App;