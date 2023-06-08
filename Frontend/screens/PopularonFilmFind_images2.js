import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';

const  PopularonFilmFind_images1 = () => {
  return (
    <View style={styles.container}>
     <Image
     source={require('../assets/PopularonFilmFind/images(2).jpg')}
     style={styles.popularImage}
     />
    <Text style={styles.text1}>We Have a Ghost</Text>
    <View style={styles.text2container}>
    <Text style={styles.text2}>FamilyFilm, Fantasy</Text>
    <Text style={styles.text2}>2h 7m</Text>
    <Text style={styles.text2}>February 24, 2023</Text>
    </View>
    <View style={styles.text3container}>
    <Text style={styles.text3}>About</Text>
    <Text style={styles.text4}>The discovery that their house is haunted by a ghost named Ernest makes Kevin's family
 a social media sensation. But when Kevin and Ernest get to the bottom of the mystery of Ernest's past,
 they become targets of the CIA.</Text>
    </View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>download</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#09212e',
  },
  text1: {
    fontFamily: 'Arial',
    fontSize:35,
    fontWeight: 'bold',
    color: '#f0a105',
    margin: 15,
    padding: 5,
    marginHorizontal: 5,
  },
  text2container:{
    flex:1,
    flexDirection:'row',
    marginHorizontal: 5,
    bottom:20,
  },
  text3container:{
    flex:1,
    bottom:140,
    marginleft: 10,
    padding: 5,
  },
  text2: {
    fontFamily: 'Arial',
    fontSize:15,
    fontWeight: 'bold',
    color: '#fff',
    margin: 12,
  },
  text3: {
    fontFamily: 'Arial',
    fontSize:30,
    fontWeight: 'bold',
    color: '#f0a105',
    margin: 12,
    alignItems: 'left',
  },
  text4: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize:20,
    color: '#fff',
    margin: 12,
    bottom:16,
    textAlign:'justify',
  },
  popularImage:{
    width:'100%',
    height:250,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#f0a105',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    bottom:80,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PopularonFilmFind_images1;
