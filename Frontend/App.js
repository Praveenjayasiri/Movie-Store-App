import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome} from '@expo/vector-icons';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import WelcomeScreen from './screens/Welcome';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import PopularonFilmFind_images1 from './screens/PopularonFilmFind_images1';
import PopularonFilmFind_images2 from './screens/PopularonFilmFind_images2';
import PopularonFilmFind_images3 from './screens/PopularonFilmFind_images3';
import TopIMDBRated_images1 from './screens/TopIMDBRated_images1';
import TopIMDBRated_images2 from './screens/TopIMDBRated_images2';
import TopIMDBRated_images3 from './screens/TopIMDBRated_images3';
import UPCOMMING_images1 from './screens/UPCOMMING_images1';
import UPCOMMING_images2 from './screens/UPCOMMING_images2';
import UPCOMMING_images3 from './screens/UPCOMMING_images3';
import Recommended_images1 from './screens/Recommended_images1';
import Recommended_images2 from './screens/Recommended_images2';
import Recommended_images3 from './screens/Recommended_images3';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>   
       <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{title : 'Welcome'}}
        />   
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title : 'Login'}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{title :'Register'}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title :'Home'}}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{title :'Search'}}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{title :'Profile'}}
        />
        <Stack.Screen
          name="PopularonFilmFind_images1"
          component={PopularonFilmFind_images1}
          options={{title :'PopularonFilmFind_images1'}}
        />
        <Stack.Screen
          name="PopularonFilmFind_images2"
          component={PopularonFilmFind_images2}
          options={{title :'PopularonFilmFind_images2'}}
        />
        <Stack.Screen
          name="PopularonFilmFind_images3"
          component={PopularonFilmFind_images3}
          options={{title :'PopularonFilmFind_images3'}}
        />
        <Stack.Screen
          name="TopIMDBRated_images1"
          component={TopIMDBRated_images1}
          options={{title :'TopIMDBRated_images1'}}
        />    
        <Stack.Screen
          name="TopIMDBRated_images2"
          component={TopIMDBRated_images2}
          options={{title :'TopIMDBRated_images2'}}
        />
        <Stack.Screen
          name="TopIMDBRated_images3"
          component={TopIMDBRated_images3}
          options={{title :'TopIMDBRated_images3'}}
        />
        <Stack.Screen
          name="UPCOMMING_images1"
          component={UPCOMMING_images1}
          options={{title :'UPCOMMING_images1'}}
        />
        <Stack.Screen
          name="UPCOMMING_images2"
          component={UPCOMMING_images2}
          options={{title :'UPCOMMING_images2'}}
        />
        <Stack.Screen
          name="UPCOMMING_images3"
          component={UPCOMMING_images3}
          options={{title :'UPCOMMING_images3'}}
        />
        <Stack.Screen
          name="Recommended_images1"
          component={Recommended_images1}
          options={{title :'Recommended_images1'}}
        />
        <Stack.Screen
          name="Recommended_images2"
          component={Recommended_images2}
          options={{title :'Recommended_images2'}}
        />
        <Stack.Screen
          name="Recommended_images3"
          component={Recommended_images3}
          options={{title :'Recommended_images3'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
