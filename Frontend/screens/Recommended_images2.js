import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';

const  PopularonFilmFind_images1 = () => {
  return (
    <View style={styles.container}>
     <Image
     source={require('../assets/Recommended/images(2).jpg')}
     style={styles.popularImage}
     />
    <Text style={styles.text1}>Ghosted</Text>
    <View style={styles.text2container}>
    <Text style={styles.text2}>Action, Romance</Text>
    <Text style={styles.text2}>1h 56m</Text>
    <Text style={styles.text2}>April 21, 2023</Text>
    </View>
    <View style={styles.text3container}>
    <Text style={styles.text3}>About</Text>
    <Text style={styles.text4}>Cole falls head over heels for enigmatic Sadie,but then makes the shocking discovery that shes a secret agent.Before they can decide on a second date,Cole and Sadie are swept away on an international adventure to save the world.</Text>
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
    fontSize:18,
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