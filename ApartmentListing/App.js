// App.js
import React from 'react';
import ApartmentDetails from './ApartmentDetails';

const DATA = [
  { 
    id: '1', 
    title: 'Luxury Apartment', 
    price: '$1,200,000', 
    location: 'New York', 
    description: 'This luxury apartment offers stunning panoramic views of the New York skyline. It features modern amenities, including a fully equipped kitchen and spacious living areas. Ideal for anyone looking to enjoy the best of city living.', 
    bedrooms: 3, 
    bathrooms: 2, 
    images: [
      'https://cdn.pixabay.com/photo/2023/01/10/20/56/nyc-7710506_1280.jpg',
      'https://cdn.pixabay.com/photo/2016/11/22/23/38/apartment-1851201_1280.jpg',
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ]
  },
  { 
    id: '2', 
    title: 'Beachfront House', 
    price: '$900,000', 
    location: 'Miami', 
    description: 'A beautiful beachfront house located just steps away from the ocean. With direct access to the beach, this property offers a perfect escape. The expansive deck is ideal for entertaining and enjoying sunset views.', 
    bedrooms: 4, 
    bathrooms: 3, 
    images: [
      'https://images.unsplash.com/photo-1708149564414-0ea643c6c902?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1721369483526-62f48a00b949?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1711426793204-b549cd02eaca?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ]
  },
  { 
    id: '3', 
    title: 'Suburban Villa', 
    price: '$750,000', 
    location: 'Los Angeles', 
    description: 'A charming villa located in a peaceful suburban neighborhood. This property features a spacious garden, perfect for outdoor activities, and a welcoming interior with modern finishes. Ideal for families seeking comfort and style.', 
    bedrooms: 5, 
    bathrooms: 4, 
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1628870776167-b4b684441e10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1628870970123-68cfb9889a74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ]
  },
  { 
    id: '4', 
    title: 'Downtown Condo', 
    price: '$650,000', 
    location: 'Chicago', 
    description: 'A modern condo located in the heart of downtown Chicago. This stylish unit features floor-to-ceiling windows, providing incredible city views. It\'s perfect for those who want to live close to the vibrant urban scene.', 
    bedrooms: 2, 
    bathrooms: 2, 
    images: [
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1601221998768-c0cdf463a393?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ]
  },
  { 
    id: '5', 
    title: 'Penthouse Suite', 
    price: '$2,500,000', 
    location: 'San Francisco', 
    description: 'This exclusive penthouse suite offers breathtaking panoramic views of San Francisco. With luxurious interiors and top-of-the-line amenities, it is the epitome of high-end city living. Ideal for those seeking ultimate comfort and luxury.', 
    bedrooms: 4, 
    bathrooms: 4, 
    images: [
      'https://images.unsplash.com/photo-1609766857326-18a204c2cf31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1702411200201-3061d0eea802?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1565623833408-d77e39b88af6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ]
  },
  { 
    id: '6', 
    title: 'Country Estate', 
    price: '$1,800,000', 
    location: 'Texas', 
    description: 'A sprawling country estate set on acres of lush land. This property provides the ultimate in privacy and tranquility. With vast outdoor spaces and a grand interior, it is perfect for large families or those who enjoy hosting.', 
    bedrooms: 6, 
    bathrooms: 5, 
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ]
  },
  { 
    id: '7', 
    title: 'City Loft', 
    price: '$550,000', 
    location: 'Seattle', 
    description: 'A trendy loft located in the heart of Seattle. This modern space features exposed brick walls, high ceilings, and large windows that fill the home with natural light. Perfect for young professionals or artists.', 
    bedrooms: 2, 
    bathrooms: 1, 
    images: [
      'https://images.unsplash.com/photo-1713798657031-2aa9e507e0a0?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560448075-57d0285fc59b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1604769319166-010643ace337?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ]
  },
  { 
    id: '8', 
    title: 'Mountain Cabin', 
    price: '$700,000', 
    location: 'Colorado', 
    description: 'A cozy mountain cabin nestled in the Colorado Rockies. This property is perfect for those who enjoy outdoor adventures and mountain views. The rustic design and warm interiors make it a perfect retreat.', 
    bedrooms: 3, 
    bathrooms: 2, 
    images: [
      'https://images.unsplash.com/photo-1600123358052-9a5b7b6cb8e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1533673662755-98c661c601a1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1700004060538-cb750e9a2992?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ]
  },
  { 
    id: '9', 
    title: 'Historic Townhouse', 
    price: '$1,100,000', 
    location: 'Boston', 
    description: 'A beautifully restored historic townhouse located in the heart of Boston. It features modern amenities while maintaining its classic charm. This property is perfect for those who appreciate both history and convenience.', 
    bedrooms: 4, 
    bathrooms: 3, 
    images: [
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1629079448081-c6ab9cbea877?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560185127-bc36ce01f6e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ]
  },

];


export default function App() {
  return <ApartmentDetails data={DATA} />;
}
