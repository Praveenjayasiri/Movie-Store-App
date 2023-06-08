import axios from 'axios';
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet,Image, ImageBackground } from 'react-native';

const RegisterScreen = ({ navigation }) => {;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const[myip,setIp]=useState("192.168.102.31");

  const onPressFunction = () => {
    if (password !== confirmPass) {
      alert("Passwords do not match");
    } else if (!validateEmail(email)) {
      alert("Warning", "Invalid email address");
    } else if (
      username !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPass !== ""
    ) {
      addUser();
      navigation.navigate("Login");
    } else {
      alert("Empty field");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const addUser = async () => {
    try {
      const newUser = {
        username,
        email,
        password,
      };

      const response = await axios.post(
        `http://${myip}:8050/user/add`,
        newUser
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
    <ImageBackground
        source={require('../assets/line.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.title}>
          <Text style={styles.text1}>Join To Explore,</Text>
          <Text style={styles.text2}>Create your own account</Text>
        </View>
        <Image 
        source={require('../assets/loginlogo.png')}
        style={styles.logoImage}
        />
    <View style={styles.inputcontainer}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#fff"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#fff"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#fff"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#fff"
        onChangeText={text => setConfirmPass(text)}
        value={confirmPass}
        secureTextEntry
      />
      </View>
      <View style={styles.bottomContainer}>
      <TouchableOpacity style={styles.button} onPress={onPressFunction
      }>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignIn}>
        <Text style={styles.signInText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#09212e',
  },
  title:{
    position:'absolute',
    top:45,
  },
  text1: {
    fontSize:40,
    fontWeight: 'bold',
    color: '#f0a105',
  },
  text2: {
    fontSize: 20,
    color: '#fff',
  },
  logoImage:{
    position:'absolute',
    width:250,
    height:200,
    alignItems:'center',
    top:150,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 15,
    color:'#fff',
  },
  inputcontainer:{
    width: '100%',
    alignItems: 'center',
    top:120,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#f0a105',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  signInText: {
    marginTop: 20,
    color: '#fff',
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center',
    top:150,
  },
});

export default RegisterScreen;
