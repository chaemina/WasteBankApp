import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/commoon/LoginScreen';
import RoleSelectScreen from '../screens/commoon/RoleSelectScreen';
import SignupScreen from '../screens/commoon/SignupScreen';
import AuthenticationSelectScreen from '../screens/commoon/AuthenticationSelectScreen';
import AuthenticationScreen from '../screens/commoon/AuthenticationScreen';
import TrashInfoScreen from '../screens/collector/TrashInfoScreen';
import GarbagebinScreen from '../screens/user/GarbagebinScreen';
import MainScreen from '../screens/commoon/MainScreen';
import AdminNotMatchedScreen from '../screens/admin/AdminNotMatchedScreen';

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
        initialRouteName="AdminMapView"
        screenOptions={({ route }) => ({
          ...customStackNavigationOptions,
          headerShown: !(route.name === 'Login'),
        })}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="RoleSelect" component={RoleSelectScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen
          name="AuthenticationSelect"
          component={AuthenticationSelectScreen}
        />
        <Stack.Screen name="Authentication" component={AuthenticationScreen} />

          {/* user */}
        <Stack.Screen name="Garbagebin" component={GarbagebinScreen as React.ComponentType<any>} />

          {/* collector */}
        <Stack.Screen name="TrashInfo" component={TrashInfoScreen} />

          {/* admin */}
        <Stack.Screen name="AdminMapView" component={AdminNotMatchedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
