
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../navigation/DrawerNavigator';

export default function FruitsScreen() {
    const fruits = [
      { name: 'Apple', price: '$1.20', image: 'https://images.unsplash.com/photo-1691304433281-349a0e244c44?q=80&w=1935&auto=format&fit=crop' },
      { name: 'Banana', price: '$0.80', image: 'https://images.unsplash.com/photo-1523667864248-fc55f5bad7e2?q=80&w=2070&auto=format&fit=crop' },
      { name: 'Grapes', price: '$2.00', image: 'https://images.unsplash.com/photo-1528132596460-787bb7adfd5f?q=80&w=1886&auto=format&fit=crop' },
      { name: 'Mango', price: '$1.50', image: 'https://images.unsplash.com/photo-1669207334420-66d0e3450283?q=80&w=1887&auto=format&fit=crop' },
      { name: 'Orange', price: '$1.00', image: 'https://images.unsplash.com/photo-1703476906067-b33358c61837?q=80&w=1887&auto=format&fit=crop' },
      { name: 'Strawberry', price: '$2.50', image: 'https://images.unsplash.com/photo-1495570689269-d883b1224443?q=80&w=1931&auto=format&fit=crop' },
    ];
  
    return (
      <ScrollView style={styles.container}>
       
      </ScrollView>
    );
  }
  
  