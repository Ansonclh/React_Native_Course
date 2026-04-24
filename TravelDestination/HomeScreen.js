
import { View, Text, ImageBackground} from 'react-native';
import { styles } from "./App";

const HomeScreen = () => (
    <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.backgroundImage} blurRadius={5}>
      <View style={styles.container}>
        <Text style={styles.text}>Discover Your Next Adventure!</Text>
        <Text style={styles.subText}>Explore the most beautiful destinations around the world with our exclusive travel packages. Whether you're looking for relaxation or adventure, we've got you covered!</Text>
      </View>
    </ImageBackground>
  );
  export default HomeScreen