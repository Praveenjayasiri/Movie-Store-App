import * as React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const WelcomeScreen = ({ navigation }) => {

  const handleStart = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/line.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.text}>FilmFind</Text>
        </View>

        <Text style={styles.topic}>Welcome FilmFind Movie Store</Text>
        <Text style={styles.paragraph}>You can Find Your own Movie and Explore the latest upcoming movies. Able to download and watch you can anytime.</Text>

        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Lets Explore </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    top:-160,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  button: {
    width: '75%',
    height: 45,
    backgroundColor: '#f0a105',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    top:100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#f0a105',
    textTransform: 'uppercase',
    
  },
  topic: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
    bottom:80,
  },
  paragraph: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 30,
    bottom:50,
  },
});

export default WelcomeScreen;
