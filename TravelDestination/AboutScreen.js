import { View, Text,ImageBackground, ScrollView } from 'react-native';
import { styles } from "./App";


const AboutScreen = () => (
    <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.backgroundImage} blurRadius={5}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>About Our Travel Services</Text>
          <Text style={styles.description}>
            At Wanderlust Travels, we specialize in creating personalized travel experiences for our clients. 
            With over 10 years of experience in the travel industry, we offer a wide range of services including 
            luxury vacations, adventure tours, family holidays, and romantic getaways. Our expert team is 
            passionate about helping you explore the world with tailored packages to suit your preferences. 
            Discover breathtaking destinations and unforgettable memories with us.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
  export default AboutScreen