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
import MainScreen from '../screens/commoon/MainScreen';
import AdminMapScreen from '../screens/admin/AdminMapScreen';
import CollectorNotMatchedMapScreen from '../screens/collector/CollectorNotMatchedMapScreen';
import CollectorMatchedMapScreen from '../screens/collector/CollectorMatchedMapScreen';
import IndividualTrashMapScreen from '../screens/collector/IndividualTrashMapScreen';
import CollectorLocationScreen from '../screens/user/CollectorLoactionScreen';
import LocationTest from '../screens/LocationTest';
import SplashScreen from '../screens/commoon/SplashScreen';


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
        initialRouteName="Splash"
        screenOptions={({ route }) => ({
          ...customStackNavigationOptions,
          headerShown: !(route.name === 'Login') && !(route.name === 'Splash')
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
        <Stack.Screen name="Splash" component={SplashScreen} />

          {/* user */}
        <Stack.Screen name="CollectorLocation" component={CollectorLocationScreen} />

          {/* collector */}
        <Stack.Screen name="CollectorNotMatched" component={CollectorNotMatchedMapScreen} />
        <Stack.Screen name="CollectorMatched" component={CollectorMatchedMapScreen} />
        <Stack.Screen name="TrashInfo" component={TrashInfoScreen} />
        <Stack.Screen name="IndividualTrashMapView" component={IndividualTrashMapScreen} />

          {/* admin */}
        <Stack.Screen name="AdminMapView" component={AdminMapScreen} />

          {/* test */}
          <Stack.Screen name="LocationTest" component={LocationTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
