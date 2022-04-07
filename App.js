// In App.js in a new project

// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen'
// import Screen1 from './screen/Screeen1'
// import Screeen2 from './screen/Screen2'

import Profile from './screen/Profile'




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}   />
        {/* <Stack.Screen name='Screen1' component={Screen1} />
        <Stack.Screen name='Screen2' component={Screeen2}  /> */}
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;