import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import styled from 'styled-components/native';
import { View, ScrollView, Image } from 'react-native';

// Define light and dark themes


const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  }


  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}> 
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}> {/* Add marginTop to avoid first heading being cut off */}
            <StyledText>Pet Care Guide</StyledText>
          </View>

         {/* Define Pet Care Section */}
          <View testID='catCareTips'>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1482434368596-fbd06cae4f89?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
              style={{ width: '100%', height: 400 }}
            />
            <ContentSection>
              <SectionTitle>Cat Care Tips using testId</SectionTitle>
              <ContentText>
              - Litter Box Hygiene: Keep the litter box clean by scooping daily and changing the litter frequently.{'\n'}
              - Scratching Posts: Provide scratching posts to prevent furniture damage.{'\n'}
              - Grooming: Regularly brush your cat to reduce shedding and prevent hairballs.{'\n'}
              - Safe Spaces: Give cats cozy, quiet spots to relax.{'\n'}
              - Playtime: Use interactive toys to keep them mentally stimulated.
            </ContentText>
            </ContentSection>
          </View>
        </ScrollView>

        <StyledButton onPress={changeTheme}>
          <ButtonText>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</ButtonText>
        </StyledButton>
        
      </Container>
    </ThemeProvider>
  );
};

// Styled components
const Container = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  flex: 1;
`;


const StyledText = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
  font-style:italic;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

const ContentSection = styled.View`
  margin-bottom: 20px;
  padding: 10px;
`;
const SectionTitle = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
`;
const ContentText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
`;
const StyledButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.buttonBackground};
  padding: 10px 20px;
  border-radius: 5px;
  align-items: center;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.buttonText};
  font-size: 23px;
  font-weight: bold;
`;

const lightTheme = {
  colors: {
    background: '#ffffff',
    buttonBackground: '#000000',
    buttonText: '#ffffff',
    text: '#000000',
  },
};

const darkTheme = {
  colors: {
    background: '#282828',
    buttonBackground: '#FF6347',
    buttonText: '#282828',
    text: '#FFD700',
  },
};
export default ToggleTheme;
