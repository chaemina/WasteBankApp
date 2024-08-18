import React, { useEffect, useState } from 'react';
import MyWebView from '../../components/common/templates/MyWebView';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainScreen = () => {

  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadInitialUrl = async () => {
      try {

        const token = await AsyncStorage.getItem('auth');
        
        if (token) {
          setUrl("http://localhost:5173/:role"); 
        } else {
          setUrl("http://localhost:5173/login"); 
        }
      } catch (error) {
        console.error('Error loading token from AsyncStorage:', error);
        setUrl("http://localhost:5173/login");
      }
    };

    loadInitialUrl(); 
  }, []);

  if (!url) {

    return null;
  }

  return (
    <>
      <MyWebView initialUrl={url} />
    </>
  );
};

export default MainScreen;
