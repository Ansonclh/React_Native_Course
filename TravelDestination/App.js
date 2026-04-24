import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ContactUsScreen from './ContactUsScreen';
import GalleryScreen from './GalleryScreen';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
        <Drawer.Screen name="Gallery" component={GalleryScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
     backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  galleryContainer: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'white',
    marginVertical: 20,
    textAlign: 'justify',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  galleryImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  destinationName: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  imageContainer: {
    margin: 10,
   flex:'display',
   alignItems:'center',
   justifyContent:'center',
   flexDirection:'column'

  },
  button:{
    backgroundColor:'#FDCE96',
    borderRadius:10,
    width:90,
    
  },
  buttonText:{
    textAlign:'center',
    paddingVertical: 6,
    paddingHorizontal: 16,   
     color:'white'
  }
});

export {styles}