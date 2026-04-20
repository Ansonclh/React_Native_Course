import React from 'react';
import { View, Text, Image, Button, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const PopularworkoutPlans = [
  { id: '1', title: 'Full Body Workout', description: '45 minutes of full body exercise', duration: '45 min', imageUrl: 'https://images.unsplash.com/photo-1711623350002-d97138f35bf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '2', title: 'Cardio Blast', description: '30 minutes of intense cardio training', duration: '30 min', imageUrl: 'https://images.unsplash.com/photo-1723908902669-0878e08aa41c?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '3', title: 'Yoga for Flexibility', description: '1 hour yoga session for flexibility', duration: '60 min', imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const IntenseWorkoutPlans = [
  { id: '1', title: 'Zumba Class', description: '30 minutes of zumba classes', duration: '30 min', imageUrl: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '2', title: 'Circuit Training', description: '20 minutes of circuit training', duration: '20 min', imageUrl: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2lyY3VpdCUyMHRyYWluaW5nfGVufDB8fDB8fHwy' },
  { id: '3', title: 'Pilate Training', description: '60 minutes of pilate training', duration: '20 min', imageUrl: 'https://images.unsplash.com/photo-1620134280013-e756c46affc6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },

];

export default function FitnessWorld() {

  return (
    <ScrollView>
      <View>
        <Text>StartYour Fitness Journey</Text>
        <Text>Welcome to join fitness journey, where every rep brings you closer to your best self. Let’s crush your fitness goals together!</Text>
        <Text>Benefits of Our Fitness Programs</Text>
        <Text>Build muscle strength</Text>
        <Text>Improve cardiovascular health</Text>
        <Text>Increase flexibility and balance</Text>
        <Text>Mental clarity and focus</Text>
      </View>


      {/* Featured Training Types Section */}
      <View>
        <Text>Featured Training Types</Text>
      </View>

      {/*Popular Workout Plans Section */}
    


      {/*Intense Workout Plans Section*/}

      
    </ScrollView>
  );
}


