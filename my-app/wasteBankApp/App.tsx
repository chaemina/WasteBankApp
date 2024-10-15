import React from 'react';
import StackNavigation from './src/navigation/StackNavigation';
import {StatusBar, useColorScheme} from 'react-native';
import { Provider } from 'react-redux';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import Store from "./src/redux/Store"


const queryClient = new QueryClient();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <>
     <QueryClientProvider client={queryClient}>
       <Provider store={Store}>
         <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <StackNavigation />
      </Provider>
      </QueryClientProvider>
    </>
  );
};

export default App;
