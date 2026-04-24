import { View, Text, TextInput, Button, ImageBackground} from 'react-native';
import { styles } from "./App";
import React, { useState } from 'react';


const ContactUsScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleContact = () => {
      if(name && email && message) {
        alert(`Thank you, ${name}, for reaching out! We will get back to you soon.`);
        // Clear the fields after submission
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Error', 'Please fill out all fields.');
      }
    };
    return (
      <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1506606352681-649023fac596?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.backgroundImage} blurRadius={5}>
        <View style={styles.formContainer} testID="formData">
          <Text style={styles.text} testID='contactText'>Get in Touch</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            placeholderTextColor="#ccc"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Message"
            placeholderTextColor="#ccc"
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={4}
          />

          <Button title="Send Message" onPress={handleContact} />
        </View>
      </ImageBackground>
    );
  };
  export default ContactUsScreen