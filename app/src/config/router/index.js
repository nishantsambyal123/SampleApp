import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from '../../screens';

const appStackEntry = () => {
  const Stack = createNativeStackNavigator();

  function HomeStack() {
    return (
      <Stack.Navigator headerMode="screen">
        <Stack.Screen name="HomeScreen" component={Screens.HomeScreen} />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default appStackEntry;
