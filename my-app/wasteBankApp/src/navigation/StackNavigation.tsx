import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/commoon/LoginScreen"; 
import HomeScreen from '../screens/commoon/HomeScreen';

const Stack = createNativeStackNavigator();

const customStackNavigationOptions = {
  gestureEnabled: false,
  title: '',
};

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

function StackNavigation() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          ...customStackNavigationOptions,
          headerShown: !(
            route.name === 'Home'
          ),
        })}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
