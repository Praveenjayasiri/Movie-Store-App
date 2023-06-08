import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome} from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  
  const home = () => {
    navigation.navigate('HomeScreen');
  };

  const search = () => {
    navigation.navigate('SearchScreen');
  };

  const profile = () => {
    navigation.navigate('ProfileScreen');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Image
      source={require('../assets/logo.png')}
      style={styles.titleimage}
      />
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
    <View style={styles.profileContainer}>
        <Image
          source={require('../assets/profile-icon-design-free-vector.jpg')}
          style={styles.profileImage}
        />
        
        <Text style={styles.name}>Hi...Name</Text>
        <Text style={styles.di}>Enjoy now....</Text>
      </View>
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingsItem}>
        
          <Text style={styles.settingsText}><View>
      <FontAwesome name="edit" size={20} color="white" />
    </View>  Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={styles.settingsText}><FontAwesome name="lock" size={20} color="white" /> Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={styles.settingsText}><FontAwesome name="battery-full" size={20} color="white" /> Power Saving</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={styles.settingsText}><FontAwesome name="envelope" size={20} color="white" /> Storage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={styles.settingsText}><FontAwesome name="eye" size={20} color="wihte" /> Privacy Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem} onPress={handleLogin}>
          <Text style={styles.settingsText}>Logout</Text>
        </TouchableOpacity>
        
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
    color: '#fff',
    margin: 5,
    padding: 8,
  },
  profilescreenText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f0a105',
    margin: 5,
    padding: 8,
  },
  titleimage:{
    width:50,
    height:50,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  profileImage: {
    
    width: 80,
    height: 80,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    color:'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  di: {
    fontSize: 16,
    color: 'gray',
  },
  settingsContainer: {
    flex: 1,
    margin:10,
    padding:5,
    justifyContent:'space-around',
  },
  settingsItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0a105',
  },
  settingsText: {
    fontSize: 20,
    color: 'white',
  }, 
});

export default ProfileScreen;