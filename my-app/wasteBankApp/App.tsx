import React from 'react';
import StackNavigation from './src/navigation/StackNavigation';
import {StatusBar, useColorScheme} from 'react-native';
import { Provider } from 'react-redux';
import Store from "./src/redux/Store"

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
       <Provider store={Store}>
         <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <StackNavigation />
      </Provider>
    </>
  );
};

export default App;
