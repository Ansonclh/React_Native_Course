// ApartmentDetails.js
import React, { useState } from 'react';
import { ScrollView, View,ImageBackground , Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have react-native-vector-icons or expo for icons
import { FlatList } from 'react-native-web';

const CustomCarousel = ({ images }) => {  //Carousel 旋轉木馬
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.carouselWrapper}>
      {/* Left Arrow */}
      <TouchableOpacity onPress={goPrev} style={styles.arrowLeft}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>


      {/* Image Carousel */}
      <ScrollView
          horizontal
          style={styles.carouselContainer}
        >
          <Image source={{ uri: images[currentIndex] }} style={styles.carouselImage} />
      </ScrollView>

      {/* Right Arrow */}
      <TouchableOpacity onPress={goNext} style={styles.arrowRight}>
        <Ionicons name="arrow-forward" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const ApartmentDetails = ({ data }) => {
  return (
    <ImageBackground
    source={{ uri: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} // Background image link
    style={styles.background}
    imageStyle={{ opacity: 0.5 }} // Increase opacity for better visibility
  >

    <View style={styles.main}>
      <Text style={styles.header}>Luxury Apartments~Dreams begin here</Text>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.details}>
                  {item.bedrooms} Beds • {item.bathrooms} Baths
                </Text>
                <View testID="imageDisplay" style={styles.imageDisplay}>
                  <CustomCarousel images={item.images} />
                </View>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
      </ScrollView>
    </View>
    </ImageBackground>
  );
};

export default ApartmentDetails;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    // backgroundColor: '#f4f4f9',
  },
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
    width:600
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 20,
    textAlign: 'center',
    // fontFamily:'cursive'
  },
  card: {
    width: '100%',
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 18,
    color: '#8A8A8A',
    marginVertical: 5,
  },
  location: {
    fontSize: 16,
    color: '#4A90E2',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  details: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  imageDisplay: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  carouselWrapper: {
    position: 'relative',
    width: 300,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselContainer: {
    height: 160,
    width: 300,
  },
  carouselImage: {
    width: 300,
    height: 160,
    borderRadius: 10,
  },
  arrowLeft: {
    position: 'absolute',
    left:  -48,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 50,
  },
  arrowRight: {
    position: 'absolute',
    right: -48,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 50,
  },
});
