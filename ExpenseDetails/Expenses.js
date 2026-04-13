import React from 'react';
import { Text, View, TextInput, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // For tab icons

// Home Screen with Form
const HomeScreen = () => {
  const [itemName, setItemName] = React.useState('');
  const [costType, setCostType] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [date, setDate] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Item</Text>
      <TextInput
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
        style={styles.input}
        placeholderTextColor="#6B7280"
      />
      <TextInput
        placeholder="Cost Type"
        value={costType}
        onChangeText={setCostType}
        style={styles.input}
        placeholderTextColor="#6B7280"
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        style={styles.input}
        keyboardType="numeric"
        placeholderTextColor="#6B7280"
      />
      <TextInput
        placeholder="Date"
        value={date}
        onChangeText={setDate}
        style={styles.input}
        placeholderTextColor="#6B7280"
      />
      <View style={styles.buttonContainer}>
        <Button title="Submit" color="#10B981" onPress={() => console.log('Item added on Home')} />
      </View>
    </View>
  );
};

// Add Screen (Similar to the one in the screenshot)
const AddItemScreen = () => {
  const [itemName, setItemName] = React.useState('');
  const [costType, setCostType] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [date, setDate] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Item</Text>
      <TextInput
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
        style={styles.input}
        placeholderTextColor="#6B7280"
      />
      <TextInput
        placeholder="Cost Type"
        value={costType}
        onChangeText={setCostType}
        style={styles.input}
        placeholderTextColor="#6B7280"
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        style={styles.input}
        keyboardType="numeric"
        placeholderTextColor="#6B7280"
      />
      <TextInput
        placeholder="Date"
        value={date}
        onChangeText={setDate}
        style={styles.input}
        placeholderTextColor="#6B7280"
      />
      <View style={styles.buttonContainer}>
        <Button title="Submit" color="#10B981" onPress={() => console.log('Item added')} />
      </View>
    </View>
  );
};

// Current Month Screen
const CurrentMonthScreen = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Current Month Overview</Text>
    <Text style={styles.info}>Your expenses for the current month will appear here.</Text>
  </View>
);

// Previous Month Screen
const PreviousMonthScreen = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Previous Month Overview</Text>
    <Text style={styles.info}>Your expenses for the previous month will appear here.</Text>
  </View>
);

// Summary Screen
const SummaryScreen = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Summary</Text>
    <Text style={styles.info}>This is a summary of your expenses and budget.</Text>
  </View>
);

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

function Expenses() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Current Month') {
              iconName = 'calendar-outline';
            } else if (route.name === 'Previous Month') {
              iconName = 'time-outline';
            } else if (route.name === 'Add') {
              iconName = 'add-circle-outline';
            } else if (route.name === 'Summary') {
              iconName = 'list-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#10B981',
          inactiveTintColor: '#4B5563',
          style: {
            backgroundColor: '#F3F4F6',
            borderTopColor: '#D1D5DB',
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Current Month" component={CurrentMonthScreen} />
        <Tab.Screen name="Previous Month" component={PreviousMonthScreen} />
        <Tab.Screen name="Add" component={AddItemScreen} />
        <Tab.Screen name="Summary" component={SummaryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Expenses;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111827',
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: '#6B7280',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    color: '#111827',
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
