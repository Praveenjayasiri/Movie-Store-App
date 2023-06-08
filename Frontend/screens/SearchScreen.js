import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native';

const SearchScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const home = () => {
    navigation.navigate('HomeScreen');
  };

  const search = () => {
    navigation.navigate('SearchScreen');
  };

  const profile = () => {
    navigation.navigate('ProfileScreen');
  };

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      setSearchHistory([searchText, ...searchHistory]);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => console.log(item)}>
      <Text style={styles.item}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={require('../assets/logo.png')} style={styles.titleimage} />
        <TouchableOpacity onPress={home}>
          <Text style={styles.homescreenText}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={search}>
          <Text style={styles.searchscreenText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={profile}>
          <Text style={styles.profilescreenText}>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchcontainer}>
        <TextInput
          style={styles.searchbox}
          placeholder='Enter Movie Name....'
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
      </View>
      <View>
        <Text style={styles.textcontainer}>Search History</Text>
      </View>
      <FlatList
        data={searchHistory}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <View>
    <Text style={styles.text4}>Recommended</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.imageContainer4}>
            <TouchableOpacity style={styles.touchableImage4}>
              <Image
                source={require('../assets/Recommended/images(1).jpg')}
                style={styles.popularImage4}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage4}>
              <Image
                source={require('../assets/Recommended/images(2).jpg')}
                style={styles.popularImage4}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage4}>
              <Image
                source={require('../assets/Recommended/images(3).jpg')}
                style={styles.popularImage4}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage4}>
              <Image
                source={require('../assets/Recommended/images(4).jpg')}
                style={styles.popularImage4}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage4}>
              <Image
                source={require('../assets/Recommended/images(5).jpg')}
                style={styles.popularImage4}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableImage4}>
              <Image
                source={require('../assets/Recommended/images(6).jpg')}
                style={styles.popularImage4}
              />
            </TouchableOpacity>
          </View>
          </ScrollView>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09212e',
  },
  titleContainer: {
    backgroundColor: '#09212e',
    flexDirection: 'row',
    margin: 5,
    padding: 10,
    left: 40,
  },
  homescreenText: {
    fontWeight: 'bold',
    color: '#fff',
    margin: 5,
    padding: 8,
    fontSize: 16,
  },
  searchscreenText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f0a105',
    margin: 5,
    padding: 8,
  },
  profilescreenText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    margin: 5,
    padding: 8,
  },
  titleimage: {
    width: 50,
    height: 50,
  },
  searchcontainer: {
    alignItems: 'center',
  },
  searchbox: {
    fontSize: 20,
    fontWeight: '500',
    padding: 20,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 70,
  },
  textcontainer: {
    fontWeight: 'bold',
    color: '#f0a105',
    margin: 5,
    padding: 15,
    fontSize: 16,
  },
  item: {
    padding: 15,
    fontSize: 18,
    height: 60,
    margin: 5,
    color: '#fff',
  },
  imageContainer4: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 1,
    marginBottom: 10,
  },
  popularImage4: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  touchableImage4: {
    width: 100,
    height: 200,
    marginHorizontal: 5,
    padding: 5,
  },
  text4: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f0a105',
    margin: 5,
    padding: 5,
    marginHorizontal: 15,
  },
});

export default SearchScreen;