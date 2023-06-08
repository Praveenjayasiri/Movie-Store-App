import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';

const  PopularonFilmFind_images1 = () => {
  return (
    <View style={styles.container}>
     <Image
     source={require('../assets/PopularonFilmFind/images(1).jpg')}
     style={styles.popularImage}
     />
    <Text style={styles.text1}>The Last Kingdom: Seven Kings Must Die</Text>
    <View style={styles.text2container}>
    <Text style={styles.text2}>Action, Drama</Text>
    <Text style={styles.text2}>1h 51m</Text>
    <Text style={styles.text2}>April 14, 2023</Text>
    </View>
    <View style={styles.text3container}>
    <Text style={styles.text3}>About</Text>
    <Text style={styles.text4}>Following the death of King Edward,invaders and rival heirs do battle for the crown. Uthred and his comrades strive to form a united England.</Text>
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
    fontSize:18,
    fontWeight: 'bold',
    color: '#fff',
    margin: 12,
  },
  text3: {
    fontSize:30,
    fontWeight: 'bold',
    color: '#f0a105',
    margin: 12,
  },
  text4: {
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
