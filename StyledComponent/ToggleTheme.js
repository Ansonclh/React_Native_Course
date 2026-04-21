import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import styled from 'styled-components/native';
import { View, ScrollView, Image } from 'react-native';

// Define light and dark themes


const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);



  return (
      <Container>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}> 
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}> {/* Add marginTop to avoid first heading being cut off */}
            <StyledText>Pet Care Guide</StyledText>
          </View>

         {/* Define Pet Care Section */}

        </ScrollView>
        
      </Container>
  );
};

// Styled components
const Container = styled.View`
  flex: 1;
`;


const StyledText = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
  font-style:italic;
  font-weight: bold;
`;

export default ToggleTheme;
