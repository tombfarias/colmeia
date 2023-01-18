import React from 'react';

import SplashScreen1 from './pages/SplashScreen1';
import SplashScreen2 from './pages/SplashScreen2';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen

          name="SplashScreen2"
          component={SplashScreen2}
        />
        <Stack.Screen

          name="SplashScreen1"
          component={SplashScreen1}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
