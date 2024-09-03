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
import CollectorLocationCheckScreen from '../screens/user/CollectorLocationCheckScreen';
import MainScreen from '../screens/commoon/MainScreen';
import AdminMapScreen from '../screens/admin/AdminMapScreen';
import CollectorNotMatchedMapScreen from '../screens/collector/CollectorNotMatchedMapScreen';
import CollectorMatchedMapScreen from '../screens/collector/CollectorMatchedMapScreen';
import IndividualTrashMapScreen from '../screens/collector/IndividualTrashMapScreen';
import CollectorLocationScreen from '../screens/user/CollectorLoactionScreen';


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
        initialRouteName="Main"
        screenOptions={({ route }) => ({
          ...customStackNavigationOptions,
          headerShown: !(route.name === 'Login') && !(route.name === 'IndividualTrashMapView')
        })}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RoleSelect" component={RoleSelectScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen
          name="AuthenticationSelect"
          component={AuthenticationSelectScreen}
        />
        <Stack.Screen name="Authentication" component={AuthenticationScreen} />
        <Stack.Screen name="Main" component={MainScreen} />

          {/* user */}
        <Stack.Screen name="CollectorLocation" component={CollectorLocationScreen} />

          {/* collector */}
        <Stack.Screen name="CollectorNotMatched" component={CollectorNotMatchedMapScreen} />
        <Stack.Screen name="CollectorMatched" component={CollectorMatchedMapScreen} />
        <Stack.Screen name="TrashInfo" component={TrashInfoScreen} />
        <Stack.Screen name="IndividualTrashMapView" component={IndividualTrashMapScreen} />

          {/* admin */}
        <Stack.Screen name="AdminMapView" component={AdminMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
